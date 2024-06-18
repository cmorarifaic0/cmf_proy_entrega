import * as actionTypes from './actionTypes';
import backend from '../backend';
import Swal from 'sweetalert2';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// Action Creators
const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const signupRequest = () => ({ type: SIGNUP_REQUEST });
const signupSuccess = (user) => ({ type: SIGNUP_SUCCESS, payload: user });
const logoutAction = () => ({ type: LOGOUT });
const addToCartSuccess = (item) => ({ type: ADD_TO_CART, payload: item });
const removeFromCartSuccess = (itemId) => ({ type: REMOVE_FROM_CART, payload: itemId });

export const login = (username, password) => async (dispatch) => {
    dispatch(loginRequest());
    try {
        const response = await backend.authService.login(username, password);
        dispatch(loginSuccess(response.data));
        Swal.fire('Iniciado sesión con éxito', '', 'success');
        window.location.href = '/';
    } catch (error) {
        Swal.fire('Error de autenticación', '', 'error');
    }
};

export const signup = (userData) => async (dispatch) => {
    dispatch(signupRequest());
    try {
        const response = await backend.authService.signup(userData);
        dispatch(signupSuccess(response.data));
        Swal.fire('Registro exitoso', '', 'success');
        window.location.href = '/';
    } catch (error) {
        Swal.fire('Error de registro', '', 'error');
    }
};

export const logout = () => (dispatch) => {
    dispatch(logoutAction());
    localStorage.removeItem('token');
    window.location.href = '/login';
};

export const addToCart = (productId, quantity) => async (dispatch) => {
    try {
        const response = await backend.shoppingService.addToCart(productId, quantity);
        dispatch(addToCartSuccess(response.data));
        Swal.fire('Producto añadido al carrito', '', 'success');
    } catch (error) {
        Swal.fire('Error al añadir al carrito', '', 'error');
    }
};

export const removeFromCart = ( productId) => async (dispatch) => {
    try {
        await backend.shoppingService.removeFromCart(productId);
        dispatch(removeFromCartSuccess(productId));
        Swal.fire('Producto eliminado del carrito', '', 'success');
    } catch (error) {
        Swal.fire('Error al eliminar del carrito', '', 'error');
    }
}