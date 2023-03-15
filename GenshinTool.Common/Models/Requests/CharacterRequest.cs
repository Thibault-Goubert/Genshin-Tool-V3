namespace GenshinTool.Common.Models.Requests;

public class CharacterRequest
{
    public IEnumerable<long>? Rarities { get; set; }
    public IEnumerable<long>? ElementsIds { get; set; }
    public IEnumerable<long>? WeaponsTypesIds { get; set; }
    public IEnumerable<long>? SexIds { get; set; }
}
