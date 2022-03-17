import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
from {
    padding-top: 100px;
    opacity: 0;

  }
  to {
    padding-top:67px;
    opacity: 1;
  }
`;

// styled-componet for creating section container
const Section = styled.section`
  display: flex;
  flex-direction: column;
  width:100%;
  height:100vh;
  padding-top:67px;

`;

export default Section;


// (props => ({
//     className: props.className,
// }))