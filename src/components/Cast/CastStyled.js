import styled from "styled-components";

export const Line = styled.div`
  width: 100%;
  height: 0.2rem;
  background: linear-gradient(45deg, #57576f, #373838);
`;

export const CastsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 20px;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const Item = styled.li`
  border-radius: ${({ theme }) => theme.radii.small};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
`;

export const ActorContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Photo = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${({ theme }) => theme.radii.normal};
`;

export const ActorNameContainer = styled.div`
  flex-grow: 1;
  padding: 0.6rem;
  border-radius: ${({ theme }) => theme.radii.normal};
  /* background-color: var(--bg-item); */
  background-color: rgba(51, 51, 51, 0.85);

  position: absolute;
  bottom: -10px;
  left: 10px;
  width: calc(100% - 20px);
  z-index: 1;
  text-align: center;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 1rem;
  }
`;

export const ActorName = styled.h3`
  font-size: 0.6rem;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  /* color: var(--text); */
  color: #fff;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1rem;
  }
`;

export const NoInformationText = styled.p`
  border-top: 0.2rem solid #333333;
  background-color: var(--bg);
  color: var(--text);
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 2rem;
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
