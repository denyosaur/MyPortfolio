import styled from 'styled-components';
import BaseLink from './BaseLink';

const Link = styled(BaseLink)`
  font-sizes: ${({ theme: { fontSizes: { p2 } } }) => p2};
`;

export { Link };
