// Action Types
export const ADD_TO_CART_REQUEST = 'ADD_TO_CART_REQUEST';
export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
export const ADD_TO_CART_FAILURE = 'ADD_TO_CART_FAILURE';

export const UPDATE_CART_ITEM_REQUEST = 'UPDATE_CART_ITEM_REQUEST';
export const UPDATE_CART_ITEM_SUCCESS = 'UPDATE_CART_ITEM_SUCCESS';
export const UPDATE_CART_ITEM_FAILURE = 'UPDATE_CART_ITEM_FAILURE';

export const REMOVE_FROM_CART_REQUEST = 'REMOVE_FROM_CART_REQUEST';
export const REMOVE_FROM_CART_SUCCESS = 'REMOVE_FROM_CART_SUCCESS';
export const REMOVE_FROM_CART_FAILURE = 'REMOVE_FROM_CART_FAILURE';

export const BUY_REQUEST = 'BUY_REQUEST';
export const BUY_SUCCESS = 'BUY_SUCCESS';
export const BUY_FAILURE = 'BUY_FAILURE';

// Action Creators
export const addToCartRequest = () => ({
    type: ADD_TO_CART_REQUEST
});

export const addToCartSuccess = (item) => ({
    type: ADD_TO_CART_SUCCESS,
    payload: item
});

export const addToCartFailure = (error) => ({
    type: ADD_TO_CART_FAILURE,
    payload: error
});

export const updateCartItemRequest = () => ({
    type: UPDATE_CART_ITEM_REQUEST
});

export const updateCartItemSuccess = (item) => ({
    type: UPDATE_CART_ITEM_SUCCESS,
    payload: item
});

export const updateCartItemFailure = (error) => ({
    type: UPDATE_CART_ITEM_FAILURE,
    payload: error
});

export const removeFromCartRequest = (productId) => ({
    type: REMOVE_FROM_CART_REQUEST,
    payload: productId
});

export const removeFromCartSuccess = (productId) => ({
    type: REMOVE_FROM_CART_SUCCESS,
    payload: productId
});

export const removeFromCartFailure = (error) => ({
    type: REMOVE_FROM_CART_FAILURE,
    payload: error
});

export const buyRequest = () => ({
    type: BUY_REQUEST
});

export const buySuccess = (order) => ({
    type: BUY_SUCCESS,
    payload: order
});

export const buyFailure = (error) => ({
    type: BUY_FAILURE,
    payload: error
});
