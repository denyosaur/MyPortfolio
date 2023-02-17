import React from 'react';
import T from 'prop-types';

import { ExternalIcon } from '../../assets/icons';
import {
  ContactLinkContainer,
  ExternalIconWrapper,
  IconWrapper,
  StyledLink,
} from './styledComponents';

const ContactLink = ({
  Icon,
  label,
  pathname,
}) => (
  <ContactLinkContainer>
    <IconWrapper>
      <Icon />
    </IconWrapper>
    <StyledLink
      isExternalLink
      label={label}
      path={{ pathname }}
      rel="external"
      target="_blank"
    />
    <ExternalIconWrapper>
      <ExternalIcon />
    </ExternalIconWrapper>
  </ContactLinkContainer>
);

ContactLink.propTypes = {
  Icon: T.func.isRequired,
  label: T.string.isRequired,
  pathname: T.string.isRequired,
};

export default ContactLink;
