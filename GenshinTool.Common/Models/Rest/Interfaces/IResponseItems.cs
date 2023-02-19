using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GenshinTool.Common.Models.Rest.Interfaces;

public interface IResponseItems<T> : IResponse
{
    IEnumerable<T> Items { get; set; }
}