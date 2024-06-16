import React, { useState } from 'react';
import { Form, Button, Alert, Container, Card } from 'react-bootstrap';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [message, setMessage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you would typically dispatch an action to handle the forgot password logic
        // For this example, we'll just show a success message
        setMessage('If an account with that email exists, a password reset link has been sent.');
        setSubmitted(true);
    };

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <Card className="w-100" style={{ maxWidth: '400px' }}>
                <Card.Body>
                    <h2 className="text-center mb-4">Forgot Password</h2>
                    {submitted && message && <Alert variant="info">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail" className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100">
                            Send Reset Link
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ForgotPassword;
