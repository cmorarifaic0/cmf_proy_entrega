import * as actionTypes from './actionTypes';

const initialState = {
    user: null,
    token: null,
    loading: false,
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_REQUEST:
            return { ...state, loading: true, error: null };
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                loading: false,
            };
        case actionTypes.LOGIN_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case actionTypes.LOGOUT:
            return { ...state, user: null, token: null };
        default:
            return state;
    }
};

export default authReducer;
