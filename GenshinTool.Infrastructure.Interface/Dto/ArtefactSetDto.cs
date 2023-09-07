using GenshinTool.Common.Models.Core.Dto;
using System.ComponentModel.DataAnnotations;

namespace GenshinTool.Infrastructure.Interface.Dto;

[Dapper.Contrib.Extensions.Table("dbo.ArtefactSets")]
public class ArtefactSetDto : BaseDto
{
    [Required] public string? Name { get; set; }
    [Required] public string? Initials { get; set; }
    [Required] public string? TwoPiecesEffect { get; set; }
    [Required] public string? FourPiecesEffect { get; set; }
}
