import fetch from 'node-fetch';
import {CHANGE, CHANGE_BACK} from './actionTypes';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
    try {
        const user = yield call(getTest);
        console.log(user);
        yield put({type: "USER_FETCH_SUCCEEDED", user: user});
    } catch (e) {
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function getTest() {
    //keep in minds CORS when setting up the express api
    return fetch('https://eztv.ag/',)
        .then(res => res.text());
}

function* mySaga() {
    yield takeLatest(CHANGE, fetchUser);
}

export default mySaga;