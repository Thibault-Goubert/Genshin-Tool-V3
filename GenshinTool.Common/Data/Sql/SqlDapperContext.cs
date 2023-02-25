using GenshinTool.Common.Configuration;
using GenshinTool.Common.Service.Interface.Context;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace GenshinTool.Common.Data.Sql;

public class SqlDapperContext : IDbContext
{
    private readonly IConfiguration _configuration;

    public SqlDapperContext(IConfiguration configuration)
    {
        _configuration = configuration;
        Connection = new SqlConnection(_configuration.GetConnectionString(Database.GT.ToString()));
        UniqueId = new Guid();
    }

    public Guid UniqueId { get; set; }
    public IDbConnection Connection { get; set; }
}