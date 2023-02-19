using GenshinTool.Common.Logger;

namespace GenshinTool.Common.Watcher;

public class ExecutionWatcher : WatcherBase<PerformanceLog>
{
    public ExecutionWatcher(string method) : base(method) { }

    protected override void WriteLog()
    {
        LogHelper.GetLogger<PerformanceLog>()
            .LogDebugFormat("Execution time of {0} : {1} ms", Method, Elapsed);
    }
}