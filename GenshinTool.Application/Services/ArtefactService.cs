using GenshinTool.Application.Domain.Models;
using GenshinTool.Application.Interface.Services;
using GenshinTool.Common.Service.Concrete;
using GenshinTool.Common.Service.Interface.Core;
using GenshinTool.Infrastructure.Interface.Repositories;

namespace GenshinTool.Application.Services;

internal class ArtefactService : BaseService, IArtefactService
{
    public ArtefactService(IUowFactory uowFactory) : base(uowFactory)
    {
    }

    public IEnumerable<ArtefactSetDom> GetAllSet()
    {
        return Execute(unitOfWork => unitOfWork.GetRepository<IArtefactSetRepository>().GetAll());
    }

    public IEnumerable<ArtefactPieceDom> GetAllPiece()
    {
        return Execute(unitOfWork => unitOfWork.GetRepository<IArtefactPieceRepository>().GetAll());
    }

    public ArtefactDom InsertArtefact(ArtefactDom Artefact)
    {
        ArtefactDom insertedArte = null;
        var insertedStats = new List<StatDom>();

        ExecuteWithTransaction(unitOfWork =>
        {
            insertedArte = unitOfWork.GetRepository<IArtefactRepository>().Insert(Artefact);
            insertedStats = unitOfWork.GetRepository<IStatRepository>().Insert(Artefact.Stats).ToList();
        });

        if (insertedArte is not null)
        {
            insertedArte.Stats = insertedStats;
        }

        return insertedArte;
    }
}