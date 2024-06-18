// src/modules/shopping/cartReducer.js

import {
    ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, ADD_TO_CART_FAILURE,
    REMOVE_FROM_CART_REQUEST, REMOVE_FROM_CART_SUCCESS, REMOVE_FROM_CART_FAILURE
} from './cartActions';

const initialState = {
    items: [],
    loading: false,
    error: null
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART_REQUEST:
        case REMOVE_FROM_CART_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case ADD_TO_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                items: [...state.items, action.payload]
            };
        case REMOVE_FROM_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                items: state.items.filter(item => item.id !== action.payload)
            };
        case ADD_TO_CART_FAILURE:
        case REMOVE_FROM_CART_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default cartReducer;
