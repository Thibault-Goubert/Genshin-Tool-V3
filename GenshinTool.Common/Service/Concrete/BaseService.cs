using GenshinTool.Common.Service.Interface.Core;
using GenshinTool.Common.Watcher;

namespace GenshinTool.Common.Service.Concrete;

public class BaseService : IBaseService
{
    public IUowFactory UowFactory { get; set; }

    protected BaseService(IUowFactory uowFactory)
    {
        UowFactory = uowFactory;
    }

    protected void Execute(Action<IUnitOfWork> action, IUnitOfWork unitOfWorkContext = null!)
    {
        if (action == null)
        {
            return;
        }

        using (new ExecutionWatcher($"Service {action.Method.Name}"))
        {
            UnitOfWorkOperations.ExecuteOnly(action, unitOfWorkContext, UowFactory);
        }
    }

    protected TResult Execute<TResult>(Func<IUnitOfWork, TResult> func, IUnitOfWork unitOfWorkContext = null!)
    {
        using (new ExecutionWatcher($"Service {func.Method.Name}"))
        {
            return UnitOfWorkOperations.ExecuteAndReturnTResult(func, unitOfWorkContext, UowFactory);
        }
    }

    protected TResult ExecuteWithTransaction<TResult>(Func<IUnitOfWork, TResult> func,
        IUnitOfWork unitOfWorkContext = null!)
    {
        using (new ExecutionWatcher($"Service {func.Method.Name}"))
        {
            return UnitOfWorkOperations.ExecuteAndReturnTResult(func, unitOfWorkContext, UowFactory, true);
        }
    }

    protected void ExecuteWithTransaction(Action<IUnitOfWork> action, IUnitOfWork unitOfWorkContext = null!)
    {
        if (action == null)
        {
            return;
        }

        using (new ExecutionWatcher($"Service {action.Method.Name}"))
        {
            UnitOfWorkOperations.ExecuteOnly(action, unitOfWorkContext, UowFactory, true);
        }
    }
}
