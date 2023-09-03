using GenshinTool.Application.Domain.Models;
using GenshinTool.Common.Models.Domain.Interfaces;
using GenshinTool.Common.Models.Requests;
using GenshinTool.Common.Service.Interface.Core;

namespace GenshinTool.Application.Interface.Services;

public interface ICharacterService : IBaseService
{
    IEnumerable<CharacterDom> GetAll(bool allTravelers);
    IEnumerable<CharacterDom> GetByElementId(long elementId);
    IEnumerable<CharacterDom> GetByRarity(long rarity);
    IEnumerable<CharacterDom> GetBySexId(long sexId);
    IEnumerable<CharacterDom> GetByWeaponTypeId(long weaponTypeId);
    IEnumerable<CharacterDom> GetByRequest(CharacterRequest req);
    CharacterDom GetByName(string name);
    CharacterDom GetByNameAndElement(string name);
    bool SetIsUsed(string name, bool isUsed);
    IEnumerable<CharacterDom> GetUsed();
}
