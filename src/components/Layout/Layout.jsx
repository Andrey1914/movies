// import { useEffect, useState } from "react";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
// import { Hero } from "../Hero/HeroStyled";
// import Hero from "../Hero/Hero";
import MainContent from "../MainContent/MainContent";

// import { fetchTrendingMovies } from "../../services/api";

// import { Mapper } from "../../utils/Mapper";

export default function Layout() {
  // const [trandingMovies, setTrandingMovies] = useState([]);

  // useEffect(() => {
  //   getPopularMovies();

  //   async function getPopularMovies() {
  //     try {
  //       fetchTrendingMovies().then((movies) => {
  //         const trandingMovies = Mapper(movies.results);
  //         setTrandingMovies(trandingMovies);
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // }, []);

  return (
    <>
      <Header />
      {/* <Hero movies={trandingMovies} /> */}
      <MainContent />
      <Footer />
    </>
  );
}
