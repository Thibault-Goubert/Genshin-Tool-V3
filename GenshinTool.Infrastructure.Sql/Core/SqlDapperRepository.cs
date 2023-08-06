using GenshinTool.Common.Base;
using GenshinTool.Common.Extensions;
using GenshinTool.Common.Generator;
using GenshinTool.Common.Rest.Core;
using GenshinTool.Common.Watcher;
using Dapper.Contrib.Extensions;
using Dapper;
using log4net;
using static Dapper.SqlMapper;
using GenshinTool.Common.Service.Interface.Repo;
using GenshinTool.Common.Service.Interface.Context;
using GenshinTool.Common.Models.Core.Dom;
using GenshinTool.Common.Models.Core.Dto;
using System.Text;
using System.Collections.Generic;
using Microsoft.VisualBasic;
using GenshinTool.Common.Data.Sql.Dapper.QueryGenerator;
using System.Collections;
using Microsoft.Extensions.Primitives;

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
            var builder = new StringBuilder();
            var dbParams = CreateDynamicParameters(parameters);
            var props = parameters.GetType().GetProperties();
            var sql = GetAllQuery + " 1 = 1 ";

            sql = props.Aggregate(sql, (current, prop) =>
                    $"{current} {SqlConstants.AND} {prop.Name} = LOWER('{prop.GetValue(parameters)}') ");

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

        query.Append($"{SqlConstants.SET_NOCOUNT}{SqlConstants.ON};");
        query.Append($"{SqlConstants.SELECT}{SqlConstants.ALL_FROM}{SqlTableName}");

        if (contextQuery != null)
        {
            if (contextQuery.ParentAggregateSelectors.HasAny())
            {
                query.Append($"{SqlConstants.WHERE} 1=1");
                GenerateParentQuery(contextQuery, query);
            }
        }

        query.Append($"{SqlConstants.SET_NOCOUNT}{SqlConstants.OFF};");

        return Mapper.Map<IEnumerable<TDom>>(_dataSourceContext.Connection.Query(query.ToString()));
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

}