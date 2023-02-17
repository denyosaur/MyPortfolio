import React from 'react';
import T from 'prop-types';

const ArrowIcon2 = ({ color }) => (
  <svg
    height="75%"
    viewBox="0 0 24 24"
    width="75%"
    xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"
        fill={color}
      />
  </svg>
);

ArrowIcon2.defaultProps = { color: '#F1DAC4' };

ArrowIcon2.propTypes = { color: T.string };

export default ArrowIcon2;
