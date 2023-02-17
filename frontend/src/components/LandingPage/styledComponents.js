import styled, {css} from 'styled-components';

import { H1 } from '../base_comps';

export const LandingPageContainer = styled.div`
  align-items: center;
  display: flex;
`;

export const StyledH1 = styled(H1)`
  font-weight: ${({ isName }) => isName ? '300' : '100'};
  height: auto;
  margin: ${({ isName }) => isName ? '0 0.5rem 0 0' : '0'};

  @media (max-width: 768px) {
    font-size: ${({ theme: { fontSizes: { h4 } } }) => h4};
  }
`;

export const TextContainer = styled.div`
  align-items: flex-end;
  animation: ${({
    fadeOutLanding,
    theme: { fade },
  }) => fadeOutLanding ? css`${fade.out} 2s linear` : 'none'};
  display: flex;
  flex-direction: row;
  height: 5rem;
  transition: visibility 2s linear;
  visibility: ${({fadeOutLanding}) => fadeOutLanding ? 'hidden' : 'visible'};
`;
