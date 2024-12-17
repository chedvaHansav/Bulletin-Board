using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);


// הוסף שירותי CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin", policy =>
    {
        policy.WithOrigins("http://localhost:4200") // אפשר בקשות מה-URL של Angular
              .AllowAnyHeader() // אפשר כל כותרת
              .AllowAnyMethod(); // אפשר כל שיטה (GET, POST, וכו')
    });
});




// Add services
builder.Services.AddControllers();

var app = builder.Build();

// השתמש ב-CORS
app.UseCors("AllowSpecificOrigin");

// Use controllers
app.MapControllers();

app.Run();