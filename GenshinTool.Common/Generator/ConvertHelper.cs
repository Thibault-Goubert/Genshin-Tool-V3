using GenshinTool.Common.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GenshinTool.Common.Generator;

public static class ConvertHelper
{
    public static object ConvertList(List<object> values, Type type)
    {
        var genericType = typeof(List<>).MakeGenericType(type);
        var list = Activator.CreateInstance(genericType);
        if (!values.HasAny())
        {
            return list;
        }

        foreach (var obj in values)
        {
            list.GetType().GetMethod("Add").Invoke(list, new[] { Convert.ChangeType(obj, type) });
        }
        return list;
    }
}