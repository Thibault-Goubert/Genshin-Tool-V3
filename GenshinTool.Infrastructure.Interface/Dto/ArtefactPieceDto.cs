using GenshinTool.Common.Models.Core.Dto;
using System.ComponentModel.DataAnnotations;

namespace GenshinTool.Infrastructure.Interface.Dto;

[Dapper.Contrib.Extensions.Table("dbo.ArtefactPieces")]
public class ArtefactPieceDto : BaseDto
{
    [Required] public string Name { get; set; }
}
