using GenshinTool.Common.Models.Core.Dom;

namespace GenshinTool.Application.Domain.Models;

public class ArtefactDom : BaseDom
{
    public long setId { get; set; }
    public long pieceId { get; set; }
    public ArtefactSetDom? set { get; set; }
    public ArtefactPieceDom? piece { get; set; }
    public List<StatDom>? stats { get; set; }
}