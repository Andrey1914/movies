import styled from "styled-components";

export const HeroStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;

  background-image: linear-gradient(180deg, rgba(4, 21, 45, 0) 0%, #04152d 100%),
    url(${(props) => props.backgroundImage});

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.9;
`;

export const HeroTextWrap = styled.div`
  width: 100%;
  background: linear-gradient(
    to right,
    rgba(39, 40, 40, 0.8),
    rgb(44, 44, 53, 0)
  );

  padding: 0 30px;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 100px;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0 300px;
  }
`;

export const HeroTitle = styled.h1`
  padding-bottom: 24px;
  color: #fff;
  font-weight: 400;
  font-size: 32px;
  line-height: 1.5;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 34px;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 42px;
  }
`;

export const HeroText = styled.p`
  padding-right: 100px;
  color: #fff;
  font-weight: 100;
  font-size: 20px;
  line-height: 1.5;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 24px;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 26px;
  }
`;
