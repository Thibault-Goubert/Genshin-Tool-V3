using GenshinTool.Application.Interface.Services;
using GenshinTool.Common.Logger;
using GenshinTool.Common.Models.Domain.Interfaces;
using GenshinTool.Common.Models.Rest.Interfaces;
using GenshinTool.Common.Rest.Core;
using Microsoft.AspNetCore.Mvc;

namespace GenshinTool.Api.Controllers;

[ApiController]
[Route("[controller]")]
public class StatController : BaseGenericController
{
    private readonly IStatService _statService;

    public StatController(
        IBaseMapper mapper,
        IEnumerable<ILogBase> loggers,
        IConfiguration configuration,
        IStatService statService) : base(mapper, loggers, configuration)
    {
        _statService = statService;
    }

    /// <summary>
    ///     Get All Stat Name
    /// </summary>
    /// <returns></returns>
    [HttpGet(nameof(GetAllNames))]
    public IResponseItems<IStatNameModel> GetAllNames()
    {
        return CreateResponseItems<IStatNameModel>(
            () => _statService.GetAllNames(),
            $"{nameof(GetAllNames)} Success");
    }
}
