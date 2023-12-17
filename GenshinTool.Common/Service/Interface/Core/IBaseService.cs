namespace GenshinTool.Common.Service.Interface.Core;

public interface IBaseService
{
    IUowFactory UowFactory { get; set; }
}
