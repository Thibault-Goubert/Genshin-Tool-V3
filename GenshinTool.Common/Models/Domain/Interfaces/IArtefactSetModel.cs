using GenshinTool.Common.Converters.Json;
using GenshinTool.Common.Models.Core.Model;
using GenshinTool.Common.Models.Domain.Concretes;
using Newtonsoft.Json;

namespace GenshinTool.Common.Models.Domain.Interfaces;


[JsonConverter(typeof(ObjectConverter<IArtefactSetModel, ArtefactSetModel>))]
public interface IArtefactSetModel : IBaseModel
{
    string Name { get; set; }
    string Initials { get; set; }
    string TwoPiecesEffect { get; set; }
    string FourPiecesEffect { get; set; }
}
