/**
 * Asynchronously loads the component
 */

import React from 'react';
import loadable from 'utils/loadable';
import LoadingCircle from 'components/base_comp/LoadingCircle';

export default loadable(
  () => import('./index'),
  { fallback: <LoadingCircle /> }
);
