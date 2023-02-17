import styled from 'styled-components';

import { P5 } from '../../components/base_comps';

export const AboutViewContainer = styled.div`
  align-items: flex-end;
  animation: ${({ theme: { fade } }) => fade.in} 1s linear;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 4.4rem;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

export const StyledP5 = styled(P5)`
  margin-right: 1rem;
  white-space: pre-line;
  width: 20rem;

  @media (max-width: 768px) {
    font-size: ${({ theme: { fontSizes: { smp5 } } }) => smp5};
    margin-right: 0;
    width: 100%;
  }
`;

export const TextWrapper = styled.div`
  align-items: flex-end;
  display: flex;
  height: 100%;
  justify-content: flex-end;
  width: 100%;
`;
