using GenshinTool.Common.Models.Core.Dom;
using GenshinTool.Common.Models.Core.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GenshinTool.Common.Service.Interface.Repo;

public interface IRepository<TDom, TDto> : IReadOnlyRepository<TDom, TDto>
    where TDom : class, IBaseDom
    where TDto : class, IBaseDto, new()
{
    TDom Insert(TDom domObject);
    IEnumerable<TDom> Insert(IEnumerable<TDom> domObjects);

    TDom Update(TDom domObject);
    IEnumerable<TDom> Update(IEnumerable<TDom> domObjects);

    void Delete(TDom domObject);
    void Delete(IEnumerable<TDom> domObjects);

    void Delete(long id);
    void Delete(IEnumerable<long> ids);
}
