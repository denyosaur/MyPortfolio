import {
  all,
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';

import {
  fetchProjectsFailed,
  fetchProjectsSuccess,
  fetchInfoFailed,
  fetchInfoSuccess,
  fetchContactFailed,
  fetchContactSuccess,
} from './actions';
import {
  FETCH_CONTACT,
  FETCH_INFO,
  FETCH_PROJECTS,
} from './constants';
import { request } from '../helpers';

export function* fetchContactSaga() {
  try {
    const { data: { contactInfo } } = yield call(request, { subdirectory: 'contact', method: "GET" });
    yield put(fetchContactSuccess(contactInfo));
  } catch (error) {
    yield put(fetchContactFailed(error));
  }
};

export function* fetchInfoSaga() {
  try {
    const { data: { info } } = yield call(request, { subdirectory: 'info', method: "GET" });
    yield put(fetchInfoSuccess(info));
  } catch (error) {
    yield put(fetchInfoFailed(error));
  }
};

export function* fetchProjectsSaga() {
  try {
    const { data: { projectsInfo } } = yield call(request, { subdirectory: 'projects', method: "GET" });

    yield put(fetchProjectsSuccess(projectsInfo));
  } catch (error) {
    yield put(fetchProjectsFailed(error));
  }
};

export default function* rootSaga(options) {
  yield all([
    takeLatest(FETCH_CONTACT, fetchContactSaga, options),
    takeLatest(FETCH_INFO, fetchInfoSaga, options),
    takeLatest(FETCH_PROJECTS, fetchProjectsSaga, options),
  ])
}
