import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchNewlyAddedProducts } from '../../../store/thunks';
import { getNewlyAddedProducts } from '../../../store/selectors'; 
import { Carousel, Container, Row, Col, Card, Spinner, Alert } from 'react-bootstrap';
import Navbar from './Navbar'; 
import './Home.css'
const Home = () => {
    const dispatch = useDispatch();
    const newlyAddedProducts = useSelector(getNewlyAddedProducts);
    const loading = useSelector(state => state.catalog.loading);
    const error = useSelector(state => state.catalog.error);

    useEffect(() => {
        dispatch(fetchNewlyAddedProducts());
    }, [dispatch]);

    return (
        <>
            <div className="home-container">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="src\assets\img\banner_7.jpg"
                            alt="Banner 1"
                        />
                        <Carousel.Caption>
                            <h3 className="fs-1 text-dark">Noroc:Design_</h3>
                            <p className="fs-1 text-dark">Próxima apertura</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="src\assets\img\banner_8.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3 className="fs-1 text-dark">Noroc:Design_</h3>
                            <p className="fs-1 text-dark">Próxima apertura</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="src\assets\img\banner_9.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3 className="fs-1 text-dark">Noroc:Design_</h3>
                            <p className="fs-1 text-dark">Próxima apertura</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Container className="mt-4 p-5 bg-light rounded jumbotron">
                    <div className="box-1">
                        <p className="lead">Somos una joven empresa apasionada y dedicada a la creación de joyería única y exclusiva hecha a mano
                            con cuentas de cristal.</p>
                        <p className="lead">Cada joya es meticulosamente elaborada y cuidadosamente ensamblada para garantizar la calidad y la belleza
                            de cada creación.</p>
                    </div>
                </Container>

                <Container fluid className="mt-4 p-5 bg-light rounded">
                    <h1>Recién llegados</h1>
                    {loading && <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>}
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Row>
                        {newlyAddedProducts.map(product => (
                            <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
                                <Card>
                                    <Card.Img variant="top" src={product.imageUrl} alt={product.name} />
                                    <Card.Body>
                                        <Card.Title>{product.name}</Card.Title>
                                        <Card.Text>{product.description}</Card.Text>
                                        <Card.Text>${product.price}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Home;
