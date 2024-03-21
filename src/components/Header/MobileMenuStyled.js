import styled from "styled-components";
import { Link as MobileMenuNavLink } from "react-router-dom";
import { RiCloseLine as closeIcon } from "react-icons/ri";
import { Copyright } from "../Footer/FooterStyled";

export const MobileMenuContainer = styled.div`
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(45deg, #42425d, #232424);
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  transition: 0.3s ease;
`;

export const MobileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  border-bottom: 1px solid #aaa;
`;

export const Icon = styled.div`
  height: fit-content;
  display: flex;
  align-items: center;
  border-radius: 50%;
  border: 1px solid #aaa;
`;

export const CloseIcon = styled(closeIcon)`
  cursor: pointer;
  color: #aaa;
  width: 2rem;
  height: 2rem;
`;

export const MobileMenuList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 2rem;
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
  color: #aaa;
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

export const MobileCopyright = styled(Copyright)`
  border-top: none;
  padding: 0;
  color: #aaa;
`;

export const MobileFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-top: 1px solid #aaa;
`;
