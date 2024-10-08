import styled from "styled-components";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { ButtonStyled } from "../ButtonStyled";

export const GoBackBtn = styled(ButtonStyled)``;

export const ArrowBack = styled(MdOutlineArrowBackIosNew)`
  font-size: ${({ theme }) => theme.fontSizes.s};
  margin-right: 0.5rem;
`;
