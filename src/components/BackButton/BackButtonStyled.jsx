import styled from "styled-components";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

export const GoBackBtn = styled.button`
  display: flex;
  background: linear-gradient(45deg, #42425d, #232424);
  color: ${({ theme }) => theme.color.light};
  border: ${({ theme }) => theme.borders.none};
  border-radius: ${({ theme }) => theme.radii.normal};
  font-weight: ${({ theme }) => theme.fontWeights.thin};
  transform: scale(1);
  transition: all 250ms;
  :hover,
  :focus {
    color: ${({ theme }) => theme.color.orange};
    transform: scale(0.92);
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 0.5rem 1rem;
    font-size: 0.6rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0.7rem 1.5rem;
    font-size: 1.2rem;
  }
`;
export const ArrowBack = styled(MdOutlineArrowBackIosNew)`
  margin-right: 0.5rem;
`;
