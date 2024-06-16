import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../authActions';
import { Form, Button, Alert, Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const { error, loading } = useSelector(state => state.auth);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        if (termsAccepted) {
            dispatch(login(username, password));
        }
    };

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <Card className="w-100" style={{ maxWidth: '400px' }}>
                <Card.Body>
                    <h2 className="text-center">Login</h2>
                    {submitted && error && error.field === 'general' && <Alert variant="danger">{error.message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicUsername" className="mt-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                isInvalid={submitted && error && error.field === 'username'}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                {submitted && error && error.field === 'username' && error.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword" className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                isInvalid={submitted && error && error.field === 'password'}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                {submitted && error && error.field === 'password' && error.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox" className="mb-3">
                            <Form.Check
                                type="checkbox"
                                label="I agree to the terms and conditions"
                                checked={termsAccepted}
                                onChange={(e) => setTermsAccepted(e.target.checked)}
                                isInvalid={submitted && !termsAccepted}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                You must agree before submitting.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="primary" type="submit" disabled={loading} className="w-100">
                            {loading ? 'Logging in...' : 'Login'}
                        </Button>
                        <div className="text-center mt-3">
                            <Link to="/forgot-password">Forgot Password?</Link>
                        </div>
                        <div className="text-center mt-3">
                            Not a user yet? <Link to="/signup">Sign up here</Link>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Login;
