using GenshinTool.Application.Domain.Models;
using GenshinTool.Application.Interface.Services;
using GenshinTool.Common.Models.Enums;
using GenshinTool.Common.Service.Concrete;
using GenshinTool.Common.Service.Interface.Core;
using GenshinTool.Infrastructure.Interface.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
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
        return Execute(unitOfWork =>
        {
            var characters = unitOfWork.GetRepository<ICharacterRepository>().GetAll().DistinctBy(c => c.Name).ToList();

            characters.ForEach(c => { 
                c.Element = (Element) c.ElementId;
            });

            return characters;
        });
    }

    public IEnumerable<CharacterDom> GetByElementId(long elementId)
    {
        return Execute(unitOfWork => unitOfWork.GetRepository<ICharacterRepository>().GetByElementId(elementId));
    }
}
