import styled from "styled-components";

export const Line = styled.div`
  width: 100%;
  height: 0.2rem;
  background: linear-gradient(45deg, #57576f, #373838);
`;

export const ReviewsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 1rem;
  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
    flex-direction: row;
  }
`;

export const Item = styled.li`
  border: 1px solid var(--text);
  padding: 1rem;
  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: calc(100% / 2 - 2rem);
  }
`;

export const Author = styled.p`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: var(--text);
  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.1rem;
  }
  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1rem;
  }
`;

export const ReviewContent = styled.span`
  color: var(--text);
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: 0.8rem;
  line-height: 1.5rem;
  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.1rem;
  }
  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1rem;
  }
`;

export const NoReviewText = styled.p`
  background-color: var(--bg);
  height: 100vh;
  border-top: 0.2rem solid #333333;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: var(--text);
  font-size: 1.5rem;
  text-align: center;
  padding: 2rem;
`;
