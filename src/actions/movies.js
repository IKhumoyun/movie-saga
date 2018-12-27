import * as Constants from '../constants/movies';

export const getTopMovies = (page) => ({
    type: Constants.GET_MOVIES_REQUEST,
    page,
});

export const loadMovieSearch = (query) => ({
    type: Constants.SEARCH_MOVIES_REQUEST,
    query,
});