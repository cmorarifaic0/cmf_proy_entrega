import {
    ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, ADD_TO_CART_FAILURE,
    UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE,
    REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, REMOVE_CART_ITEM_FAILURE,
    BUY_REQUEST, BUY_SUCCESS, BUY_FAILURE
} from './cartActions';

const initialState = {
    items: [],
    loading: false,
    error: null
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART_REQUEST:
        case UPDATE_CART_ITEM_REQUEST:
        case REMOVE_CART_ITEM_REQUEST:
        case BUY_REQUEST:
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
        case UPDATE_CART_ITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                items: state.items.map(item =>
                    item.id === action.payload.id ? action.payload : item
                )
            };
        case REMOVE_CART_ITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                items: state.items.filter(item => item.id !== action.payload)
            };
        case BUY_SUCCESS:
            return {
                ...state,
                loading: false,
                items: []
            };
        case ADD_TO_CART_FAILURE:
        case UPDATE_CART_ITEM_FAILURE:
        case REMOVE_CART_ITEM_FAILURE:
        case BUY_FAILURE:
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
