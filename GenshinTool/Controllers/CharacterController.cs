using GenshinTool.Application.Interface.Services;
using GenshinTool.Common.Logger;
using GenshinTool.Common.Models.Domain.Interfaces;
using GenshinTool.Common.Models.Rest.Interfaces;
using GenshinTool.Common.Rest.Core;
using Microsoft.AspNetCore.Mvc;

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
            () => _characterService.GetAll(),
            $"{nameof(GetAllCharacters)} Success");
    }

    /// <summary>
    ///     Get Characters by element
    /// </summary>
    /// <returns></returns>
    [HttpGet(nameof(GetByElementId) + "/{id:int}")]
    public IResponseItems<ICharacterModel> GetByElementId(long id)
    {
        return CreateResponseItems<ICharacterModel>(
            () => _characterService.GetByElementId(id),
            $"{nameof(GetByElementId)} Success");
    }
}
