using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GenshinTool.Common.Models.Rest.Interfaces;

public interface IResponseItem<T> : IResponse
{
    T Item { get; set; }
}
