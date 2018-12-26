import * as Constants from '../constants/genres';

export const getMovieGenres = () => ({
    type: Constants.GET_GENRES_REQUEST,
});