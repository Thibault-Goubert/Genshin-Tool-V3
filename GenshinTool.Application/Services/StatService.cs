using GenshinTool.Application.Domain.Models;
using GenshinTool.Application.Interface.Services;
using GenshinTool.Common.Models.Enums;
using GenshinTool.Common.Service.Concrete;
using GenshinTool.Common.Service.Interface.Core;
using GenshinTool.Infrastructure.Interface.Repositories;

namespace GenshinTool.Application.Services;

public class StatService : BaseService, IStatService
{
    public StatService(IUowFactory uowFactory) : base(uowFactory)
    {
    }

    public IEnumerable<StatNameDom> GetAllNames()
    {
        return MapProperties(() => Execute(unitOfWork => unitOfWork.GetRepository<IStatNameRepository>().GetAll()));
    }

    #region Helpers
    private static IEnumerable<StatNameDom> MapProperties(Func<IEnumerable<StatNameDom>> func)
    {
        var statNames = func.Invoke().ToList();

        statNames.ForEach(x =>
        {
            x.StatType = (StatType)x.StatTypeId;
        });

        return statNames;
    }
    #endregion
}
