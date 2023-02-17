import React from 'react';
import T from 'prop-types';

import {
  LandingPageContainer,
  StyledH1,
  TextContainer,
} from './styledComponents';

const LandingPage = ({ fadeOutLanding }) => (
  <LandingPageContainer>
    <TextContainer fadeOutLanding={fadeOutLanding}>
    <StyledH1 isName>Daniel H Kim</StyledH1>
    <StyledH1>Portfolio</StyledH1>
    </TextContainer>
  </LandingPageContainer>
);

LandingPage.propTypes = { fadeOutLanding: T.bool.isRequired };

export default LandingPage;
