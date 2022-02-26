import styled from 'styled-components';

const ContainerWrapper = styled.div`

    margin-right: auto;
    margin-left: auto;
    
    width:100%;
    height:100%;

    @media (min-width: 768px) {
        .container {
          width: 750px;
        }
      }
    @media (min-width: 992px) {
        .container {
          width: 970px;
        }
      }
    @media (min-width: 1200px) {
        .container {
          width: 1170px;
        }
    }
`;

export default ContainerWrapper;