import { useEffect, useState } from "react";

import { getAllMovies } from "../services/movieService";
import { MovieCard } from "../components/MovieCard";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [totalMovies, setTotalMovies] = useState();

  async function getMovies() {
    try {
      const response = await getAllMovies();
      const {
        data: { Response, Search, totalResults },
        status,
      } = response;

      if (status === 200 && Response) {
        setMovies(Search);
        setTotalMovies(totalResults);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1 className="mt-6 text-3xl font-semibold text-white">MaileHereko</h1>

      <div className="mt-2 text-sm text-gray-400">
        <p>
          List of movies and TV shows, I{" "}
          <span className="text-violet-500">Tushar Anekar</span> have watched
          till date.
        </p>
        <p>
          Explore what I have watched and also feel free to make a suggestion.😉
        </p>
      </div>

      <input
        type="text"
        placeholder="Search Movies or TV Shows"
        className="mt-2 w-72 rounded-lg border border-gray-400 bg-blue-950 p-3 text-gray-600"
      />

      <div className="mt-8 flex w-fit gap-4 rounded-lg bg-blue-950 px-4 py-2 text-sm">
        <button className="rounded-lg bg-violet-500 px-4 py-1 text-white">
          All
        </button>
        <button className="px-4 py-1 text-gray-400">Movies</button>
        <button className="px-4 py-1 text-gray-400">TV Shows</button>
      </div>

      <p className="mt-4 font-semibold text-gray-400">
        All <span className="text-xs font-normal">({totalMovies})</span>
      </p>

      <div className="grid grid-cols-4 gap-4">
        {movies?.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export { Home };
