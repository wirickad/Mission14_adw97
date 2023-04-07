using Microsoft.EntityFrameworkCore;

namespace Mission13_adw97.Models
{
    public class MoviesDbContext :DbContext
    {
        public MoviesDbContext (DbContextOptions<MoviesDbContext> options) : base(options)
        {

        }

        public DbSet<Movie> Movies { get; set; }
    }
}
