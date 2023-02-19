using GenshinTool.Common.Logger;
using System.Diagnostics;

namespace GenshinTool.Common.Watcher;

public abstract class WatcherBase<T> : IDisposable
    where T : LogBase, new()
{
    protected LogBase Logger { get; set; }
    protected string Method { get; init; }
    protected Stopwatch Watcher { get; init; }

    public long Elapsed => Watcher?.ElapsedMilliseconds ?? 0;

    protected WatcherBase(string method)
    {
        Logger = LogHelper.GetLogger<T>();

        if (Logger != null && Logger.IsLevelDebugActive() && !string.IsNullOrEmpty(method))
        {
            Method = method;
            Watcher = new Stopwatch();
            Watcher.Start();
        }
    }

    public void Dispose()
    {
        Dispose(true);
        GC.SuppressFinalize(this);
    }

    protected abstract void WriteLog();

    protected virtual void Dispose(bool disposing)
    {
        if (disposing)
        {
            if (Watcher == null)
            {
                return;
            }

            Watcher.Stop();
            WriteLog();
        }
    }
}