using GenshinTool.Application.Domain.Models;
using GenshinTool.Application.Interface.Services;
using GenshinTool.Common.Models.Domain.Interfaces;
using GenshinTool.Common.Models.Enums;
using GenshinTool.Common.Service.Concrete;
using GenshinTool.Common.Service.Interface.Core;
using GenshinTool.Infrastructure.Interface.Repositories;
using System.Collections.Generic;
using System.IO.Pipelines;
using System.Net;

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

        return ExecuteWithTransaction((unitOfWork) =>
        {
            Artefact.SetId = Artefact.Set.Id;
            Artefact.PieceId = Artefact.Piece.Id;

            insertedArte = unitOfWork.GetRepository<IArtefactRepository>().Insert(Artefact);
            insertedArte.Stats = insertedArte.Stats.Select(x => { 
                x.AssociationId = insertedArte.Id; 
                x.StatNameId = x.StatName.Id;
                return x; 
            });

            unitOfWork.GetRepository<IStatRepository>().Insert(insertedArte.Stats.ToList()).ToList();
            return insertedArte;
        });
    }

    public IEnumerable<ArtefactDom> GetAll()
    {
        return ExecuteWithTransaction((unitOfWork) => { 
            var artefacts = unitOfWork.GetRepository<IArtefactRepository>().GetAllWithAggregates();

            var statsNameIds = artefacts.SelectMany(x => x.Stats.Select(y => y.StatNameId)).Distinct();
            var statNameRepo = unitOfWork.GetRepository<IStatNameRepository>().GetByIds(statsNameIds);

            var result = artefacts.Select(x => new ArtefactDom() {
                Id = x.Id,
                SetId = x.SetId,
                PieceId = x.PieceId,
                Set = x.Set,
                Piece = x.Piece,
                Stats = x.Stats.Select(y => {
                    y.StatName = statNameRepo.FirstOrDefault(z => z.Id == y.StatNameId);
                    return y;
                })
            });

            return result;
        });
    }
    public IEnumerable<ArtefactDom> GetAllByCharacter(long id)
    {
        return ExecuteWithTransaction((unitOfWork) => {
            var artefacts = unitOfWork.GetRepository<IArtefactRepository>().GetAllWithAggregatesByCharacter(id);

            var statsNameIds = artefacts.SelectMany(x => x.Stats.Select(y => y.StatNameId)).Distinct();
            var statNameRepo = unitOfWork.GetRepository<IStatNameRepository>().GetByIds(statsNameIds);

            var result = artefacts.Select(x => new ArtefactDom()
            {
                Id = x.Id,
                SetId = x.SetId,
                PieceId = x.PieceId,
                Set = x.Set,
                Piece = x.Piece,
                Stats = x.Stats.Select(y => {
                    y.StatName = statNameRepo.FirstOrDefault(z => z.Id == y.StatNameId);
                    return y;
                })
            });

            return result;
        });
    }
    public IEnumerable<ArtefactDom> GetAllByPiece(long id)
    {
        return ExecuteWithTransaction((unitOfWork) => {
            var artefacts = unitOfWork.GetRepository<IArtefactRepository>().GetAllWithAggregatesByPiece(id);

            var statsNameIds = artefacts.SelectMany(x => x.Stats.Select(y => y.StatNameId)).Distinct();
            var statNameRepo = unitOfWork.GetRepository<IStatNameRepository>().GetByIds(statsNameIds);

            var result = artefacts.Select(x => new ArtefactDom()
            {
                Id = x.Id,
                SetId = x.SetId,
                PieceId = x.PieceId,
                Set = x.Set,
                Piece = x.Piece,
                Stats = x.Stats.Select(y => {
                    y.StatName = statNameRepo.FirstOrDefault(z => z.Id == y.StatNameId);
                    return y;
                })
            });

            return result;
        });
    }
    public bool AssociateArtefactToCharacter(IArtefactModel artefactMod, long characterId) {
        return Execute(unitOfWork => {
            var arteRepo = unitOfWork.GetRepository<IArtefactRepository>();
            var charRepo = unitOfWork.GetRepository<ICharacterRepository>();

            var character = charRepo.GetById(characterId);
            var artefact = arteRepo.GetById(artefactMod.Id);

            if (character is null || artefact is null) {
                return false;
            }

            var sameArtefactPieceEquipped = arteRepo
                .GetAllWithAggregatesByCharacter(character.Id)
                .FirstOrDefault(x => x.PieceId == artefact.PieceId);

            if(sameArtefactPieceEquipped is not null) {
                sameArtefactPieceEquipped.AssociationId = null;
                arteRepo.Update(sameArtefactPieceEquipped);
            }

            artefact.AssociationId = character.Id;
            arteRepo.Update(artefact);

            return true;
        });
    }
    public bool DeleteArtefact(long id) {
        Execute(unitOfWork => {
            var stats = unitOfWork.GetRepository<IStatRepository>().GetByAssociationId(id);
                unitOfWork.GetRepository<IArtefactRepository>().Delete(id);
                unitOfWork.GetRepository<IStatRepository>().Delete(stats.Select(x => x.Id));
        });
        return true;
    }


    #region Helpers
    private static IEnumerable<StatDom> MapProperties(Func<IEnumerable<StatDom>> func)
    {
        var stats = func.Invoke().ToList();

        stats.ForEach(x =>
        {
            x.StatName.StatType = (StatType)x.StatName.StatTypeId;
        });

        return stats;
    }
    #endregion
}