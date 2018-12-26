import { all, fork} from 'redux-saga/effects';

import movies from './movies';
import movie from './movie';
import genres from './genres';


export default function* rootSaga() {
    yield all([
        fork(movies),
        fork(movie),
        fork(genres),
    ])
}