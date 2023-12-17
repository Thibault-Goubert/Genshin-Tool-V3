using GenshinTool.Common.Models.Core.Dom;
using GenshinTool.Common.Models.Enums;
using System.Data;

namespace GenshinTool.Application.Domain.Models
{
    public class StatNameDom : BaseDom
    {
        public string Label { get; set; }
        public long StatTypeId { get; set; }
        public StatType StatType { get; set; }
    }
}
