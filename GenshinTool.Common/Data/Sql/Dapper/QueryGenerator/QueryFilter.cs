namespace GenshinTool.Common.Data.Sql.Dapper.QueryGenerator;

public class QueryFilter<T> : IQueryFilter
{
    public virtual string FieldName { get; set; }

    public object GetValue()
    {
        return FieldValue;
    }

    public Type GetValueType()
    {
        return typeof(T);
    }

    public T FieldValue { get; set; }
}
