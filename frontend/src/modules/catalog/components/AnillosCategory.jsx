import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { addToCart } from '../../../store/thunks';
import './CollaresCategory.css';

const AnillosCategory = () => {
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
            <h1>Anillos</h1>
            <Container>
                <Row className="my-5">
                    <Col md={4} className="mb-4">
                        <Card className="h-100 p-0">
                            <img src="/src/assets/img/anillo_1.png" className="card-img-top img-fluid h-100 p-0" alt="Anillo 1" />
                            <Card.Body className="card-body">
                                <p className="card-text">Anillo 1</p>
                            </Card.Body>
                            <Card.Footer className="text-center">
                                <Button className="btn banadir" onClick={() => handleAddToCart(1, 'Anillo 1')}>
                                    Añadir a la cesta <FontAwesomeIcon icon={faShoppingCart} />
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="h-100 p-0">
                            <img src="/src/assets/img/anillo_2.png" className="card-img-top img-fluid h-100 p-0" alt="Anillo 2" />
                            <Card.Body className="card-body">
                                <p className="card-text">Anillo 2</p>
                            </Card.Body>
                            <Card.Footer className="text-center">
                                <Button className="btn banadir" onClick={() => handleAddToCart(2, 'Anillo 2')}>
                                    Añadir a la cesta <FontAwesomeIcon icon={faShoppingCart} />
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="h-100 p-0">
                            <img src="/src/assets/img/anillo_3.png" className="card-img-top img-fluid h-100 p-0" alt="Anillo 3" />
                            <Card.Body className="card-body">
                                <p className="card-text">Anillo 3</p>
                            </Card.Body>
                            <Card.Footer className="text-center">
                                <Button className="btn banadir" onClick={() => handleAddToCart(3, 'Anillo 3')}>
                                    Añadir a la cesta <FontAwesomeIcon icon={faShoppingCart} />
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <Row className="my-5">
                    <Col md={4} className="mb-4">
                        <Card className="h-100 p-0">
                            <img src="/src/assets/img/anillo_4.png" className="card-img-top img-fluid h-100 p-0" alt="Anillo 4" />
                            <Card.Body className="card-body">
                                <p className="card-text">Anillo 4</p>
                            </Card.Body>
                            <Card.Footer className="text-center">
                                <Button className="btn banadir" onClick={() => handleAddToCart(4, 'Anillo 4')}>
                                    Añadir a la cesta <FontAwesomeIcon icon={faShoppingCart} />
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="h-100 p-0">
                            <img src="/src/assets/img/anillo_5.png" className="card-img-top img-fluid h-100 p-0" alt="Anillo 5" />
                            <Card.Body className="card-body">
                                <p className="card-text">Anillo 5</p>
                            </Card.Body>
                            <Card.Footer className="text-center">
                                <Button className="btn banadir" onClick={() => handleAddToCart(5, 'Anillo 5')}>
                                    Añadir a la cesta <FontAwesomeIcon icon={faShoppingCart} />
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="h-100 p-0">
                            <img src="/src/assets/img/anillo_6.png" className="card-img-top img-fluid h-100 p-0" alt="Anillo 6" />
                            <Card.Body className="card-body">
                                <p className="card-text">Anillo 6</p>
                            </Card.Body>
                            <Card.Footer className="text-center">
                                <Button className="btn banadir" onClick={() => handleAddToCart(6, 'Anillo 6')}>
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

export default AnillosCategory;
