using GenshinTool.Common.Converters.Json;
using log4net;
using System.Net;

namespace GenshinTool.Common.Configuration;

public class Context
{
    public string Host { get; }

    public Context()
    {
        Host = Dns.GetHostName();
    }

    public override string ToString()
    {
        return this.Serialize();
    }
}