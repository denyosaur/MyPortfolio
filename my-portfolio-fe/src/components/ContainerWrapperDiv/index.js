import styled from 'styled-components';

const ContainerWrapperDiv = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;

    margin-right: auto;
    margin-left: auto;
    width:100%;
    height:100%;

    @media (min-width: 768px) {
        {
          width: 750px;
        }
      }
    @media (min-width: 992px) {
        {
          width: 970px;
        }
      }
    @media (min-width: 1200px) {
        {
          width: 1170px;
        }
    }
`;



export default ContainerWrapperDiv;