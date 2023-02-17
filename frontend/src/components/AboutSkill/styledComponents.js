import styled from 'styled-components';

import { P5 } from '../../components/base_comps';

export const SkillContainer = styled.div`
  display: flex;
`;

export const StyledP3 = styled(P5)`
  font-size: ${({ theme: { fontSizes: { smp5 } } }) => smp5};
  margin: 0;
`;
