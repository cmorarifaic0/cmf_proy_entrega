import * as actionTypes from './actionTypes';
import backend from '../../backend';


export const fetchCategoriesRequest = () => ({
    type: actionTypes.FETCH_CATEGORIES_REQUEST
});

export const fetchCategoriesSuccess = (categories) => ({
    type: actionTypes.FETCH_CATEGORIES_SUCCESS,
    payload: categories
});

export const fetchCategoriesFailure = (error) => ({
    type: actionTypes.FETCH_CATEGORIES_FAILURE,
    payload: error
});

export const fetchProductsRequest = () => ({
    type: actionTypes.FETCH_PRODUCTS_REQUEST
});

export const fetchProductsSuccess = (products) => ({
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: products
});

export const fetchProductsFailure = (error) => ({
    type: actionTypes.FETCH_PRODUCTS_FAILURE,
    payload: error
});

export const fetchNewlyAddedProductsRequest = () => ({
    type: actionTypes.FETCH_NEWLY_ADDED_PRODUCTS_REQUEST
});

export const fetchNewlyAddedProductsSuccess = (products) => ({
    type: actionTypes.FETCH_NEWLY_ADDED_PRODUCTS_SUCCESS,
    payload: products
});

export const fetchNewlyAddedProductsFailure = (error) => ({
    type: actionTypes.FETCH_NEWLY_ADDED_PRODUCTS_FAILURE,
    payload: error
});

export const fetchProductByIdRequest = () => ({
    type: actionTypes.FETCH_PRODUCT_BY_ID_REQUEST
});

export const fetchProductByIdSuccess = (product) => ({
    type: actionTypes.FETCH_PRODUCT_BY_ID_SUCCESS,
    payload: product
});

export const fetchProductByIdFailure = (error) => ({
    type: actionTypes.FETCH_PRODUCT_BY_ID_FAILURE,
    payload: error
});

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

export const addNewProduct = (product) => ({
    type: actionTypes.ADD_NEW_PRODUCT,
    payload: product,
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



export const findAllCategories = () => async (dispatch) => {
    try {
        const response = await fetch('/api/categories');
        const data = await response.json();
        dispatch({ type: actionTypes.FETCH_CATEGORIES_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: actionTypes.FETCH_CATEGORIES_FAILURE, payload: error.message });
    }
};

