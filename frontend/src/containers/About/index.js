import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchInfo } from '../../redux/Main/actions';
import { selectInfo, selectRequestStatus } from '../../redux/Main/selectors';

import AboutView from '../../components/About';
import { AboutContainer } from './styledComponents';

const About = ({ dispatchFetchInfo, about, skills }) => (
  <AboutContainer>
    <AboutView about={about} skills={skills} />
  </AboutContainer>
);

About.propTypes = {
  about: T.string.isRequired,
  dispatchFetchInfo: T.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  about: selectInfo('about'),
  infoRequestStatus: selectRequestStatus('about'),
  skills: selectInfo('skills'),
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchInfo: () => dispatch(fetchInfo()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(About);
