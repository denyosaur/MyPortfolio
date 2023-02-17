import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

//styled components css
import GlobalStyle from './global-styles';
import { defaultTheme } from './defaultStyleHelper';

import RoutesComponent from './RoutesComponent';

/**
 * App.js
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

function App() {

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <RoutesComponent />
        </ThemeProvider>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
