using GenshinTool.Common.Converters.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

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
