import { useParams } from "react-router";

import {
  getMovieDetailsService,
  getMoviePosterByIdService,
} from "../services/movieService";
import { useEffect, useState } from "react";

import StarOutlineIcon from "@mui/icons-material/StarOutline";

const MovieDetails = () => {
  const { imdbID } = useParams();

  const [movieDetails, setMovieDetails] = useState({});

  const { Genre, Plot, Poster, Released, Runtime, Title, Type, imdbRating } =
    movieDetails;

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const response = await getMovieDetailsService(imdbID);
        const { data, status } = response;

        if (status === 200) {
          setMovieDetails(data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    async function getMoviePoster() {
      try {
        const response = await getMoviePosterByIdService(imdbID);
        const { data, status } = response;
        if (status === 200) {
          console.log(data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    getMovieDetails();
    getMoviePoster();
  }, [imdbID]);

  return (
    <div className="mt-4">
      <div className="relative">
        <img src={Poster} alt={Title} className="h-64 w-full rounded-xl" />
        <div className="absolute -bottom-12 left-6 w-72 rounded-xl bg-blue-950 p-4">
          <p className="text-gray-500">MaileHeroko / Movie</p>
          <p className="text-xl font-semibold text-white">{Title}</p>
        </div>
      </div>

      <div className="mt-24 flex h-[500px] gap-6 p-4">
        <img src={Poster} alt={Title} className="h-full w-1/2 rounded-xl" />

        <div className="flex w-1/2 flex-col gap-4">
          <p className="text-lg font-semibold text-white">{Title}</p>
          <p className="text-gray-500">{Plot}</p>

          <div className="flex w-fit items-center justify-center rounded-lg bg-black p-1 text-sm text-orange-500">
            <StarOutlineIcon />
            <p>{imdbRating}</p>
          </div>

          <div>
            <p className="text-gray-500">Type</p>
            <p className="text-white first-letter:uppercase">{Type}</p>
          </div>

          <div>
            <p className="text-gray-500">Release Date</p>
            <p className="text-white">{Released}</p>
          </div>

          <div>
            <p className="text-gray-500">Run time</p>
            <p className="text-white">{Runtime}</p>
          </div>

          <div className="text-gray-500">
            <p>Genres</p>
            <p className="text-white">{Genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { MovieDetails };
