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
        IEnumerable<StatDom> insertedStats = Enumerable.Empty<StatDom>();

        var result = ExecuteWithTransaction((unitOfWork) =>
        {
            insertedArte = unitOfWork.GetRepository<IArtefactRepository>().Insert(Artefact);
            insertedArte.Stats = 
                unitOfWork.GetRepository<IStatRepository>()
                    .Insert(insertedArte.Stats.Select(x => { x.AssociationId = insertedArte.Id; return x; }))
                    .ToList();
            return insertedArte;
        });

        return result;
    }

    public IEnumerable<ArtefactDom> GetAll()
    {
        return ExecuteWithTransaction((unitOfWork) => { 
            var repo = unitOfWork.GetRepository<IArtefactRepository>();

            var result = repo.GetAllWithAggregates();

            return result;
        });
    }
}