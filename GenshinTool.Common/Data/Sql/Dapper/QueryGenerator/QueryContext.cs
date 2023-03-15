namespace GenshinTool.Common.Data.Sql.Dapper.QueryGenerator;

public class QueryContext : IQueryContext
{
    public IEnumerable<IQueryFilter> ParentAggregateSelectors { get; set; }
}
