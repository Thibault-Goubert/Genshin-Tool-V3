using GenshinTool.Application.Domain.Models;
using GenshinTool.Common.Models.Requests;
using GenshinTool.Common.Service.Interface.Repo;
using GenshinTool.Infrastructure.Interface.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GenshinTool.Infrastructure.Interface.Repositories;

public interface ICharacterRepository : IRepository<CharacterDom, CharacterDto>
{
    IEnumerable<CharacterDom> GetByRarity(long rarity);
    IEnumerable<CharacterDom> GetByElementId(long elementId);
    IEnumerable<CharacterDom> GetBySexId(long sexId);
    IEnumerable<CharacterDom> GetByWeaponTypeId(long weaponTypeId);
    IEnumerable<CharacterDom> GetByRequest(CharacterRequest req);
}
