using GenshinTool.Application.Domain.Models;
using GenshinTool.Common.Service.Interface.Repo;
using GenshinTool.Infrastructure.Interface.Dto;

namespace GenshinTool.Infrastructure.Interface.Repositories;

public interface IStatRepository : IRepository<StatDom, StatDto>
{
    IEnumerable<StatDom> GetByAssociationId(long id);
}