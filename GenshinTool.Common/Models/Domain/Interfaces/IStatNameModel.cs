using GenshinTool.Common.Converters.Json;
using GenshinTool.Common.Models.Core.Model;
using GenshinTool.Common.Models.Domain.Concretes;
using Newtonsoft.Json;

namespace GenshinTool.Common.Models.Domain.Interfaces;

[JsonConverter(typeof(ObjectConverter<IStatNameModel, StatNameModel>))]
public interface IStatNameModel : IBaseModel
{
    string Label { get; set; }
    long StatTypeId { get; set; }
}
