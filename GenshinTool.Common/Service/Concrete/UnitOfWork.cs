using GenshinTool.Common.Service.Interface.Context;
using GenshinTool.Common.Service.Interface.Core;
using GenshinTool.Common.Service.Interface.Repo;
using Mapster;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Transactions;

namespace GenshinTool.Common.Service.Concrete;

public class UnitOfWork : IUnitOfWork
{
    private readonly IEnumerable<IContext> _contexts;
    private readonly IEnumerable<IBaseRepository> _repositories;
    private TransactionScope TransactionScope { get; }

    public UnitOfWork(IEnumerable<IContext> contexts, IEnumerable<IBaseRepository> repositories) : this(contexts,
        repositories, false)
    {
    }

    public UnitOfWork(IEnumerable<IContext> contexts, IEnumerable<IBaseRepository> repositories,
        bool useTransactionScope)
    {
        _contexts = contexts;
        _repositories = repositories;

        //     set the same context for all Repo in order to manage Transaction
        //Api context with RestSharp should be one per "base URL"
        foreach (var repo in _repositories)
        {
            var ts = repo.GetType().GetInterfaces();
            var enumerable = _contexts.ToList();

            repo.DataSourceContext = IsDatabaseRepository(ts)
                ? enumerable.FirstOrDefault(i => i.GetType().IsAssignableTo(typeof(IDbContext)))
                : enumerable.FirstOrDefault(i => i.GetType().IsAssignableTo(typeof(IApiContext)));
        }

        if (useTransactionScope)
        {
            TransactionScope = new TransactionScope();
        }
    }

    public void Dispose()
    {
        foreach (var context in _contexts)
        {
            if (context is IDbContext lContext1)
            {
                lContext1.Connection?.Close();
                lContext1.Connection?.Dispose();
                TransactionScope?.Dispose();
            }
            else if (context is IApiContext lContext2)
            {
                lContext2.Connection?.Dispose();
            }
            else
            {
                // do nothing
            }
        }
    }

    public T GetRepository<T>()
    {
        return (T)_repositories.First(x => typeof(T).IsAssignableFrom(x.GetType()));
    }

    public void Complete()
    {
        TransactionScope?.Complete();
    }

    private static bool IsDatabaseRepository(IEnumerable<Type> ts)
    {
        return ts.Any(t => t.IsGenericType && t.GetGenericTypeDefinition() == typeof(IDatabaseRepository<,>));
    }
}
