import { useState } from "react";

import { getMovieDetailsService } from "../services/movieService";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { useNavigate } from "react-router";

const MovieCard = ({ movie }) => {
  const { imdbID, Poster, Title } = movie;
  const [movieRating, setMovieRating] = useState();

  const navigate = useNavigate();

  async function setMovieRatings() {
    const response = await getMovieDetailsService(imdbID);
    const {
      data: { imdbRating },
      status,
    } = response;

    if (status === 200) {
      setMovieRating(imdbRating);
    }
  }

  setMovieRatings();

  function handleMovieNavigation() {
    navigate(`/movie/${imdbID}`);
  }

  return (
    <div
      className="relative cursor-pointer rounded-lg bg-blue-950 p-2"
      onClick={handleMovieNavigation}
    >
      <img src={Poster} alt={Title} className="h-5/6 w-full rounded-lg" />
      <p className="text-white">{Title}</p>

      <div className="absolute left-3 top-3 flex items-center justify-center rounded-lg bg-gray-600 p-1 text-sm text-orange-500">
        <StarOutlineIcon className="" />
        <p>{movieRating}</p>
      </div>
    </div>
  );
};

export { MovieCard };
