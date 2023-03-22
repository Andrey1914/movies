import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: relative;
  margin: 0 1.5rem;
  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 0 2rem;
  }
  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 0 3.5rem;
  }
  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 0 3.5rem;
  }
`;

export const StyledContainer = styled.div`
  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    gap: 1rem;
  }
  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 0 auto;
    max-width: 80%;
    gap: 2rem;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: calc(100% - 20px);
  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: calc(100% - 30px);
  }
`;
