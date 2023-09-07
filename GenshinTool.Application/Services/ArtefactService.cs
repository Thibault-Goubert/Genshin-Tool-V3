using GenshinTool.Application.Domain.Models;
using GenshinTool.Application.Interface.Services;
using GenshinTool.Common.Service.Concrete;
using GenshinTool.Common.Service.Interface.Core;
using GenshinTool.Infrastructure.Interface.Repositories;

namespace GenshinTool.Application.Services;

internal class ArtefactService : BaseService, IArtefactService
{
    public ArtefactService(IUowFactory uowFactory) : base(uowFactory)
    {
    }

    public IEnumerable<ArtefactSetDom> GetAllSet()
    {
        return Execute(unitOfWork => unitOfWork.GetRepository<IArtefactSetRepository>().GetAll());
    }
}