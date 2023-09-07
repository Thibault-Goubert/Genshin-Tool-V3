using GenshinTool.Application.Domain.Models;
using GenshinTool.Application.Interface.Services;
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
        return Execute(unitOfWork => unitOfWork.GetRepository<IStatNameRepository>().GetAll());
    }
}
