using GenshinTool.Common.Logger;
using GenshinTool.Common.Rest.Core;
using Microsoft.AspNetCore.Mvc;

namespace GenshinTool.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CharacterController : BaseGenericController
    {
        public CharacterController(IBaseMapper mapper, IEnumerable<ILogBase> loggers, IConfiguration configuration) 
            : base(mapper, loggers, configuration)
        {
        }
    }
}
