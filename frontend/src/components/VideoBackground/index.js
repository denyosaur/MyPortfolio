import React from 'react';

import backgroundVideo from '../../assets/backgroundVideo.mp4';
import {
  BackgroundContainer,
  StyledVideo,
} from './styledComponents';

const VideoBackground = () => (
  <BackgroundContainer>
    <StyledVideo
      autoPlay
      controls={false}
      loop
      muted
      src={backgroundVideo}
      type="video/mp4"
    />
  </BackgroundContainer >
)

export default VideoBackground;
