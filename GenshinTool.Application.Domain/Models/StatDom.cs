using GenshinTool.Common.Models.Core.Dom;

namespace GenshinTool.Application.Domain.Models
{
    public class StatDom : BaseDom
    {
        public decimal Value { get; set; }
        public StatNameDom StatName { get; set; }
        public long StatNameId { get; set; }
        public bool IsMain { get; set; }
        public long AssociationId { get; set; }
    }
}