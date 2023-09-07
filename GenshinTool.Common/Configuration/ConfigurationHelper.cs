using GenshinTool.Common.Extensions;
using Microsoft.Extensions.Configuration;
using System.Collections;
using System.Collections.Concurrent;

namespace GenshinTool.Common.Configuration;

public static class ConfigurationHelper
{
    private static bool _isConfigSet;
    private static readonly ConcurrentDictionary<string, string> Configs = new();

    public static string GetConfig(string key)
    {
        return Configs.Get(key);
    }

    public static void SetConfig(IConfiguration configuration)
    {
        if (_isConfigSet)
        {
            return;
        }

        SetConnectionString(configuration);
        _isConfigSet = true;
    }

    private static void SetConnectionString(IConfiguration configuration)
    {
        if (configuration == null)
        {
            return;
        }

        foreach (var database in Enum.GetValues(typeof(Database)))
        {
            Configs.TryAdd(database.ToString(), configuration.GetConnectionString(database.ToString()));
        }

        foreach (var sectionConfig in Enum.GetValues(typeof(SectionConfig)))
        {
            AddInConfigDictionary(
                configuration.GetSection(sectionConfig.ToString()).GetChildren()
                    .ToDictionary(x => x.Key, x => x.Value));
        }
    }

    private static void AddInConfigDictionary(IDictionary dictionary)
    {
        foreach (DictionaryEntry element in dictionary)
        {
            Configs.TryAdd(element.Key.ToString(), element.Value.ToString());
        }
    }
}
