import React from "react";
import {
  CloseIcon,
  Icon,
  MobileMenuContainer,
  MobileMenuList,
  MobileMenuLink,
  CloseText,
} from "./MobileMenuStyled";
import { IconContext } from "react-icons";
import { FaHome } from "react-icons/fa";
import { MdMovie } from "react-icons/md";

export default function MobileMenu({ isOpen, toggle }) {
  return (
    <IconContext.Provider value={{ size: "1rem" }}>
      <MobileMenuContainer isOpen={isOpen} toggle={toggle}>
        <Icon onClick={toggle}>
          <CloseText>Close</CloseText>
          <CloseIcon />
        </Icon>
        <MobileMenuList>
          <MobileMenuLink to="/" onClick={toggle}>
            <FaHome size={40} />
            Home
          </MobileMenuLink>
          <MobileMenuLink to="/movies" onClick={toggle}>
            <MdMovie size={40} />
            Movies
          </MobileMenuLink>
        </MobileMenuList>
      </MobileMenuContainer>
    </IconContext.Provider>
  );
}
