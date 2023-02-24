using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GenshinTool.Common.Service.Interface.Core
{
    public interface IUowFactory
    {
        IUnitOfWork Create(bool useTransactionScope = false);
    }
}
