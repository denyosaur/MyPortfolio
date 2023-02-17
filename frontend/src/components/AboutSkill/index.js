import React from 'react';
import T from 'prop-types';

import {
  SkillContainer,
  StyledP3,
} from './styledComponents';

const AboutSkill = ({ end, skill }) => (
  <SkillContainer>
    <StyledP3>{end ? skill : `${skill}/ /`}</StyledP3>
  </SkillContainer>
);

AboutSkill.propTypes = {
  end: T.bool.isRequired,
  skill: T.string.isRequired,
};

export default AboutSkill;
