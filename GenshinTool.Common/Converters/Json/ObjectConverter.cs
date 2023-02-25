using Newtonsoft.Json.Converters;

namespace GenshinTool.Common.Converters.Json;

public class ObjectConverter<TInterface, T> : CustomCreationConverter<TInterface>
    where T : TInterface, new()
{
    public override TInterface Create(Type objectType) => new T();

}