import React from 'react';
import T from 'prop-types';

import ArrowIcon2 from '../../../assets/icons/ArrowIcon2';
import { IndicatorDotWrapper } from './styledComponents';

const IndicatorDot = ({ isActive }) => (
  <IndicatorDotWrapper isActive={isActive} >
    <ArrowIcon2 />
  </IndicatorDotWrapper>
)


IndicatorDot.propTypes = { isActive: T.bool.isRequired }

export default IndicatorDot;
