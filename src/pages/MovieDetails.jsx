import { useParams, Outlet } from "react-router-dom";
import { fetchMovieDetails } from "../services/api";
import { useState, useEffect } from "react";
import MovieInfo from "../components/MovieInfo/MovieInfo";

export default function MovieDetailsPage() {
  const [details, setDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieDetails(movieId).then(
      ({
        original_title,
        genres,
        overview,
        poster_path,
        release_date,
        vote_average,
      }) => {
        const movieDetails = {
          title: original_title,
          genres: genres,
          overview: overview,
          poster: poster_path,
          releaseDate: release_date,
          vote: vote_average,
        };
        return setDetails(movieDetails);
      }
    );
  }, [movieId, setDetails]);

  return (
    <>
      {details && <MovieInfo movieDetails={details} />}
      <Outlet />
    </>
  );
}
