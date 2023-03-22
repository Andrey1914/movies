import propTypes from "prop-types";
import {
  Line,
  ReviewsList,
  Item,
  Author,
  ReviewContent,
} from "./ReviewsStyled";
import { Section } from "../SectionStyled";
import { Container, StyledContainer } from "../ContainerStyled";

export default function Reviews({ reviews }) {
  return (
    <>
      <Line />
      <Section>
        <Container>
          <StyledContainer>
            <ReviewsList>
              {reviews.map(({ author, review, id }) => (
                <Item key={id}>
                  <Author>
                    {author}: <ReviewContent>"{review}"</ReviewContent>
                  </Author>
                </Item>
              ))}
            </ReviewsList>
          </StyledContainer>
        </Container>
      </Section>
    </>
  );
}

Reviews.propTypes = {
  reviews: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      author: propTypes.string,
      review: propTypes.string,
    })
  ).isRequired,
};
