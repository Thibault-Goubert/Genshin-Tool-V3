using GenshinTool.Common.Models.Domain.Core;
using GenshinTool.Common.Models.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GenshinTool.Common.Service.Interface;

public interface IDatabaseRepository<TDom, TDto> : IRepository<TDom, TDto>
    where TDom : class, IBaseDom
    where TDto : class, IBaseDto, new()
{

}