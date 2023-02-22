namespace GenshinTool.Common.Service.Interface;

public interface IBaseRepository
{
    IContext DataSourceContext { get; set; }
}