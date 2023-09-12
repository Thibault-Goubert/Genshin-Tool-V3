using GenshinTool.Common.Models.Core.Dto;
using System.ComponentModel.DataAnnotations;

namespace GenshinTool.Infrastructure.Interface.Dto;

[Dapper.Contrib.Extensions.Table("dbo.Artefacts")]
public class ArtefactDto : BaseDto
{
    [Required] public long PieceId { get; set; }
    public long SetId { get; set; }

}