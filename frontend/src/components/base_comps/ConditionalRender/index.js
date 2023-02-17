/**
 * @description Conditionally render Component or a FallbackComponent depending on the 
 * shouldRender boolean that is passed down.
 *  
 * @Param {function}  Component - functional component
 * @Param {function}  FallbackComponent - functional component
 * @Param {object}    propsToPassDown - object of component props
 * @Param {boolean}   shouldRender - boolean logic to display which Component
 */

import React from 'react';
import T from 'prop-types';

const ConditionalRender = ({
  Component,
  FallbackComponent,
  propsToPassDown,
  shouldRender,
}) => {
  if (shouldRender) {
    return <Component {...propsToPassDown} />
  } else if (!shouldRender && !!FallbackComponent) {
    return <FallbackComponent {...propsToPassDown} />
  } else {
    return null;
  }
};

ConditionalRender.propTypes = {
  Component: T.func.isRequired,
  FallbackComponent: T.func,
  propsToPassDown: T.object,
  shouldRender: T.bool.isRequired,
};

export default ConditionalRender;
