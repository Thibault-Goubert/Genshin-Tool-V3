using GenshinTool.Common.Models.Core.Dto;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GenshinTool.Infrastructure.Interface.Dto;

[Dapper.Contrib.Extensions.Table("dbo.Characters")]
public class CharacterDto : BaseDto
{
    public string? Name { get; set; }
    [Required][ForeignKey("dbo.Elements")] public long ElementId { get; set; }
    [Required][ForeignKey("dbo.WeaponTypes")] public long WeaponTypeId { get; set; }
    [Required][ForeignKey("dbo.Regions")] public long RegionId { get; set; }
    [Required][ForeignKey("dbo.Sex")] public long SexId { get; set; }
    [ForeignKey("dbo.Weapons")] public long? WeaponId { get; set; }
    [Required] public bool IsCollab { get; set; }
    [Required] public long Rarity { get; set; }
    [Required] public bool IsUsed { get; set; }
}
