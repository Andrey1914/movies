import MoviesList from "../components/MoviesList/MoviesList";
import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../services/api";
import { Mapper } from "../utils/Mapper";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then((movies) => {
      const mappedMovies = Mapper(movies.results);
      setMovies(mappedMovies);
    });
  }, []);
  return movies && <MoviesList movies={movies} />;
}
