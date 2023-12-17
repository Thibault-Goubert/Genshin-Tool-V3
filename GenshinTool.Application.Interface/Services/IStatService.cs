using GenshinTool.Application.Domain.Models;
using GenshinTool.Common.Service.Interface.Core;

namespace GenshinTool.Application.Interface.Services
{
    public interface IStatService : IBaseService
    {
        IEnumerable<StatNameDom> GetAllNames();
    }
}
