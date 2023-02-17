import React from 'react';
import T from 'prop-types';

const EmailIcon = ({ color }) => (
  <svg
    height="100%"
    viewBox="0 0 24 24"
    width="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"
      fill={color}
    />
  </svg>
);

EmailIcon.defaultProps = { color: '#F1DAC4' };

EmailIcon.propTypes = { color: T.string };

export default EmailIcon;
