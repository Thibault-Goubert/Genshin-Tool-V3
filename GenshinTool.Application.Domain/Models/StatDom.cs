using GenshinTool.Common.Models.Core.Dom;

namespace GenshinTool.Application.Domain.Models
{
    public class StatDom : BaseDom
    {
        public decimal? value { get; set; }
        public StatNameDom? statName { get; set; }
        public long? statNameId { get; set; }
        public bool? isMain { get; set; }
    }
}