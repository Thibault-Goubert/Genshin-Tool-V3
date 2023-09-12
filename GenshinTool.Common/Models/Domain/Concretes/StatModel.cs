using GenshinTool.Common.Models.Core.Model;
using GenshinTool.Common.Models.Domain.Interfaces;

namespace GenshinTool.Common.Models.Domain.Concretes;

public class StatModel : BaseModel, IStatModel
{
    public decimal Value { get; set; }
    public long StatNameId { get; set; }
    public StatNameModel StatName { get; set; }
    public bool IsMain { get; set; }
}