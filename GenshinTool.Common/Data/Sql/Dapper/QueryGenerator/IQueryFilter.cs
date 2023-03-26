namespace GenshinTool.Common.Data.Sql.Dapper.QueryGenerator;

public interface IQueryFilter
{
    string FieldName { get; set; }
    object GetValue();
    Type GetValueType();
}