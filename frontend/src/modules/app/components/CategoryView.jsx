import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsByCategory } from '../../../store/thunks'; // Adjust the path as necessary
import { getProductsByCategory } from '../../../store/selectors'; // Adjust the path as necessary
import { Container, Row, Col, Card, Spinner, Alert } from 'react-bootstrap';
import Navbar from './Navbar'; // Adjust the path as necessary

const CategoryView = ({ categoryName }) => {
    const dispatch = useDispatch();
    const products = useSelector(state => getProductsByCategory(state, categoryName));
    const loading = useSelector(state => state.catalog.loading);
    const error = useSelector(state => state.catalog.error);

    useEffect(() => {
        dispatch(fetchProductsByCategory(categoryName));
    }, [dispatch, categoryName]);

    return (
        <>
            <Navbar />
            <Container className="">
                <h1>Products in {categoryName}</h1>
                {loading && <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>}
                {error && <Alert variant="danger">{error}</Alert>}
                <Row>
                    {products.map(product => (
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
        </>
    );
};

export default CategoryView;
