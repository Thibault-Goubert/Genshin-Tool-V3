using GenshinTool.Common.Models.Core.Dom;
using GenshinTool.Common.Models.Core.Dto;

namespace GenshinTool.Common.Service.Interface.Repo;

public interface IDatabaseRepository<TDom, TDto> : IRepository<TDom, TDto>
    where TDom : class, IBaseDom
    where TDto : class, IBaseDto, new()
{

}