using GenshinTool.Common.Converters.Json;
using GenshinTool.Common.Models.Core.Model;
using GenshinTool.Common.Models.Domain.Concretes;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GenshinTool.Common.Models.Domain.Interfaces;

[JsonConverter(typeof(ObjectConverter<ICharacterModel, CharacterModel>))]
public interface ICharacterModel : IBaseModel
{
    string? Name { get; set; }
    long ElementId { get; set; }
    long WeaponTypeId { get; set; }
    long RegionId { get; set; }
    long RarityId { get; set; }
    long SexId { get; set; }
    bool IsCollab { get; set; }
    long WeaponId { get; set; }
}
