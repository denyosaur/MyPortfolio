import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Landingpage from "../Landingpage/loadable";
import NotFoundPage from "../NotFoundPage/loadable";

//styled components css
import GlobalStyle from "../../global-styles";
import Header from "../Header";
import Container from "../../components/Container";

/**
 * App.js
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

function App() {
    return (
        <>
            <Header/>
            <Container id="content">
                <Routes>
                    <Route path="/" element={<Landingpage />} />
                    <Route element={<NotFoundPage />} />
                </Routes>
            </Container>
            <GlobalStyle />
        </>
    );
}

export default App;