import axios from "axios";

const getAllMoviesService = async () =>
  await axios("http://www.omdbapi.com/?apikey=b9cb92f7&s=war&type=movie");

const getMovieDetailsService = async (imdbID) =>
  await axios(`http://www.omdbapi.com/?apikey=b9cb92f7&i=${imdbID}`);

const getMoviePosterByIdService = async (imdbID) =>
  await axios(`http://img.omdbapi.com/?apikey=b9cb92f7&i=${imdbID}`);

export {
  getAllMoviesService,
  getMovieDetailsService,
  getMoviePosterByIdService,
};
