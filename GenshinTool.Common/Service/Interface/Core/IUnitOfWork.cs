namespace GenshinTool.Common.Service.Interface.Core;

public interface IUnitOfWork : IDisposable
{
    T GetRepository<T>();
    void Complete();
}
