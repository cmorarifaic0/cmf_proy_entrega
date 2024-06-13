import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsByCategory } from '../../../store/thunks';
import { Container, Row, Col, Card } from 'react-bootstrap';
//import './PulserasCategory.css';

const PulserasCategory = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.catalog);

    useEffect(() => {
        dispatch(fetchProductsByCategory('Pulseras'));
    }, [dispatch]);

    return (
        <Container className="mt-5">
            <h1 className="text-center mb-4">Pulseras</h1>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <Row>
                {products.map(product => (
                    <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={product.imageUrl} />
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
    );
};

export default PulserasCategory;
