using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);


// ���� ������ CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin", policy =>
    {
        policy.WithOrigins("http://localhost:4200") // ���� ����� ��-URL �� Angular
              .AllowAnyHeader() // ���� �� �����
              .AllowAnyMethod(); // ���� �� ���� (GET, POST, ���')
    });
});




// Add services
builder.Services.AddControllers();

var app = builder.Build();

// ����� �-CORS
app.UseCors("AllowSpecificOrigin");

// Use controllers
app.MapControllers();

app.Run();