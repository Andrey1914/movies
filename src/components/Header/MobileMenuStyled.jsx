import styled from "styled-components";
import { Link as MobileMenuNavLink } from "react-router-dom";
import { RiCloseLine as closeIcon } from "react-icons/ri";

export const MobileMenuContainer = styled.div`
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  height: 100%;
  width: 100%;
  background: linear-gradient(45deg, #42425d, #232424);
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  transition: 0.3s ease;
`;

export const Icon = styled.div`
  position: absolute;
  top: 3rem;
  right: 3rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

export const CloseIcon = styled(closeIcon)`
  cursor: pointer;
  color: #fff;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 2rem;
    height: 2rem;
  }
`;

export const CloseText = styled.span`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-weight: ${({ theme }) => theme.fontWeights.thin};
  color: ${({ theme }) => theme.color.light};
  font-size: 1rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.75rem;
  }
`;

export const MobileMenuList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  gap: 2rem;
  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    gap: 3rem;
  }
`;

export const MobileMenuLink = styled(MobileMenuNavLink)`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-size: 2.5rem;
  font-weight: ${({ theme }) => theme.fontWeights.thin};
  transition: 0.3s ease;
  color: #fff;
  cursor: pointer;
  transform: scale(1);
  transition: transform 250ms ease-in-out;

  :hover,
  :focus {
    color: ${({ theme }) => theme.color.orange};
    transform: scale(1.2);
    opacity: 0.8;
  }
`;
