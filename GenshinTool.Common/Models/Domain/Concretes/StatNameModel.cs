using GenshinTool.Common.Models.Core.Model;
using GenshinTool.Common.Models.Domain.Interfaces;
using GenshinTool.Common.Models.Enums;

namespace GenshinTool.Common.Models.Domain.Concretes;

public class StatNameModel : BaseModel, IStatNameModel
{
    public string Label { get; set; }
    public long StatTypeId { get; set; }
    public StatType StatType { get; set; }
}
