import styled from 'styled-components';

import { BorderlessButton } from '../../base_comps'

export const DotWrapper = styled.div`
  display: flex;
  height: auto;
  justify-content: right;
  width: 2rem;
`;

export const IndicatorDotWrapper = styled.div`
  animation: ${({
  isActive,
  theme: { fade },
}) => isActive ? fade.in : fade.out} 0.8s linear;
  color: ${({ theme: { colors: { primaryFont } } }) => primaryFont};
  transition: visibility 0.5s linear;
  visibility: ${isActive => isActive ? 'visible' : 'hidden'};
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 2rem;
  margin: 0.3rem;
  width: 100%;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const StyledBorderlessButton = styled(BorderlessButton)`
  border: 0;
  padding: 0;
  transition: 0.3s;
  font-size: ${({ theme: { fontSizes: { smp5 } } }) => smp5};

  &:hover {
    opacity: 50%;
  }

  .label {
    
    @media (max-width: 768px) {
      font-size: ${({ theme: { fontSizes: { p4 } } }) => p4};
    }
  }

`;
