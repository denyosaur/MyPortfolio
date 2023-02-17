import { keyframes } from 'styled-components';

export const defaultTheme = {
  colors: {
    black: '#000000',
    blue: '#161B33',
    darkBlue: '#0D0C1D',
    error: '#D9534F',
    lightBlue: '#474973',
    lightPeach: '#F1DAC4',
    peach: '#A69CAC',
    primaryBackground: '#0D0C1D',
    primaryFont: '#F1DAC4',
    success: '#5CB85C',
    warning: '#F0AD4E',
    white: '#FFFFFF',
  },
  fade: {
    in: keyframes`
      0% {
        opacity: 0;
      }
      55% {
        opacity: 0.75;
      }
      100% {
        opacity: 1;
      }`,
    out: keyframes`
      0% {
        opacity: 1;
      }
      55% {
        opacity: 0.25;
      }
      100% {
        opacity: 0;
      }`,
  },
  fontSizes: {
    h1: '3.6rem',
    h2: '3.2rem',
    h3: '2.4rem',
    h4: '2.0rem',
    h5: '1.8rem',
    p1: '1.8rem',
    p2: '1.6rem',
    p3: '1.4rem',
    p4: '1.2rem',
    p5: '1.0rem',
    smp5: '0.8rem',
  },
};
