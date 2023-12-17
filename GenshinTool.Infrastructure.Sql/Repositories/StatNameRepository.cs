using GenshinTool.Application.Domain.Models;
using GenshinTool.Common.Rest.Core;
using GenshinTool.Infrastructure.Interface.Dto;
using GenshinTool.Infrastructure.Interface.Repositories;
using GenshinTool.Infrastructure.Sql.Core;

namespace GenshinTool.Infrastructure.Sql.Repositories;

public class StatNameRepository : GenshinToolSqlRepository<StatNameDom, StatNameDto>, IStatNameRepository
{
    public StatNameRepository(IBaseMapper mapper) : base(mapper)
    {
    }
}
