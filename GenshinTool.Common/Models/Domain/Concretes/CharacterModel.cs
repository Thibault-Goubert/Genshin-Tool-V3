using GenshinTool.Common.Models.Core.Model;
using GenshinTool.Common.Models.Domain.Interfaces;

namespace GenshinTool.Common.Models.Domain.Concretes;

public class CharacterModel : BaseModel, ICharacterModel
{
    public string? Name { get; set; }
    public long ElementId { get; set; }
    public long WeaponTypeId { get; set; }
    public long RegionId { get; set; }
    public long RarityId { get; set; }
    public long SexId { get; set; }
    public bool IsCollab { get; set; }
    public long WeaponId { get; set; }
}
