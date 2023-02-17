import styled from 'styled-components';

export const MainViewContainer = styled.div`
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
