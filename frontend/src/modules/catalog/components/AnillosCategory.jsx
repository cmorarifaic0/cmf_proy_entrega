import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsByCategory } from '../../../store/thunks';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import './CollaresCategory.css';

const AnillosCategory = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.catalog);

    useEffect(() => {
        dispatch(fetchProductsByCategory('Anillos'));
    }, [dispatch]);

    const addToCart = (productName) => {
        Swal.fire({
            icon: 'success',
            title: 'Añadido a la cesta',
            text: `${productName} ha sido añadido a la cesta.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <Container className='ann'>
        <h1>Anillos</h1>
        <Container>
            <Row className="my-5">
                <Col md={4} className="mb-4">
                    <Card className="h-100 p-0">
                        <img src="/src/assets/img/anillo_1.png" className="card-img-top img-fluid h-100 p-0" alt="..." />
                        <Card.Body className="card-body">
                            <p className="card-text">Anillo 1</p>
                        </Card.Body>
                        <Card.Footer className="text-center">
                            <Button className="btn banadir" onClick={() => addToCart('Anillo 1')}>
                                Añadir a la cesta <FontAwesomeIcon icon={faShoppingCart} />
                            </Button>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card className="h-100 p-0">
                        <img src="/src/assets/img/anillo_2.png" className="card-img-top img-fluid h-100 p-0" alt="..." />
                        <Card.Body className="card-body">
                            <p className="card-text">Anillo 2</p>
                        </Card.Body>
                        <Card.Footer className="text-center">
                            <Button className="btn banadir" onClick={() => addToCart('Anillo 1')}>
                                Añadir a la cesta <FontAwesomeIcon icon={faShoppingCart} />
                            </Button> 
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card className="h-100 p-0">
                        <img src="/src/assets/img/anillo_3.png" className="card-img-top img-fluid h-100 p-0" alt="..." />
                        <Card.Body className="card-body">
                            <p className="card-text">Anillo 3</p>
                        </Card.Body>
                        <Card.Footer className="text-center">
                            <Button className="btn banadir" onClick={() => addToCart('Anillo 1')}>
                                Añadir a la cesta <FontAwesomeIcon icon={faShoppingCart} />
                            </Button> 
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <Row className="my-5">
                <Col md={4} className="mb-4">
                    <Card className="h-100 p-0">
                        <img src="/src/assets/img/anillo_4.png" className="card-img-top img-fluid h-100 p-0" alt="..." />
                        <Card.Body className="card-body">
                            <p className="card-text">Anillo 4</p>
                            
                        </Card.Body>
                        <Card.Footer className="text-center">
                            <Button className="btn banadir" onClick={() => addToCart('Anillo 1')}>
                                Añadir a la cesta <FontAwesomeIcon icon={faShoppingCart} />
                            </Button> 
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card className="h-100 p-0">
                        <img src="/src/assets/img/anillo_5.png" className="card-img-top img-fluid h-100 p-0" alt="..." />
                        <Card.Body className="card-body">
                            <p className="card-text">Anillo 5</p>
                            
                        </Card.Body>
                        <Card.Footer className="text-center">
                            <Button className="btn banadir" onClick={() => addToCart('Anillo 1')}>
                                Añadir a la cesta <FontAwesomeIcon icon={faShoppingCart} />
                            </Button> 
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card className="h-100 p-0">
                        <img src="/src/assets/img/anillo_6.png" className="card-img-top img-fluid h-100 p-0" alt="..." />
                        <Card.Body className="card-body">
                            <p className="card-text">Anillo 6</p>
                            
                        </Card.Body>
                        <Card.Footer className="text-center">
                            <Button className="btn banadir" onClick={() => addToCart('Anillo 1')}>
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
