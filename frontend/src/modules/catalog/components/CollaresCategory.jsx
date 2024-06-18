import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { addToCart } from '../../../store/thunks';
import './CollaresCategory.css';

const CollaresCategory = () => {
    const dispatch = useDispatch();

    const handleAddToCart = (productId, productName) => {
        const quantity = 1;

        console.log('Adding to cart:', { productId, quantity });

        dispatch(addToCart(productId, quantity))
            .then(() => {
                Swal.fire({
                    title: "Añadido",
                    iconHtml: '<img src="/src/assets/img/fresa_shake_shake.gif" style="width: 150px; height: 150px;">',
                    text: `${productName} ha sido añadido a la cesta.`,
                    showConfirmButton: false,
                    timer: 1500,
                    customClass: {
                        icon: 'no-border'
                    }
                });
            })
            .catch((error) => {
                console.error('Error adding to cart:', error);
                Swal.fire({
                    title: "Error",
                    text: `Hubo un problema al añadir ${productName} a la cesta.`,
                    icon: "error",
                });
            });
    };

    return (
        <Container className='cnt'>
            <h1>Collares</h1>
            <Container>
                <Row className="my-5">
                    <Col md={4} className="mb-4">
                        <Card className="h-100 p-0">
                            <img src="/src/assets/img/banner_10.jpg" className="card-img-top img-fluid h-100 p-0" alt="Collar 1" />
                            <Card.Body className="card-body">
                                <p className="card-text">Collar 1</p>
                            </Card.Body>
                            <Card.Footer className="text-center">
                                <Button className="btn botonn" onClick={() => handleAddToCart(1, 'Collar 1')}>
                                    Añadir a la cesta <FontAwesomeIcon icon={faShoppingCart} />
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="h-100 p-0">
                            <img src="/src/assets/img/banner_11.jpg" className="card-img-top img-fluid h-100 p-0" alt="Collar 2" />
                            <Card.Body className="card-body">
                                <p className="card-text">Collar 2</p>
                            </Card.Body>
                            <Card.Footer className="text-center">
                                <Button className="btn botonn" onClick={() => handleAddToCart(2, 'Collar 2')}>
                                    Añadir a la cesta <FontAwesomeIcon icon={faShoppingCart} />
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="h-100 p-0">
                            <img src="/src/assets/img/banner_12.jpg" className="card-img-top img-fluid h-100 p-0" alt="Collar 3" />
                            <Card.Body className="card-body">
                                <p className="card-text">Collar 3</p>
                            </Card.Body>
                            <Card.Footer className="text-center">
                                <Button className="btn botonn" onClick={() => handleAddToCart(3, 'Collar 3')}>
                                    Añadir a la cesta <FontAwesomeIcon icon={faShoppingCart} />
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <Row className="my-5">
                    <Col md={4} className="mb-4">
                        <Card className="h-100 p-0">
                            <img src="/src/assets/img/banner_13.jpg" className="card-img-top img-fluid h-100 p-0" alt="Collar 4" />
                            <Card.Body className="card-body">
                                <p className="card-text">Collar 4</p>
                            </Card.Body>
                            <Card.Footer className="text-center">
                                <Button className="btn botonn" onClick={() => handleAddToCart(4, 'Collar 4')}>
                                    Añadir a la cesta <FontAwesomeIcon icon={faShoppingCart} />
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="h-100 p-0">
                            <img src="/src/assets/img/banner_17.jpg" className="card-img-top img-fluid h-100 p-0" alt="Collar 5" />
                            <Card.Body className="card-body">
                                <p className="card-text">Collar 5</p>
                            </Card.Body>
                            <Card.Footer className="text-center">
                                <Button className="btn botonn" onClick={() => handleAddToCart(5, 'Collar 5')}>
                                    Añadir a la cesta <FontAwesomeIcon icon={faShoppingCart} />
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="h-100 p-0">
                            <img src="/src/assets/img/banner_9.jpg" className="card-img-top img-fluid h-100 p-0" alt="Collar 6" />
                            <Card.Body className="card-body">
                                <p className="card-text">Collar 6</p>
                            </Card.Body>
                            <Card.Footer className="text-center">
                                <Button className="btn botonn" onClick={() => handleAddToCart(6, 'Collar 6')}>
                                    Añadir a la cesta <FontAwesomeIcon icon={faShoppingCart} />
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default CollaresCategory;
