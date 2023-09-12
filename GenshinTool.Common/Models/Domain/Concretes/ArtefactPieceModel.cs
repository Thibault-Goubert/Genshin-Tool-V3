using GenshinTool.Common.Converters.Json;
using GenshinTool.Common.Models.Core.Model;
using GenshinTool.Common.Models.Domain.Interfaces;
using System.Text.Json.Serialization;

namespace GenshinTool.Common.Models.Domain.Concretes;

public class ArtefactPieceModel : BaseModel, IArtefactPieceModel
{
    public string? Name { get; set; }
}
