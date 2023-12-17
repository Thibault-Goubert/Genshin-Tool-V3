namespace GenshinTool.Common.Models.Rest.Interfaces;

public interface IResponseItem<T> : IResponse
{
    T Item { get; set; }
}
