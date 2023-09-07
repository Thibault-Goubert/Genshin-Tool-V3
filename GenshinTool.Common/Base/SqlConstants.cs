using Microsoft.VisualBasic;

namespace GenshinTool.Common.Base;

public static class SqlConstants
{
    #region Dapper

    public static readonly string BEGIN = "BEGIN ";
    public static readonly string END = "END ";

    public static readonly string IF = "IF ";
    public static readonly string DROP = "DROP ";
    public static readonly string TABLE = "TABLE ";
    public static readonly string ALL_FROM = "* FROM ";
    public static readonly string SELECT = "SELECT ";
    public static readonly string FROM = " FROM ";
    public static readonly string WHERE = " WHERE ";
    public static readonly string AND = " AND ";
    public static readonly string ON = " ON ";
    public static readonly string INNER_JOIN = " INNER JOIN ";
    public static readonly string DELETE_FROM = "DELETE FROM ";
    public static readonly string IN = " IN ";
    public static readonly string SET_NOCOUNT = " SET NOCOUNT ";
    public static readonly string OFF = " OFF ";
    public static readonly string INTO = "* INTO ";
    public static readonly string TMP = " #tmp";
    public static readonly string DISTINCT = " DISTINCT ";
    public static readonly string IS_NOT_NULL = "IS NOT NULL";

    public static string GetDropTmpInstruction()
    {
        return $"{IF} OBJECT_ID(N'tempdb..{Strings.Trim(TMP)}') {IS_NOT_NULL} {BEGIN} {DROP} {TABLE} {TMP} {END};";
    }

    public static readonly int MaxBatchSize = 1000;
    public static readonly int MaxParameterSize = 2000;
    #endregion
}