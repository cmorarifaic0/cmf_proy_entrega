import * as actionTypes from './actionTypes';
export const addToCartRequest = () => ({
    type: actionTypes.ADD_TO_CART_REQUEST
});

export const addToCartSuccess = (cart) => ({
    type: actionTypes.ADD_TO_CART_SUCCESS,
    payload: cart
});

export const addToCartFailure = (error) => ({
    type: actionTypes.ADD_TO_CART_FAILURE,
    payload: error
});

export const updateCartItemRequest = () => ({
    type: actionTypes.UPDATE_CART_ITEM_REQUEST
});

export const updateCartItemSuccess = (cart) => ({
    type: actionTypes.UPDATE_CART_ITEM_SUCCESS,
    payload: cart
});

export const updateCartItemFailure = (error) => ({
    type: actionTypes.UPDATE_CART_ITEM_FAILURE,
    payload: error
});

export const removeCartItemRequest = () => ({
    type: actionTypes.REMOVE_CART_ITEM_REQUEST
});

export const removeCartItemSuccess = (cart) => ({
    type: actionTypes.REMOVE_CART_ITEM_SUCCESS,
    payload: cart
});

export const removeCartItemFailure = (error) => ({
    type: actionTypes.REMOVE_CART_ITEM_FAILURE,
    payload: error
});

export const buyRequest = () => ({
    type: actionTypes.BUY_REQUEST
});

export const buySuccess = (order) => ({
    type: actionTypes.BUY_SUCCESS,
    payload: order
});

export const buyFailure = (error) => ({
    type: actionTypes.BUY_FAILURE,
    payload: error
});
export const fetchProductsByCategory = (categoryName) => async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_PRODUCTS_REQUEST });
    try {
        const response = await fetch(`/api/products?category=${categoryName}`);
        const data = await response.json();
        dispatch({ type: actionTypes.FETCH_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: actionTypes.FETCH_PRODUCTS_FAILURE, payload: error.message });
    }
};

export const fetchProductById = (id) => async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_PRODUCT_REQUEST });
    try {
        const response = await fetch(`/api/products/${id}`);
        const data = await response.json();
        dispatch({ type: actionTypes.FETCH_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: actionTypes.FETCH_PRODUCT_FAILURE, payload: error.message });
    }
};

export const findAllCategories = () => async (dispatch) => {
    try {
        const response = await fetch('/api/categories');
        const data = await response.json();
        dispatch({ type: actionTypes.FETCH_CATEGORIES_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: actionTypes.FETCH_CATEGORIES_FAILURE, payload: error.message });
    }
};

export const addToCart = (productId) => ({
    type: actionTypes.ADD_TO_CART,
    payload: productId,
});