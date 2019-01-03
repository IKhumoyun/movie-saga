import * as Constants from '../constants/movies';

const initialState = {
    all: [],
    page: 1,
    isFetched: false,
    searchText: '',
    searchItems: [],
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
                page: action.page,
                isFetched: true
            }
        }
        case Constants.SEARCH_MOVIES_REQUEST:
            return {
                ...state,
                searchItems: [],
                search_text: action.search_text,
                isFetched: false
            };
        case Constants.SEARCH_MOVIES_SUCCESS:
            return {
                ...state,
                searchItems: action.payload,
                isFetched: true
            };

        default:
            return state;

    }
}