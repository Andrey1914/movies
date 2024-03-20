import MoviesList from "../components/MoviesList/MoviesList";
import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../services/api";
import { Mapper } from "../utils/Mapper";

import Hero from "../components/Hero/Hero";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getPopularMovies() {
      try {
        fetchTrendingMovies().then((movies) => {
          const mappedMovies = Mapper(movies.results);
          setMovies(mappedMovies);
        });
      } catch (error) {
        console.log(error);
      }
    }

    getPopularMovies();
  }, []);

  return (
    <>
      <Hero movies={movies} />
      <MoviesList movies={movies} />
    </>
  );
}
