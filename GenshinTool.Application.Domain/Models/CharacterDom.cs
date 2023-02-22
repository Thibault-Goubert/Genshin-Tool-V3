using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GenshinTool.Application.Domain.Models.Base;

namespace GenshinTool.Application.Domain.Models
{
    public class CharacterDom : BaseDom
    {
        public string Name { get; set; }
        public string Description { get; set; }
    }
}
