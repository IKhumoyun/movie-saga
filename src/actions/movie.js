import * as Constants from '../constants/movie';

export const getMovieDetail = (id) => ({
    type: Constants.LOAD_DETAIL_REQUEST,
    payload: {
        id
    }
});

export const getMovieTrailer = (id) => ({
    type: Constants.GET_TRAILER_REQUEST,
    payload: {
        id
    }
});

export const getMovieRec = (id) => ({
    type: Constants.GET_REC_REQUEST,
    payload: {
        id
    }
});