import React, { useState } from "react";
import {
  NavigationContainer,
  Logo,
  LogoText,
  LogoContainer,
  NavigationList,
  NavigationItem,
  NavigationLink,
  Menu,
  Line,
} from "./HeaderStyled";
import { HeaderSection } from "../SectionStyled";
import { HeaderContainer } from "../ContainerStyled";
import MobileMenu from "./MobileMenu";
import MovieIconLogo from "../../images/logo-movie.png";
import SwitchTheme from "../SwitchTheme/SwitchTheme";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <HeaderSection>
      <HeaderContainer>
        <NavigationContainer>
          <NavigationLink to="/">
            <LogoContainer>
              <Logo
                src={MovieIconLogo}
                alt="the-site-logo-looks-like-a-piece-of-film"
              />
              <LogoText>Cinema</LogoText>
            </LogoContainer>
          </NavigationLink>
          <SwitchTheme />
          <NavigationList>
            <NavigationItem>
              <NavigationLink to="/">Home</NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink to="/movies">Search</NavigationLink>
            </NavigationItem>
          </NavigationList>
          <Menu onClick={toggle}>
            <Line width="1.5rem" />
            <Line />
            <Line width="1.5rem" ml="0.5rem" />
          </Menu>
        </NavigationContainer>

        <MobileMenu isOpen={isOpen} toggle={toggle}></MobileMenu>
      </HeaderContainer>
    </HeaderSection>
  );
}
