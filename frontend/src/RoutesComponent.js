import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Main from './containers/Main';
import NotFoundPage from './components/NotFoundPage';

const RoutesComponent = () => (
  <Routes>
    <Route
      exact
      path="/"
      element={<Main />}
    />
    <Route
      element={<NotFoundPage />}
      path="*"
    />
  </Routes>
);


RoutesComponent.propTypes = {

};

export default RoutesComponent;
