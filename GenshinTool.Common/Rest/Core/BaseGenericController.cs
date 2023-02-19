using GenshinTool.Common.Configuration;
using GenshinTool.Common.Logger;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using RestSharp;

namespace GenshinTool.Common.Rest.Core
{
    public class BaseGenericController : ControllerBase
    {
        protected IBaseMapper Mapper { get; }

        public BaseGenericController(IBaseMapper mapper, IEnumerable<ILogBase> loggers, IConfiguration configuration)
        {
            Mapper = mapper;
            ConfigurationHelper.SetConfig(configuration);
            loggers.ToList().ForEach(LogHelper.SetLogger);
        }


        protected static IResponseItem<TResult> CreateResponse<TResult>(Func<TResult> function, string message)
        {
            try
            {
                using (new ExecutionWatcher($"Controller {message}"))
                {
                    return new ResponseItem<TResult>
                    {
                        Status = ResponseStatus.Ok,
                        Message = message,
                        Item = function()
                    };
                }
            }
            catch (Exception exc)
            {
                LogHelper.GetLogger<ApplicationLog>().LogError(exc, $"Error occured in CreateResponse {new Context()}");
                return ExceptionResponse<ResponseItem<TResult>>(exc);
            }
        }

        protected IResponseItem<TResult> CreateResponseItem<TResult>(Func<object> func, string message)
            where TResult : class
        {
            try
            {
                using (new ExecutionWatcher($"Controller {message}"))
                {
                    var result = func();
                    var items = Mapper.Map<TResult>(result);

                    return new ResponseItem<TResult>
                    {
                        Status = ResponseStatus.Ok,
                        Message = message,
                        Item = items
                    };
                }
            }
            catch (Exception exc)
            {
                LogHelper.GetLogger<ApplicationLog>().LogError(exc, $"Error occured in CreateResponseItem {new Context()}");
                return ExceptionResponse<ResponseItem<TResult>>(exc);
            }
        }

        protected IResponseItems<TResult> CreateResponseItems<TResult>(Func<IEnumerable<object>> func, string message)
            where TResult : class
        {
            try
            {
                using (new ExecutionWatcher($"Controller {message}"))
                {
                    var result = func();
                    var items = Mapper.Map<IEnumerable<TResult>>(result);

                    var responseItems = new ResponseItems<TResult>
                    {
                        Status = ResponseStatus.Ok,
                        Message = message,
                        Items = items
                    };
                    return responseItems;
                }
            }
            catch (Exception exc)
            {
                LogHelper.GetLogger<ApplicationLog>()
                    .LogError(exc, $"Error occured in CreateResponseItems {new Context()}");
                return ExceptionResponse<ResponseItems<TResult>>(exc);
            }
        }

        private static TResult ExceptionResponse<TResult>(Exception e)
            where TResult : IResponse, new()
        {
            LogHelper.GetLogger<ApplicationLog>()?.LogError(e, $"ExceptionResponse  {new Context()}");

            var messages = e.FromHierarchy(ex => ex.InnerException)
                .Select(ex =>
                {
#if !DEBUG   
                    // If the inner exception is a SqlException then the exception message is replaced with a more generic text
                    // to avoid to show to the end user sensible information such as the SQL Server URL and/or the database name.
                    if (ex is SqlException)
                    {
                        return Messages.GenericSqlExceptionMessage;
                    }
#endif

                    return ex.Message;
                });

            var stackTrace = e.FromHierarchy(ex => ex.InnerException)
                .Select(ex => ex.StackTrace);

            var businessException = e as BusinessException;
            return new TResult
            {
                Exception = e,
                ExceptionType = businessException != null ? businessException.Type : ExceptionType.Technical,
                Message = String.Join(Environment.NewLine, messages),
                StackTrace = String.Join(Environment.NewLine, stackTrace),
                Status = ResponseStatus.Exception
            };
        }
    }
}
