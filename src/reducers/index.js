import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import system from './system';
import news from './news';
import movies from './movies';
import movie from './movie';

export default combineReducers({
    router: routerReducer,
    system,
    news,
    movies,
    movie,
})