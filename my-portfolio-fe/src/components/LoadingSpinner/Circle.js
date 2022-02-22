import styled, { keyframes, css } from 'styled-components';

const circleFadeDelay = keyframes`
  100% {
    opacity: 0;
  }

  80% {
    opacity: 0;
  }
  0% {
    opacity: 1;
  }
`;


  const Circle = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    ${props => props.rotate &&
    `
      -webkit-transform: rotate(${props.rotate}deg);
      -ms-transform: rotate(${props.rotate}deg);
      transform: rotate(${ props.rotate}deg);
    `} &:before {
      content: '';
      display: block;
      margin: 0 auto;
      width: .3rem;
      height: .8rem;
      background-color: #E0FBFC;
      border-radius: .2rem;
      animation: ${circleFadeDelay} 1.2s infinite ease-in-out both;
      ${props => props.delay &&
    `
        -webkit-animation-delay: ${props.delay}s;
        animation-delay: ${props.delay}s;
      `};
    }
  `;

export default Circle;
