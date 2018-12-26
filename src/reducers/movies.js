import * as Constants from 'constants/movies';

const initialState = {
    all: [],
    page: 1
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
                page: action.page
            }
        }
        default:
            return state;

    }
}