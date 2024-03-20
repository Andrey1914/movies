import PropTypes from "prop-types";
import ReactPlayer from "react-player/youtube";
import { Title } from "./YouTubePlayerStyled";

export default function YouTubePlayer({ trailerData }) {
  // console.log(trailerData);

  return (
    <>
      {trailerData && trailerData.length !== 0 ? (
        <ReactPlayer
          controls
          height="400px"
          width="640px"
          url={`https://www.youtube.com/embed/${trailerData.results[0].key}`}
        />
      ) : (
        <>
          <Title>Sorry, no trailer for this movie 😢 </Title>
        </>
      )}
    </>
  );
}

YouTubePlayer.propTypes = {
  trailer: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
    })
  ),
};
