using GenshinTool.Application.Domain.Models;
using GenshinTool.Application.Interface.Services;
using GenshinTool.Common.Logger;
using GenshinTool.Common.Models.Domain.Concretes;
using GenshinTool.Common.Models.Domain.Interfaces;
using GenshinTool.Common.Models.Rest.Interfaces;
using GenshinTool.Common.Rest.Core;
using Microsoft.AspNetCore.Mvc;

namespace GenshinTool.Api.Controllers;

[ApiController]
[Route("[controller]")]
public class ArtefactController : BaseGenericController
{
    private readonly IArtefactService _artefactService;

    public ArtefactController(
        IBaseMapper mapper,
        IEnumerable<ILogBase> loggers,
        IConfiguration configuration,
        IArtefactService artefactService) : base(mapper, loggers, configuration)
    {
        _artefactService = artefactService;
    }

    [HttpGet(nameof(GetAllArtefactSet))]
    public IResponseItems<IArtefactSetModel> GetAllArtefactSet()
    {
        return CreateResponseItems<IArtefactSetModel>(
            () => _artefactService.GetAllSet(),
            $"{nameof(GetAllArtefactSet)} Success");
    }

    [HttpGet(nameof(GetAllArtefactPiece))]
    public IResponseItems<IArtefactPieceModel> GetAllArtefactPiece()
    {
        return CreateResponseItems<IArtefactPieceModel>(
            () => _artefactService.GetAllPiece(),
            $"{nameof(GetAllArtefactPiece)} Success");
    }

    [HttpPost(nameof(InsertArtefact))]
    public IResponseItem<IArtefactModel> InsertArtefact([FromBody] IArtefactModel artefact)
    {
        return CreateResponseItem<IArtefactModel>(
            () => _artefactService.InsertArtefact(Mapper.Map<ArtefactDom>(artefact)),
            $"{nameof(InsertArtefact)} Success");
    }

    [HttpDelete(nameof(DeleteArtefact) + "/{id:int}")]
    public IResponseItem<bool> DeleteArtefact([FromRoute] long id)
    {
        return CreateResponse(
            () => _artefactService.DeleteArtefact(id),
            $"{nameof(DeleteArtefact)} Success");
    }

    [HttpGet(nameof(GetAll))]
    public IResponseItems<IArtefactModel> GetAll()
    {
        return CreateResponseItems<IArtefactModel>(
            () => _artefactService.GetAll(),
            $"{nameof(GetAll)} Success");
    }

    [HttpGet(nameof(GetAllByCharacter) + "/{id:int}")]
    public IResponseItems<IArtefactModel> GetAllByCharacter([FromRoute] int id)
    {
        return CreateResponseItems<IArtefactModel>(
            () => _artefactService.GetAllByCharacter(id),
            $"{nameof(GetAllByCharacter)} Success");
    }

    [HttpGet(nameof(GetAllByPiece) + "/{id:int}")]
    public IResponseItems<IArtefactModel> GetAllByPiece([FromRoute] int id)
    {
        return CreateResponseItems<IArtefactModel>(
            () => _artefactService.GetAllByPiece(id),
            $"{nameof(GetAllByPiece)} Success");
    }

    [HttpPost(nameof(AssociateArtefactToCharacter) + "/{characterId:long}")]
    public IResponseItem<bool> AssociateArtefactToCharacter([FromBody] IArtefactModel artefact, [FromRoute] long characterId)
    {
        return CreateResponse(
            () => _artefactService.AssociateArtefactToCharacter(artefact, characterId),
            $"{nameof(AssociateArtefactToCharacter)} Success");
    }

}

