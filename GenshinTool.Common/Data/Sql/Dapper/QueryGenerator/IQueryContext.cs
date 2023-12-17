namespace GenshinTool.Common.Data.Sql.Dapper.QueryGenerator;

public interface IQueryContext
{
    IEnumerable<IQueryFilter> ParentAggregateSelectors { get; set; }
    IEnumerable<IQueryChildContext> ChildAggregateSelectors { get; set; }
}
