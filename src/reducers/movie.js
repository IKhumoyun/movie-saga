import * as Constants from '../constants/movie';

const initialState = {
    detail: {
        data: {},
        isFetched: false,
    },
    trailer: {
        data: [],
        isFetched: false,
    },
    rec: {
        data: [],
        isFetched: false,
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case Constants.LOAD_DETAIL_SUCCESS: {
            return {
                ...state,
                detail: {
                    data: action.payload,
                    isFetched: true,
                }
            }
        }
        case Constants.GET_TRAILER_REQUEST: {
            return {
                ...state,
                trailer: {
                    ...state.trailer,
                    isFetched: false,
                }
            }
        }
        case Constants.GET_TRAILER_SUCCESS: {
            return {
                ...state,
                trailer: {
                    data: action.payload,
                    isFetched: true,
                }
            }
        }
        case Constants.GET_REC_REQUEST: {
            return {
                ...state,
                rec: {
                    ...state.rec,
                    isFetched: false,
                }
            }
        }
        case Constants.GET_REC_SUCCESS: {
            return {
                ...state,
                rec: {
                    data: action.payload.results,
                    isFetched: true,
                }
            }
        }
        default:
            return state;

    }
}