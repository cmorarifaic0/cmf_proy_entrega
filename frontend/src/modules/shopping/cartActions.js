// src/modules/shopping/cartActions.js

export const ADD_TO_CART_REQUEST = 'ADD_TO_CART_REQUEST';
export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
export const ADD_TO_CART_FAILURE = 'ADD_TO_CART_FAILURE';

export const REMOVE_FROM_CART_REQUEST = 'REMOVE_FROM_CART_REQUEST';
export const REMOVE_FROM_CART_SUCCESS = 'REMOVE_FROM_CART_SUCCESS';
export const REMOVE_FROM_CART_FAILURE = 'REMOVE_FROM_CART_FAILURE';

export const addToCartRequest = () => ({ type: ADD_TO_CART_REQUEST });
export const addToCartSuccess = (item) => ({ type: ADD_TO_CART_SUCCESS, payload: item });
export const addToCartFailure = (error) => ({ type: ADD_TO_CART_FAILURE, payload: error });

export const removeFromCartRequest = () => ({ type: REMOVE_FROM_CART_REQUEST });
export const removeFromCartSuccess = (itemId) => ({ type: REMOVE_FROM_CART_SUCCESS, payload: itemId });
export const removeFromCartFailure = (error) => ({ type: REMOVE_FROM_CART_FAILURE, payload: error });
