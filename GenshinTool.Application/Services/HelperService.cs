using GenshinTool.Application.Interface.Services;
using GenshinTool.Common.Models.Requests;
using GenshinTool.Common.Service.Concrete;
using GenshinTool.Common.Service.Interface.Core;
using System.Diagnostics;

namespace GenshinTool.Application.Services;

public class HelperService : BaseService, IHelperService
{
    public HelperService(IUowFactory uowFactory) : base(uowFactory)
    {
    }

    public void OpenLinkToBrowser(OpenLinkRequest info)
    {
        var startInfo = new ProcessStartInfo($"{info.Browser}.exe");
        startInfo.UseShellExecute = true;
        startInfo.Arguments = info.Link;
        Process.Start(startInfo);
    }
}
