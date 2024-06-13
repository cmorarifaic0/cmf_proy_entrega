import * as actionTypes from './actionTypes';

const initialState = {
    categories: [],
    productSearch: {},
    product: null,
    products: [],
    newlyAddedProducts: [],
    loading: false,
    error: null
};

const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PRODUCTS_REQUEST:
            return { ...state, loading: true, error: null };
        case actionTypes.FETCH_PRODUCTS_SUCCESS:
            return { ...state, loading: false, products: action.payload };
        case actionTypes.FETCH_PRODUCTS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case actionTypes.FIND_ALL_CATEGORIES_COMPLETED:
            return { ...state, categories: action.categories };
        case actionTypes.FIND_PRODUCTS_COMPLETED:
            return { ...state, productSearch: action.productSearch };
        case actionTypes.CLEAR_PRODUCT_SEARCH:
            return { ...state, productSearch: {} };
        case actionTypes.FIND_PRODUCT_BY_ID_COMPLETED:
            return { ...state, product: action.product };
        case actionTypes.CLEAR_PRODUCT:
            return { ...state, product: null };
        case actionTypes.FETCH_NEWLY_ADDED_PRODUCTS_SUCCESS:
            return { ...state, newlyAddedProducts: action.payload };
        case actionTypes.FETCH_NEWLY_ADDED_PRODUCTS_REQUEST:
            return { ...state, loading: true, error: null };
        case actionTypes.FETCH_NEWLY_ADDED_PRODUCTS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default catalogReducer;