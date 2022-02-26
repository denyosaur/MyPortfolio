import styled from 'styled-components';

const ContentWrapper = styled.div`

    padding-left:15px;
    padding-right:15px;
    margin-left:auto;
    margin-right:auto;
    height:100%;
    width:100%;
    min-height:calc(100vh - 8rem);


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

export default ContentWrapper;
