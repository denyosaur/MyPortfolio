import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Content from "../Content/loadable";
import NotFoundPage from "../NotFoundPage/loadable";

//styled components css
import GlobalStyle from "../../global-styles";
import Header from "../Header";
import ContainerWrapper from "../../components/ContainerWrapper";

/**
 * App.js
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

function App() {
    return (
        <>
            <Header />
            <ContainerWrapper id="container_wrapper">
                <Routes>
                    <Route path="/" element={<Content />} />
                    <Route element={<NotFoundPage />} />
                </Routes>
            </ContainerWrapper>
            <GlobalStyle />
        </>
    );
}

export default App;