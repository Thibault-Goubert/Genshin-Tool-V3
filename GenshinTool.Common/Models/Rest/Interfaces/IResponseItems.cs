namespace GenshinTool.Common.Models.Rest.Interfaces;

public interface IResponseItems<T> : IResponse
{
    IEnumerable<T> Items { get; set; }
}