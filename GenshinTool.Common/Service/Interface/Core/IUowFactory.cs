namespace GenshinTool.Common.Service.Interface.Core
{
    public interface IUowFactory
    {
        IUnitOfWork Create(bool useTransactionScope = false);
    }
}
