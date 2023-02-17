import React from 'react';
import T from 'prop-types';
import { ConditionalRender } from '../../base_comps';

import IndicatorDot from './IndicatorDot';
import {
  DotWrapper,
  NavLinkContainer,
  StyledBorderlessButton,
} from './styledComponents';

const NavLink = ({
  changePageView,
  isActive,
  label,
}) => (
  <NavLinkContainer>
    <DotWrapper>
      <ConditionalRender
        Component={IndicatorDot}
        propsToPassDown={{ isActive }}
        shouldRender={isActive}
      />
    </DotWrapper>
    <StyledBorderlessButton
      label={label}
      onClick={changePageView}
    />
  </NavLinkContainer>
);


NavLink.propTypes = {
  changePageView: T.func.isRequired,
  isActive: T.bool.isRequired,
  label: T.string.isRequired,
};

export default NavLink;
