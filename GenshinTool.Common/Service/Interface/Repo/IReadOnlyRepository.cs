using GenshinTool.Common.Models.Core.Dom;
using GenshinTool.Common.Models.Core.Dto;
using GenshinTool.Common.Rest.Core;

namespace GenshinTool.Common.Service.Interface.Repo;

public interface IReadOnlyRepository<TDom, TDto> : IBaseRepository
    where TDom : class, IBaseDom
    where TDto : class, IBaseDto, new()
{
    IBaseMapper Mapper { get; }

    IEnumerable<TDom> GetAll();
    TDom GetById(long id);
}