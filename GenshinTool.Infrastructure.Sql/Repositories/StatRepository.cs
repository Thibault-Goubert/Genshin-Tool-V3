using GenshinTool.Application.Domain.Models;
using GenshinTool.Common.Rest.Core;
using GenshinTool.Infrastructure.Interface.Dto;
using GenshinTool.Infrastructure.Interface.Repositories;
using GenshinTool.Infrastructure.Sql.Core;

namespace GenshinTool.Infrastructure.Sql.Repositories;

public class StatRepository : GenshinToolSqlRepository<StatDom, StatDto>, IStatRepository
{
    public StatRepository(IBaseMapper mapper) : base(mapper)
    {
    }
}
