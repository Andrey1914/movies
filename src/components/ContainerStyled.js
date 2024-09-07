import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: relative;
  margin: 0 1.5rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 0 3.5rem;
  }
  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 0 3.5rem;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-bottom: 2rem;
    flex-direction: row;
    gap: 2rem;
  }
  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 0 auto;
    padding-bottom: 3rem;

    max-width: 80%;
    gap: 3rem;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: calc(100% - 40px);
  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: calc(100% - 4rem);
  }
`;
