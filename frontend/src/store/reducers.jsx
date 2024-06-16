import { combineReducers } from '@reduxjs/toolkit';
import appReducer from '../modules/app/reducer';
import catalogReducer from '../modules/catalog/reducer';
import usersReducer from '../modules/users/reducer';
import authReducer from '../modules/users/authReducer';
import cartReducer from '../modules/shopping/cartReducer';

const rootReducer = combineReducers({
    app: appReducer,
    catalog: catalogReducer,
    users: usersReducer,
    auth: authReducer,
    cart: cartReducer,
});

export default rootReducer;
