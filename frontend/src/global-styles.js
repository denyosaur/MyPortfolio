import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: #F1DAC4;
    background-color: #0D0C1D;
    margin: 0;
    font-family: 'Lato', sans-serif;
    font-weight: 100;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    @media (max-width: 768px) {
      height: 100%;
    }
  }

  body.fontLoaded {
    font-family: 'Lato', sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  #root {
    @media (max-width: 768px) {
      height: 100%;
    }
  }

  .label {
    font-family: 'Lato', sans-serif;
  }

  p,
`;

export default GlobalStyle;