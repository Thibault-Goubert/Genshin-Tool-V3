using GenshinTool.Common.Models.Core.Dom;

namespace GenshinTool.Application.Domain.Models;

public class ArtefactSetDom : BaseDom
{
    public string? name { get; set; }
    public string? initials { get; set; }
    public string? twoPiecesEffect { get; set; }
    public string? fourPiecesEffect { get; set; }
}
