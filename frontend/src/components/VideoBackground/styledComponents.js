import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  animation: ${({ theme: { fade } }) => fade.in} 10s linear;
  height: calc(100% - max(40px, 8vmin));
  left: 0;
  margin: max(20px, 4vmin);
  position: absolute;
  top: 0;
  width: calc(100% - max(40px, 8vmin));
  z-index: 1;
`;

export const StyledVideo = styled.video`
  filter: blur(0.7rem) brightness(65%) grayscale(85%);
  height: 100%;
  object-fit: fill;
  opacity: 20%;
  width: 100%;
`
