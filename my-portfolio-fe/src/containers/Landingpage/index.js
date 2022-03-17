/*
 * ListOfStrings
 *
 * This is the first thing users see in this app.
 * A list from the back end API will be called when the user lands on this page
 * The "/" route will redirect here
 */

import React, { useEffect } from 'react';

//styled components
import H1 from '../../components/Htags/H1';
import H2 from '../../components/Htags/H2';
import H3 from '../../components/Htags/H3';
import Section from '../../components/Section';
import Paragraph from '../../components/Paragraph';
import TextWrapper from './CSS/TextWrapper';

export function Landingpage() {
    useEffect(() => {

    }, []);

    // render component
    return (
        <Section id="landing_page">
            <TextWrapper timing=".5">
                <H3>
                    Hi! My name is
                </H3>
            </TextWrapper>
            <TextWrapper timing=".5">
                <H1>
                    Daniel Hae-Sung Kim.
                </H1>
            </TextWrapper>
            <TextWrapper timing=".5">
                <H2>
                    I'm a full stack web developer.
                </H2>
            </TextWrapper>
            <TextWrapper timing=".5">
                <Paragraph>
                    qwery
                </Paragraph>
            </TextWrapper>
        </Section>
    );
}


//* All compose does is let you write deeply nested function transformations without the rightward drift of the code. Don’t give it too much credit!
export default Landingpage;

/* eslint-disable */