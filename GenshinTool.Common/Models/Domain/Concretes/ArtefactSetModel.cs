using GenshinTool.Common.Models.Core.Model;
using GenshinTool.Common.Models.Domain.Interfaces;
using Newtonsoft.Json;

namespace GenshinTool.Common.Models.Domain.Concretes;

public class ArtefactSetModel : BaseModel, IArtefactSetModel
{
    public string Name { get; set; }
    public string Initials { get; set; }
    public string TwoPiecesEffect { get; set; }
    public string FourPiecesEffect { get; set; }
}
