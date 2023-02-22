using GenshinTool.Common.Models.Domain.Core;
using GenshinTool.Common.Models.Dto;
using GenshinTool.Common.Rest.Core;

namespace GenshinTool.Common.Service.Interface;

public interface IReadOnlyRepository<TDom, TDto> : IBaseRepository
    where TDom : class, IBaseDom
    where TDto : class, IBaseDto, new()
{
    IBaseMapper Mapper { get; }

    IEnumerable<TDom> GetAll();
    TDom GetById(long id);
}