using System.Data;

namespace GenshinTool.Common.Service.Interface.Context;

public interface IDbContext : IContext
{
    IDbConnection Connection { get; set; }
}