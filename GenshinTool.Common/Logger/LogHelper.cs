using GenshinTool.Common.Extensions;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GenshinTool.Common.Logger;

public static class LogHelper
{
    private static readonly ConcurrentDictionary<string, ILogBase> DicoDictionary = new();

    public static T GetLogger<T>() where T : ILogBase, new() => (T)DicoDictionary!.Get(typeof(T).FullName)!;

    public static void SetLogger(ILogBase logger)
    {
        if (DicoDictionary.ContainsKey(logger.GetType().FullName))
        {
            return;
        }

        logger.Initialize();
        DicoDictionary?.TryAdd(key: logger.GetType().FullName, logger);
    }
}
