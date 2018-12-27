import {all, takeLatest, call, put} from 'redux-saga/effects';
import api from 'services/api';

import * as Constants from '../constants/movie';

function* loadMovieDetail(action) {
    try {
        const {data} = yield call(api.requestMovie.get, `/movie/${action.payload.id}`);

        yield put({
            type: Constants.LOAD_DETAIL_SUCCESS,
            payload: data
        })

    } catch (error) {

    }
}

function* getMovieTrailer(action) {
    try {
        const {data} = yield call(api.requestMovie.get, `/movie/${action.payload.id}/videos`);

        yield put({
            type: Constants.GET_TRAILER_SUCCESS,
            payload: data
        })

    } catch (error) {

    }
}

function* getMovieRec(action) {
    try {
        const {data} = yield call(api.requestMovie.get, `/movie/${action.payload.id}/recommendations`);

        yield put({
            type: Constants.GET_REC_SUCCESS,
            payload: data
        })

    } catch (error) {

    }
}

export default function* root() {
    yield [
        takeLatest(Constants.LOAD_DETAIL_REQUEST, loadMovieDetail),
        takeLatest(Constants.GET_TRAILER_REQUEST, getMovieTrailer),
        takeLatest(Constants.GET_REC_REQUEST, getMovieRec),
    ]
}