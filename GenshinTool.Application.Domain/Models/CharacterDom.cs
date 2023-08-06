using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GenshinTool.Common.Models.Core.Dom;
using GenshinTool.Common.Models.Enums;

namespace GenshinTool.Application.Domain.Models
{
    public class CharacterDom : BaseDom
    {
        public string? Name { get; set; }
        public long ElementId { get; set; }
        public Element Element { get; set; }
        public long Rarity { get; set; }
        public long WeaponTypeId { get; set; }
        public long RegionId { get; set; }
        public Region Region { get; set; }
        public long SexId { get; set; }
        public bool IsCollab { get; set; }
        public long? WeaponId { get; set; }
        public bool IsUsed { get; set; }
    }
}
