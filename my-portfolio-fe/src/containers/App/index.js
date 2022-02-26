import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Content from "../Content/loadable";
import NotFoundPage from "../NotFoundPage/loadable";

//styled components css
import GlobalStyle from "../../global-styles";
import Header from "../Header";
import ContainerWrapperDiv from "../../components/ContainerWrapperDiv";

/**
 * App.js
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

function App() {
    return (
        <>
            <Header />
            <ContainerWrapperDiv id="container_wrapper">
                <Routes>
                    <Route path="/" element={<Content />} />
                    <Route element={<NotFoundPage />} />
                </Routes>
            </ContainerWrapperDiv>
            <GlobalStyle />
        </>
    );
}

export default App;