import styled from 'styled-components';

import { Link } from '../base_comps';

export const ContactLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 3rem;
  justify-content: flex-end;
  transition: 0.3s;
  width: 20rem;

  &:hover {
    opacity: 50%;
  }

  @media (max-width: 768px) {
    height: 2rem;
  }
`;

export const ExternalIconWrapper = styled.div`
  height: 3rem;
  width: 1rem;

  @media (max-width: 768px) {
  height: 2rem;
  }
`;

export const IconWrapper = styled.div`
  height: auto;
  padding: 0.6rem;
  width: 2rem;

  @media (max-width: 768px) {
    padding: 0.3rem;
    width: 1.5rem;
  }
`;

export const StyledLink = styled(Link)`
  font-size: ${({ theme: { fontSizes: { p5 } } }) => p5};
  margin-right: 0.2rem;

  @media (max-width: 768px) {
    font-size: ${({ theme: { fontSizes: { p5 } } }) => p5};
  }
`;
