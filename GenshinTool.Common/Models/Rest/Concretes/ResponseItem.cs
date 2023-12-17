using GenshinTool.Common.Models.Rest.Interfaces;

namespace GenshinTool.Common.Models.Rest.Concretes;

public class ResponseItem<T> : Response, IResponseItem<T>
{
    public T Item { get; set; } = default!;
}
