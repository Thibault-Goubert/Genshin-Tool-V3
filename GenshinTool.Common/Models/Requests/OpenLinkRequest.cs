namespace GenshinTool.Common.Models.Requests;

public class OpenLinkRequest
{
    public string? Link { get; set; }
    public string? Browser { get; set; }

    public OpenLinkRequest(string link, string browser)
    {
        Link = link;
        Browser = browser;
    }
}
