import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;

  @media (max-width: 768px) {
    font-size: ${({ theme: { fontSizes: { p4 } } }) => p4};
    height: 100%;
  }
`;

export const ContentContainer = styled.div`
  background-color: ${({ theme: { colors: { primaryBackground } } }) => primaryBackground};
  display: flex;
  flex-direction: row;
  height: calc(100% - max(40px, 8vmin));
  justify-content: space-between;
  margin: max(20px, 4vmin);
  width: calc(100% - max(40px, 8vmin));

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MainContainer = styled.main`
  height: auto;
  margin: 2rem;
  width: 100%;
  z-index: 2;

  @media (max-width: 768px) {
    height: 100%;
    width: auto;
  }
`;
