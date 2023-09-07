using GenshinTool.Common.Models.Core.Dto;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace GenshinTool.Infrastructure.Interface.Dto;

[Dapper.Contrib.Extensions.Table("dbo.StatsNames")]
public class StatNameDto : BaseDto
{
    [Required] public string? Label { get; set; }
    [Required][ForeignKey("dbo.StatTypes")] public long StatTypeId { get; set; }
}
