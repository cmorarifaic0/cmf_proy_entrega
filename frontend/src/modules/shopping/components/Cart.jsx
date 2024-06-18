import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart } from '../store/cartActions';
import { Button, ListGroup, Container, Card } from 'react-bootstrap';

const conversionRate = 0.85; // 1 USD = 0.85 EUR

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    const handleRemove = (itemId) => {
        dispatch(removeFromCart(itemId));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <Card className="w-100" style={{ maxWidth: '600px' }}>
                <Card.Body>
                    <h2 className="text-center mb-4">Cart</h2>
                    <ListGroup>
                        {cartItems.map(item => (
                            <ListGroup.Item key={item.id}>
                                {item.name} - €{(item.price * conversionRate).toFixed(2)}
                                <Button
                                    variant="danger"
                                    className="float-end"
                                    onClick={() => handleRemove(item.id)}
                                >
                                    Remove
                                </Button>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                    <Button className="w-100 mt-3" variant="danger" onClick={handleClearCart}>
                        Clear Cart
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Cart;
