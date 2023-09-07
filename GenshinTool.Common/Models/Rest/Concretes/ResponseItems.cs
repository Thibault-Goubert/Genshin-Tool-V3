using GenshinTool.Common.Models.Rest.Interfaces;

namespace GenshinTool.Common.Models.Rest.Concretes;

public class ResponseItems<T> : Response, IResponseItems<T>
{
    public IEnumerable<T> Items { get; set; } = Enumerable.Empty<T>();
}