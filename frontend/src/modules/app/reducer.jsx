import * as actionTypes from './actionTypes';

const initialState = {
    isLoading: false,
    error: null,
    user: null,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            };
        case actionTypes.SET_ERROR:
            return {
                ...state,
                error: action.error,
            };
        case actionTypes.CLEAR_ERROR:
            return {
                ...state,
                error: null,
            };
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            };
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.user,
            };
        case actionTypes.LOGOUT:
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
};

export default appReducer;
