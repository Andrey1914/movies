import styled from "styled-components";

export const Card = styled.li`
  max-width: 100%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: ${({ theme }) => theme.radii.normal};
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    box-shadow: var(--shadow);

    transform: scale(0.98);
    cursor: zoom-in;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: calc(100% / 2 - 0.5rem);
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: calc(100% / 3 - 0.67rem);
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: calc(100% / 4 - 0.76rem);
  }
`;

export const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const CardDescription = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem;
  background-color: var(--bg-item);
  border-bottom-left-radius: ${({ theme }) => theme.radii.normal};
  border-bottom-right-radius: ${({ theme }) => theme.radii.normal};
`;

export const Image = styled.img`
  border-top-left-radius: ${({ theme }) => theme.radii.normal};
  border-top-right-radius: ${({ theme }) => theme.radii.normal};
  object-fit: cover;
`;

export const Title = styled.h2`
  color: var(--text);

  font-weight: ${({ theme }) => theme.fontWeights.bold};

  @media all and (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 0.7rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1rem;
  }
`;

export const Vote = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: var(--text);
  margin-left: 1rem;
  flex: none;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 0.6rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 0.8rem;
  }
`;
