import {all, takeLatest, call, put} from 'redux-saga/effects';

import * as Constans from 'constants/system';

function* addToList(action) {
    yield put({
        type: Constans.ADD_SUCCESS,
        payload: action.data
    })
}

export default function* root() {
    yield [
        takeLatest(Constans.ADD_REQUEST, addToList)
    ]
}