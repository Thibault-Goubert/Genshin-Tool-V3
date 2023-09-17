using GenshinTool.Common.Models.Core.Model;
using GenshinTool.Common.Models.Domain.Interfaces;

namespace GenshinTool.Common.Models.Domain.Concretes;

public class StatNameModel : BaseModel, IStatNameModel
{
    public string Label { get; set; }
    public long StatTypeId { get; set; }
}
