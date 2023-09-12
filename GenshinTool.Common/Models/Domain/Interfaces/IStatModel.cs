using GenshinTool.Common.Converters.Json;
using GenshinTool.Common.Models.Core.Model;
using GenshinTool.Common.Models.Domain.Concretes;
using Newtonsoft.Json;

namespace GenshinTool.Common.Models.Domain.Interfaces;

[JsonConverter(typeof(ObjectConverter<ICharacterModel, CharacterModel>))]
public interface IStatModel : IBaseModel
{
    decimal Value { get; set; }
    long StatNameId { get; set; }
    IStatNameModel StatName { get; set; }
    bool IsMain { get; set; }
}