import propTypes from "prop-types";
// import { useState } from "react";
import { useLocation } from "react-router-dom";
import GoBackButton from "../Button/BackButton/BackButton";
// import { fetchMovieTrailer } from "../../services/api";
// import Modal from "../Modal/Modal";
// import YouTubePlayer from "../YouTubePlayer/YouTubePlayer";
// import ButtonWatchTrailer from "../Button/ButtonWatchTrailer/ButtonWatchTrailer";
import {
  Image,
  InfoCard,
  InfoCardHeader,
  Title,
  SubTitle,
  //   Genres,
  //   GenresText,
  DateRelease,
  Date,
  Overview,
  OverviewText,
  BoxButton,
} from "../MovieInfo/MovieInfoStyled";

import {
  TVShowsInfoSection,
  Popularity,
  PopularityText,
  Language,
  LanguageText,
} from "./TVShowsInfoStyled";

import { Container, StyledContainer } from "../ContainerStyled";

export default function TVShowsInfo({ tvShowsDetails }) {
  //   const [trailer, setTrailer] = useState();
  //   const [showModal, setShowModal] = useState(false);

  const {
    // id,
    title,
    poster,

    overview,
    releaseDate,
    vote,
    voteCount,
    // mediaType,
    popularity,
    language,
  } = tvShowsDetails;
  console.log("TV Shows Details From TVShowsInfo", tvShowsDetails);

  //   const toggleModal = async () => {
  //     try {
  //       const trailerData = await fetchMovieTrailer(id);
  //       setTrailer(trailerData);
  //       setShowModal(!showModal);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  const location = useLocation();
  //   const genresInfo = genres.map((genre) => genre.name).join(",");
  return (
    <>
      {/* {showModal && (
        <Modal onToggle={toggleModal}>
          <YouTubePlayer trailerData={trailer} toggle={showModal} />
        </Modal>
      )} */}
      <TVShowsInfoSection>
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
                <SubTitle>Vote Count: {voteCount}</SubTitle>
              </InfoCardHeader>
              <DateRelease>Date release:</DateRelease>
              <Date>{releaseDate}</Date>
              <Overview>Overview:</Overview>
              <OverviewText>{overview}</OverviewText>
              {/* <Genres>Genres:</Genres>
              <GenresText>{genres}</GenresText> */}
              {/* <p>Media Type: {mediaType}</p> */}
              <Popularity>Popularity: </Popularity>
              <PopularityText>{popularity}</PopularityText>
              <Language>Language: </Language>
              <LanguageText>{language}</LanguageText>
              <BoxButton>
                <GoBackButton location={location} />

                {/* <ButtonWatchTrailer onClick={toggleModal}>
                  Watch trailer &nbsp;
                </ButtonWatchTrailer> */}
              </BoxButton>
            </InfoCard>
          </StyledContainer>
        </Container>

        {/* <AditionalInformationContainer>
          <AditionalText>Aditional Information</AditionalText>
        </AditionalInformationContainer> */}

        {/* <Container>
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
        </Container> */}
      </TVShowsInfoSection>
    </>
  );
}

TVShowsInfo.propTypes = {
  TVShowsDetails: propTypes.shape({
    title: propTypes.string,
    poster: propTypes.string,
    overview: propTypes.string,
    releaseDate: propTypes.string,
    vote: propTypes.number,
    voteCount: propTypes.number,
    mediaType: propTypes.string,
    popularity: propTypes.number,
    language: propTypes.string,
  }),
};
