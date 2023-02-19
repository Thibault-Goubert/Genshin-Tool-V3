using log4net;
using log4net.Util;
using System.Configuration;
using System.Globalization;

namespace GenshinTool.Common.Logger;

public abstract class LogBase : ILogBase
{
    private ILog _log;

    protected LogBase()
    {
        SystemInfo.NullText = string.Empty;
    }

    protected abstract string LoggerName { get; }

    public void Initialize()
    {
        Initialize(LoggerName);
    }

    private void Initialize(string loggerName)
    {
        try
        {
            if (IsLoggerActive(loggerName))
            {
                _log = log4net.LogManager.GetLogger(loggerName);
            }
        }
        catch (ConfigurationErrorsException)
        {
            //In case of error, we don't log
        }
    }

    private bool IsLoggerActive(string loggerName)
    {
        var loggers = ConfigurationHelper.GetConfig("LoggerActive");
        if (!string.IsNullOrEmpty(loggers))
        {
            return loggers.ToLowerInvariant().Contains(loggerName.ToLowerInvariant());
        }

        return false;
    }


    public bool IsLevelDebugActive()
    {
        return IsLoggerActive(LoggerName) && _log?.IsDebugEnabled == true;
    }


    public bool IsLevelErrorActive()
    {
        return IsLoggerActive(LoggerName) && _log?.IsErrorEnabled == true;
    }


    public bool IsLevelFatalActive()
    {
        return IsLoggerActive(LoggerName) && _log?.IsFatalEnabled == true;
    }


    public bool IsLevelInfoActive()
    {
        return IsLoggerActive(LoggerName) && _log != null && _log.IsInfoEnabled;
    }


    public bool IsLevelWarnActive()
    {
        return IsLoggerActive(LoggerName) && _log != null && _log.IsWarnEnabled;
    }

    public void LogDebug(string messages)
    {
        if (_log != null && _log.IsDebugEnabled)
        {
            ThreadPool.QueueUserWorkItem(_ => _log.Debug(messages));
        }
    }

    public void LogError(string message)
    {
        if (_log != null && _log.IsErrorEnabled)
        {
            ThreadPool.QueueUserWorkItem(_ => _log.Error(message));
        }
    }

    public void LogError(Exception exception, string message)
    {
        if (_log != null && _log.IsErrorEnabled)
        {
            ThreadPool.QueueUserWorkItem(_ =>
                 _log.Error(message, exception));
        }
    }

    public void LogError(Exception exception, string message, params object[] parameters)
    {
        if (_log != null && _log.IsErrorEnabled)
        {
            ThreadPool.QueueUserWorkItem(_ =>
                _log.Error(string.Format(CultureInfo.InvariantCulture, message, parameters), exception));
        }
    }

    public void LogFatal(string message)
    {
        if (_log?.IsFatalEnabled == true)
        {
            ThreadPool.QueueUserWorkItem(_ => _log.Fatal(message));
        }
    }

    public void LogFatal(Exception exception, string message, params object[] parameters)
    {
        if (_log?.IsFatalEnabled == true)
        {
            ThreadPool.QueueUserWorkItem(_ =>
                _log.Fatal(string.Format(CultureInfo.InvariantCulture, message, parameters), exception));
        }
    }

    public void LogInfo(string message)
    {
        if (_log?.IsInfoEnabled == true)
        {
            ThreadPool.QueueUserWorkItem(_ => _log.Info(message));
        }
    }

    public void LogDebugFormat(string message, params object[] parameters)
    {
        if (_log?.IsDebugEnabled == true)
        {
            ThreadPool.QueueUserWorkItem(_ => _log.DebugFormat(CultureInfo.InvariantCulture, message, parameters));
        }
    }

    public void LogWarn(string message)
    {
        if (_log?.IsWarnEnabled == true)
        {
            ThreadPool.QueueUserWorkItem(_ => _log.Warn(message));
        }
    }
}
