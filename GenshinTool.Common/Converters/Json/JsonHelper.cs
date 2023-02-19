using Newtonsoft.Json;

namespace GenshinTool.Common.Converters.Json;

public static class JsonExtensions
{
    public static string Serialize(this object obj, bool indent = false,
        PreserveReferencesHandling preserveReferencesHandling = PreserveReferencesHandling.Objects)
    {
        return JsonConvert.SerializeObject(obj, indent ? Formatting.Indented : Formatting.None,
            new JsonSerializerSettings
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore,
                PreserveReferencesHandling = preserveReferencesHandling
            });
    }

    public static object ConvertToModel(this object obj, Type modelType)
    {
        return JsonConvert.DeserializeObject(JsonConvert.SerializeObject(obj), modelType);
    }
}