using GenshinTool.Application.Interface.Services;
using GenshinTool.Common.Logger;
using GenshinTool.Common.Models.Domain.Interfaces;
using GenshinTool.Common.Models.Requests;
using GenshinTool.Common.Models.Rest.Interfaces;
using GenshinTool.Common.Rest.Core;
using Microsoft.AspNetCore.Mvc;
using System.Reflection;

namespace GenshinTool.Controllers;

[ApiController]
[Route("[controller]")]
public class CharacterController : BaseGenericController
{
    private readonly ICharacterService _characterService;

    public CharacterController(
        IBaseMapper mapper, 
        IEnumerable<ILogBase> loggers, 
        IConfiguration configuration, 
        ICharacterService characterService) : base(mapper, loggers, configuration)
    {
        _characterService = characterService;
    }

    /// <summary>
    ///     Get All Characters
    /// </summary>
    /// <returns></returns>
    [HttpGet(nameof(GetAllCharacters))]
    public IResponseItems<ICharacterModel> GetAllCharacters()
    {
        return CreateResponseItems<ICharacterModel>(
            () => _characterService.GetAll(false),
            $"{nameof(GetAllCharacters)} Success");
    }

    /// <summary>
    ///     Get All Characters
    /// </summary>
    /// <returns></returns>
    [HttpGet(nameof(GetAllCharacters)+ "/{allTravelers}")]
    public IResponseItems<ICharacterModel> GetAllCharacters([FromRoute] bool allTravelers)
    {
        return CreateResponseItems<ICharacterModel>(
            () => _characterService.GetAll(allTravelers),
            $"{nameof(GetAllCharacters)} Success");
    }

    /// <summary>
    ///     Get Characters by Rarity
    /// </summary>
    /// <returns></returns>
    [HttpGet(nameof(GetByRarity) + "/{rarity:int}")]
    public IResponseItems<ICharacterModel> GetByRarity([FromRoute] long rarity)
    {
        return CreateResponseItems<ICharacterModel>(
            () => _characterService.GetByRarity(rarity),
            $"{nameof(GetByRarity)} Success");
    }

    /// <summary>
    ///     Get Characters by ElementId
    /// </summary>
    /// <returns></returns>
    [HttpGet(nameof(GetByElementId) + "/{elementId:int}")]
    public IResponseItems<ICharacterModel> GetByElementId([FromRoute] long elementId)
    {
        return CreateResponseItems<ICharacterModel>(
            () => _characterService.GetByElementId(elementId),
            $"{nameof(GetByElementId)} Success");
    }

    /// <summary>
    ///     Get Characters by WeaponTypeId
    /// </summary>
    /// <returns></returns>
    [HttpGet(nameof(GetByWeaponTypeId) + "/{weaponTypeId:int}")]
    public IResponseItems<ICharacterModel> GetByWeaponTypeId([FromRoute] long weaponTypeId)
    {
        return CreateResponseItems<ICharacterModel>(
            () => _characterService.GetByWeaponTypeId(weaponTypeId),
            $"{nameof(GetByWeaponTypeId)} Success");
    }

    /// <summary>
    ///     Get Characters by SexId
    /// </summary>
    /// <returns></returns>
    [HttpGet(nameof(GetBySexId) + "/{sexId:int}")]
    public IResponseItems<ICharacterModel> GetBySexId([FromRoute] long sexId)
    {
        return CreateResponseItems<ICharacterModel>(
            () => _characterService.GetBySexId(sexId),
            $"{nameof(GetBySexId)} Success");
    }

    /// <summary>
    ///     Get Characters by Request
    /// </summary>
    /// <returns></returns>
    [HttpPost(nameof(GetByRequest))]
    public IResponseItems<ICharacterModel> GetByRequest([FromBody] CharacterRequest req)
    {
        return CreateResponseItems<ICharacterModel>(
            () => _characterService.GetByRequest(req),
            $"{nameof(GetByRequest)} Success");
    }

    /// <summary>
    ///     Update Characters IsUsed
    /// </summary>
    /// <returns></returns>
    [HttpPatch(nameof(SetIsUsed) + "/{name}/{elementId}/{isUsed}")]
    public IResponseItem<bool> SetIsUsed([FromRoute] string name, int elementId, bool isUsed)
    {
        return CreateResponse(
            () => _characterService.SetIsUsed(name, elementId, isUsed),
            $"{nameof(SetIsUsed)} Success");
    }

    /// <summary>
    ///     Get Characters Used
    /// </summary>
    /// <returns></returns>
    [HttpGet(nameof(GetUsed))]
    public IResponseItems<ICharacterModel> GetUsed()
    {
        return CreateResponseItems<ICharacterModel>(
            () => _characterService.GetUsed(),
            $"{nameof(GetUsed)} Success");
    }
}
