import propTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import {
  Card,
  CardStyled,
  CardDescription,
  Image,
  Title,
  Vote,
} from "./TVShowsListItemStyled";

export default function TvShowsListItem({ id, name, poster, vote, mediaType }) {
  const location = useLocation();
  return (
    <Card>
      <Link
        to={`/tvshows/${id}`}
        state={{ from: location.pathname + location.search }}
      >
        <CardStyled>
          <Image
            src={
              poster ? `https://image.tmdb.org/t/p/w500/${poster}` : "No Poster"
            }
            alt={name}
          />
          <CardDescription>
            <Title>{name ? name : "No title"}</Title>
            <Vote>Vote: {vote || "No vote available"}</Vote>
            <Vote>Media Type: {mediaType || "No media type available"}</Vote>
          </CardDescription>
        </CardStyled>
      </Link>
    </Card>
  );
}

TvShowsListItem.propTypes = {
  id: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
  vote: propTypes.number.isRequired,
};
