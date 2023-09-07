using GenshinTool.Common.Converters.Json;
using System.Reflection;

namespace GenshinTool.Common.Generator
{
    public static class MethodHelper
    {
        public static string GetCurrentMethodWithParams()
        {
            var m = MethodBase.GetCurrentMethod();
            var parameters = m?.GetParameters().Select(n => n.Serialize()).ToArray() ?? Array.Empty<string>();

            return $"{m?.Name} With params : {string.Join(",", parameters)}";
        }
    }
}
