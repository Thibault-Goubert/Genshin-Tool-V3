using GenshinTool.Common.Models.Core.Model;
using GenshinTool.Common.Models.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GenshinTool.Common.Models.Domain.Concretes;

public class StatTypeModel : BaseModel, IStatTypeModel
{
    public string Name { get; set; }
}