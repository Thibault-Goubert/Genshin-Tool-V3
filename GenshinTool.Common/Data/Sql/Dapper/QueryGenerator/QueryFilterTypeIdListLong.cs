using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GenshinTool.Common.Data.Sql.Dapper.QueryGenerator;

public class QueryFilterTypeIdListLong : QueryFilter<IEnumerable<long>>
{
    public override string FieldName { get; set; } = "Id";
}