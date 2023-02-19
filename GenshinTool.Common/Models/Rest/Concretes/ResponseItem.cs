using GenshinTool.Common.Models.Rest.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GenshinTool.Common.Models.Rest.Concretes;

public class ResponseItem<T> : Response, IResponseItem<T>
{
    public T Item { get; set; } = default!;
}
