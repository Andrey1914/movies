import styled from "styled-components";

export const Line = styled.div`
  width: 100%;
  height: 0.2rem;
  background: linear-gradient(45deg, #57576f, #373838);
`;

export const CastsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Item = styled.li`
  width: calc(50% - 0.5rem);
  border-radius: ${({ theme }) => theme.radii.small};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: calc(100% / 3 - 0.67rem);
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: calc(100% / 4 - 0.75rem);
  }
`;

export const ActorContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Photo = styled.img`
  width: 100%;
  height: auto;
  border-top-left-radius: ${({ theme }) => theme.radii.small};
  border-top-right-radius: ${({ theme }) => theme.radii.small};
`;

export const ActorNameContainer = styled.div`
  flex-grow: 1;
  padding: 0.6rem;
  background-color: var(--bg-item);

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 1rem;
  }
`;

export const ActorName = styled.h3`
  font-size: 0.6rem;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: var(--text);

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1rem;
  }
`;

export const NoInformationText = styled.p`
  display: flex;
  justify-content: center;
  padding: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
