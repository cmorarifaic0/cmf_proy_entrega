import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Errors from '../../common';
import * as actions from '../actions';

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        userName: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        email: ''
    });
    const [backendErrors, setBackendErrors] = useState(null);
    const formRef = useRef(null);

    const handleSubmit = event => {
        event.preventDefault();
        if (formRef.current.checkValidity() && formData.password === formData.confirmPassword) {
            dispatch(actions.signUp({
                userName: formData.userName.trim(),
                password: formData.password,
                firstName: formData.firstName.trim(),
                lastName: formData.lastName.trim(),
                email: formData.email.trim()
            }, () => navigate('/'),
            errors => setBackendErrors(errors)));
        } else {
            setBackendErrors(null);
            formRef.current.classList.add('was-validated');
        }
    };

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div>
            <Errors errors={backendErrors} onClose={() => setBackendErrors(null)} />
            <div className="card">
                <h5 className="card-header">Sign Up</h5>
                <div className="card-body">
                    <form ref={formRef} noValidate onSubmit={handleSubmit} className="needs-validation">
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control" required value={formData.userName}
                                onChange={e => handleChange('userName', e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" required value={formData.password}
                                onChange={e => handleChange('password', e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input type="password" className="form-control" required value={formData.confirmPassword}
                                onChange={e => handleChange('confirmPassword', e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" className="form-control" required value={formData.firstName}
                                onChange={e => handleChange('firstName', e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" className="form-control" required value={formData.lastName}
                                onChange={e => handleChange('lastName', e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" required value={formData.email}
                                onChange={e => handleChange('email', e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
