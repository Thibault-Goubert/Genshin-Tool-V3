using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GenshinTool.Common.Data.Sql.Dapper.QueryGenerator;

public interface IQueryChildContext
{
    long? FilterOnParentAggregateKeyId { get; }
    Dictionary<string, IEnumerable<long>> FilterOnChildKeys { get; }
    Type GetChildType();
    Type GetParentType();
    string GetParentKeyPropertyName();
    string GetChildKeyPropertyName();
    string GetPropertyNameToSet();
    bool IsManyLink();
    IQueryChildContext QueryChilderContext { get; set; }
}