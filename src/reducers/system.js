import * as Constants from 'constants/system';

const initialState = {
    list: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case Constants.ADD_SUCCESS: {
            return {
                ...state,
                list: [
                    ...state.list,
                    action.payload
                ]

            }
        }
        default:
            return state;

    }
}