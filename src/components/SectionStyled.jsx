import styled from "styled-components";

export const HeaderSection = styled.header`
  padding: 1.5rem 0;
  background: linear-gradient(45deg, #595974, #232424);
`;

export const FooterSection = styled.footer`
  padding: 1rem 0;
  background: linear-gradient(45deg, #595974, #232424);
`;

export const Section = styled.section`
  padding: 1.5rem 0;
  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 2rem 0;
  }
  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 3rem 0;
  }
`;
