import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledATag = styled(({ children, ...restProps }) => (
  <a {...restProps}>{children}</a>
))`
  align-items: center;
  color: ${({ theme: { colors: { primaryFont } } }) => primaryFont};
  display: flex;
  font-sizes: ${({ theme: { fontSizes: { p2 } } }) => p2};
  font-weight: 300;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    opacity: 50%;
  }
`;

export const StyledLink = styled(({ ...restProps }) => (
  <Link {...restProps} />
))`
  align-items: center;
  color: ${({ theme: { colors: { primaryFont } } }) => primaryFont};
  display: flex;
  font-sizes: ${({ theme: { fontSizes: { p2 } } }) => p2};
  font-weight: 300;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    opacity: 50%;
  }
`;
