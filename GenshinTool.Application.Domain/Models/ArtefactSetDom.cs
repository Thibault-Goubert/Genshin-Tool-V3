using GenshinTool.Common.Models.Core.Dom;

namespace GenshinTool.Application.Domain.Models;

public class ArtefactSetDom : BaseDom
{
    public string Name { get; set; }
    public string Initials { get; set; }
    public string TwoPiecesEffect { get; set; }
    public string FourPiecesEffect { get; set; }
}
