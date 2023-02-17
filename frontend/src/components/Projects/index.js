import React, { useEffect, useState } from 'react';
import T from 'prop-types';

import ProjectCard from '../ProjectCard';
import { ProjectsViewContainer } from './styledComponents';

const ProjectsView = ({ projects, projectsRequestStatus }) => {
  const [projectCards, setProjectCards] = useState([]);

  useEffect(() => {
    if (projectsRequestStatus === 'success') {
      const linkComponents = projects.map(({
        githubUrl,
        projectImageUrl,
        projectDescription,
        projectName,
        projectUrl,
        tools,
      }) => (
        <ProjectCard
          key={projectName}
          githubUrl={githubUrl}
          imgUrl={projectImageUrl}
          projectDescription={projectDescription}
          projectName={projectName}
          projectUrl={projectUrl}
          tools={tools}
        />
      ));
      setProjectCards(linkComponents);
    };

  }, [
    projects,
    projectsRequestStatus,
    setProjectCards,
  ]);

  return (
    <ProjectsViewContainer>
      {projectCards}
    </ProjectsViewContainer>
  )
};

ProjectsView.propTypes = {
  projects: T.array.isRequired,
  projectsRequestStatus: T.string.isRequired,
};

export default ProjectsView;
