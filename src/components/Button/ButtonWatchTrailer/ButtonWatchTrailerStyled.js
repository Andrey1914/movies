import styled from "styled-components";
import { FaYoutube } from "react-icons/fa";
import { ButtonStyled } from "../ButtonStyled";

export const YouTubeButton = styled(ButtonStyled)`
  background: red;
`;

export const YouTubeIcon = styled(FaYoutube)`
  font-size: ${({ theme }) => theme.fontSizes.s};
  width: 20px;
  height: 20px;
  margin-right: 0.5rem;
`;
