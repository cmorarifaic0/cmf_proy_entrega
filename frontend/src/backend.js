import apiClient from './axiosConfig';

const backend = {
    authService: {
        login: (username, password) => apiClient.post('/auth/login', { username, password }),
        signup: (userData) => apiClient.post('/auth/register', userData),
        getUserProfile: (userId) => apiClient.get(`/users/${userId}`),
    },
    shoppingService: {
        addToCart: (productId, quantity) => apiClient.post(`/cart/add`, { productId, quantity }),
    },
    init: (errorHandler) => {
        apiClient.interceptors.response.use(
            (response) => response,
            (error) => {
                errorHandler(error);
                return Promise.reject(error);
            }
        );
    },
};

export default backend;
