using GenshinTool.Common.Models.Rest.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GenshinTool.Common.Models.Rest.Concretes;

public class ResponseItems<T> : Response, IResponseItems<T>
{
    public IEnumerable<T> Items { get; set; } = Enumerable.Empty<T>();
}