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

function* loadMovieSearch(action) {
    try {

        const {data} = yield call(api.requestMovie.get, `/search/movie?query=${action.query}`);

        yield put({
            type: Constants.SEARCH_MOVIES_SUCCESS,
            payload: data.results,
        })

    } catch (error) {

    }
}

export default function* root() {
    yield [
        takeLatest(Constants.GET_MOVIES_REQUEST, loadMovies),
        takeLatest(Constants.SEARCH_MOVIES_REQUEST, loadMovieSearch),
    ]
}