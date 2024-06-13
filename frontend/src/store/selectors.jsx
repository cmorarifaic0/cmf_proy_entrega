import { createSelector } from 'reselect';

// App State Selectors
export const getAppState = state => state.app;

export const getUser = createSelector(
    [getAppState],
    app => app.user
);

export const getUserName = createSelector(
    [getUser],
    user => user ? user.name : null
);

export const isUserLoggedIn = createSelector(
    [getUser],
    user => !!user
);

export const isAppLoading = createSelector(
    [getAppState],
    app => app.isLoading
);

export const getAppError = createSelector(
    [getAppState],
    app => app.error
);

// Catalog State Selectors
const getCatalogState = state => state.catalog;

export const getCategories = createSelector(
    [getCatalogState],
    catalog => catalog.categories
);

export const getCategoryName = (categories, id) => {
    if (!categories) {
        return '';
    }

    const category = categories.find(category => category.id === id);

    if (!category) {
        return '';
    }

    return category.name;
};

export const getProductSearch = createSelector(
    [getCatalogState],
    catalog => catalog.productSearch
);

export const getProduct = createSelector(
    [getCatalogState],
    catalog => catalog.product
);

export const getProducts = createSelector(
    [getCatalogState],
    catalog => catalog.products
);

export const getNewlyAddedProducts = createSelector(
    [getCatalogState],
    catalog => catalog.newlyAddedProducts || []
);

// Shopping State Selectors
const getShoppingState = state => state.shopping;

export const getShoppingCart = createSelector(
    [getShoppingState],
    shopping => shopping.shoppingCart
);

export const getLastOrderId = createSelector(
    [getShoppingState],
    shopping => shopping.lastOrderId
);

export const getOrderSearch = createSelector(
    [getShoppingState],
    shopping => shopping.orderSearch
);

export const getOrder = createSelector(
    [getShoppingState],
    shopping => shopping.order
);



export const getProductsByCategory = createSelector(
    [getProducts, (state, categoryName) => categoryName],
    (products, categoryName) => products.filter(product => product.category === categoryName)
);