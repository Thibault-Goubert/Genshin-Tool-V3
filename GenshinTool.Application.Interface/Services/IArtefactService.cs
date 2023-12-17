using GenshinTool.Application.Domain.Models;
using GenshinTool.Common.Models.Domain.Concretes;
using GenshinTool.Common.Models.Domain.Interfaces;
using GenshinTool.Common.Service.Interface.Core;

namespace GenshinTool.Application.Interface.Services;

public interface IArtefactService : IBaseService
{
    IEnumerable<ArtefactSetDom> GetAllSet();
    IEnumerable<ArtefactPieceDom> GetAllPiece();
    ArtefactDom InsertArtefact(ArtefactDom Artefact);
    IEnumerable<ArtefactDom> GetAll();
    IEnumerable<ArtefactDom> GetAllByCharacter(long id); 
    IEnumerable<ArtefactDom> GetAllByPiece(long id);
    bool AssociateArtefactToCharacter(IArtefactModel artefact, long characterId);
    bool DeleteArtefact(long id);
}
