using GenshinTool.Common.Models.Core.Model;
using GenshinTool.Common.Models.Domain.Interfaces;

namespace GenshinTool.Common.Models.Domain.Concretes;

public class CharacterModel : BaseModel, ICharacterModel
{
    public string? Name { get; set; }
    public long ElementId { get; set; }
    public string? Element { get; set; }
    public long Rarity { get; set; }
    public long WeaponTypeId { get; set; }
    public long RegionId { get; set; }
    public string? Region { get; set; }
    public long SexId { get; set; }
    public bool IsCollab { get; set; }
    public long? WeaponId { get; set; }
    public bool IsUsed { get; set; }
}
