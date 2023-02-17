import React from 'react';

import {
  FrameContainer,
  HorizontalFrame,
  VerticalFrame,
} from './styledComponents';

const Frame = () => (
  <FrameContainer>
    <VerticalFrame isTop />
    <VerticalFrame isBottom />
    <HorizontalFrame isLeft />
    <HorizontalFrame isRight />
  </FrameContainer>
)

export default Frame;
