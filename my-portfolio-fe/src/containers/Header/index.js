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
import Container from "../../components/Container";


const Header = () => {
    useEffect(() => {

    }, []);

    // render component
    return (
        <HeaderSection>
            <Container id="navbar">
                <Navbar>
                    <HeaderLinks to="#landing_page">
                        home
                    </HeaderLinks>
                    <HeaderLinks to="#about">
                        about
                    </HeaderLinks>
                    <HeaderLinks to="#projects">
                        projects
                    </HeaderLinks>
                    <HeaderLinks to="#contact">
                        contact
                    </HeaderLinks>
                </Navbar>
            </Container>
        </HeaderSection>
    );
}

export default Header;

/* eslint-disable */