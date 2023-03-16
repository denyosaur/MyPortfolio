import React, { useEffect, useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import T from 'prop-types';

import {
  changeColorView,
  changePageView,
  fetchInfo,
} from '../../redux/Main/actions';
import { selectPageView, selectRequestStatus } from '../../redux/Main/selectors';

import { ConditionalRender } from '../../components/base_comps';
import LandingPage from '../../components/LandingPage';
import MainView from '../../components/Main';
import { Container } from './styledComponents';

const Main = ({
  dispatchChangePageView,
  dispatchFetchInfo,
  infoRequestStatus,
  pageView,
}) => {
  const [loadSuccess, setLoadSuccess] = useState(false);
  const [fadeOutLanding, setFadeOutLanding] = useState(false);
  const propsToPassDown = {
    dispatchChangePageView,
    fadeOutLanding,
    infoRequestStatus,
    pageView,
  };

  useEffect(() => {
    if (infoRequestStatus === 'idle') {
      dispatchFetchInfo();
    } else if (infoRequestStatus === 'failed') {
      setTimeout(() => {
        dispatchFetchInfo();
      }, 4000);
    } else if (infoRequestStatus === 'success') {
      setFadeOutLanding(true);
      setTimeout(() => {
        setLoadSuccess(true);
      }, 1000);
    }
  }, [
    dispatchFetchInfo,
    infoRequestStatus,
    setFadeOutLanding,
    setLoadSuccess,
  ]);

  return (
    <Container>
      <ConditionalRender
        Component={MainView}
        FallbackComponent={LandingPage}
        propsToPassDown={propsToPassDown}
        shouldRender={loadSuccess}
      />
    </Container>
  );
};

Main.propTypes = {
  dispatchChangeColorView: T.func.isRequired,
  dispatchChangePageView: T.func.isRequired,
  dispatchFetchInfo: T.func.isRequired,
  infoRequestStatus: T.string.isRequired,
  pageView: T.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  pageView: selectPageView(),
  infoRequestStatus: selectRequestStatus('info'),
});

const mapDispatchToProps = (dispatch) => ({
  dispatchChangeColorView: (payload) => dispatch(changeColorView(payload)),
  dispatchChangePageView: (payload) => dispatch(changePageView(payload)),
  dispatchFetchInfo: () => dispatch(fetchInfo()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Main);
