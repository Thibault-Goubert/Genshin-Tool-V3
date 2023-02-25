using GenshinTool.Common.Service.Interface.Context;

namespace GenshinTool.Common.Service.Interface.Repo;

public interface IBaseRepository
{
    IContext DataSourceContext { get; set; }
}