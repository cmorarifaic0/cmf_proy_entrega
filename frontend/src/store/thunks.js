import { 
    loginRequest, loginSuccess, loginFailure, logout,
    signupRequest, signupSuccess, signupFailure,
    fetchUserProfileRequest, fetchUserProfileSuccess, fetchUserProfileFailure
} from '../modules/users/actions';
import { 
    fetchCategoriesRequest, fetchCategoriesSuccess, fetchCategoriesFailure,
    fetchProductsRequest, fetchProductsSuccess, fetchProductsFailure,
    fetchNewlyAddedProductsRequest, fetchNewlyAddedProductsSuccess, fetchNewlyAddedProductsFailure,
    fetchProductByIdRequest, fetchProductByIdSuccess, fetchProductByIdFailure
} from '../modules/catalog/actions';
import { 
    addToCartRequest, addToCartSuccess, addToCartFailure,
    updateCartItemRequest, updateCartItemSuccess, updateCartItemFailure,
    removeCartItemRequest, removeCartItemSuccess, removeCartItemFailure,
    buyRequest, buySuccess, buyFailure
} from '../modules/shopping/actions';
import backend from '../backend';

// User thunks

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


export const fetchCategories = () => async (dispatch) => {
    dispatch(fetchCategoriesRequest());
    try {
        const response = await backend.catalogService.getCategories();
        dispatch(fetchCategoriesSuccess(response.data));
    } catch (error) {
        dispatch(fetchCategoriesFailure(error.message));
    }
};

export const fetchProducts = () => async (dispatch) => {
    dispatch(fetchProductsRequest());
    try {
        const response = await backend.catalogService.getProducts();
        dispatch(fetchProductsSuccess(response.data));
    } catch (error) {
        dispatch(fetchProductsFailure(error.message));
    }
};

export const fetchNewlyAddedProducts = () => async (dispatch) => {
    dispatch(fetchNewlyAddedProductsRequest());
    try {
        const response = await backend.catalogService.getNewlyAddedProducts();
        dispatch(fetchNewlyAddedProductsSuccess(response.data));
    } catch (error) {
        dispatch(fetchNewlyAddedProductsFailure(error.message));
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

export const addToCart = (userId, shoppingCartId, productId, quantity) => async (dispatch) => {
    dispatch(addToCartRequest());
    try {
        const params = { productId, quantity };
        const response = await backend.shoppingService.addToCart(userId, shoppingCartId, params);
        dispatch(addToCartSuccess(response.data));
    } catch (error) {
        dispatch(addToCartFailure(error.message));
    }
};

export const updateCartItemQuantity = (userId, shoppingCartId, productId, quantity) => async (dispatch) => {
    dispatch(updateCartItemRequest());
    try {
        const params = { productId, quantity };
        const response = await backend.shoppingService.updateCartItemQuantity(userId, shoppingCartId, params);
        dispatch(updateCartItemSuccess(response.data));
    } catch (error) {
        dispatch(updateCartItemFailure(error.message));
    }
};

export const removeCartItem = (userId, shoppingCartId, productId) => async (dispatch) => {
    dispatch(removeCartItemRequest());
    try {
        const params = { productId };
        const response = await backend.shoppingService.removeCartItem(userId, shoppingCartId, params);
        dispatch(removeCartItemSuccess(response.data));
    } catch (error) {
        dispatch(removeCartItemFailure(error.message));
    }
};

export const buy = (userId, shoppingCartId, postalAddress, postalCode) => async (dispatch) => {
    dispatch(buyRequest());
    try {
        const params = { postalAddress, postalCode };
        const response = await backend.shoppingService.buy(userId, shoppingCartId, params);
        dispatch(buySuccess(response.data));
    } catch (error) {
        dispatch(buyFailure(error.message));
    }
};
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

export const loginUser = ({ email, password }) => async (dispatch) => {
    dispatch(loginRequest());
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        if (!response.ok) {
            throw new Error('Login failed');
        }
        const data = await response.json();
        dispatch(loginSuccess(data));
    } catch (error) {
        dispatch(loginFailure(error.message));
    }
};
