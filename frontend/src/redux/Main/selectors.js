import { createSelector } from 'reselect';

import { initialState } from './reducer';

const selectMain = (state) => state.main || initialState;

const makeSelectMain = (prop) => createSelector(
  selectMain,
  (state) => state[prop],
);

const selectContact = () => createSelector(
  makeSelectMain('contact'),
  (contact) => contact,
);

const selectInfo = (prop) => createSelector(
  makeSelectMain('info'),
  (info) => info[prop],
);

const selectPageView = () => createSelector(
  makeSelectMain('pageView'),
  (pageView) => pageView,
);

const selectProjects = () => createSelector(
  makeSelectMain('projects'),
  (projects) => projects,
);

const selectRequestErrors = () => createSelector(
  makeSelectMain('requests'),
  ({ error }) => error,
);

const selectRequestStatus = (prop) => createSelector(
  makeSelectMain('requests'),
  ({ status }) => status[prop],
);

export {
  selectContact,
  selectInfo,
  selectPageView,
  selectProjects,
  selectRequestErrors,
  selectRequestStatus,
}
