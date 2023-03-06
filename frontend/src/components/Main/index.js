import React from 'react';
import T from 'prop-types';

import VideoBackground from '../VideoBackground';
import Frame from '../Frame';
import Navbar from '../Navbar';
import { viewDictionary } from './constants';
import {
  MainViewContainer,
  MainContainer,
} from './styledComponents';

const MainView = ({
  dispatchChangePageView,
  pageView,
}) => {
  const ViewToRender = viewDictionary[pageView];

  return (
    <MainViewContainer>
      <VideoBackground />
      <Frame />
      <Navbar
        dispatchChangePageView={dispatchChangePageView}
        pageView={pageView}
      />
      <MainContainer>
        <ViewToRender />
      </MainContainer>
    </MainViewContainer>
  )
};

MainView.propTypes = {
  dispatchChangePageView: T.func.isRequired,
  pageView: T.string.isRequired,
};

export default MainView;
