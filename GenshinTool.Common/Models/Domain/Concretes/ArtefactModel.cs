using GenshinTool.Common.Models.Core.Model;
using GenshinTool.Common.Models.Domain.Interfaces;
using System.Text.Json.Serialization;

namespace GenshinTool.Common.Models.Domain.Concretes;

public class ArtefactModel : BaseModel, IArtefactModel
{
    public long SetId { get; set; }
    public long PieceId { get; set; }
    public ArtefactPieceModel? Piece { get; set; }
    public ArtefactSetModel? Set { get; set; }
    public IEnumerable<StatModel>? Stats { get; set; }
}

