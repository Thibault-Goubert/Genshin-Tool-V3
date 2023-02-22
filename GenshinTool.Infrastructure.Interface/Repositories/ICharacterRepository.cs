using GenshinTool.Application.Domain.Models;
using GenshinTool.Common.Service.Interface;
using GenshinTool.Infrastructure.Interface.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GenshinTool.Infrastructure.Interface.Repositories;

public interface ICharacterRepository : IRepository<CharacterDom, CharacterDto>
{

}
