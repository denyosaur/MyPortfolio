import React, { useEffect } from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchProjects } from '../../redux/Main/actions';
import { selectProjects, selectRequestStatus } from '../../redux/Main/selectors';

import ProjectView from '../../components/Projects';
import { ProjectsContainer } from './styledComponents';

const Projects = ({
  dispatchFetchProjects,
  projects,
  projectsRequestStatus,
}) => {
  useEffect(() => {
    dispatchFetchProjects();
  }, [dispatchFetchProjects]);

  return (
    <ProjectsContainer>
      <ProjectView projects={projects} projectsRequestStatus={projectsRequestStatus} />
    </ProjectsContainer>
  )
}


Projects.propTypes = {
  dispatchFetchProjects: T.func.isRequired,
  projects: T.array.isRequired,
  projectsRequestStatus: T.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  projects: selectProjects(),
  projectsRequestStatus: selectRequestStatus('projects'),
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchProjects: () => dispatch(fetchProjects()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(Projects);
