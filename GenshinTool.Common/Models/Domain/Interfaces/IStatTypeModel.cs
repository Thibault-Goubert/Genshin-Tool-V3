using GenshinTool.Common.Converters.Json;
using GenshinTool.Common.Models.Core.Model;
using GenshinTool.Common.Models.Domain.Concretes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace GenshinTool.Common.Models.Domain.Interfaces;

[JsonConverter(typeof(ObjectConverter<IStatTypeModel, StatTypeModel>))]
public interface IStatTypeModel : IBaseModel
{
    string Name { get; set; }
}