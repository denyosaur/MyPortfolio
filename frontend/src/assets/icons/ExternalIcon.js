import React from 'react';
import T from 'prop-types';

const ExternalIcon = ({ color }) => {
  const styles = {
    'WebkitTransform': "rotate(45deg)",
    'MozTransform': "rotate(45deg)",
    'msTransform': "rotate(45deg)",
    'OTransform': "rotate(45deg)",
    'transform': "rotate(45deg)",
  };

  return (
    <svg
      clipRule="evenodd"
      fillRule="evenodd"
      height="100%"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      style={styles}
      viewBox="0 -3 24 24"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m18.787 9.473s-4.505-4.502-6.259-6.255c-.147-.146-.339-.22-.53-.22-.192 0-.384.074-.531.22-1.753 1.753-6.256 6.252-6.256 6.252-.147.147-.219.339-.217.532.001.19.075.38.221.525.292.293.766.295 1.056.004l4.977-4.976v14.692c0 .414.336.75.75.75.413 0 .75-.336.75-.75v-14.692l4.978 4.978c.289.29.762.287 1.055-.006.145-.145.219-.335.221-.525.002-.192-.07-.384-.215-.529z"
        fill={color}
        fillRule="nonzero"
      />
    </svg>
  );
};

ExternalIcon.defaultProps = { color: '#F1DAC4' };

ExternalIcon.propTypes = { color: T.string };

export default ExternalIcon;