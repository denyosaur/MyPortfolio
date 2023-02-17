import styled from 'styled-components';

import { H1, Link } from '../base_comps';

export const NotFoundContainer = styled.div`
  align-items: center;
  background-color: ${({ theme: { colors: { primaryBackground } } }) => primaryBackground};
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: space-around;
  margin: max(20px, 4vmin);
  width: calc(100% - max(40px, 8vmin));

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledH1 = styled(H1)`
  margin: 0 0 2rem 0;
`;

export const StyledLink = styled(Link)`
  font-size: ${({ theme: { fontSizes: { p5 } } }) => p5};
  margin: 0;
  text-decoration: underline;

  @media (max-width: 768px) {
    font-size: ${({ theme: { fontSizes: { p5 } } }) => p5};
  }
`;

export const TextContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
