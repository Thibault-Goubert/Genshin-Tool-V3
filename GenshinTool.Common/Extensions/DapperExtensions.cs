using Dapper;
using GenshinTool.Common.Base;
using System.Data;

namespace GenshinTool.Common.Extensions
{
    public static class DapperExtensions
    {
        public static async Task<IEnumerable<T>> BulkInsert<T>(
            this IDbConnection connection,
            IEnumerable<T> items,
            string tableName,
            Dictionary<string, Func<T, object>> dataFunc)
        {
            if (!dataFunc.HasAny() || !dataFunc.Keys.HasAny())
            {
                return default;
            }

            var batchSize = Math.Min((int)Math.Ceiling((double)SqlConstants.MaxParameterSize / dataFunc.Keys.Count), SqlConstants.MaxBatchSize);
            var numberOfBatches = (int)Math.Ceiling((double)items.Count() / batchSize);
            var columnNames = dataFunc.Keys;
            var insertSql = $"INSERT INTO {tableName} ({string.Join(", ", columnNames.Select(e => $"[{e}]"))}) OUTPUT Inserted.* VALUES ";
            var sqlToExecute = new List<string>();

            for (var i = 0; i < numberOfBatches; i++)
            {
                var dataToInsert = items.Skip(i * batchSize)
                    .Take(batchSize);
                var valueSql = GetQueries(dataToInsert, dataFunc);

                sqlToExecute.Add($"{insertSql}{string.Join(", ", valueSql)}");
            }

            var result = sqlToExecute.Select(async s => await connection.QueryAsync<T>(s, commandTimeout: int.MaxValue));

            return await Task.FromResult(result.SelectMany(r => r.Result));
        }

        private static IEnumerable<string> GetQueries<T>(
            IEnumerable<T> dataToInsert,
            Dictionary<string, Func<T, object>> dataFunc)
        {
            return dataToInsert.Select(e => $"({string.Join(", ", GetValuesFromDataProperties<T>(e, dataFunc))})");
        }

        private static IEnumerable<object> GetValuesFromDataProperties<T>(T e, Dictionary<string, Func<T, object>> dataFunc)
        {
            return dataFunc.Select(x =>
            {
                var tmp = x.Value.Invoke(e);
                switch (tmp)
                {
                    case string s:
                    case decimal d:
                        return $"'{tmp}'";
                    case DateTime d:
                        return "GETDATE()";
                    case bool b:
                        return ((bool)tmp).GetHashCode().ToString();
                    default:
                        return tmp ?? "NULL";
                }
            });
        }
    }
}
