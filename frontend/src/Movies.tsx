import { useState, useEffect } from 'react';
import { Movie } from './types/movie';
//This grabs the movies from the api that I set up
function MovieList() {
  const [ListOMovies, setListOMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const rsp = await fetch('https://localhost:4000/Movie');
      const temp = await rsp.json();
      setListOMovies(temp);
    };
    fetchMovies();
  }, []);

  return (
    <>
      <div>
        <h3>Joel Hilton's Movie Collection</h3>
      </div>
      <div className="col-6 mx-auto text-center">
        <table className="table bordered table-striped">
          <thead>
            <tr>
              <th className="col-4">Title</th>
              <th className="col-1">Year</th>
              <th className="col-2">Director</th>
              <th className="col-1">Rating</th>
              <th className="col-1">Category</th>
              <th className="col-1">Edited</th>
            </tr>
          </thead>
          <tbody>
            {ListOMovies.filter((movie) => movie.edited === 'Yes').map((m) => (
              <tr key={m.movieId}>
                <td className="col-4">{m.title}</td>
                <td className="col-1">{m.year}</td>
                <td className="col-2">{m.director}</td>
                <td className="col-1">{m.rating}</td>
                <td className="col-1">{m.category}</td>
                <td className="col-1">{m.edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default MovieList;
