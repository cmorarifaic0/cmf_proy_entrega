
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions';

const AddToShoppingCart = ({ productId }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(productId));
    };

    return (
        <button onClick={handleAddToCart} className="btn btn-primary mt-3">
            Add to Cart
        </button>
    );
};

export default AddToShoppingCart;
