using GenshinTool.Common.Converters.Json;
using GenshinTool.Common.Models.Core.Model;
using GenshinTool.Common.Models.Enums;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GenshinTool.Common.Models.Domain.Interfaces;

public interface ICharacterModel : IBaseModel
{
    string? Name { get; set; }
    long ElementId { get; set; }
    string Element { get; set; }
    long Rarity { get; set; }
    long WeaponTypeId { get; set; }
    long RegionId { get; set; }
    long SexId { get; set; }
    bool IsCollab { get; set; }
    long WeaponId { get; set; }
}
