import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';

const circleFadeDelay = keyframes`
  0%,
  39%,
  100% {
    opacity: 0;
  }

  40% {
    opacity: 1;
  }
`;


const Circle = styled.div((props) => `
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    ${props.rotate && css`
      -webkit-transform: rotate(${props.rotate}deg);
      -ms-transform: rotate(${props.rotate}deg);
      transform: rotate(${props.rotate}deg);
    `} &:before {
      content: '';
      display: block;
      margin: 0 auto;
      width: 15%;
      height: 15%;
      background-color: #999;
      border-radius: 100%;
      animation: ${circleFadeDelay} 1.2s infinite ease-in-out both;
      ${props.delay && css`
        -webkit-animation-delay: ${props.delay}s;
        animation-delay: ${props.delay}s;
      `};
    }
  `);

Circle.propTypes = {
  delay: PropTypes.number,
  rotate: PropTypes.number,
};

export default Circle;
