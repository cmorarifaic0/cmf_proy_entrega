import * as actionTypes from './actionTypes';
import backend from '../../backend';

// Login actions
export const loginRequest = () => ({
    type: actionTypes.LOGIN_REQUEST
});

export const loginSuccess = (user) => ({
    type: actionTypes.LOGIN_SUCCESS,
    payload: user
});

export const loginFailure = (error) => ({
    type: actionTypes.LOGIN_FAILURE,
    payload: error
});

// Logout action
export const logout = () => ({
    type: actionTypes.LOGOUT
});

// Signup actions
export const signupRequest = () => ({
    type: actionTypes.SIGNUP_REQUEST
});

export const signupSuccess = (user) => ({
    type: actionTypes.SIGNUP_SUCCESS,
    payload: user
});

export const signupFailure = (error) => ({
    type: actionTypes.SIGNUP_FAILURE,
    payload: error
});

// Fetch user profile actions
export const fetchUserProfileRequest = () => ({
    type: actionTypes.FETCH_USER_PROFILE_REQUEST
});

export const fetchUserProfileSuccess = (profile) => ({
    type: actionTypes.FETCH_USER_PROFILE_SUCCESS,
    payload: profile
});

export const fetchUserProfileFailure = (error) => ({
    type: actionTypes.FETCH_USER_PROFILE_FAILURE,
    payload: error
});

// Thunks for async actions
export const login = (username, password) => async (dispatch) => {
    dispatch(loginRequest());
    try {
        const response = await backend.authService.login(username, password);
        dispatch(loginSuccess(response.data));
        localStorage.setItem('token', response.data.token); // Save token in local storage
    } catch (error) {
        dispatch(loginFailure(error.message));
    }
};

export const signup = (userData) => async (dispatch) => {
    dispatch(signupRequest());
    try {
        const response = await backend.authService.signup(userData);
        dispatch(signupSuccess(response.data));
    } catch (error) {
        dispatch(signupFailure(error.message));
    }
};

export const fetchUserProfile = (userId) => async (dispatch) => {
    dispatch(fetchUserProfileRequest());
    try {
        const response = await backend.userService.getUserProfile(userId);
        dispatch(fetchUserProfileSuccess(response.data));
    } catch (error) {
        dispatch(fetchUserProfileFailure(error.message));
    }
};
export const tryLoginFromServiceToken = () => async (dispatch) => {
    try {
        const response = await fetch('/api/auth/login-with-token');
        const data = await response.json();
        dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: actionTypes.LOGIN_FAILURE, payload: error.message });
    }
};

