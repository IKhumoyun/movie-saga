import * as Constants from 'constants/news';

const initialState = {
    all: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case Constants.GET_NEWS_SUCCESS: {
            return {
                ...state,
                all: action.payload
            }
        }
        default:
            return state;

    }
}