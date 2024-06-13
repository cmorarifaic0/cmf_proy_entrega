import * as actionTypes from './actionTypes';

const initialState = {
    isAuthenticated: false,
    user: null,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: action.user,
            };
        case actionTypes.LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            };
        default:
            return state;
    }
};

export default usersReducer;
