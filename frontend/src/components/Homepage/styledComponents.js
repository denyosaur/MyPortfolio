import styled from 'styled-components';

import { P2 } from '../../components/base_comps';

export const HomepageViewContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledP1 = styled(P2)`
  animation: ${({ theme: { fade } }) => fade.in} 1s linear;
  font-weight: 100;
  margin: 0;
  width: 20rem;

  @media (max-width: 768px) {
    font-size: ${({ theme: { fontSizes: { p4 } } }) => p4};
    width: 15rem;
  }
`;
