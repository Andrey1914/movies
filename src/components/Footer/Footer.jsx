import {
  FooterContainer,
  FooterNavList,
  SocialsLinks,
  SocialLink,
  Copyright,
  SvgGit,
  SvgLi,
  SvgTe,
  SvgWh,
} from "./FooterStyled";
import { FooterSection } from "../SectionStyled";
import {
  NavigationItem,
  NavigationLink,
  Logo,
  LogoText,
  LogoContainer,
} from "../Header/HeaderStyled";
import MovieIconLogo from "../../images/logo-movie.png";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <FooterSection>
      <FooterContainer>
        <NavigationLink to="/">
          <LogoContainer>
            <Logo src={MovieIconLogo} alt="logo" />
            <LogoText>Cinema</LogoText>
          </LogoContainer>
        </NavigationLink>
        <FooterNavList>
          <NavigationItem>
            <NavigationLink to="/">Home</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink to="/movies">Movies</NavigationLink>
          </NavigationItem>
        </FooterNavList>
        <SocialsLinks>
          <SocialLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Andrey1914"
          >
            <SvgGit />
          </SocialLink>
          <SocialLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/andrei-kurka/"
          >
            <SvgLi />
          </SocialLink>
          <SocialLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://t.me/andreycurca"
          >
            <SvgTe />
          </SocialLink>
          <SocialLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/+380676081196"
          >
            <SvgWh />
          </SocialLink>
        </SocialsLinks>
      </FooterContainer>
      <Copyright>&copy; {year}</Copyright>
    </FooterSection>
  );
}
