import styled from 'styled-components';

// styled-componet for creating section container
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width:100%;
  min-heght:100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  margin-top:${props => props.id === "content" ? `64px;` : `0px;`};

  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;

export default Container;