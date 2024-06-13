import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductById } from '../actions'; 
import { getProduct } from '../../../store/selectors';
import { Container, Row, Col, Card, Spinner, Alert } from 'react-bootstrap';

import AddToShoppingCart from './AddToShoppingCart';

const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const product = useSelector(getProduct);
    const loading = useSelector(state => state.catalog.loading);
    const error = useSelector(state => state.catalog.error);

    useEffect(() => {
        dispatch(fetchProductById(id));
    }, [dispatch, id]);

    return (
        <>

            <Container className="mt-4">
                {loading && <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>}
                {error && <Alert variant="danger">{error}</Alert>}
                {product && (
                    <Row>
                        <Col md={6}>
                            <Card>
                                <Card.Img variant="top" src={product.imageUrl} alt={product.name} />
                            </Card>
                        </Col>
                        <Col md={6}>
                            <h1>{product.name}</h1>
                            <p>{product.description}</p>
                            <h3>${product.price}</h3>
                            <AddToShoppingCart productId={product.id} />
                        </Col>
                    </Row>
                )}
            </Container>
        </>
    );
};

export default ProductDetails;
