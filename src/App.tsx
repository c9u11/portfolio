import { createGlobalStyle, ThemeProvider } from "styled-components";
import Portfolio from "./pages/Portfolio";
import { ReactQueryDevtools } from "react-query/devtools"
import { lightTheme } from "./theme";

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
      display: none;
  }
  body {
    line-height: 1;
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.primaryTextColor};
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  html {
    font-size: 62.5%;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  
  .grid {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: minmax(5rem, auto);
    grid-gap: 10px;
    align-items: center;
    justify-items: center;
    position: relative;
  }
  .grid .col-1 {
    grid-column-end: span 1;
  }
  .grid .row-1 {
    grid-row-end: span 1;
  }
  .grid .col-2 {
    grid-column-end: span 2;
  }
  .grid .row-2 {
    grid-row-end: span 2;
  }
  .grid .col-3 {
    grid-column-end: span 3;
  }
  .grid .row-3 {
    grid-row-end: span 3;
  }
  .grid .col-4 {
    grid-column-end: span 4;
  }
  .grid .row-4 {
    grid-row-end: span 4;
  }
  .grid .col-5 {
    grid-column-end: span 5;
  }
  .grid .row-5 {
    grid-row-end: span 5;
  }
  .grid .col-6 {
    grid-column-end: span 6;
  }
  .grid .row-6 {
    grid-row-end: span 6;
  }
  .grid .col-7 {
    grid-column-end: span 7;
  }
  .grid .row-7 {
    grid-row-end: span 7;
  }
  .grid .col-8 {
    grid-column-end: span 8;
  }
  .grid .row-8 {
    grid-row-end: span 8;
  }
  .grid .col-9 {
    grid-column-end: span 9;
  }
  .grid .row-9 {
    grid-row-end: span 9;
  }
  .grid .col-10 {
    grid-column-end: span 10;
  }
  .grid .row-10 {
    grid-row-end: span 10;
  }
  .grid .col-11 {
    grid-column-end: span 11;
  }
  .grid .row-11 {
    grid-row-end: span 11;
  }
  .grid .col-full,
  .grid .col-12 {
    grid-column: 1 / 13;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  
  .grid {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: minmax(5rem, auto);
    grid-gap: 10px;
    align-items: center;
    justify-items: center;
    position: relative;
  }
  .grid .col-1 {
    grid-column-end: span 1;
  }
  .grid .row-1 {
    grid-row-end: span 1;
  }
  .grid .col-2 {
    grid-column-end: span 2;
  }
  .grid .row-2 {
    grid-row-end: span 2;
  }
  .grid .col-3 {
    grid-column-end: span 3;
  }
  .grid .row-3 {
    grid-row-end: span 3;
  }
  .grid .col-4 {
    grid-column-end: span 4;
  }
  .grid .row-4 {
    grid-row-end: span 4;
  }
  .grid .col-5 {
    grid-column-end: span 5;
  }
  .grid .row-5 {
    grid-row-end: span 5;
  }
  .grid .col-6 {
    grid-column-end: span 6;
  }
  .grid .row-6 {
    grid-row-end: span 6;
  }
  .grid .col-7 {
    grid-column-end: span 7;
  }
  .grid .row-7 {
    grid-row-end: span 7;
  }
  .grid .col-8 {
    grid-column-end: span 8;
  }
  .grid .row-8 {
    grid-row-end: span 8;
  }
  .grid .col-9 {
    grid-column-end: span 9;
  }
  .grid .row-9 {
    grid-row-end: span 9;
  }
  .grid .col-10 {
    grid-column-end: span 10;
  }
  .grid .row-10 {
    grid-row-end: span 10;
  }
  .grid .col-11 {
    grid-column-end: span 11;
  }
  .grid .row-11 {
    grid-row-end: span 11;
  }
  .grid .col-full,
  .grid .col-12 {
    grid-column: 1 / 13;
  }
`

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle>
      </GlobalStyle>
      <Portfolio ></Portfolio>
      <ReactQueryDevtools initialIsOpen={true} />
    </ThemeProvider>
  );
}

export default App;