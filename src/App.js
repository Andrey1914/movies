import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";
import LoaderOval from "./components/Loader/Loader";

import { Global } from "@emotion/react";
import { GlobalStyles } from "./components/GlobalStyles";

const Home = lazy(() => import("./pages/Home"));
const Movies = lazy(() => import("./pages/Movies/Movies"));
const MovieDetails = lazy(() => import("./pages/MovieDetails"));
const CastPage = lazy(() => import("./pages/CastPage"));
const ReviewsPage = lazy(() => import("./pages/RewiewsPage"));

export default function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Suspense fullback={<LoaderOval />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
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
