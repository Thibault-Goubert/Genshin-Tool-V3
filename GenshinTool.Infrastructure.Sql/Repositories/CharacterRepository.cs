using GenshinTool.Application.Domain.Models;
using GenshinTool.Common.Data.Sql.Dapper.QueryGenerator;
using GenshinTool.Common.Extensions;
using GenshinTool.Common.Models.Enums;
using GenshinTool.Common.Models.Requests;
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

        public IEnumerable<CharacterDom> GetByRarity(long rarity)
        {
            return GetByDynamicParameters(new { Rarity = rarity });
        }

        public IEnumerable<CharacterDom> GetByElementId(long elementId)
        {
            return GetByDynamicParameters(new { ElementId = elementId });
        }

        public IEnumerable<CharacterDom> GetBySexId(long sexId)
        {
            return GetByDynamicParameters(new { SexId = sexId });
        }

        public IEnumerable<CharacterDom> GetByWeaponTypeId(long weaponTypeId)
        {
            return GetByDynamicParameters(new { WeaponTypeId = weaponTypeId });
        }

        public IEnumerable<CharacterDom> GetByRequest(CharacterRequest req)
        {
            var parentSelectors = BuildParentSelectors(req);

            var query = new QueryContext
            {
                ParentAggregateSelectors = parentSelectors
            };

            return Get(query);
        }

        private static IEnumerable<IQueryFilter> BuildParentSelectors(CharacterRequest req)
        {
            List<IQueryFilter> filters = new List<IQueryFilter>();

            if (req.Rarities.HasAny())
            {
                filters.Add(new QueryFilterTypeListLong { FieldName = nameof(CharacterDom.Rarity), FieldValue = req.Rarities });
            }
            if (req.ElementsIds.HasAny())
            {
                filters.Add(new QueryFilterTypeListLong { FieldName = nameof(CharacterDom.ElementId), FieldValue = req.ElementsIds });
            }
            if (req.WeaponsTypesIds.HasAny())
            {
                filters.Add(new QueryFilterTypeListLong { FieldName = nameof(CharacterDom.WeaponTypeId), FieldValue = req.WeaponsTypesIds });
            }
            if (req.SexIds.HasAny())
            {
                filters.Add(new QueryFilterTypeListLong { FieldName = nameof(CharacterDom.SexId), FieldValue = req.SexIds });
            }

            return filters;
        }
    }
}
