using GenshinTool.Common.Models.Core.Model;

namespace GenshinTool.Common.Models.Domain.Interfaces;

public interface IStatNameModel : IBaseModel
{
    string Label { get; set; }
    long StatTypeId { get; set; }
}
