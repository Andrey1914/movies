import styled from "styled-components";
import { MovieInfoSection } from "../MovieInfo/MovieInfoStyled";

export const TVShowsInfoSection = styled(MovieInfoSection)``;

export const Popularity = styled.p`
  color: var(--text);

  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: 0.5rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
`;

export const PopularityText = styled.p`
  color: var(--text);

  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: 0.8rem;
  margin-bottom: 1.5rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }
`;

export const Language = styled(Popularity)``;

export const LanguageText = styled(PopularityText)``;
