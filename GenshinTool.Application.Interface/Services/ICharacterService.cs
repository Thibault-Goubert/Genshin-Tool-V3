using GenshinTool.Application.Domain.Models;
using GenshinTool.Common.Service.Interface.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GenshinTool.Application.Interface.Services;

public interface ICharacterService : IBaseService
{
    IEnumerable<CharacterDom> GetAll();
    IEnumerable<CharacterDom> GetByElementId(long elementId);
}
