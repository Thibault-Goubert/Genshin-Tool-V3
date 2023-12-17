using GenshinTool.Common.Models.Core.Dom;

namespace GenshinTool.Application.Domain.Models;

public class ArtefactDom : BaseDom
{
    public long SetId { get; set; }
    public long PieceId { get; set; }
    public long? AssociationId { get; set; }
    public ArtefactSetDom Set { get; set; }
    public ArtefactPieceDom Piece { get; set; }
    public IEnumerable<StatDom> Stats { get; set; }
}