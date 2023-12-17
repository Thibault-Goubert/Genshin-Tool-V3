using GenshinTool.Common.Converters.Json;
using GenshinTool.Common.Models.Core.Model;
using GenshinTool.Common.Models.Domain.Concretes;
using Newtonsoft.Json;

namespace GenshinTool.Common.Models.Domain.Interfaces;

[JsonConverter(typeof(ObjectConverter<ICharacterModel, CharacterModel>))]
public interface ICharacterModel : IBaseModel
{
    string Name { get; set; }
    long ElementId { get; set; }
    string Element { get; set; }
    long Rarity { get; set; }
    long WeaponTypeId { get; set; }
    long RegionId { get; set; }
    string Region { get; set; }
    long SexId { get; set; }
    bool IsCollab { get; set; }
    long? WeaponId { get; set; }
    bool IsUsed { get; set; }
}
