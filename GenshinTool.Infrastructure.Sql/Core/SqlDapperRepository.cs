using GenshinTool.Common.Base;
using GenshinTool.Common.Extensions;
using GenshinTool.Common.Generator;
using GenshinTool.Common.Rest.Core;
using GenshinTool.Common.Watcher;
using Dapper.Contrib.Extensions;
using Dapper;
using static Dapper.SqlMapper;
using GenshinTool.Common.Service.Interface.Repo;
using GenshinTool.Common.Service.Interface.Context;
using GenshinTool.Common.Models.Core.Dom;
using GenshinTool.Common.Models.Core.Dto;
using System.Text;
using GenshinTool.Common.Data.Sql.Dapper.QueryGenerator;
using System.Collections.Generic;
using System.Reflection;
using System.Collections;
using System.Reflection.PortableExecutable;

namespace GenshinTool.Infrastructure.Sql.Core;

public class SqlDapperRepository<TDom, TDto> : IDatabaseRepository<TDom, TDto>
    where TDom : class, IBaseDom, new()
    where TDto : class, IBaseDto, new()
{
    public IBaseMapper Mapper { get; }

    protected SqlDapperRepository(IBaseMapper mapper)
    {
        Mapper = mapper;
    }

    private IDbContext _dataSourceContext;
    private static string GetAllQuery => SqlConstants.SELECT + SqlConstants.ALL_FROM + SqlTableName + SqlConstants.WHERE;
    private static string SqlTableName => typeof(TDto).GetTableAttributeName<TableAttribute>();
    private static readonly string PropertyId = "Id";

    public IContext DataSourceContext
    {
        get => _dataSourceContext;
        set => _dataSourceContext = (IDbContext)value;
    }

    #region Gets
    public virtual IEnumerable<TDom> GetAll()
    {
        using (new ExecutionWatcher(MethodHelper.GetCurrentMethodWithParams()))
        {
            return Mapper.Map<IEnumerable<TDom>>(_dataSourceContext.Connection.GetAll<TDto>());
        }
    }

    public virtual TDom GetById(long id)
    {
        using (new ExecutionWatcher(MethodHelper.GetCurrentMethodWithParams()))
        {
            return Mapper.Map<TDom>(_dataSourceContext.Connection.Get<TDto>(id));
        }
    }

    protected IEnumerable<TDom> GetByDynamicParameters(object parameters)
    {
        if (parameters != null)
        {
            var dbParams = CreateDynamicParameters(parameters);
            var props = parameters.GetType().GetProperties();
            var sql = GetAllQuery + " 1 = 1 ";

            sql = props.Aggregate(sql, (current, prop) =>
                    $"{current} {SqlConstants.AND} {prop.Name} = '{prop.GetValue(parameters)}' ");

            using (new ExecutionWatcher(sql))
            {
                return Mapper.Map<IEnumerable<TDom>>(_dataSourceContext.Connection.Query<TDto>(sql, dbParams));
            }
        }

        return Enumerable.Empty<TDom>();
    }

    protected IEnumerable<TDom> GetByParameters(IEnumerable<KeyValuePair<string, IEnumerable<long>>> paramsFields)
    {
        using (new ExecutionWatcher(MethodHelper.GetCurrentMethodWithParams()))
        {
            if (!paramsFields.HasAny())
            {
                return new List<TDom>();
            }

            var query = new StringBuilder($"{SqlConstants.SELECT} * {SqlConstants.FROM} {SqlTableName} {SqlConstants.WHERE} 1=1");
            foreach (var paramField in paramsFields)
            {
                if (!string.IsNullOrEmpty(paramField.Key) && paramField.Value != null && paramField.Value.Any())
                {
                    var idsJoin = string.Join(",", paramField.Value.Select(n => n.ToString()).ToArray());
                    query.Append($"{SqlConstants.AND} {paramField.Key} {SqlConstants.IN} ({idsJoin})");
                }
            }

            return Mapper.Map<IEnumerable<TDom>>(_dataSourceContext.Connection.Query<TDto>(query.ToString()));
        }
    }

    public IEnumerable<TDom> Get(IQueryContext contextQuery)
    {
        var query = new StringBuilder();
        var queryAggregates = new StringBuilder();

        var setMainTable = false;

        query.Append($"{SqlConstants.SET_NOCOUNT}{SqlConstants.ON};");
        query.Append($"{SqlConstants.GetDropTmpInstruction()}");
        query.Append($"{SqlConstants.SELECT}{SqlTableName}.{SqlConstants.INTO}" +
                        $"{SqlConstants.TMP}{SqlConstants.FROM}{SqlTableName} ");

        if (contextQuery != null)
        {
            if (contextQuery.ChildAggregateSelectors.HasAny())
            {
                GenerateAggregateChild(contextQuery, setMainTable, query, queryAggregates);
            }

            if (contextQuery.ParentAggregateSelectors.HasAny())
            {
                query.Append($"{SqlConstants.WHERE} 1=1");
                GenerateAggregateParent(contextQuery, query);
            }
        }

        query.Append($";{SqlConstants.SELECT}{SqlConstants.ALL_FROM}{SqlConstants.TMP};");
        query.Append(queryAggregates);
        query.Append($"{SqlConstants.GetDropTmpInstruction()}");
        query.Append($"{SqlConstants.SET_NOCOUNT}{SqlConstants.OFF};");

        return Mapper.Map<IEnumerable<TDom>>(MapAggregates(_dataSourceContext.Connection
            .QueryMultiple(query.ToString()), contextQuery?.ChildAggregateSelectors));
    }
    #endregion

    #region Inserts
    public virtual TDom Insert(TDom domObject)
    {
        using (new ExecutionWatcher(MethodHelper.GetCurrentMethodWithParams()))
        {
            return InsertEntity(domObject);
        }
    }

    public virtual IEnumerable<TDom> Insert(IEnumerable<TDom> domObjects)
    {
        if (!domObjects.HasAny())
        {
            return new List<TDom>();
        }

        var result = new List<TDom>();

        using (new ExecutionWatcher(MethodHelper.GetCurrentMethodWithParams()))
        {
            result.AddRange(InsertEntities(domObjects).Result);
        }

        return result;
    }

    private TDom InsertEntity(TDom domainEntity)
    {
        if (domainEntity == null)
        {
            return default;
        }

        domainEntity.Id = _dataSourceContext.Connection.Insert(Mapper.Map<TDto>(domainEntity));
        return domainEntity;
    }

    private async Task<IEnumerable<TDom>> InsertEntities(IEnumerable<TDom> domainEntities)
    {
        if (!domainEntities.HasAny())
        {
            return default;
        }

        var dic =
            typeof(TDto)
                .GetProperties()
                .Where(propertyInfo => propertyInfo.Name != PropertyId)
                .ToDictionary(propertyInfo => propertyInfo.Name, propertyInfo => new Func<TDto, object?>(propertyInfo.GetValue));

        var entities = Mapper.Map<IEnumerable<TDto>>(domainEntities).ToList();
        var result = await _dataSourceContext.Connection.BulkInsert(entities, SqlTableName, dic);
        var resultDomain = Mapper.Map<IEnumerable<TDom>>(result);

        return resultDomain;
    }
    #endregion

    #region Updates
    public virtual TDom Update(TDom domObject)
    {
        var entity = Mapper.Map<TDto>(domObject);

        using (new ExecutionWatcher(MethodHelper.GetCurrentMethodWithParams()))
        {
            _dataSourceContext.Connection.Update(entity);
        }

        return Mapper.Map<TDom>(entity);
    }

    public virtual IEnumerable<TDom> Update(IEnumerable<TDom> domObjects)
    {
        var entities = Mapper.Map<IEnumerable<TDto>>(domObjects).ToList();

        using (new ExecutionWatcher(MethodHelper.GetCurrentMethodWithParams()))
        {
            _dataSourceContext.Connection.Update(entities);
        }

        return Mapper.Map<IEnumerable<TDom>>(entities);
    }
    #endregion

    #region Deletes
    public virtual void Delete(TDom domObject)
    {
        var entity = Mapper.Map<TDto>(domObject);

        using (new ExecutionWatcher(MethodHelper.GetCurrentMethodWithParams()))
        {
            _dataSourceContext.Connection.Delete(entity);
        }
    }

    public virtual void Delete(IEnumerable<TDom> domObjects)
    {
        var entities = Mapper.Map<IEnumerable<TDto>>(domObjects).ToList();

        using (new ExecutionWatcher(MethodHelper.GetCurrentMethodWithParams()))
        {
            _dataSourceContext.Connection.Delete(entities);
        }
    }

    public virtual void Delete(long id)
    {
        using (new ExecutionWatcher(MethodHelper.GetCurrentMethodWithParams()))
        {
            _dataSourceContext.Connection.Delete(new TDto { Id = id });
        }
    }

    public virtual void Delete(IEnumerable<long> ids)
    {
        using (new ExecutionWatcher(MethodHelper.GetCurrentMethodWithParams()))
        {
            if (ids.HasAny())
            {
                var idsJoin = string.Join(",", ids.Select(n => n.ToString()).ToArray());
                _dataSourceContext.Connection.Query<TDto>(
                    $"{SqlConstants.DELETE_FROM} {SqlTableName} {SqlConstants.WHERE} Id {SqlConstants.IN} ({idsJoin})");
            }
        }
    }
    #endregion

    private static DynamicParameters CreateDynamicParameters(object parameters)
    {
        var dbParams = new DynamicParameters();
        dbParams.AddDynamicParams(parameters);
        return dbParams;
    }

    private void GenerateParentQuery(IQueryContext contextQuery, StringBuilder query)
    {
        foreach (var paramField in contextQuery.ParentAggregateSelectors.Where(s => s.GetValue() != default))
        {
            switch (paramField)
            {
                case QueryFilterTypeListLong:
                case QueryFilterTypeLong:
                    {
                        var idsJoin = string.Join(",", ((IEnumerable<long>)paramField.GetValue()).Select(n => n.ToString()).ToArray());
                        query.Append($"{SqlConstants.AND} {SqlTableName}.{paramField.FieldName} {SqlConstants.IN} ({idsJoin})");
                        break;
                    }
                default:
                    query.Append($"{SqlConstants.AND} {SqlTableName}.{paramField.FieldName} = ({paramField.GetValue().ToString()})");
                    break;
            }
        }
    }


    private void GenerateAggregateChild(IQueryContext contextQuery, bool setMainTable, StringBuilder query, StringBuilder queryAggregates)
    {
        foreach (var selector in contextQuery?.ChildAggregateSelectors)
        {
            var aggregate = selector.GetChildType().GetTableAttributeName<TableAttribute>();
            if (!setMainTable)
            {
                if (selector.FilterOnParentAggregateKeyId.HasValue)
                {
                    query.Append($"{SqlConstants.WHERE} {selector.GetParentKeyPropertyName()} = {selector.FilterOnParentAggregateKeyId.Value}");
                }

                setMainTable = true;
            }

            if (selector.FilterOnChildKeys.HasAny())
            {
                query.Append(
                    $"{SqlConstants.INNER_JOIN}{aggregate}{SqlConstants.ON}{aggregate}.{selector.GetChildKeyPropertyName()}" + $" = {SqlTableName}.{selector.GetParentKeyPropertyName()}");
                foreach (var filterOnChildKey in selector.FilterOnChildKeys)
                {
                    var idsJoin = string.Join(",", filterOnChildKey.Value.Select(n => n.ToString()).ToArray());
                    query.Append($"{SqlConstants.AND}{aggregate}.{filterOnChildKey.Key}{SqlConstants.IN}({idsJoin})");
                }
            }

            queryAggregates.Append($"{SqlConstants.SELECT}{SqlConstants.DISTINCT}{SqlConstants.ALL_FROM}{aggregate}" +
                                   $"{SqlConstants.WHERE} {selector.GetChildKeyPropertyName()} {SqlConstants.IN}" +
                                   $"({SqlConstants.SELECT} {selector.GetParentKeyPropertyName()} {SqlConstants.FROM} {SqlConstants.TMP})");

            if (selector.QueryChilderContext is not null)
            {
                var subaggregate = selector.QueryChilderContext.GetChildType().GetTableAttributeName<TableAttribute>();
                queryAggregates.Append($"{SqlConstants.SELECT}{SqlConstants.DISTINCT}{SqlConstants.ALL_FROM}{subaggregate}" +
                                       $"{SqlConstants.WHERE} {selector.QueryChilderContext.GetChildKeyPropertyName()} {SqlConstants.IN}" +
                                       $"({SqlConstants.SELECT} {selector.QueryChilderContext.GetParentKeyPropertyName()} {SqlConstants.FROM} (" +
                                           $"{SqlConstants.SELECT}{SqlConstants.DISTINCT}{SqlConstants.ALL_FROM}{aggregate}" +
                                           $"{SqlConstants.WHERE} {selector.GetChildKeyPropertyName()} {SqlConstants.IN}" +
                                           $"({SqlConstants.SELECT} {selector.GetParentKeyPropertyName()} {SqlConstants.FROM} {SqlConstants.TMP})) as test{selector.GetChildKeyPropertyName()})");
            }
        }
    }

    private void GenerateAggregateParent(IQueryContext contextQuery, StringBuilder query)
    {
        foreach (var paramField in contextQuery.ParentAggregateSelectors)
        {
            switch (paramField)
            {
                case QueryFilter<bool>:
                    {
                        query.Append($"{SqlConstants.AND} {SqlTableName}.{paramField.FieldName} = ({paramField.GetValue().GetHashCode().ToString()})");
                        break;
                    }
                case QueryFilterTypeIdListLong:
                case QueryFilter<IEnumerable<long>>:
                    {
                        var idsJoin = string.Join(",", ((IEnumerable<long>)paramField.GetValue()).Select(n => n.ToString()).ToArray());
                        query.Append($"{SqlConstants.AND} {SqlTableName}.{paramField.FieldName} {SqlConstants.IN} ({idsJoin})");
                        break;
                    }
                default:
                    query.Append($"{SqlConstants.AND} {SqlTableName}.{paramField.FieldName} = ({paramField.GetValue().ToString()})");
                    break;
            }
        }
    }

    private static IEnumerable<TDto> MapAggregates(GridReader reader, IEnumerable<IQueryChildContext> aggregates)
    {
        var parent = reader.Read<TDto>().ToList();
        if (!parent.HasAny())
        {
            return parent;
        }

        foreach (var agr in aggregates)
        {
            var childMap = reader.Read(agr.GetChildType())
                .GroupBy(x => x.GetType().GetProperty(agr.GetChildKeyPropertyName())?.GetValue(x, null))
                .ToDictionary(g => g.Key, g => g.AsEnumerable());

            Parallel.ForEach(parent, item =>
            {
                var key = item.GetType().GetProperty(agr.GetParentKeyPropertyName())?.GetValue(item);
                var aggregate = childMap.FirstOrDefault(x => key != null && x.Key != null && (long)x.Key == (long)key);

                if (agr.QueryChilderContext != null)
                {
                    aggregate = ChildAggregator(aggregate, agr.QueryChilderContext, reader);
                }

                if (agr.IsManyLink())
                {
                    var prop = item.GetType().GetProperty(agr.GetPropertyNameToSet());

                    if (prop == null)
                    {
                        return;
                    }

                    var type = prop.PropertyType;
                    if (type.IsGenericType && type.GetGenericTypeDefinition() == typeof(IEnumerable<>))
                    {
                        var itemType = type.GetGenericArguments()[0];
                        var listToSet = ConvertHelper.ConvertList(aggregate.Value.ToList(), itemType);
                        prop?.SetValue(item, listToSet);
                    }
                }
                else
                {
                    item.GetType().GetProperty(agr.GetPropertyNameToSet())?.SetValue(item, aggregate.Value?.FirstOrDefault());
                }
            });
        }

        return parent;
    }

    private static KeyValuePair<object?, IEnumerable<object>> ChildAggregator(KeyValuePair<object?, IEnumerable<object>> aggregate, IQueryChildContext agr, GridReader reader)
    {
        var childerMap = reader.Read(agr.GetChildType())
            .GroupBy(x => x.GetType().GetProperty(agr.GetChildKeyPropertyName())?
            .GetValue(x, null))?.ToDictionary(g => g.Key, g => g.AsEnumerable());

        Parallel.ForEach(aggregate.Value, item =>
        {
            var key = item.GetType().GetProperty(agr.GetParentKeyPropertyName())?.GetValue(item);
            var agg = childerMap.FirstOrDefault(x => key != null && x.Key != null && (long)x.Key == (long)key);

            if (agr.QueryChilderContext != null)
            {
                agg = ChildAggregator(agg, agr.QueryChilderContext, reader);
            }

            if (agr.IsManyLink())
            {
                var prop = item.GetType().GetProperty(agr.GetPropertyNameToSet());

                if (prop == null)
                {
                    return;
                }

                var type = prop.PropertyType;
                if (type.IsGenericType && type.GetGenericTypeDefinition() == typeof(IEnumerable<>))
                {
                    var itemType = type.GetGenericArguments()[0];
                    var listToSet = ConvertHelper.ConvertList(agg.Value.ToList(), itemType);
                    prop?.SetValue(item, listToSet);
                }
            }
            else
            {
                item.GetType().GetProperty(agr.GetPropertyNameToSet())?.SetValue(item, agg.Value?.FirstOrDefault());
            }
        });

        return aggregate;
    }
}