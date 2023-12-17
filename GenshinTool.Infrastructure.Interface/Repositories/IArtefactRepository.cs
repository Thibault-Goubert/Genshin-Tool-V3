using GenshinTool.Application.Domain.Models;
using GenshinTool.Common.Service.Interface.Repo;
using GenshinTool.Infrastructure.Interface.Dto;

namespace GenshinTool.Infrastructure.Interface.Repositories;

public interface IArtefactRepository : IRepository<ArtefactDom, ArtefactDto>
{
    IEnumerable<ArtefactDom> GetAllWithAggregates();
    IEnumerable<ArtefactDom> GetAllWithAggregatesByCharacter(long id);
    IEnumerable<ArtefactDom> GetAllWithAggregatesByPiece(long id);
}