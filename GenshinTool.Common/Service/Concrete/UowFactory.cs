using GenshinTool.Common.Data.Sql.Dapper;
using GenshinTool.Common.Service.Interface.Context;
using GenshinTool.Common.Service.Interface.Core;
using GenshinTool.Common.Service.Interface.Repo;
using Microsoft.Extensions.Configuration;

namespace GenshinTool.Common.Service.Concrete;

public class UowFactory : IUowFactory
{
    private readonly IConfiguration _configuration;
    private readonly IEnumerable<IBaseRepository> _repositories;

    public UowFactory(IEnumerable<IBaseRepository> repositories, IConfiguration configuration)
    {
        _repositories = repositories;
        _configuration = configuration;
    }

    public IUnitOfWork Create(bool useTransactionScope = false)
    {
        return new UnitOfWork(
            new IContext[] { new SqlDapperContext(_configuration) },
            _repositories,
            useTransactionScope
        );
    }
}