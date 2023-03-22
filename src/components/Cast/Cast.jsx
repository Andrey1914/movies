import propTypes from "prop-types";
import placeholder from "../../default-pic/dog-placeholder.webp";
import {
  Line,
  CastsList,
  Item,
  ActorContainer,
  Photo,
  ActorName,
  ActorNameContainer,
} from "./CastStyled";
import { Section } from "../SectionStyled";
import { Container, StyledContainer } from "../ContainerStyled";

export default function Cast({ cast }) {
  return (
    <>
      <Line />
      <Section>
        <Container>
          <StyledContainer>
            <CastsList>
              {cast.map(({ id, name, photo }) => (
                <Item key={id}>
                  <ActorContainer>
                    {photo ? (
                      <Photo
                        src={`https://image.tmdb.org/t/p/w300/${photo}`}
                        alt={name}
                      />
                    ) : (
                      <Photo src={placeholder} alt={name} width="100%" />
                    )}
                    <ActorNameContainer>
                      <ActorName>{name}</ActorName>
                    </ActorNameContainer>
                  </ActorContainer>
                </Item>
              ))}
            </CastsList>
          </StyledContainer>
        </Container>
      </Section>
    </>
  );
}

Cast.propTypes = {
  cast: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      name: propTypes.string,
      photo: propTypes.string,
    })
  ).isRequired,
};
