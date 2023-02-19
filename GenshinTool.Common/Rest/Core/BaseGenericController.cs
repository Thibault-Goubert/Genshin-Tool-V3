using GenshinTool.Common.Configuration;
using GenshinTool.Common.Extensions;
using GenshinTool.Common.Logger;
using GenshinTool.Common.Models.Enums;
using GenshinTool.Common.Models.Rest.Concretes;
using GenshinTool.Common.Models.Rest.Interfaces;
using GenshinTool.Common.Watcher;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

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
            LogHelper.GetLogger<ApplicationLog>()?.LogError(e, $"ExceptionResponse {new Context()}");

            var messages = e.FromHierarchy(ex => ex.InnerException).Select(ex => ex.Message);

            var stackTrace = e.FromHierarchy(ex => ex.InnerException).Select(ex => ex.StackTrace);

            return new TResult
            {
                Exception = e,
                Message = string.Join(Environment.NewLine, messages),
                StackTrace = string.Join(Environment.NewLine, stackTrace),
                Status = ResponseStatus.Exception
            };
        }
    }
}
