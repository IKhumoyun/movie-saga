import {all, takeLatest, call, put} from 'redux-saga/effects';
import api from 'services/api';

import * as Constants from 'constants/news';

function* loadTop(action) {
    try {
        const {data} = yield call(api.requestNews.get, `top-headlines`);

        yield put({
            type: Constants.GET_NEWS_SUCCESS,
            payload: data.articles
        })

    } catch (error) {

    }
}

export default function* root() {
    yield [
        takeLatest(Constants.GET_NEWS_REQUEST, loadTop)
    ]
}