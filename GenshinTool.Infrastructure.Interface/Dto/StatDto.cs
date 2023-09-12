using GenshinTool.Common.Models.Core.Dto;
using System.ComponentModel.DataAnnotations;

namespace GenshinTool.Infrastructure.Interface.Dto;

[Dapper.Contrib.Extensions.Table("dbo.Stats")]
public class StatDto : BaseDto
{
    [Required] public decimal Value { get; set; }
    [Required] public long StatNameId { get; set; }
    [Required] public bool IsMain { get; set; }
}