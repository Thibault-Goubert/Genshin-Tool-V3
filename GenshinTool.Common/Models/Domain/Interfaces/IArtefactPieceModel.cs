using GenshinTool.Common.Converters.Json;
using GenshinTool.Common.Models.Core.Model;
using GenshinTool.Common.Models.Domain.Concretes;
using System.Text.Json.Serialization;

namespace GenshinTool.Common.Models.Domain.Interfaces;

[JsonConverter(typeof(ObjectConverter<IArtefactPieceModel, ArtefactPieceModel>))]
public interface IArtefactPieceModel : IBaseModel
{
    string? Name { get; set; }
}
