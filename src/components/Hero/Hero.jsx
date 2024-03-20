import { HeroStyled, HeroTextWrap, HeroTitle, HeroText } from "./HeroStyled";

export default function Hero({ movies }) {
  let randomMovie = null;
  if (movies.length > 0) {
    const randomIndex = Math.floor(Math.random() * movies.length);

    randomMovie = movies[randomIndex];
  }

  const imgUrl = "https://image.tmdb.org/t/p/original";
  const backgroundImage = randomMovie
    ? `${imgUrl}${randomMovie.backdrop_path}` &&
      `${imgUrl}${randomMovie.poster_path}`
    : "";

  return (
    <section>
      <HeroStyled backgroundImage={backgroundImage}>
        <HeroTextWrap>
          <HeroTitle>You're welcome!</HeroTitle>
          <HeroText>
            Millions of movies, TV shows and people to discover. Explore now.
          </HeroText>
        </HeroTextWrap>
      </HeroStyled>
    </section>
  );
}
