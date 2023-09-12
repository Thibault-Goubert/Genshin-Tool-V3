using GenshinTool.Common.Converters.Json;
using GenshinTool.Common.Models.Core.Model;
using GenshinTool.Common.Models.Domain.Concretes;
using Newtonsoft.Json;

namespace GenshinTool.Common.Models.Domain.Interfaces;

[JsonConverter(typeof(ObjectConverter<IArtefactModel, ArtefactModel>))]
public interface IArtefactModel : IBaseModel
{
    long SetId { get; set; }
    long PieceId { get; set; }
    ArtefactPieceModel? Piece { get; set; }
    ArtefactSetModel? Set { get; set; }
    IEnumerable<StatModel>? Stats { get; set; }
}

