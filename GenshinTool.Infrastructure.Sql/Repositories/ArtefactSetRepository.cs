using GenshinTool.Application.Domain.Models;
using GenshinTool.Common.Rest.Core;
using GenshinTool.Infrastructure.Interface.Dto;
using GenshinTool.Infrastructure.Interface.Repositories;
using GenshinTool.Infrastructure.Sql.Core;

namespace GenshinTool.Infrastructure.Sql.Repositories;

public class ArtefactSetRepository : GenshinToolSqlRepository<ArtefactSetDom, ArtefactSetDto>, IArtefactSetRepository
{
    public ArtefactSetRepository(IBaseMapper mapper) : base(mapper)
    {
    }

    public ArtefactSetDom GetByName(string name)
    {
        return GetByDynamicParameters(new { Name = name }).FirstOrDefault();
    }
}
