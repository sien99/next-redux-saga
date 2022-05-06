import { call, put } from 'redux-saga/effects';
import { setJob } from '../../modules/job';
import { requestGetJobs } from '../requests/job';

export function* handleGetJob(action) {
    // handler function CALL requestJob => PUT into redux store
    try {
        // CALL request function, yield similar to await
        const response = yield call(requestGetJobs);
        const { data } = response;

        // PUT into redux store
        yield put(setJob(data));

    } catch (error) {
        console.error(error);
    }
}

// sample response get from API call
// {
//     "data": {
//     "jobs": [
//     {36 items}
//     ],
//     "max_score": null,
//     ...
//     }
// }