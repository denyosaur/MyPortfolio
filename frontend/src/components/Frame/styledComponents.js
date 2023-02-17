import styled from 'styled-components';

export const FrameContainer = styled.div`
  animation: ${({ theme: { fade } }) => fade.in} 0.8s linear;
  bottom: max(20px, 4vmin);
  left: max(20px, 4vmin);
  margin: 0;
  mix-blend-mode: difference;
  padding: 0;
  pointer-events: none;
  position: fixed;
  right: max(20px, 4vmin);
  top: max(20px, 4vmin);
  z-index: 10;
`;

export const HorizontalFrame = styled.div`
  background-color: ${({ theme: { colors: { lightPeach } } }) => lightPeach};
  height: 100%;
  left: ${({ isLeft }) => isLeft ? '0' : 'auto'};
  opacity: 0.5;
  position: absolute;
  right: ${({ isRight }) => isRight ? '0' : 'auto'};
  top: 0;
  width: 1px;
`;

export const VerticalFrame = styled.div`
  background-color: ${({ theme: { colors: { lightPeach } } }) => lightPeach};
  bottom: ${({ isBottom }) => isBottom ? '0' : 'auto'};
  height: 1px;
  left: 0;
  opacity: 0.5;
  position: absolute;
  top: ${({ isTop }) => isTop ? '0' : 'auto'};
  width: 100%;
`;
