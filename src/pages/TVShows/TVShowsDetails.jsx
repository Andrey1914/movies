import { useParams, Outlet } from "react-router-dom";
import { fetchTVShowsDetails } from "../../services/api";
import { useState, useEffect } from "react";
import TVShowsInfo from "../../components/TVShowsInfo/TVShowsInfo";

export default function TVShowsDetailsPage() {
  const [details, setDetails] = useState(null);
  const { tvShowsId } = useParams();

  useEffect(() => {
    fetchTVShowsDetails(tvShowsId).then(
      ({
        id,
        name,
        overview,
        poster_path,
        vote_average,
        vote_count,
        first_air_date,
        popularity,
        original_language,
        // media_type,
      }) => {
        const tvShowsDetails = {
          id: id,
          title: name,
          overview: overview,
          poster: poster_path,
          vote: vote_average,
          voteCount: vote_count,
          releaseDate: first_air_date,
          popularity: popularity,
          language: original_language,
          //   mediaType: media_type,
        };
        console.log("TV Shows Details", tvShowsDetails);
        return setDetails(tvShowsDetails);
      }
    );
  }, [tvShowsId, setDetails]);

  return (
    <>
      {details && <TVShowsInfo tvShowsDetails={details} />}
      <Outlet />
    </>
  );
}
