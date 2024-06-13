import * as actionTypes from './actionTypes';
import backend from '../../backend';


export const setLoading = (isLoading) => ({
    type: actionTypes.SET_LOADING,
    payload: isLoading
});


export const setError = (error) => ({
    type: actionTypes.SET_ERROR,
    payload: error
});


export const clearError = () => ({
    type: actionTypes.CLEAR_ERROR
});


export const setUser = (user) => ({
    type: actionTypes.SET_USER,
    payload: user
});


export const tryLoginFromServiceToken = (callback) => async (dispatch) => {
    try {
        const user = await backend.authService.tryLoginFromServiceToken();
        dispatch(setUser(user));
        callback();
    } catch (error) {
        dispatch(setError(error));
        callback();
    }
};

// Login action
export const login = (username, password) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const user = await backend.authService.login(username, password);
        dispatch(setUser(user));
        dispatch(setLoading(false));
        localStorage.setItem('token', user.token);
    } catch (error) {
        dispatch(setError(error.message));
        dispatch(setLoading(false));
    }
};

// Logout action
export const logout = () => async (dispatch) => {
    try {
        await backend.authService.logout();
        dispatch(setUser(null));
        localStorage.removeItem('token');
    } catch (error) {
        dispatch(setError(error.message));
    }
};

// Fetch application settings
export const fetchAppSettings = () => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const settings = await backend.appService.getSettings();
        dispatch({ type: actionTypes.SET_SETTINGS, payload: settings });
        dispatch(setLoading(false));
    } catch (error) {
        dispatch(setError(error));
        dispatch(setLoading(false));
    }
};
