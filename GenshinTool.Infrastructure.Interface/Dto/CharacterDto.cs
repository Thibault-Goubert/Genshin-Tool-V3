using Dapper.Contrib.Extensions;
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
    [Required][ForeignKey("dbo.Rarities")] public long RarityId { get; set; }
    [Required][ForeignKey("dbo.Sex")] public long SexId { get; set; }
    public bool IsCollab { get; set; }
    [ForeignKey("dbo.Weapons")] public long WeaponId { get; set; }
}
