import styled from "styled-components";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";

export const SwitchThemeBox = styled.div`
  position: relative;
  left: 4rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    left: 6rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    left: 10rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    left: 59rem;
  }
`;

export const SwitchThemeIcon = styled(WiMoonAltWaningCrescent4)`
  width: 24px;
  height: 24px;
`;
