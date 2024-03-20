import PropTypes from "prop-types";
import { YouTubeButton } from "./ButtonWatchTrailerStyled";
import { YouTubeIcon } from "./ButtonWatchTrailerStyled";

export default function ButtonWatchTrailer({ children, onClick }) {
  return (
    <YouTubeButton type="button" onClick={onClick}>
      <YouTubeIcon />
      {children}
    </YouTubeButton>
  );
}

ButtonWatchTrailer.defaultProps = {
  onClick: () => null,
  children: null,
};

ButtonWatchTrailer.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};
