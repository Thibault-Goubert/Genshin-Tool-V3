using GenshinTool.Common.Models.Core.Model;

namespace GenshinTool.Common.Models.Domain.Interfaces;

public interface ICharacterModel : IBaseModel
{
    string? Name { get; set; }
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
