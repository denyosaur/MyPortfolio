import styled from 'styled-components';

import BaseButton from './BaseButton';

export const StyledBaseButton = styled.button`
  cursor: pointer;

  .label {
    color: ${({ theme: { colors: { primaryFont } } }) => primaryFont};
    font-size: ${({ theme: { fontSizes: { p1 } } }) => p1};
    font-weight: 300;
  }
`;

export const BorderlessButton = styled(BaseButton)`
  background-color:transparent;
  height: auto;
  width: auto;

  .label {
    font-size: ${({ theme: { fontSizes: { p2 } } }) => p2};
  }

  &:hover {
    background-color:transparent;
  }
`;

export const PrimaryButton = styled(BaseButton)`
  background-color: ${({ theme: { colors: { primaryButton } } }) => primaryButton};
  border-radius: .05rem;
  margin: 1rem 0rem;
  padding: 0.5rem 1.5rem;

  &:hover {
    filter: brightness(85%);
  }
`;
