import { css } from "styled-components";
import "modern-normalize";

export const GlobalStyles = css`
  html {
    box-sizing: border-box;
    width: 100vw;
    overflow-x: hidden;
  }
  @font-face {
    font-family: Montserrat;
    src: url("../fonts/Montserrat-Thin.ttf"), format("truetype");
  }
  @font-face {
    font-family: Montserrat;
    src: url("../fonts/Montserrat-Regular.ttf"), format("truetype");
  }
  @font-face {
    font-family: Montserrat;
    src: url("../fonts/Montserrat-Bold.ttf"), format("truetype");
  }
  body {
    margin: 0;
    font-family: "Montserrat", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  label,
  ul,
  p,
  a {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  button {
    padding: 0;
    margin: 0;
    border: 0;
    background: none;
  }
`;
