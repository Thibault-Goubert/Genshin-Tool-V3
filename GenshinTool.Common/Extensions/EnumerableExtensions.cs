using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GenshinTool.Common.Extensions
{
    public static class EnumerableExtensions
    {
        public static bool HasAny<T>(this IEnumerable<T> val)
        {
            return val != null && val.Any();
        }

        public static bool HasAny<T>(this IEnumerable<T> val, Func<T, bool> predicate)
        {
            return val != null && val.Any(predicate);
        }
    }
}
