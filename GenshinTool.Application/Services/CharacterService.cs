﻿using GenshinTool.Application.Domain.Models;
using GenshinTool.Application.Interface.Services;
using GenshinTool.Common.Models.Enums;
using GenshinTool.Common.Models.Requests;
using GenshinTool.Common.Service.Concrete;
using GenshinTool.Common.Service.Interface.Core;
using GenshinTool.Infrastructure.Interface.Repositories;

namespace GenshinTool.Application.Services;

public class CharacterService : BaseService, ICharacterService
{
    public CharacterService(IUowFactory uowFactory) : base(uowFactory)
    {
    }

    public IEnumerable<CharacterDom> GetAll(bool allTravelers)
    {
        var chars = MapProperties(() => Execute(unitOfWork => unitOfWork.GetRepository<ICharacterRepository>().GetAll()));
        return allTravelers ? chars : chars.DistinctBy(c => c.Name);
    }

    public IEnumerable<CharacterDom> GetByRequest(CharacterRequest req)
    {
        return MapProperties(() => Execute(unitOfWork => unitOfWork.GetRepository<ICharacterRepository>().GetByRequest(req)));
    }

    public CharacterDom GetByNameAndElement(string name, int elementId)
    {
        return Execute(unitOfWork => unitOfWork.GetRepository<ICharacterRepository>().GetByNameAndElement(name, elementId));
    }

    public IEnumerable<CharacterDom> GetUsed()
    {
        return Execute(unitOfWork => unitOfWork.GetRepository<ICharacterRepository>().GetUsed());
    }

    public bool SetIsUsed(string name, int elementId, bool isUsed) {
        return Execute(unitOfWork => {
            var repo = unitOfWork.GetRepository<ICharacterRepository>();

            var character = repo.GetByNameAndElement(name, elementId);

            if(character is null)
            {
                return false;
            }

            character.IsUsed = isUsed;
            repo.Update(character);
            return true;
        });
    }

    #region Helpers
    private static IEnumerable<CharacterDom> MapProperties(Func<IEnumerable<CharacterDom>> func)
    {
        var chars = func.Invoke().ToList();

        chars.ForEach(c =>
        {
            c.Element = (Element)c.ElementId;
            c.Region = (Region)c.RegionId;
        });

        return chars;
    }
    #endregion

    #region Unused
    public IEnumerable<CharacterDom> GetByRarity(long rarity)
    {
        return Execute(unitOfWork => unitOfWork.GetRepository<ICharacterRepository>().GetByRarity(rarity));
    }

    public IEnumerable<CharacterDom> GetByElementId(long elementId)
    {
        return Execute(unitOfWork => unitOfWork.GetRepository<ICharacterRepository>().GetByElementId(elementId));
    }

    public IEnumerable<CharacterDom> GetBySexId(long sexId)
    {
        return Execute(unitOfWork => unitOfWork.GetRepository<ICharacterRepository>().GetBySexId(sexId));
    }

    public IEnumerable<CharacterDom> GetByWeaponTypeId(long weaponTypeId)
    {
        return Execute(unitOfWork => unitOfWork.GetRepository<ICharacterRepository>().GetByWeaponTypeId(weaponTypeId));
    }
    #endregion
}
