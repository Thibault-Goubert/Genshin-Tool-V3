using GenshinTool.Common.Service.Interface.Context;

namespace GenshinTool.Common.Data.Api;

public class ApiContext : IApiContext
{
    public ApiContext(string nameContext)
    {
        NameContext = nameContext;
        Connection = new HttpClient();
        UniqueId = Guid.NewGuid();
    }

    public string NameContext { get; set; }

    public Guid UniqueId { get; set; }

    public HttpClient Connection { get; set; }
}
