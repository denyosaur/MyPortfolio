/*
 * ListOfStrings
 *
 * This is the first thing users see in this app.
 * A list from the back end API will be called when the user lands on this page
 * The "/" route will redirect here
 */

import React, { useEffect } from 'react';

//styled components
import H1 from '../../components/H1';
import H2 from '../../components/H2';
import H3 from '../../components/H3';
import Section from '../../components/Section';
import Paragraph from '../../components/Paragraph';

export function Landingpage() {
    useEffect(() => {

    }, []);


    // render component
    return (
        <Section id="landing_page">
            <H3>
                Hi! My name is
            </H3>
            <H1>
                Daniel Hae-Sung Kim.
            </H1>
            <H2>
                I'm a full stack web developer.
            </H2>
            <Paragraph>
                qwery
            </Paragraph>
        </Section>
    );
}


//* All compose does is let you write deeply nested function transformations without the rightward drift of the code. Don’t give it too much credit!
export default Landingpage;

/* eslint-disable */