using GenshinTool.Application.Interface.Services;
using GenshinTool.Application.Services;
using GenshinTool.Common.Logger;
using GenshinTool.Common.Models.Domain.Interfaces;
using GenshinTool.Common.Models.Requests;
using GenshinTool.Common.Models.Rest.Interfaces;
using GenshinTool.Common.Rest.Core;
using Microsoft.AspNetCore.Mvc;

namespace GenshinTool.Api.Controllers;

[ApiController]
[Route("[controller]")]
public class HelperController : BaseGenericController
{
    private readonly IHelperService _helperService;

    public HelperController(
        IBaseMapper mapper, 
        IEnumerable<ILogBase> loggers, 
        IConfiguration configuration,
        IHelperService helperService) : base(mapper, loggers, configuration)
    {
        _helperService = helperService;
    }

    /// <summary>
    ///     OpenLink
    /// </summary>
    /// <returns></returns>
    [HttpPost(nameof(OpenLink))]
    public void OpenLink([FromBody] OpenLinkRequest req)
    {
        _helperService.OpenLinkToBrowser(req);
    }
}

