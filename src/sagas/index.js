import { all, fork} from 'redux-saga/effects';

import system from './system';
import news from './news';
import movies from './movies';
import movie from './movie';


export default function* rootSaga() {
    yield all([
        fork(system),
        fork(news),
        fork(movies),
        fork(movie),
    ])
}