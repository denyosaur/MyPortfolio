/**
 * GETs the list from the backend API
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_LIST } from 'containers/App/constants';
import { listLoaded, listLoadingError } from 'containers/App/actions';

import request from 'utils/request';

/**
 * ListOfStrings Request handler
 */
export function* getProjectsSaga() {
    try {
        // Call our request helper to make a fetch for GET to the URL that is passed to call()
        const listOfStrings = yield call(
            request,
            `http://localhost:3000/strings/get-array/`,
        );

        // instructs Saga to dispatch and action (listLoaded) to Redux. Awaits for the call() to be fulfilled
        yield put(listLoaded(listOfStrings));
    } catch (err) {
        // instructs Saga to dispatch and action (listLoadingError) to Redux. Awaits for the call() to be fulfilled and sends any errors to Redux
        yield put(listLoadingError(err));
    }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* projectsWatcher() {
    // listData() looks for LOAD_LIST actions. Once action is seen, runs getList()
    // It cancels automatically on component unmount
    yield takeLatest(LOAD_LIST, getListSaga);
}