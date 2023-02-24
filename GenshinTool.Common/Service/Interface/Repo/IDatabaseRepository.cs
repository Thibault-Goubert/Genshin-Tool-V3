using GenshinTool.Common.Models.Core.Dom;
using GenshinTool.Common.Models.Core.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GenshinTool.Common.Service.Interface.Repo;

public interface IDatabaseRepository<TDom, TDto> : IRepository<TDom, TDto>
    where TDom : class, IBaseDom
    where TDto : class, IBaseDto, new()
{

}