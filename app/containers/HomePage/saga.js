/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_MEDIAS } from 'redux/constants/GetMedias';
import { getMediasSuccess, getMediasFailure } from 'redux/actions/GetMedias';

import request from 'utils/request';

/**
 * Github repos request/response handler
 */
export function* getMediasSaga() {
  try {
    const repos = yield call(request);
    yield put(getMediasSuccess());
  } catch (err) {
    yield put(getMediasFailure(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* root() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(GET_MEDIAS, getMediasSaga);
}
