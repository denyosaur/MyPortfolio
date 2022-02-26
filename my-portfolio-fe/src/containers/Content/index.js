/*
 * ListOfStrings
 *
 * This is the first thing users see in this app.
 * A list from the back end API will be called when the user lands on this page
 * The "/" route will redirect here
 */

import React, { useEffect } from 'react';

//styled components
import ContentWrapper from './CSS/ContentWrapper';
import LandingPage from '../LandingPage/loadable';
import Projects from '../Projects/loadable';
import About from '../About/loadable';
import Contact from '../Contact/loadable';

export function Content() {
    useEffect(() => {

    }, []);

    // render component
    return (
        <ContentWrapper id="content">
            <LandingPage />
            <Projects />
            <About />

        </ContentWrapper>
    );
}


//* All compose does is let you write deeply nested function transformations without the rightward drift of the code. Don’t give it too much credit!
export default Content;

/* eslint-disable */