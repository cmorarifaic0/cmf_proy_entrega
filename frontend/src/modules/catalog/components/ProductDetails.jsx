import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartActions';
import { Button } from 'react-bootstrap';

const conversionRate = 0.85; // 1 USD = 0.85 EUR

const ProductDetails = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>€{(product.price * conversionRate).toFixed(2)}</p>
            <Button onClick={handleAddToCart}>Add to Cart</Button>
        </div>
    );
};

export default ProductDetails;
