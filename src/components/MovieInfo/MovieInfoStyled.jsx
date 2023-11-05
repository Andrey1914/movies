import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { MdOutlineArrowForwardIos } from "react-icons/md";

export const Image = styled.img`
  margin-bottom: 1rem;
  border-radius: ${({ theme }) => theme.radii.normal};

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: calc(50% - 1rem);
  }
`;

export const InfoCard = styled.div`
  margin-bottom: 1rem;
`;

export const InfoCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const Title = styled.h2`
  color: var(--text);

  font-size: 0.8rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.5rem;
  }
`;

export const SubTitle = styled.h3`
  color: var(--text);

  font-size: 0.6rem;
  font-weight: ${({ theme }) => theme.fontWeights.normal};

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.1rem;
  }
`;

export const DateRelease = styled.p`
  color: var(--text);

  font-size: 0.6rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: 0.5rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
`;

export const Date = styled.p`
  color: var(--text);

  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: 0.6rem;
  margin-bottom: 0.5rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
`;

export const Overview = styled.p`
  color: var(--text);

  font-size: 0.6rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: 0.5rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
`;

export const OverviewText = styled.p`
  color: var(--text);

  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: 0.6rem;
  margin-bottom: 0.5rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
`;

export const Genres = styled.p`
  color: var(--text);

  font-size: 0.6rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: 0.5rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
`;

export const GenresText = styled.p`
  color: var(--text);

  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: 0.6rem;
  margin-bottom: 1.5rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }
`;

export const BoxButton = styled.div``;

export const AditionalInformationContainer = styled.div`
  background: linear-gradient(45deg, #42425d, #232424);
  padding: 1rem 2rem;
  margin-bottom: 1.5rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 1.5rem 2.5rem;
    margin-bottom: 2rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 1.5rem 8rem;
    margin-bottom: 3rem;
  }
`;

export const AditionalText = styled.p`
  color: ${({ theme }) => theme.color.light};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.thin};

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.8rem;
  }
`;

export const CastReviewsList = styled.ul`
  color: var(--text);

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 1.2rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: 1rem;
  }
`;

export const Item = styled.li`
  align-items: center;
  transition: all 250ms;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: var(--text);

  font-size: 0.6rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  transform: scale(1);
  transition: transform 250ms ease-in-out;

  :hover,
  :focus {
    color: ${({ theme }) => theme.color.link};
    transform: scale(1.02);
    opacity: 0.8;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.1rem;
  }
`;

export const ArrowForward = styled(MdOutlineArrowForwardIos)`
  margin-left: 8px;
  height: 0.5rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-left: 0.5rem;
    height: 1rem;
  }
`;
