import styled from 'styled-components';

export const ContactViewContainer = styled.div`
  animation: ${({ theme: { fade } }) => fade.in} 1s linear;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
