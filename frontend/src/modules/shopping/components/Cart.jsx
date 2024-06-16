import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { removeFromCartRequest, updateCartItemRequest } from '../../shopping/cartActions';

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleRemove = (productId) => {
        dispatch(removeFromCartRequest(productId));
        Swal.fire({
            icon: 'success',
            title: 'Eliminado de la cesta',
            text: 'El producto ha sido eliminado de la cesta.',
            showConfirmButton: false,
            timer: 1500
        });
    };

    const handleQuantityChange = (productId, quantity) => {
        dispatch(updateCartItemRequest(productId, quantity));
    };

    if (!cart.items.length) {
        return (
            <Container className="mt-5">
                <h2>Tu carrito está vacío</h2>
            </Container>
        );
    }

    return (
        <Container className="mt-5">
            <h2>Carrito de Compras</h2>
            <Row>
                {cart.items.map(item => (
                    <Col key={item.id} sm={12} md={6} lg={4} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={item.imageURL} alt={item.name} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>{item.description}</Card.Text>
                                <Card.Text>${item.price}</Card.Text>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <Button
                                            variant="danger"
                                            onClick={() => handleRemove(item.id)}
                                        >
                                            <FontAwesomeIcon icon={faTrash} />
                                        </Button>
                                    </div>
                                    <div>
                                        <input
                                            type="number"
                                            min="1"
                                            value={item.quantity}
                                            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                            style={{ width: '60px' }}
                                        />
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <div className="text-end mt-4">
                <Button variant="primary" onClick={() => Swal.fire('Checkout coming soon!')}>
                    Proceder al Pago
                </Button>
            </div>
        </Container>
    );
};

export default Cart;
