using GenshinTool.Application.Services;
using GenshinTool.Common.Service.Concrete;
using GenshinTool.Common.Service.Interface.Core;
using GenshinTool.Common.Service.Interface.Repo;
using GenshinTool.Infrastructure.Sql.Core;

namespace GenshinTool.Api.Extensions;

internal static class CharacterServiceCollectionExtensions
{
    public static void InjectRepositoriesServices(this IServiceCollection services)
    {
        services.AddTransient<IUowFactory, UowFactory>();

        services.Scan(x => x
            .FromAssembliesOf(typeof(GenshinToolSqlRepository<,>))
            .AddClasses(c => c.AssignableTo<IBaseRepository>())
            .AsImplementedInterfaces()
            .AsMatchingInterface()
            .WithTransientLifetime()
            .FromAssembliesOf(typeof(CharacterService))
            .AddClasses(c => c.AssignableTo<IBaseService>())
            .AsImplementedInterfaces()
            .AsMatchingInterface()
            .WithTransientLifetime()
        );
    }
}
