import styled from "styled-components";

export const ModalBackdrop = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 200px;
  width: 340px;
  padding: 5px;
  background-color: #aaa;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  transition: transform 300ms linear;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 445px;
    height: 258px;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 600px;
    height: 344px;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 850px;
    height: 485px;
  }
`;
