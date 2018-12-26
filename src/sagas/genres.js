import {all, takeLatest, call, put} from 'redux-saga/effects';
import api from 'services/api';

import * as Constants from '../constants/genres';

function* loadMovieGenres() {
    try {
        const {data} = yield call(api.requestMovie.get, `/genre/movie/list`);

        yield put({
            type: Constants.GET_GENRES_SUCCESS,
            payload: data.results,
            page: data.page
        })

    } catch (error) {

    }
}

export default function* root() {
    yield [
        takeLatest(Constants.GET_GENRES_REQUEST, loadMovieGenres)
    ]
}