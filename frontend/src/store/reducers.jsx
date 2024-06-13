import { combineReducers } from '@reduxjs/toolkit';
import appReducer from '../modules/app/reducer';
import catalogReducer from '../modules/catalog/reducer';
import usersReducer from '../modules/users/reducer';
import shoppingReducer from '../modules/shopping/reducer';

const rootReducer = combineReducers({
    app: appReducer,
    catalog: catalogReducer,
    users: usersReducer,
    shopping: shoppingReducer,
});

export default rootReducer;
