import apiClient from '../../../axiosConfig';

const shoppingService = {
    addToCart: (userId, shoppingCartId, params) => {
        return apiClient.post(`/users/${userId}/cart/${shoppingCartId}/items`, params);
    },
    // other methods can go here
};

export default shoppingService;
