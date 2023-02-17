import React from 'react';
import T from 'prop-types';

import {
  ErrorContainer,
  ImageWrapper,
  // StyledH1,
  // StyledH2,
  // StyledLink,
} from './styledComponents';

import { H1, H2 } from '../base_comps';

import twoBandages from '../../assets/twoBandages.jpg';

const ErrorComponent = ({
  buttonProps: {
    label,
    linkProps,
  },
  errorImage,
  headerText,
  paragraphText,
}) => {
  return (
    <ErrorContainer>
      <ImageWrapper>
        {errorImage}
      </ImageWrapper>
      <H1>{headerText}</H1>
      <H2>{paragraphText}</H2>
      {/* <StyledLink
        label={label}
        path={{ pathname: '/home' }}
        {...linkProps}
      /> */}
    </ErrorContainer>
  )
};

ErrorComponent.defaultProps = {
  buttonProps: {
    label: 'Take me back'
  },
  errorImage: twoBandages,
  headerText: 'You\'ve found an error on my page.',
  paragraphText: 'Sorry about that!',
};

ErrorComponent.propTypes = {
  buttonProps: T.object,
  errorImage: T.element,
  HeaderText: T.string,
  paragraphText: T.string,
};

export default ErrorComponent;
