using GenshinTool.Common.Service.Interface.Core;

namespace GenshinTool.Common.Service.Concrete;


public static class UnitOfWorkOperations
{
    public static void ExecuteOnly(Action<IUnitOfWork> action, IUnitOfWork unitOfWorkContext, IUowFactory factory,
        bool useTransactionScopeIfCreateNewOne = false)
    {
        var uow = SetUnitOfWork(factory, unitOfWorkContext, useTransactionScopeIfCreateNewOne);
        try
        {
            action(uow);
            CompleteUnitOfWork(unitOfWorkContext, uow);
        }
        finally
        {
            if (unitOfWorkContext == null)
            {
                uow.Dispose();
            }
        }
    }

    private static IUnitOfWork SetUnitOfWork(IUowFactory factory, IUnitOfWork unitOfWorkContext,
        bool useTransactionScopeIfCreateNewOne = false)
    {
        return unitOfWorkContext ?? CreateUow(factory, useTransactionScopeIfCreateNewOne);
    }

    private static void CompleteUnitOfWork(IUnitOfWork unitOfWorkContext, IUnitOfWork unitOfWork)
    {
        if (unitOfWorkContext == null)
        {
            unitOfWork.Complete();
        }
    }

    private static IUnitOfWork CreateUow(IUowFactory factory, bool useTransactionScope = false)
    {
        return factory.Create(useTransactionScope);
    }

    public static TResult ExecuteAndReturnTResult<TResult>(Func<IUnitOfWork, TResult> func,
        IUnitOfWork unitOfWorkContext, IUowFactory factory,
        bool useTransactionScopeIfCreateNewOne = false)
    {
        var uow = SetUnitOfWork(factory, unitOfWorkContext, useTransactionScopeIfCreateNewOne);
        try
        {
            var result = func(uow);
            CompleteUnitOfWork(unitOfWorkContext, uow);
            return result;
        }
        finally
        {
            if (unitOfWorkContext == null)
            {
                uow.Dispose();
            }
        }
    }
}
