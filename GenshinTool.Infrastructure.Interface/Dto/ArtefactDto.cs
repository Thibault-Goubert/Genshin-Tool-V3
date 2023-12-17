using Dapper.Contrib.Extensions;
using GenshinTool.Common.Models.Core.Dto;
using System.ComponentModel.DataAnnotations;

namespace GenshinTool.Infrastructure.Interface.Dto;

[Dapper.Contrib.Extensions.Table("dbo.Artefacts")]
public class ArtefactDto : BaseDto
{
    [Required] public long PieceId { get; set; }
    public long SetId { get; set; }
    public long? AssociationId { get; set; }
    [Computed] public ArtefactSetDto Set { get; set; }
    [Computed] public ArtefactPieceDto Piece{ get; set; }
    [Computed] public IEnumerable<StatDto> Stats { get; set; }
}