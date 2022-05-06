import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware  from 'redux-saga';
import jobReducer from './modules/job';
import { watcherSaga } from './sagas/rootSaga';

const reducer = combineReducers({
    job: jobReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;