import * as Constants from '../constants/movies';

export const getTopMovies = (page) => ({
    type: Constants.GET_MOVIES_REQUEST,
    page,
});