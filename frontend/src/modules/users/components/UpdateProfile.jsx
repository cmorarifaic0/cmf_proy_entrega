import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Errors from '../../common';
import * as actions from '../../../store/actions';
import * as selectors from '../../../store/selectors';

const UpdateProfile = () => {
    const user = useSelector(selectors.getUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
    });
    const [backendErrors, setBackendErrors] = useState(null);
    const formRef = useRef(null);

    const handleSubmit = event => {
        event.preventDefault();

        if (formRef.current.checkValidity()) {
            dispatch(actions.updateProfile({
                id: user.id,
                ...formData
            }, () => navigate('/'),
            errors => setBackendErrors(errors)));

        } else {
            setBackendErrors(null);
            formRef.current.classList.add('was-validated');
        }
    };

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value.trim() }));
    };

    return (
        <div>
            <Errors errors={backendErrors} onClose={() => setBackendErrors(null)} />
            <div className="card bg-light border-dark">
                <h5 className="card-header">
                    Update Profile 
                </h5>
                <div className="card-body">
                    <form ref={formRef} className="needs-validation" noValidate onSubmit={handleSubmit}>
                        <div className="form-group row">
                            <label htmlFor="firstName" className="col-md-3 col-form-label">
                                First Name 
                            </label>
                            <div className="col-md-4">
                                <input type="text" id="firstName" className="form-control"
                                    value={formData.firstName}
                                    onChange={e => handleInputChange('firstName', e.target.value)}
                                    required/>
                                <div className="invalid-feedback">
                                    Field is required 
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="lastName" className="col-md-3 col-form-label">
                                Last Name 
                            </label>
                            <div className="col-md-4">
                                <input type="text" id="lastName" className="form-control"
                                    value={formData.lastName}
                                    onChange={e => handleInputChange('lastName', e.target.value)}
                                    required/>
                                <div className="invalid-feedback">
                                    Field is required 
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="email" className="col-md-3 col-form-label">
                                Email 
                            </label>
                            <div className="col-md-4">
                                <input type="email" id="email" className="form-control"
                                    value={formData.email}
                                    onChange={e => handleInputChange('email', e.target.value)}
                                    required/>
                                <div className="invalid-feedback">
                                    Field is required 
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="offset-md-3 col-md-1">
                                <button type="submit" className="btn btn-primary">
                                    Save 
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdateProfile;
