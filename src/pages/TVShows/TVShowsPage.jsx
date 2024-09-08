import TVShowsList from "../../components/TVShowsList/TVShowsList";
import { useState, useEffect } from "react";

import { fetchTrendingTVShows } from "../../services/api";
import { MapperTV } from "../../utils/Mapper";

export default function TVShowsPage() {
  const [tvShows, setTVShows] = useState([]);

  useEffect(() => {
    async function getPopularTVShows() {
      try {
        fetchTrendingTVShows().then((tvShows) => {
          const mappedTVShows = MapperTV(tvShows.results);
          setTVShows(mappedTVShows);
        });
      } catch (error) {
        console.log(error);
      }
    }

    getPopularTVShows();
  }, []);

  return (
    <>
      <TVShowsList tvShows={tvShows} />
    </>
  );
}
