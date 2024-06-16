import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import './Home.css';


const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/src/prodData.json')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const addToCart = (productName) => {
        Swal.fire({
            icon: 'success',
            title: 'Añadido a la cesta',
            text: `${productName} ha sido añadido a la cesta.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    const renderCategory = (categoryId, categoryName) => {
        const categoryProducts = products.filter(product => product.categoryId === categoryId).slice(0, 3);
        return (
            <Container className="mt-4 p-5 bg-light rounded">
                <h2>{categoryName}</h2>
                <Row>
                    {categoryProducts.map(product => (
                        <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
                            <Card className="h-100 p-0">
                                <Card.Img variant="top" src={product.imageURL} alt={product.name} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>{product.description}</Card.Text>
                                    <Card.Text>${product.price}</Card.Text>
                                    <Button className="botC text-center" onClick={() => addToCart(product.name)}>
                                        Añadir a la cesta <FontAwesomeIcon icon={faShoppingCart} />
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <div className="text-end">
                    <Link to={`/catalog/${categoryName.toLowerCase()}`} className="btn btn-link">
                        Ver más <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                </div>
            </Container>
        );
    };

    return (
        <>
            <div className="home-container">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/src/assets/img/banner_7.jpg"
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
                            src="/src/assets/img/banner_8.jpg"
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
                            src="/src/assets/img/banner_9.jpg"
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

                {renderCategory(1, 'Collares')}
                {renderCategory(2, 'Pulseras')}
                {renderCategory(3, 'Anillos')}
                {renderCategory(4, 'Pendientes')}
            </div>
        </>
    );
};

export default Home;
