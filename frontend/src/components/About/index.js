import React from 'react';
import T from 'prop-types';

import AboutSkill from '../AboutSkill';
import {
  AboutViewContainer,
  SkillsContainer,
  StyledP5,
  TextWrapper,
} from './styledComponents';

const AboutView = ({ about, skills }) => (
  <AboutViewContainer>
    <SkillsContainer>
      {skills.map((skill, index) => (
        <AboutSkill
          key={skill}
          skill={skill}
          end={index === skills.length - 1}
        />
      ))}
    </SkillsContainer>
    <TextWrapper>
      <StyledP5>
        {about}
      </StyledP5>
    </TextWrapper>
  </AboutViewContainer>
);

AboutView.propTypes = {
  about: T.string.isRequired,
  skills: T.array.isRequired,
};

export default AboutView;
