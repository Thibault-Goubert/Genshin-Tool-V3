using GenshinTool.Common.Models.Core.Dom;
using GenshinTool.Common.Models.Core.Dto;
using GenshinTool.Common.Rest.Core;

namespace GenshinTool.Infrastructure.Sql.Core;

public class GenshinToolSqlRepository<TDom, TDto> : SqlDapperRepository<TDom, TDto>
    where TDom : class, IBaseDom, new()
    where TDto : class, IBaseDto, new()
{
    protected GenshinToolSqlRepository(IBaseMapper mapper) : base(mapper)
    {
    }
}
