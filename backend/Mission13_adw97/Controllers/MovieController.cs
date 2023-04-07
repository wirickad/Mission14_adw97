using Microsoft.AspNetCore.Mvc;
using Mission13_adw97.Models;

namespace Mission13_adw97.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MoviesDbContext context;

        public MovieController(MoviesDbContext temp)
        {
            context = temp;
        }
        public IEnumerable<Movie> Get()
        {
            var x = context.Movies.OrderBy(x => x.Title).ToArray();
            return (x);
        }
    }
}
