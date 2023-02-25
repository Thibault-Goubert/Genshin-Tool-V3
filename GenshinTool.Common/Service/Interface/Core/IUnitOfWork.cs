using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GenshinTool.Common.Service.Interface.Core;

public interface IUnitOfWork : IDisposable
{
    T GetRepository<T>();
    void Complete();
}
