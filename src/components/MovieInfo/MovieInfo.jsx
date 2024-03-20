import propTypes from "prop-types";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import GoBackButton from "../Button/BackButton/BackButton";
import { fetchMovieTrailer } from "../../services/api";
import Modal from "../Modal/Modal";
import YouTubePlayer from "../YouTubePlayer/YouTubePlayer";
import ButtonWatchTrailer from "../Button/ButtonWatchTrailer/ButtonWatchTrailer";
import {
  MovieInfoSection,
  Image,
  InfoCard,
  InfoCardHeader,
  Title,
  SubTitle,
  DateRelease,
  Date,
  Overview,
  OverviewText,
  Genres,
  GenresText,
  AditionalInformationContainer,
  AditionalText,
  CastReviewsList,
  Item,
  StyledLink,
  ArrowForward,
  BoxButton,
} from "./MovieInfoStyled";

import { Container, StyledContainer } from "../ContainerStyled";

export default function MovieInfo({ movieDetails }) {
  const [trailer, setTrailer] = useState();
  const [showModal, setShowModal] = useState(false);

  const { id, title, genres, poster, overview, releaseDate, vote } =
    movieDetails;

  const toggleModal = async () => {
    try {
      const trailerData = await fetchMovieTrailer(id);
      setTrailer(trailerData);
      setShowModal(!showModal);
    } catch (error) {
      console.log(error);
    }
  };

  const location = useLocation();
  const genresInfo = genres.map((genre) => genre.name).join(",");
  return (
    <>
      {showModal && (
        <Modal onToggle={toggleModal}>
          <YouTubePlayer trailerData={trailer} toggle={showModal} />
        </Modal>
      )}
      <MovieInfoSection>
        <Container>
          <StyledContainer>
            <Image
              src={
                poster
                  ? `https://image.tmdb.org/t/p/w500/${poster}`
                  : "No Image"
              }
              alt={title}
            />
            <InfoCard>
              <InfoCardHeader>
                <Title>{title}</Title>
                <SubTitle>Vote: {vote}</SubTitle>
              </InfoCardHeader>
              <DateRelease>Date release:</DateRelease>
              <Date>{releaseDate}</Date>
              <Overview>Overview:</Overview>
              <OverviewText>{overview}</OverviewText>
              <Genres>Genres:</Genres>
              <GenresText>{genresInfo}</GenresText>
              <BoxButton>
                <GoBackButton location={location} />

                <ButtonWatchTrailer onClick={toggleModal}>
                  Watch trailer &nbsp;
                </ButtonWatchTrailer>
              </BoxButton>
            </InfoCard>
          </StyledContainer>
        </Container>

        <AditionalInformationContainer>
          <AditionalText>Aditional Information</AditionalText>
        </AditionalInformationContainer>

        <Container>
          <StyledContainer>
            <CastReviewsList>
              <Item>
                <StyledLink to="cast" state={location.state}>
                  Cast
                  <ArrowForward />
                </StyledLink>
              </Item>
              <Item>
                <StyledLink to="reviews" state={location.state}>
                  Reviews
                  <ArrowForward />
                </StyledLink>
              </Item>
            </CastReviewsList>
          </StyledContainer>
        </Container>
      </MovieInfoSection>
    </>
  );
}

MovieInfo.propTypes = {
  movieDetails: propTypes.shape({
    title: propTypes.string,
    genres: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.number,
        name: propTypes.string,
      })
    ),
    poster: propTypes.string,
    overview: propTypes.string,
    releaseDate: propTypes.string,
    vote: propTypes.number,
  }),
};
