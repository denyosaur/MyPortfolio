import React from 'react';
import T from 'prop-types';

import { HomepageViewContainer, StyledP1 } from './styledComponents';

const HomepageView = ({ info }) => (
  <HomepageViewContainer>
    <StyledP1>
      {info}
    </StyledP1>
  </HomepageViewContainer>
);


HomepageView.propTypes = {
  info: T.string.isRequired,
};

export default HomepageView;
