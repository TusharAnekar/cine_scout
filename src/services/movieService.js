import axios from "axios";

const getAllMoviesService = async () =>
  await axios("https://www.omdbapi.com/?apikey=b9cb92f7&s=war&type=movie");

const getMovieDetailsService = async (imdbID) =>
  await axios(`https://www.omdbapi.com/?apikey=b9cb92f7&i=${imdbID}`);

const getMoviePosterByIdService = async (imdbID) =>
  await axios(`https://img.omdbapi.com/?apikey=b9cb92f7&i=${imdbID}`);

export {
  getAllMoviesService,
  getMovieDetailsService,
  getMoviePosterByIdService,
};
