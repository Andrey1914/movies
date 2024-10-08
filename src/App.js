import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";
import LoaderOval from "./components/Loader/Loader";

import { GlobalStyles } from "./components/GlobalStyles";

const Home = lazy(() => import("./pages/Home"));
const Movies = lazy(() => import("./pages/Movies/Movies"));
const MovieDetails = lazy(() => import("./pages/MovieDetails"));
const CastPage = lazy(() => import("./pages/CastPage"));
const ReviewsPage = lazy(() => import("./pages/RewiewsPage"));
const TVShows = lazy(() => import("./pages/TVShows/TVShowsPage"));
const TVShowsDetails = lazy(() => import("./pages/TVShows/TVShowsDetails"));

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Suspense fullback={<LoaderOval />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="tvshows" element={<TVShows />} />
            <Route path="tvshows/:tvShowsId" element={<TVShowsDetails />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<CastPage />} />
              <Route path="reviews" element={<ReviewsPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
