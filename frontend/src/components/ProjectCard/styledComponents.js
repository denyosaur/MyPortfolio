import styled from 'styled-components';

import { Link, P5 } from '../base_comps';

export const ProjectCardContainer = styled.div`
  animation: ${({ theme: { fade } }) => fade.in} 1s linear;
  display: flex;
  flex-direction: column;
  height: 8rem;
  margin: 2rem 0rem 1rem 0;
  position: relative;
  width: 27em;

  &:before {
    background: url(${props => props.background});
    background-size: contain;
    background-repeat: no-repeat;
    bottom: 0;
    content: ' ';
    filter: blur(0.1rem) brightness(20%) grayscale(95%);
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.2s;
  }
  
  &:hover:before {
    filter: blur(0.07rem) brightness(30%) grayscale(60%);
  }

  @media (max-width: 768px) {
    height: 5.5rem;
    margin: 1rem 0rem 0rem 0;
    width: 15rem;
  }
`;

export const StyledGithubLink = styled(Link)`
  font-size: ${({ theme: { fontSizes: { p5 } } }) => p5};
  opacity: 100%;
  width: max-content;
`;

export const StyledP3 = styled(P5)`
  font-size: ${({ theme: { fontSizes: { smp5 } } }) => smp5};
  margin: 0;
  white-space: nowrap;
`;

export const StyledProjectLink = styled(Link)`
  font-size: ${({ theme: { fontSizes: { h2 } } }) => h2};
  opacity: 100%;
  width: max-content;

  @media (max-width: 768px) {
    font-size: ${({ theme: { fontSizes: { h4 } } }) => h4};
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5rem;
  opacity: 100%;
  z-index: 2;
  width: auto;

  @media (max-width: 768px) {
    padding-left: 1.5rem;
  }
`;

export const ToolsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
