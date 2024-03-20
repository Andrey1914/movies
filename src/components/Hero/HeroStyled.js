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
  padding: 100px;
`;

export const HeroTitle = styled.h1`
  padding-bottom: 24px;
  color: #fff;
  font-weight: 400;
  font-size: 32px;
`;

export const HeroText = styled.p`
  padding-right: 100px;
  color: #fff;
  font-weight: 100;
  font-size: 24px;
`;
