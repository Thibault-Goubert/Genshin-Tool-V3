using System.Data;

namespace GenshinTool.Common.Service.Interface;

public interface IDbContext : IContext
{
    IDbConnection Connection { get; set; }
}