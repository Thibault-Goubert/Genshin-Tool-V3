using GenshinTool.Common.Models.Enums;
using GenshinTool.Common.Models.Rest.Interfaces;

namespace GenshinTool.Common.Models.Rest.Concretes;

public class Response : IResponse
{
    public string Message { get; set; }

    public Exception Exception { get; set; }

    public string StackTrace { get; set; }

    public ResponseStatus Status { get; set; }

    public string FormatMessageAndStackTrace()
    {
        return String.Format("{0}{1}{1}Stacktrace:{1}{2}", Message, Environment.NewLine, StackTrace);
    }

}