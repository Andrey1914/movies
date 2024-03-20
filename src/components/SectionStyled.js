import styled from "styled-components";

export const HeaderSection = styled.header`
  z-index: 1;
  position: absolute;
  width: 100%;
  padding: 1.5rem 0;

  background: linear-gradient(to bottom, #232424, rgba(89, 89, 116, 0.3));
`;

export const FooterSection = styled.footer`
  padding: 2rem 0;

  background-color: #232424;
`;

export const Section = styled.section`
  padding: 1.5rem 0;
  background-color: var(--bg);

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 2rem 0;
  }
  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 3rem 0;
  }
`;
