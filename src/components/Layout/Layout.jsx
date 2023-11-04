import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Hero } from "../Hero/HeroStyled";
import MainContent from "../MainContent/MainContent";

export default function Layout() {
  return (
    <>
      <Header />
      <Hero />
      <MainContent />
      <Footer />
    </>
  );
}
