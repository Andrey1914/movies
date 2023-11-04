import styled from "styled-components";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";

export const SwitchThemeBox = styled.div`
  position: relative;
  top: 1.3rem;
  left: 8rem;
  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    top: 0.3rem;
    left: 2rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    left: 59rem;
  }
`;

export const SwitchThemeIcon = styled(WiMoonAltWaningCrescent4)`
  width: 24px;
  height: 24px;
`;
