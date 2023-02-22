using System.Reflection;
using Dapper.Contrib.Extensions;

namespace GenshinTool.Common.Generator;

public static class AttributeHelper
{
    public static string GetTableAttributeName<T>(this Type obj) where T : TableAttribute
    {
        return (obj?.GetCustomAttributes(typeof(T)).FirstOrDefault() as T)?.Name ?? string.Empty;
    }
}
