import styled from "styled-components";
import { BsGithub, BsLinkedin, BsTelegram, BsWhatsapp } from "react-icons/bs";
import { NavigationList } from "../Header/HeaderStyled";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 2rem;
  padding-bottom: 2rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: 15rem;
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const FooterNavList = styled(NavigationList)`
  flex-direction: column;
  margin: 0;
`;

export const SocialsLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SocialLink = styled.a`
  display: contents;
  color: ${({ theme }) => theme.color.light};
  padding: 0.2rem;

  :hover,
  :focus {
    color: ${({ theme }) => theme.color.link};
  }
`;

export const Copyright = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  border-top: 1px solid #fafafa;
  padding: 2rem 0 0 0;
  color: ${({ theme }) => theme.color.light};
  font-size: 1rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.fontWeights.thin};
  }
`;

export const SvgGit = styled(BsGithub)`
  width: 1rem;
  height: 1rem;
  transform: scale(1);
  transition: all 250ms;
  :hover,
  :focus {
    opacity: 0.8;
    transform: scale(1.02);
  }
  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 2rem;
    height: 2rem;
  }
`;

export const SvgLi = styled(BsLinkedin)`
  width: 1rem;
  height: 1rem;
  transform: scale(1);
  transition: all 250ms;
  :hover,
  :focus {
    opacity: 0.8;
    transform: scale(1.02);
  }
  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 2rem;
    height: 2rem;
  }
`;

export const SvgTe = styled(BsTelegram)`
  width: 1rem;
  height: 1rem;
  transform: scale(1);
  transition: all 250ms;
  :hover,
  :focus {
    opacity: 0.8;
    transform: scale(1.02);
  }
  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 2rem;
    height: 2rem;
  }
`;

export const SvgWh = styled(BsWhatsapp)`
  width: 1rem;
  height: 1rem;
  transform: scale(1);
  transition: all 250ms;
  :hover,
  :focus {
    opacity: 0.8;
    transform: scale(1.02);
  }
  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 2rem;
    height: 2rem;
  }
`;
