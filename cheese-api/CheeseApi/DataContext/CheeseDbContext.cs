using CheeseApi.Models;
using Microsoft.EntityFrameworkCore;

namespace CheeseApi.DataContext
{
    public class CheeseDbContext : DbContext
    {
        public CheeseDbContext(DbContextOptions<CheeseDbContext> options)
            : base(options)
        {
        }

        public DbSet<Cheese> Cheeses { get; set; }
    }
}