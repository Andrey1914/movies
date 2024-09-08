import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "a9c60f9b21a095b96ccbe9e4f4d7a273";

export async function fetchMoviesBySearch(query) {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=1`;
  return await axios.get(`${url}`).then((res) => res.data);
}

export async function fetchTrendingMovies(page = 1) {
  const trendingURL = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`;
  return await axios.get(`${trendingURL}`).then((res) => res.data);
}

export async function fetchMovieDetails(movieId) {
  const detailsURL = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  return await axios.get(`${detailsURL}`).then((response) => response.data);
}

export async function fetchMovieCast(movieId) {
  const castURL = `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`;
  return await axios.get(`${castURL}`).then((response) => response.data);
}

export async function fetchMoviesReviews(movieId) {
  const reviewsURL = `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
  return await axios.get(`${reviewsURL}`).then((response) => response.data);
}

export async function fetchMovieTrailer(movieId) {
  const trailerURL = `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`;
  return await axios.get(`${trailerURL}`).then((response) => response.data);
}

// TV

export async function fetchTrendingTVShows(page = 1) {
  const trendingTVURL = `${BASE_URL}/trending/tv/day?api_key=${API_KEY}&page=${page}`;
  return await axios.get(`${trendingTVURL}`).then((res) => res.data);
}

export async function fetchTVShowsDetails(tvShowsId) {
  const tvShowsdetailsURL = `${BASE_URL}/tv/${tvShowsId}?api_key=${API_KEY}&language=en-US`;
  return await axios
    .get(`${tvShowsdetailsURL}`)
    .then((response) => response.data);
}
