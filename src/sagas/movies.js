import {all, takeLatest, call, put} from 'redux-saga/effects';
import api from 'services/api';

import * as Constants from '../constants/movies';

function* loadMovies(action) {
    try {

        const {data} = yield call(api.requestMovie.get, `/movie/popular?page=${action.page}`);

        yield put({
            type: Constants.GET_MOVIES_SUCCESS,
            payload: data.results,
            page: data.page
        })

    } catch (error) {

    }
}

export default function* root() {
    yield [
        takeLatest(Constants.GET_MOVIES_REQUEST, loadMovies),
    ]
}