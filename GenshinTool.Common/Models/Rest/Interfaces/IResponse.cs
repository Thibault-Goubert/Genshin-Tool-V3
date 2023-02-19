using GenshinTool.Common.Models.Enums;
using System.Text.Json.Serialization;

namespace GenshinTool.Common.Models.Rest.Interfaces;

public interface IResponse
{
    string Message { get; set; }

    string StackTrace { get; set; }

    [JsonIgnore] Exception Exception { get; set; }

    ResponseStatus Status { get; set; }

    string FormatMessageAndStackTrace();
}