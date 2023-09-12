using GenshinTool.Application.Domain.Models;
using GenshinTool.Common.Models.Core.Dom;
using GenshinTool.Common.Models.Core.Model;
using GenshinTool.Common.Models.Domain.Interfaces;
using Mapster;

namespace GenshinTool.Api.Mapping;

public class GenshinToolRegister : IRegister
{
    /// <summary>
    /// Tariff Rest Mapping
    /// </summary>
    /// <param name="config"></param>
    public void Register(TypeAdapterConfig config)
    {
        if (config == null)
        {
            return;
        }

        config.Default.PreserveReference(true);

        config.ForType<BaseDom, IBaseModel>()
            .TwoWays()
            .IncludeAttribute();

        config.ForType<ArtefactDom, IArtefactModel>()
            .TwoWays();

        config.ForType<StatDom, IStatModel>()
            .TwoWays();

        config.ForType<ArtefactPieceDom, IArtefactPieceModel>()
            .TwoWays();

        config.ForType<ArtefactSetDom, IArtefactSetModel>()
            .TwoWays();
    }
}