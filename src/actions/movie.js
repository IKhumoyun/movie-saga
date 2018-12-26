import * as Constants from 'constants/movie';

export const getMovieDetail = (id) => ({
    type: Constants.LOAD_DETAIL_REQUEST,
    payload: {
        id
    }
});