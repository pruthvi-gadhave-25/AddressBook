
using AddressBook.DAL;
using AddressBook.DAL.Interface;
using AddressBook.Services;
using AddressBook.Services.Interface;

namespace AddressBook
{
    public class Program
    {
        public static void Main(string[] args)
        {
            try
            {
                
                var builder = WebApplication.CreateBuilder(args);
                var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
                var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
                if (string.IsNullOrWhiteSpace(connectionString))
                {
                    throw new InvalidOperationException("Connection string 'DefaultConnection' is not configured.");
                }

                

                // adding cors 

                builder.Services.AddCors(options =>
                {
                    options.AddPolicy(name: MyAllowSpecificOrigins,
                                      policy =>
                                      {
                                          policy.WithOrigins("http://localhost:3000/");
                                      });
                });
                //builder.Configuration.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);

                //Add scoped to tell that for dependency injection register 
                builder.Services.AddScoped<IEmployeeService, EmployeeService>();

                builder.Services.AddScoped<IEmployeedal>(provider => new EmployeeDAL(connectionString));


                // Add services to the container.

                builder.Services.AddControllers();
                // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
                builder.Services.AddEndpointsApiExplorer();
                builder.Services.AddSwaggerGen();

                var app = builder.Build();

                // Configure the HTTP request pipeline.
                if (app.Environment.IsDevelopment())
                {
                    app.UseSwagger();
                    app.UseSwaggerUI();
                }

                app.UseCors(builder => builder
                        .AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                );
                app.UseHttpsRedirection();

                app.UseAuthorization();


                app.MapControllers();

                app.Run();
            }
            catch (Exception ex) {
                Console.WriteLine($"An error occurred: {ex.Message}");
                throw;
            }

        }
    }
}
