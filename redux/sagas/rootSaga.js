import { takeLatest } from 'redux-saga/effects';
import { GET_JOB } from '../modules/job';
import { handleGetJob } from './handlers/job';

// watch actions made by redux call
// Flow start here
export function* watcherSaga() {
    yield takeLatest(GET_JOB, handleGetJob);
};