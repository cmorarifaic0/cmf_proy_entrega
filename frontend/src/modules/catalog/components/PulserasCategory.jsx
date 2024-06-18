import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { addToCart } from '../../../store/thunks';
const PulserasCategory = () => {
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
            <h1>Pulseras</h1>
            <Container>
                <Row className="my-5">
                    <Col md={4} className="mb-4">
                        <Card className="h-100 p-0">
                            <img src="/src/assets/img/pulsera_1.png" className="card-img-top img-fluid h-100 p-0" alt="Pulsera 1" />
                            <Card.Body className="card-body">
                                <p className="card-text">Pulsera 1</p>
                            </Card.Body>
                            <Card.Footer className="text-center">
                                <Button className="btn botonn" onClick={() => handleAddToCart(1, 'Pulsera 1')}>
                                    Añadir a la cesta <FontAwesomeIcon icon={faShoppingCart} />
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="h-100 p-0">
                            <img src="/src/assets/img/pulsera_2.png" className="card-img-top img-fluid h-100 p-0" alt="Pulsera 2" />
                            <Card.Body className="card-body">
                                <p className="card-text">Pulsera 2</p>
                            </Card.Body>
                            <Card.Footer className="text-center">
                                <Button className="btn botonn" onClick={() => handleAddToCart(2, 'Pulsera 2')}>
                                    Añadir a la cesta <FontAwesomeIcon icon={faShoppingCart} />
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="h-100 p-0">
                            <img src="/src/assets/img/pulsera_3.png" className="card-img-top img-fluid h-100 p-0" alt="Pulsera 3" />
                            <Card.Body className="card-body">
                                <p className="card-text">Pulsera 3</p>
                            </Card.Body>
                            <Card.Footer className="text-center">
                                <Button className="btn botonn" onClick={() => handleAddToCart(3, 'Pulsera 3')}>
                                    Añadir a la cesta <FontAwesomeIcon icon={faShoppingCart} />
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <Row className="my-5">
                    <Col md={4} className="mb-4">
                        <Card className="h-100 p-0">
                            <img src="/src/assets/img/pulsera_4.png" className="card-img-top img-fluid h-100 p-0" alt="Pulsera 4" />
                            <Card.Body className="card-body">
                                <p className="card-text">Pulsera 4</p>
                            </Card.Body>
                            <Card.Footer className="text-center">
                                <Button className="btn botonn" onClick={() => handleAddToCart(4, 'Pulsera 4')}>
                                    Añadir a la cesta <FontAwesomeIcon icon={faShoppingCart} />
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="h-100 p-0">
                            <img src="/src/assets/img/pulsera_5.png" className="card-img-top img-fluid h-100 p-0" alt="Pulsera 5" />
                            <Card.Body className="card-body">
                                <p className="card-text">Pulsera 5</p>
                            </Card.Body>
                            <Card.Footer className="text-center">
                                <Button className="btn botonn" onClick={() => handleAddToCart(5, 'Pulsera 5')}>
                                    Añadir a la cesta <FontAwesomeIcon icon={faShoppingCart} />
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="h-100 p-0">
                            <img src="/src/assets/img/pulsera_6.png" className="card-img-top img-fluid h-100 p-0" alt="Pulsera 6" />
                            <Card.Body className="card-body">
                                <p className="card-text">Pulsera 6</p>
                            </Card.Body>
                            <Card.Footer className="text-center">
                                <Button className="btn botonn" onClick={() => handleAddToCart(6, 'Pulsera 6')}>
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

export default PulserasCategory;
