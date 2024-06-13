import * as actionTypes from './actionTypes';

const initialState = {
    shoppingCart: [],
    lastOrderId: null,
    orderSearch: {},
    order: null,
};

const shoppingReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOPPING_CART_UPDATED:
            return {
                ...state,
                shoppingCart: action.shoppingCart,
            };
        case actionTypes.BUY_COMPLETED:
            return {
                ...state,
                lastOrderId: action.orderId,
            };
        case actionTypes.FIND_ORDERS_COMPLETED:
            return {
                ...state,
                orderSearch: action.orderSearch,
            };
        case actionTypes.CLEAR_ORDER_SEARCH:
            return {
                ...state,
                orderSearch: {},
            };
        case actionTypes.FIND_ORDER_COMPLETED:
            return {
                ...state,
                order: action.order,
            };
        case actionTypes.CLEAR_ORDER:
            return {
                ...state,
                order: null,
            };
        default:
            return state;
    }
};

export default shoppingReducer;
