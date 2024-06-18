import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../authActions'; // Adjust the path as needed
import { Form, Button, Alert, Container, Card } from 'react-bootstrap';


const Login = () => {
    const dispatch = useDispatch();
    const { error, loading } = useSelector((state) => state.auth);

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validateForm = () => {
        const errors = {};

        if (!formData.username) {
            errors.username = 'Username is required';
        }

        if (!formData.password) {
            errors.password = 'Password is required';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        if (validateForm()) {
            dispatch(login(formData.username, formData.password));
        }
    };

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <Card className="w-100" style={{ maxWidth: '400px' }}>
                <Card.Body>
                    <h2 className="text-center mb-4">Login</h2>
                    {submitted && error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicUsername" className="mb-3 hovertext" data-hover="Enter your username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                            className="w-100"
                                type="text"
                                placeholder="Enter username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                isInvalid={!!errors.username}
                                required
                            />
                            {errors.username && <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>}
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword" className="mb-3 hovertext" data-hover="Enter your password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                            className="w-100"
                                type="password"
                                placeholder="Enter password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                isInvalid={!!errors.password}
                                required
                            />
                            {errors.password && <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>}
                        </Form.Group>
                        <Button  type="submit" disabled={loading} className="w-100 botonn">
                            {loading ? 'Logging in...' : 'Login'}
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Login;
