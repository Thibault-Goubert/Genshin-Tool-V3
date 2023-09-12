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

    /// <summary>
    ///     Get All Artefact Set
    /// </summary>
    /// <returns></returns>
    [HttpGet(nameof(GetAllArtefactSet))]
    public IResponseItems<IArtefactSetModel> GetAllArtefactSet()
    {
        return CreateResponseItems<IArtefactSetModel>(
            () => _artefactService.GetAllSet(),
            $"{nameof(GetAllArtefactSet)} Success");
    }

    /// <summary>
    ///     Get All Artefact Piece
    /// </summary>
    /// <returns></returns>
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
        var test = artefact;
        return CreateResponseItem<IArtefactModel>(
            () => _artefactService.InsertArtefact(Mapper.Map<ArtefactDom>(artefact)),
            $"{nameof(InsertArtefact)} Success");
    }
}

