using Microsoft.OpenApi.Any;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace GenshinTool.Common.Converters.Json;

public class EnumSchemaFilter : ISchemaFilter
{
    public void Apply(OpenApiSchema schema, SchemaFilterContext context)
    {
        if (context.Type.IsEnum)
        {
            schema.Enum.Clear();
            Enum.GetNames(context.Type)
                .ToList()
                .ForEach(n => schema.Enum.Add(new OpenApiString(n)));
        }
    }
}
