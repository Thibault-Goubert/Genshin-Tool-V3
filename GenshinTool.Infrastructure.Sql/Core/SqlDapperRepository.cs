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
    private static string SqlTableName => typeof(TDto).GetTableAttributeName<TableAttribute>();
    private static string GetAllQuery => SqlConstants.SELECT + SqlConstants.ALL_FROM + SqlTableName + SqlConstants.WHERE;
    private static readonly string PropertyId = "Id";

    public IContext DataSourceContext
    {
        get => _dataSourceContext;
        set => _dataSourceContext = (IDbContext)value;
    }

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

}