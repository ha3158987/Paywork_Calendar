import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  html,
  body {
    font-family: 'Nanum Gothic', sans-serif;
  }

  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color:inherit;
  }
  ol,ul,li {
    list-style:none;
    padding:0;
    margin:0;
  }
  button {
    cursor: pointer;
    outline: none;
    border: none;
  }
  input {
    outline: none;
  }
  dl{
    display:flex;
  }
`;

export default GlobalStyle;
