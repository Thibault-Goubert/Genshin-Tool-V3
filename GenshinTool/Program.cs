using GenshinTool.Common.Extensions;
using GenshinTool.Controllers;
using Mapster;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddHttpContextAccessor();

var nameAssembly = typeof(CharacterController).Assembly.GetName().Name;
var basePath = builder.Configuration["BasePath"];
var serverUrl = $"{builder.Configuration["Kestrel:Endpoints:Https:Url"]}{basePath}";

builder.Services.InjectSwaggerGen(
    "v1",
    "1.0",
    "GenshinTool Api",
    "My Genshin resources management tool",
    nameAssembly??"NoName", serverUrl);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.InjectMapster(TypeAdapterConfig.GlobalSettings);
builder.Services.InjectResponseCompression();
builder.Services.AddSwaggerGenNewtonsoftSupport();
builder.Services.AddEndpointsApiExplorer();

var app = builder.Build();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UsePathBase(new PathString(basePath));
app.UseRouting();
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.UseResponseCompression();

app.Run();
