/*
 * ListOfStrings
 *
 * This is the first thing users see in this app.
 * A list from the back end API will be called when the user lands on this page
 * The "/" route will redirect here
 */

import React, { useEffect } from 'react';

//styled components

import Section from '../../components/Section';
import Paragraph from '../../components/Paragraph';

export function Projects() {
    useEffect(() => {

    }, []);

    // render component
    return (
        <Section id="projects">
            <Paragraph>
                projects here
            </Paragraph>
        </Section>
    );
}


//* All compose does is let you write deeply nested function transformations without the rightward drift of the code. Don’t give it too much credit!
export default Projects;

/* eslint-disable */