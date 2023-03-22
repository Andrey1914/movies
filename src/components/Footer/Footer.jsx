import { FooterContainer, Svg } from "./FooterStyled";
import { FooterSection } from "../SectionStyled";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <FooterSection>
      <FooterContainer>
        &copy; {year} | Developed by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Andrey1914"
        >
          <Svg />
        </a>
      </FooterContainer>
    </FooterSection>
  );
}
