import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../authActions'; import { Form, Button, Alert, Container, Card } from 'react-bootstrap';
import Swal from 'sweetalert2';

const SignUp = () => {
    const dispatch = useDispatch();
    const { error, loading } = useSelector(state => state.auth);

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: ''
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validateForm = () => {
        const errors = {};

        if (!formData.username) {
            errors.username = 'Username is required';
        } else if (formData.username.length < 4 || formData.username.length > 20) {
            errors.username = 'Username must be between 4 and 20 characters';
        }

        if (!formData.password) {
            errors.password = 'Password is required';
        } else if (formData.password.length < 8) {
            errors.password = 'Password must be at least 8 characters';
        }

        if (!formData.firstName) {
            errors.firstName = 'First name is required';
        }

        if (!formData.lastName) {
            errors.lastName = 'Last name is required';
        }

        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
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
            dispatch(signup(formData));
        }
    };

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <Card className="w-100" style={{ maxWidth: '400px' }}>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
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
                        <Form.Group controlId="formBasicFirstName" className="mb-3 hovertext" data-hover="Enter your first name">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                            className="w-100"
                                type="text"
                                placeholder="Enter first name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                isInvalid={!!errors.firstName}
                                required
                            />
                            {errors.firstName && <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>}
                        </Form.Group>
                        <Form.Group controlId="formBasicLastName" className="mb-3 hovertext" data-hover="Enter your last name">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                            className="w-100"
                                type="text"
                                placeholder="Enter last name"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                isInvalid={!!errors.lastName}
                                required
                            />
                            {errors.lastName && <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>}
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail" className="mb-3 hovertext" data-hover="Enter your email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                            className="w-100"
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                isInvalid={!!errors.email}
                                required
                            />
                            {errors.email && <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>}
                        </Form.Group>
                        <Button variant="primary" type="submit" disabled={loading} className="w-100 botonn">
                            {loading ? 'Signing up...' : 'Sign Up'}
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default SignUp;
