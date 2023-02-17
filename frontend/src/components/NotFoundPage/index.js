/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';

import Frame from '../../components/Frame';
import {
  NotFoundContainer,
  StyledH1,
  StyledLink,
  TextContainer,
} from './styledComponents'

const NotFound = () => {
  return (
    <NotFoundContainer>
      <Frame />
      <TextContainer>
        <StyledH1>
          Page Not Found
        </StyledH1>
        <StyledLink
          label="Take me back home"
          path={{ pathname: "/" }}
          rel="external"
          target="_blank"
        />
      </TextContainer>
    </NotFoundContainer>
  );
}

export default NotFound;
