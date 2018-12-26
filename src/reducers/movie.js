import * as Constants from 'constants/movie';

const initialState = {
    all: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case Constants.LOAD_DETAIL_SUCCESS: {
            return {
                ...state,
                all: action.payload,
            }
        }
        default:
            return state;

    }
}