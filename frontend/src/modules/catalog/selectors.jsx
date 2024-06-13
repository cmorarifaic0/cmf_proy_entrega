import { createSelector } from 'reselect';

const getCatalogState = state => state.catalog;

export const getCategories = createSelector(
    [getCatalogState],
    catalog => catalog.categories
);

export const getCategoryName = createSelector(
    [getCategories],
    categories => (id) => {
        if (!categories) {
            return '';
        }

        const category = categories.find(category => category.id === id);
        return category ? category.name : '';
    }
);

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
