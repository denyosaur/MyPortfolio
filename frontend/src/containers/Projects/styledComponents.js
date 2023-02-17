import styled from 'styled-components';

import { H3 } from '../../components/base_comps';

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: flex-end;
  width: 100%;
`;

export const StyledH3 = styled(H3)`
  color: ${({ theme: { colors: { primaryFont } } }) => primaryFont};
`;
