using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GenshinTool.Common.Models.Core.Dom;

namespace GenshinTool.Application.Domain.Models
{
    public class CharacterDom : BaseDom
    {
        public string? Name { get; set; }
        public long ElementId { get; set; }
        public long WeaponTypeId { get; set; }
        public long RegionId { get; set; }
        public long RarityId { get; set; }
        public long SexId { get; set; }
        public bool IsCollab { get; set; }
        public long WeaponId { get; set; }
    }
}
