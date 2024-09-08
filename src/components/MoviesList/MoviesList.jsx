import propTypes from "prop-types";
import { List } from "./MoviesListStyled";
import MoviesListItem from "../MoviesListItem/MoviesListItem";
import { Section } from "../SectionStyled";
import { Container, StyledContainer } from "../ContainerStyled";
import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../../services/api";
import Pagination from "../Pagination/Pagination";

export default function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchTrendingMovies(currentPage);
      setMovies(data.results);
      setTotalPages(data.total_pages);
    };

    loadMovies();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Section>
      <Container>
        <StyledContainer>
          <List>
            {movies.map(({ id, original_title, poster_path, vote_average }) => {
              return (
                <MoviesListItem
                  key={id}
                  id={id}
                  title={original_title}
                  poster={poster_path}
                  vote={vote_average}
                />
              );
            })}
          </List>
        </StyledContainer>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </Container>
    </Section>
  );
}

MoviesList.propTypes = {
  movies: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.number.isRequired,
      original_title: propTypes.string.isRequired,
      poster_path: propTypes.string.isRequired,
      vote_average: propTypes.number.isRequired,
    })
  ),
};
