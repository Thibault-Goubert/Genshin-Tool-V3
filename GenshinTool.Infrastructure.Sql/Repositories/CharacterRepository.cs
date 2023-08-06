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
        public CharacterDom GetByName(string name)
        {
            return GetByDynamicParameters(new { Name = name }).SingleOrDefault();
        }

        public IEnumerable<CharacterDom> GetUsed()
        {
            return GetByDynamicParameters(new { IsUsed = true });
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

        private IEnumerable<IQueryFilter> BuildParentSelectors(CharacterRequest req)
        {
            List<IQueryFilter> filters = new List<IQueryFilter>();

            AddFilter(filters, req.Rarities, nameof(CharacterDom.Rarity));
            AddFilter(filters, req.ElementsIds, nameof(CharacterDom.ElementId));
            AddFilter(filters, req.WeaponsTypesIds, nameof(CharacterDom.WeaponTypeId));
            AddFilter(filters, req.SexIds, nameof(CharacterDom.SexId));
            AddFilter(filters, req.RegionsIds, nameof(CharacterDom.RegionId));

            return filters;
        }

        private void AddFilter(List<IQueryFilter> filters, IEnumerable<long> ids, string propName)
        {
            if (ids.HasAny())
            {
                filters.Add(new QueryFilterTypeListLong { FieldName = propName, FieldValue = ids });
            }
        }
    }
}
