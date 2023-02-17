import React from 'react';
import T from 'prop-types';

import {
  ProjectCardContainer,
  StyledGithubLink,
  StyledP3,
  StyledProjectLink,
  TextContainer,
  ToolsWrapper,
} from './styledComponents';

const ProjectCard = ({
  githubUrl,
  imgUrl,
  projectName,
  projectUrl,
  tools,
}) => (
  <ProjectCardContainer background={imgUrl}>
    <TextContainer>
      <StyledProjectLink
        isExternalLink
        label={projectName}
        path={{ pathname: projectUrl }}
        rel="external"
        target="_blank"
      />
      <StyledGithubLink
        isExternalLink
        label="Github Repository"
        path={{ pathname: githubUrl }}
        rel="external"
        target="_blank"
      />
      <ToolsWrapper>
        {tools.map((tool, index) => (
          <StyledP3 key={tool}>
            {index === tools.length - 1 ? tool : `${tool}//`}
          </StyledP3>
        ))}
      </ToolsWrapper>
    </TextContainer>
  </ProjectCardContainer>
);

ProjectCard.propTypes = {
  githubUrl: T.string.isRequired,
  imgUrl: T.string.isRequired,
  projectName: T.string.isRequired,
  projectUrl: T.string.isRequired,
  tools: T.array.isRequired,
};

export default ProjectCard;
