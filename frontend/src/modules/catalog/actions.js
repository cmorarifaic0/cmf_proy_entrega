import backend from '../../backend';

export const FIND_ALL_CATEGORIES_COMPLETED = 'FIND_ALL_CATEGORIES_COMPLETED';
export const FIND_PRODUCTS_COMPLETED = 'FIND_PRODUCTS_COMPLETED';
export const CLEAR_PRODUCT_SEARCH = 'CLEAR_PRODUCT_SEARCH';
export const FIND_PRODUCT_BY_ID_COMPLETED = 'FIND_PRODUCT_BY_ID_COMPLETED';
export const CLEAR_PRODUCT = 'CLEAR_PRODUCT';

export const FETCH_NEWLY_ADDED_PRODUCTS_SUCCESS = 'FETCH_NEWLY_ADDED_PRODUCTS_SUCCESS';
export const FETCH_NEWLY_ADDED_PRODUCTS_REQUEST = 'FETCH_NEWLY_ADDED_PRODUCTS_REQUEST';
export const FETCH_NEWLY_ADDED_PRODUCTS_FAILURE = 'FETCH_NEWLY_ADDED_PRODUCTS_FAILURE';
export const ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT';

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const FETCH_PRODUCT_REQUEST = 'FETCH_PRODUCT_REQUEST';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const FETCH_PRODUCT_FAILURE = 'FETCH_PRODUCT_FAILURE';
export const ADD_TO_CART = 'ADD_TO_CART';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';

// Action Creators
export const fetchCategoriesSuccess = (categories) => ({
    type: FETCH_CATEGORIES_SUCCESS,
    payload: categories
});

export const fetchCategoriesFailure = (error) => ({
    type: FETCH_CATEGORIES_FAILURE,
    payload: error
});

export const fetchProductsRequest = () => ({
    type: FETCH_PRODUCTS_REQUEST
});

export const fetchProductsSuccess = (products) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
});

export const fetchProductsFailure = (error) => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: error
});

export const fetchNewlyAddedProductsRequest = () => ({
    type: FETCH_NEWLY_ADDED_PRODUCTS_REQUEST
});

export const fetchNewlyAddedProductsSuccess = (products) => ({
    type: FETCH_NEWLY_ADDED_PRODUCTS_SUCCESS,
    payload: products
});

export const fetchNewlyAddedProductsFailure = (error) => ({
    type: FETCH_NEWLY_ADDED_PRODUCTS_FAILURE,
    payload: error
});

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
    dispatch({ type: FETCH_PRODUCT_REQUEST });
    try {
        const response = await fetch(`/api/products/${id}`);
        const data = await response.json();
        dispatch({ type: FETCH_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FETCH_PRODUCT_FAILURE, payload: error.message });
    }
};

export const addNewProduct = (product) => ({
    type: ADD_NEW_PRODUCT,
    payload: product,
});

export const fetchProductsByCategory = (categoryName) => async (dispatch) => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });
    try {
        const response = await fetch(`/api/products?category=${categoryName}`);
        const data = await response.json();
        dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
    }
};

export const findAllCategories = () => async (dispatch) => {
    try {
        const response = await fetch('/api/categories');
        const data = await response.json();
        dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FETCH_CATEGORIES_FAILURE, payload: error.message });
    }
};
