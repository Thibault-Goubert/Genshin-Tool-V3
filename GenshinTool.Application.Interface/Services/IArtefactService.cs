using GenshinTool.Application.Domain.Models;
using GenshinTool.Common.Service.Interface.Core;

namespace GenshinTool.Application.Interface.Services;

public interface IArtefactService : IBaseService
{
    IEnumerable<ArtefactSetDom> GetAllSet();
    IEnumerable<ArtefactPieceDom> GetAllPiece();
    ArtefactDom InsertArtefact(ArtefactDom Artefact);
}
