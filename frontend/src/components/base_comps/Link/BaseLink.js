import React from 'react';
import T from 'prop-types';

import { StyledATag, StyledLink } from './styledComponents';

const BaseLink = ({
  isExternalLink,
  label,
  path,
  replace,
  ...restProps
}) => {
  if (isExternalLink) {
    return (
      <StyledATag
        href={path.pathname}
        {...restProps}
      >
        {label}
      </StyledATag>
    )
  }

  return (
    <StyledLink
      replace={replace}
      to={path.pathname}
      {...restProps}
    >
      {label}
    </StyledLink>
  )
};

BaseLink.defaultProps = {
  isExternalLink: false,
  replace: true,
};

BaseLink.propTypes = {
  isExternalLink: T.bool,
  label: T.string.isRequired,
  path: T.shape({
    pathname: T.string.isRequired,
    search: T.string,
    hash: T.string,
    state: T.object,
  }),
  replace: T.bool,
}

export default BaseLink;


// to={{
//   pathname: "/courses",
//   search: "?sort=name",
//   hash: "#the-hash",
//   state: { fromDashboard: true }
// }}

// pathname: A string representing the path to link to.
// search: A string representation of query parameters.
// hash: A hash to put in the URL, e.g. #a-hash.
// state: State to persist to the location.
