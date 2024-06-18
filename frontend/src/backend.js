import axios from 'axios';

const API_URL = 'http://localhost:9000/api/auth';

const apiClient = axios.create({
    baseURL: 'http://localhost:9000/api',
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true 
});

const backend = {
    authService: {
        login: (username, password) => {
            return apiClient.post(`${API_URL}/login`, { username, password });
        },
        signup: (userData) => {
            return apiClient.post(`${API_URL}/signup`, userData);
        },
        getUserProfile: (userId) => {
            return apiClient.get(`${API_URL}/user/${userId}`);
        }
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
