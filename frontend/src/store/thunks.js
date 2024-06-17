import { 
    loginRequest, loginSuccess, loginFailure, logout,
    signupRequest, signupSuccess, signupFailure,
    fetchUserProfileRequest, fetchUserProfileSuccess, fetchUserProfileFailure
} from '../modules/users/authActions';
import { 
    fetchCategoriesRequest, fetchCategoriesSuccess, fetchCategoriesFailure,
    fetchProductsRequest, fetchProductsSuccess, fetchProductsFailure,
    fetchNewlyAddedProductsRequest, fetchNewlyAddedProductsSuccess, fetchNewlyAddedProductsFailure,
    fetchProductByIdRequest, fetchProductByIdSuccess, fetchProductByIdFailure
} from '../modules/catalog/actions';
import { 
    addToCartRequest, addToCartSuccess, addToCartFailure,
    updateCartItemRequest, updateCartItemSuccess, updateCartItemFailure,
    removeFromCartRequest, removeFromCartSuccess, removeFromCartFailure,
    buyRequest, buySuccess, buyFailure
} from '../modules/shopping/cartActions';

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

export const fetchProductById = (id) => async (dispatch) => {
    dispatch(fetchProductByIdRequest());
    try {
        const response = await backend.catalogService.getProductById(id);
        dispatch(fetchProductByIdSuccess(response.data));
    } catch (error) {
        dispatch(fetchProductByIdFailure(error.message));
    }
};

export const fetchProductsByCategory = (categoryName) => async (dispatch) => {
    dispatch(fetchProductsRequest());
    try {
        const response = await backend.catalogService.getProductsByCategory(categoryName);
        dispatch(fetchProductsSuccess(response.data));
    } catch (error) {
        dispatch(fetchProductsFailure(error.message));
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

export const removeFromCart = (userId, shoppingCartId, productId) => async (dispatch) => {
    dispatch(removeFromCartRequest());
    try {
        const params = { productId };
        const response = await backend.shoppingService.removeCartItem(userId, shoppingCartId, params);
        dispatch(removeFromCartSuccess(response.data));
    } catch (error) {
        dispatch(removeFromCartFailure(error.message));
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

export const fetchNewlyAddedProducts = () => async (dispatch) => {
    dispatch(fetchNewlyAddedProductsRequest());
    try {
        const response = await backend.catalogService.getNewlyAddedProducts();
        dispatch(fetchNewlyAddedProductsSuccess(response.data));
    } catch (error) {
        dispatch(fetchNewlyAddedProductsFailure(error.message));
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

export const loginUser = (credentials) => async (dispatch) => {
    dispatch(loginRequest());
    try {
        const response = await backend.authService.login(credentials.username, credentials.password);
        dispatch(loginSuccess(response.data));
    } catch (error) {
        dispatch(loginFailure(error.message));
    }
};
