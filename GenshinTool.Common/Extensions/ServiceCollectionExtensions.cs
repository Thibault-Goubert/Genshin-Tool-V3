using GenshinTool.Common.Converters.Json;
using GenshinTool.Common.Rest.Core;
using Mapster;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.ResponseCompression;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;

namespace GenshinTool.Common.Extensions;

public static class ServiceCollectionExtensions
{
    public static void InjectMapster(this IServiceCollection services, TypeAdapterConfig config)
    {
        config.Scan(AppDomain.CurrentDomain.GetAssemblies());
        services.AddSingleton(config);
        services.AddScoped<IBaseMapper, BaseServiceMapper>();
    }

    public static void InjectMemoryCache(this IServiceCollection services)
    {
        services.AddMemoryCache();
    }

    public static void InjectSwaggerGen(this IServiceCollection services, string name, string version, string title,
        string description, string nameAssembly, string serverUrl)
    {
        services.AddSwaggerGen(c =>
        {
            c.SwaggerDoc(name, new OpenApiInfo
            {
                Description = description,
                Title = title,
                Version = version,
            });
            c.AddServer(new OpenApiServer { Url = serverUrl });
            c.DescribeAllParametersInCamelCase();
            c.SchemaFilter<EnumSchemaFilter>();
        });
    }

    public static void InjectResponseCompression(this IServiceCollection services)
    {
        services.AddResponseCompression(x =>
        {
            x.EnableForHttps = true;
            x.Providers.Add<GzipCompressionProvider>();
        });
    }
}
