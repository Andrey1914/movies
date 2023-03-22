import styled from "styled-components";
import { BsGithub } from "react-icons/bs";

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: ${({ theme }) => theme.color.light};
  font-size: 1rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.fontWeights.thin};
  }
`;

export const Svg = styled(BsGithub)`
  margin-left: 1rem;
  color: ${({ theme }) => theme.color.light};
  width: 1rem;
  height: 1rem;
  transform: scale(1);
  transition: all 250ms;
  :hover,
  :focus {
    color: ${({ theme }) => theme.color.orange};
    opacity: 0.8;
    transform: scale(0.92);
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 2rem;
    height: 2rem;
  }
`;
