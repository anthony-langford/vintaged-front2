import fetch from 'node-fetch';
import {CHANGE, CHANGE_BACK, FETCH_VINTAGES} from './actionTypes';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchVintages(action) {
    try {
        const vintagesList = yield call(getTest);
        console.log(vintagesList);
        yield put({type: FETCH_VINTAGES, list: vintagesList});
    } catch (e) {
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function getTest() {
    //keep in minds CORS when setting up the express api
    return fetch('http://localhost:3001/vintage',)
        .then(res => res.json());
}

function* mySaga() {
    yield takeLatest(CHANGE, fetchVintages);
}

export default mySaga;