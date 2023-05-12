
using GenshinTool.Common.Models.Requests;
using GenshinTool.Common.Service.Interface.Core;

namespace GenshinTool.Application.Interface.Services;

public interface IHelperService : IBaseService
{
    void OpenLinkToBrowser(OpenLinkRequest info);
}
