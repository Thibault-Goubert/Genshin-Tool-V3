using GenshinTool.Application.Domain.Models;
using GenshinTool.Common.Rest.Core;
using GenshinTool.Infrastructure.Interface.Dto;
using GenshinTool.Infrastructure.Interface.Repositories;
using GenshinTool.Infrastructure.Sql.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace GenshinTool.Infrastructure.Sql.Repositories
{
    public class CharacterRepository : GenshinToolSqlRepository<CharacterDom, CharacterDto>, ICharacterRepository
    {
        public CharacterRepository(IBaseMapper mapper) : base(mapper)
        {
        }

        public IEnumerable<CharacterDom> GetByElementId(long elementId)
        {
            return GetByDynamicParameters(new { ElementId = elementId });
        }
    }
}
