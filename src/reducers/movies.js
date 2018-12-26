import * as Constants from 'constants/movies';

const initialState = {
    all: [],
    page: 1,
    isFetched: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case Constants.GET_MOVIES_SUCCESS: {
            return {
                ...state,
                all: [
                    ...state.all,
                    ...action.payload
                ],
                isFetched: true
            }
        }
        default:
            return state;

    }
}