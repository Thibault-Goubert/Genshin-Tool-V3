using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GenshinTool.Common.Service.Interface.Context;

public interface IApiContext : IContext
{
    public HttpClient Connection { get; set; }
}
