import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { addToCart } from '../../../store/thunks';
const Catalog = () => {
    return (
        <Container className='cnt'>
            <h1>Catálogo</h1>
            <Container>
                <Row className="my-5">
                    <Col md={6} className="mb-4">
                        <Card className="h-100 p-0">
                            <Link to="/catalog/collares">
                                <img src="/src/assets/img/collares.jpg" className="card-img-top img-fluid" alt="Collares" />
                                <Card.Body className="card-body">
                                    <p className="card-text text-center">Collares</p>
                                </Card.Body>
                                <Card.Footer className="text-muted text-center">Ver productos</Card.Footer>
                            </Link>
                        </Card>
                    </Col>
                    <Col md={6} className="mb-4">
                        <Card className="h-100 p-0">
                            <Link to="/catalog/pulseras">
                                <img src="/src/assets/img/pulseras.jpg" className="card-img-top img-fluid" alt="Pulseras" />
                                <Card.Body className="card-body">
                                    <p className="card-text text-center">Pulseras</p>
                                </Card.Body>
                                <Card.Footer className="text-muted text-center">Ver productos</Card.Footer>
                            </Link>
                        </Card>
                    </Col>
                </Row>
                <Row className="my-5">
                    <Col md={6} className="mb-4">
                        <Card className="h-100 p-0">
                            <Link to="/catalog/pendientes">
                                <img src="/src/assets/img/pendientes.jpg" className="card-img-top img-fluid" alt="Pendientes" />
                                <Card.Body className="card-body">
                                    <p className="card-text text-center">Pendientes</p>
                                </Card.Body>
                                <Card.Footer className="text-muted text-center">Ver productos</Card.Footer>
                            </Link>
                        </Card>
                    </Col>
                    <Col md={6} className="mb-4">
                        <Card className="h-100 p-0">
                            <Link to="/catalog/anillos">
                                <img src="/src/assets/img/anillos.jpg" className="card-img-top img-fluid" alt="Anillos" />
                                <Card.Body className="card-body">
                                    <p className="card-text text-center">Anillos</p>
                                </Card.Body>
                                <Card.Footer className="text-muted text-center">Ver productos</Card.Footer>
                            </Link>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Catalog;
