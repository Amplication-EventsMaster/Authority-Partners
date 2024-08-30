using CustomerService.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;

namespace CustomerService.Infrastructure;

public class CustomerServiceDbContext : DbContext
{
    public CustomerServiceDbContext(DbContextOptions<CustomerServiceDbContext> options)
        : base(options) { }

    public DbSet<CustomerDbModel> Customers { get; set; }
}
