/**
 * @description Component to conditionally render an error component, a 
 * skeleton component, or a component depending on whether async data is
 * received 
 *  
 * @Param {function}  Component - functional component
 * @Param {boolean}   error - error boolean
 * @Param {boolean}   loading - loading boolean
 * @Param {object}    propsToPassDown - object of component props
 * @Param {function}  SkeletonComponent - functional skeleton component
 */

import React from 'react';
import T from 'prop-types';
import ConditionalRender from '../ConditionalRender';

import ErrorComponent from '../../ErrorComponent';
import LoadingComponent from '../../LoadingComponent';

// import ConditionalRender from './components/base_ui';

const AsyncRender = ({
  Component,
  error,
  loading,
  propsToPassDown,
  SkeletonComponent,
}) => {
  if (error) return <ErrorComponent />

  if (loading) {
    return (
      <ConditionalRender
        Component={SkeletonComponent}
        FallbackComponent={LoadingComponent}
        shouldRender={loading && !!SkeletonComponent}
      />
    )
  }
  return <Component {...propsToPassDown} />
};

AsyncRender.propTypes = {
  Component: T.func.isRequired,
  error: T.bool.isRequired,
  loading: T.bool.isRequired,
  propsToPassDown: T.object,
  SkeletonComponent: T.bool.isRequired,
};

export default AsyncRender;
