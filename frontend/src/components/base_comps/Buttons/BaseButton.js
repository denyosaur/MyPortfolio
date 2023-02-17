import React from 'react';
import T from 'prop-types';

import { StyledBaseButton } from './styledComponents';

const BaseButton = ({
  disabled,
  label,
  onClick,
  ...restProps
}) => (
  <StyledBaseButton
    disabled={disabled}
    onClick={onClick}
    {...restProps}
  >
    <span className='label'>{label}</span>
  </StyledBaseButton>
);

BaseButton.defaultProps = {
  disabled: false,
  label: 'button',
};

BaseButton.propTypes = {
  disabled: T.bool,
  label: T.string,
  onClick: T.func.isRequired,
};

export default BaseButton;