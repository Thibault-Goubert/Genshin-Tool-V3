using GenshinTool.Common.Models.Core.Dto;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GenshinTool.Infrastructure.Interface.Dto;

[Table("dbo.StatTypes")]
public class StatTypeDto : BaseDto
{
    [Required]public string Name { get; set; }
}