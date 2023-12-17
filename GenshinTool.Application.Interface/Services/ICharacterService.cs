using GenshinTool.Application.Domain.Models;
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
    CharacterDom GetByNameAndElement(string name, int elementId);
    bool SetIsUsed(string name, int elementId, bool isUsed);
    IEnumerable<CharacterDom> GetUsed();
}
