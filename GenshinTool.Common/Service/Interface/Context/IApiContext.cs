namespace GenshinTool.Common.Service.Interface.Context;

public interface IApiContext : IContext
{
    public HttpClient Connection { get; set; }
}
