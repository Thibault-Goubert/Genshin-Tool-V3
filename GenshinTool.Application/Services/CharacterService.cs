using GenshinTool.Application.Domain.Models;
using GenshinTool.Application.Interface.Services;
using GenshinTool.Common.Service.Concrete;
using GenshinTool.Common.Service.Interface.Core;
using GenshinTool.Infrastructure.Interface.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GenshinTool.Application.Services;

public class CharacterService : BaseService, ICharacterService
{
    public CharacterService(IUowFactory uowFactory) : base(uowFactory)
    {
    }

    public IEnumerable<CharacterDom> GetAll()
    {
        return Execute(unitOfWork => unitOfWork.GetRepository<ICharacterRepository>().GetAll());
    }
}
