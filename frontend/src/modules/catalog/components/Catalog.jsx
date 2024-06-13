import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
//import './Catalog.css';

const Catalog = () => {
    return (
        <Container className='cnt'>
            <h1>Joyas artesanales</h1>
            <Container >
            <Row className="my-5 ">
                <Col>
                    <Card className=" p-0">
                        <img src="/src/assets/img/banner_15.jpg" className="card-img-top img-fluid" alt="..." />
                        <Card.Body className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </Card.Body>
                        <Card.Footer className="text-muted text-center">Comprar ahora</Card.Footer>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card className="h-100 p-0">
                        <img src="/src/assets/img/banner_15.jpg" className="card-img-top img-fluid" alt="..." />
                        <Card.Body className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </Card.Body>
                        <Card.Footer className="text-muted text-center">Comprar ahora</Card.Footer>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card className="h-100 p-0">
                        <img src="/src/assets/img/banner_15.jpg" className="card-img-top img-fluid" alt="..." />
                        <Card.Body className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </Card.Body>
                        <Card.Footer className="text-muted text-center">Comprar ahora</Card.Footer>
                    </Card>
                </Col>
            </Row>
            <Row className="my-5">
                <Col md={4} className="mb-4">
                    <Card className="h-100 p-0">
                        <img src="/src/assets/img/banner_15.jpg" className="card-img-top img-fluid" alt="..." />
                        <Card.Body className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </Card.Body>
                        <Card.Footer className="text-muted text-center">Comprar ahora</Card.Footer>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card className="h-100 p-0">
                        <img src="/src/assets/img/banner_15.jpg" className="card-img-top img-fluid" alt="..." />
                        <Card.Body className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </Card.Body>
                        <Card.Footer className="text-muted text-center">Comprar ahora</Card.Footer>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card className="h-100 p-0">
                        <img src="/src/assets/img/banner_15.jpg" className="card-img-top img-fluid" alt="..." />
                        <Card.Body className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </Card.Body>
                        <Card.Footer className="text-muted text-center">Comprar ahora</Card.Footer>
                    </Card>
                </Col>
            </Row>
            </Container>
            
        </Container>
    );
};

export default Catalog;
