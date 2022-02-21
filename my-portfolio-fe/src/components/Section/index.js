import styled from 'styled-components';

// styled-componet for creating section container
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 1.5rem;
`;

export default Section;


// (props => ({
//     className: props.className,
// }))