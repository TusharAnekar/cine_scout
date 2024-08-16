import axios from "axios";

const getAllMovies = async () =>
  await axios("http://www.omdbapi.com/?apikey=b9cb92f7&s=war&type=movie");

const getMovieDetails = async (imdbID) =>
  await axios(`http://www.omdbapi.com/?apikey=b9cb92f7&i=${imdbID}`);

export { getAllMovies, getMovieDetails };
