import React from "react";
import {
  CloseIcon,
  Icon,
  MobileMenuContainer,
  MobileMenuList,
  MobileMenuLink,
  MobileHeader,
  MobileFooter,
  MobileCopyright,
} from "./MobileMenuStyled";
import { Logo, LogoContainer, LogoText } from "./HeaderStyled";
import MovieIconLogo from "../../images/logo-movie.png";
import {
  SocialLink,
  SocialsLinks,
  SvgGit,
  SvgLi,
  SvgTe,
  SvgWh,
} from "../Footer/FooterStyled";

export default function MobileMenu({ isOpen, toggle }) {
  const year = new Date().getFullYear();

  return (
    <MobileMenuContainer isOpen={isOpen} toggle={toggle}>
      <MobileHeader>
        <MobileMenuLink to="/" onClick={toggle}>
          <LogoContainer>
            <Logo
              src={MovieIconLogo}
              alt="the-site-logo-looks-like-a-piece-of-film"
            />
            <LogoText>Cinema</LogoText>
          </LogoContainer>
        </MobileMenuLink>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
      </MobileHeader>
      <MobileMenuList>
        <MobileMenuLink to="/" onClick={toggle}>
          Home
        </MobileMenuLink>
        <MobileMenuLink to="/movies" onClick={toggle}>
          Search
        </MobileMenuLink>
        <MobileCopyright>&copy; {year}</MobileCopyright>
      </MobileMenuList>

      <MobileFooter>
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
      </MobileFooter>
    </MobileMenuContainer>
  );
}
