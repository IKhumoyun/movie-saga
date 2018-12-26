import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import movies from './movies';
import movie from './movie';
import genres from './genres';

export default combineReducers({
    router: routerReducer,
    movies,
    movie,
    genres,
})