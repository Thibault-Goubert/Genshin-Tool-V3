using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GenshinTool.Application.Domain.Models
{
    public class Character : BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
    }
}
