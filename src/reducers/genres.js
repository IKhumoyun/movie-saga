import * as Constants from '../constants/genres';

const initialState = {
    all: [],
    isFetched: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case Constants.GET_GENRES_REQUEST:
            return {
                ...state,
                all: [],
                isFetched: false
            };
        case Constants.GET_GENRES_SUCCESS:
            return {
                ...state,
                all: action.payload.genres,
                isFetched: true
            };
        default:
            return state
    }
};