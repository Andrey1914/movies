import propTypes from "prop-types";
import { List } from "./TVShowsListStyled"; // Создайте стили для списка ТВ-шоу
import TVShowsListItem from "../TVShowsListItem/TVShowsListItem"; // Компонент элемента списка для ТВ-шоу
import { Section } from "../SectionStyled";
import { Container, StyledContainer } from "../ContainerStyled";
import { useState, useEffect } from "react";
import { fetchTrendingTVShows } from "../../services/api"; // Функция для получения трендовых ТВ-шоу
import Pagination from "../Pagination/Pagination";

export default function TVShowsList() {
  const [tvShows, setTVShows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const loadTVShows = async () => {
      const data = await fetchTrendingTVShows(currentPage); // Загружаем данные для текущей страницы
      console.log(data);
      setTVShows(data.results);
      setTotalPages(data.total_pages); // Обновляем количество страниц для пагинации
    };

    loadTVShows();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Section>
      <Container>
        <StyledContainer>
          <List>
            {tvShows.map(
              ({
                id,
                name,
                poster_path,
                overview,
                vote_average,
                media_type,
              }) => (
                <TVShowsListItem
                  key={id}
                  id={id}
                  name={name}
                  poster={poster_path}
                  overview={overview}
                  vote={vote_average}
                  mediaType={media_type}
                />
              )
            )}
          </List>
          {/* <List>
            {tvShows.map(
              ({ id, original_title, poster_path, vote_average }) => {
                return (
                  <TVShowsListItem
                    key={id}
                    id={id}
                    title={original_title} // Используем "original_name" для ТВ-шоу
                    poster={poster_path}
                    vote={vote_average}
                  />
                );
              }
            )}
          </List> */}
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

TVShowsList.propTypes = {
  tvShows: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.number.isRequired,
      name: propTypes.string.isRequired,
      poster_path: propTypes.string.isRequired,
      overview: propTypes.string.isRequired,
      vote_average: propTypes.number.isRequired,
    })
  ),
};
