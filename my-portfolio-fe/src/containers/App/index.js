import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landingpage from "../Landingpage/loadable";
import NotFoundPage from "../NotFoundPage/loadable";

//styled components css
import GlobalStyle from "../../global-styles";
import Container from '../../components/Container';
import Section from '../../components/Section';

/**
 * App.js
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

function App() {
    return (
        <>
            <BrowserRouter>
                <Section >
                    <Routes>
                        <Route path="/" element={<Landingpage />} />
                        <Route element={<NotFoundPage />} />
                    </Routes>
                </Section>
            </BrowserRouter>
            <GlobalStyle />
        </>
    );
}

export default App;