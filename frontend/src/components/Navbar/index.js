import React from 'react';
import T from 'prop-types';

import {
  LinkContainer,
  NavbarContainer,
  StyledH1,
  StyledH2,
  TextContainer,
} from './styledComponents';

import NavLink from './NavLink';
import { NAV_LINKS_LIST } from './constants';

const Navbar = ({
  pageView,
  dispatchChangePageView,
  name,
  title,
}) => {
  const changePageView = (view) => {
    dispatchChangePageView({ view });
  };

  return (
    <NavbarContainer>
      <TextContainer>
        <StyledH1>{name}</StyledH1>
        <StyledH2>{title}</StyledH2>
      </TextContainer>
      <LinkContainer>
        {NAV_LINKS_LIST.map(({ label }) => (
          <NavLink
            key={label}
            isActive={pageView === label}
            label={label}
            changePageView={() => changePageView(label)}
          />
        ))}
      </LinkContainer>
    </NavbarContainer>
  )
};

Navbar.propTypes = {
  pageView: T.string,
  dispatchChangePageView: T.func.isRequired,
  name: T.string,
  title: T.string,
};

Navbar.defaultProps = {
  name: 'Daniel H Kim',
  title: 'Software Engineer//Web Developer',
}

export default Navbar;
