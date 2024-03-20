import styled from "styled-components";
import { Link as NavLink } from "react-router-dom";

export const Logo = styled.img`
  transition: opacity 250ms;
  margin-right: 1rem;
  color: ${({ theme }) => theme.color.light};
  height: 3rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoText = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.thin};
  @media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    display: none;
  }
`;

export const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-left: auto;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const NavigationItem = styled.li`
  transform: scale(1);
  transition: transform 250ms ease-in-out;
  :hover,
  :focus {
    transform: scale(1.03);
  }
`;
export const NavigationLink = styled(NavLink)`
  font-size: 1.5rem;

  color: ${({ theme }) => theme.color.light};
  transform: scale(1);
  transition: transform 250ms ease-in-out;

  :hover,
  :focus {
    transform: scale(1.03);
    color: ${({ theme }) => theme.color.link};
    text-shadow: ${({ theme }) => theme.shadow.text};
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
    font-weight: ${({ theme }) => theme.fontWeights.thin};
  }
`;

export const Menu = styled.div`
  cursor: pointer;
  display: none;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

export const Line = styled.div`
  height: 0.1125rem;
  width: ${(props) => props.width || "2rem"};
  background: ${({ theme }) => theme.color.light};
  margin: 0.28125rem 0;
  transition: 0.3s ease;
  margin-left: ${(props) => props.ml || "0"};
`;
