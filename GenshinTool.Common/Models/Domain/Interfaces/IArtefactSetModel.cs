using GenshinTool.Common.Models.Core.Model;

namespace GenshinTool.Common.Models.Domain.Interfaces;

public interface IArtefactSetModel : IBaseModel
{
    string Name { get; set; }
    string Initials { get; set; }
    string TwoPiecesEffect { get; set; }
    string FourPiecesEffect { get; set; }
}
