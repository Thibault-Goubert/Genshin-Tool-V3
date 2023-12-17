using GenshinTool.Application.Domain.Models;
using GenshinTool.Common.Rest.Core;
using GenshinTool.Infrastructure.Interface.Dto;
using GenshinTool.Infrastructure.Interface.Repositories;
using GenshinTool.Infrastructure.Sql.Core;

namespace GenshinTool.Infrastructure.Sql.Repositories;

public class ArtefactPieceRepository : GenshinToolSqlRepository<ArtefactPieceDom, ArtefactPieceDto>, IArtefactPieceRepository
{
    public ArtefactPieceRepository(IBaseMapper mapper) : base(mapper)
    {
    }

    public ArtefactPieceDom GetByName(string name)
    {
        return GetByDynamicParameters(new { Name = name }).FirstOrDefault();
    }
}
