import styled from 'styled-components';

import { H1, H2 } from '../base_comps';

export const LinkContainer = styled.div`
  color: ${({ theme: { colors: { primaryFont } } }) => primaryFont};
  display: flex;
  flex-direction: column;
  margin: 2rem 0 0 0.5rem;

  @media (max-width: 768px) {
    margin: 0rem;
  }
`;

export const NavbarContainer = styled.header`
  animation: ${({ theme: { fade } }) => fade.in} 1s linear;
  display: flex;
  flex-direction: column;
  height: 100%;
  z-index: 2;

  @media (max-width: 768px) {
    height: 50%;
    flex-direction: column;
  }
`;

export const StyledH1 = styled(H1)`
  color: ${({ theme: { colors: { primaryFont } } }) => primaryFont};
  font-size: ${({ theme: { fontSizes: { h2 } } }) => h2};
  margin: 2rem 0 0.2rem 2.3rem;
  white-space: nowrap;

  @media (max-width: 768px) {
    margin: 1.5rem 0 0;
  }
`;

export const StyledH2 = styled(H2)`
  color: ${({ theme: { colors: { primaryFont } } }) => primaryFont};
  font-size: ${({ theme: { fontSizes: { p4 } } }) => p4};
  margin: 0 0 3rem 2.5rem;
  white-space: nowrap;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
    margin-bottom: 1rem;
  }
`;
