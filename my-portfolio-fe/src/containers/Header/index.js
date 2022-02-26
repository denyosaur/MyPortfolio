/*
 * ListOfStrings
 *
 * This is the first thing users see in this app.
 * A list from the back end API will be called when the user lands on this page
 * The "/" route will redirect here
 */

import React, { useEffect } from "react";
//styled components
import HeaderSection from "../../components/Header/HeaderSection";
import Navbar from "../../components/Header/Navbar";
import HeaderLinks from "../../components/Header/HeaderLinks";
import Container from "../../components/ContainerWrapper";


const Header = () => {
    useEffect(() => {

    }, []);

    // render component
    return (
        <HeaderSection>
            <Container id="navbar">
                <Navbar>
                    <HeaderLinks smooth to="/#landing_page">
                        home
                    </HeaderLinks>
                    <HeaderLinks smooth to="/#about">
                        about
                    </HeaderLinks>
                    <HeaderLinks smooth to="#projects">
                        projects
                    </HeaderLinks>
                    <HeaderLinks smooth to="/#contact">
                        contact
                    </HeaderLinks>
                </Navbar>
            </Container>
        </HeaderSection>
    );
}

export default Header;

/* eslint-disable */