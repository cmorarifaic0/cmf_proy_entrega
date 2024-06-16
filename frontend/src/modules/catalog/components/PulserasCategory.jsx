import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsByCategory } from '../../../store/thunks';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import './CollaresCategory.css';

const PulserasCategory = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.catalog);

    useEffect(() => {
        dispatch(fetchProductsByCategory('Pulseras'));
    }, [dispatch]);

    const addToCart = (productName) => {
        Swal.fire({
            icon: 'success',
            title: 'Añadido a la cesta',
            text: `${productName} ha sido añadido a tu cesta.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <Container className='cnt'>
            <h1>Pulseras</h1>
            <Container>
                <Row className="my-5">
                    {products && products.map(product => (
                        <Col key={product.id} md={4} className="mb-4">
                            <Card className="h-100 p-0">
                                <img src={product.imageURL} className="card-img-top img-fluid  h-100 p-0" alt={product.name} />
                                <Card.Body className="card-body">
                                    <p className="card-text">{product.name}</p>
                                </Card.Body>
                                <Card.Footer className="text-center">
                                    <Button className="btn bPulsera" onClick={() => addToCart(product.name)}>
                                        Añadir a la cesta <FontAwesomeIcon icon={faShoppingCart} />
                                    </Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container>
    );
};

export default PulserasCategory;
