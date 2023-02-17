import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectInfo } from '../../redux/Main/selectors';

import HomepageView from '../../components/Homepage';
import { HomepageContainer } from './styledComponents';

const Homepage = ({ info }) => (
  <HomepageContainer>
    <HomepageView info={info} />
  </HomepageContainer>
);

Homepage.propTypes = { info: T.string.isRequired };

const mapStateToProps = createStructuredSelector({ info: selectInfo('info') });

const withConnect = connect(mapStateToProps);

export default withConnect(Homepage);
