using Mapster;
using MapsterMapper;

namespace GenshinTool.Common.Rest.Core;

public class BaseServiceMapper : ServiceMapper, IBaseMapper
{
    public BaseServiceMapper(IServiceProvider serviceProvider, TypeAdapterConfig config) : base(serviceProvider, config)
    {
    }
}