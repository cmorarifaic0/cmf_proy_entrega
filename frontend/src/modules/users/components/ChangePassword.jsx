import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Errors from '../../common';
import * as actions from '../../../store/actions';
import * as selectors from '../../../store/selectors';

const ChangePassword = () => {
    const user = useSelector(selectors.getUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    });
    const [backendErrors, setBackendErrors] = useState(null);
    const formRef = useRef(null);

    const handleSubmit = event => {
        event.preventDefault();
        if (formData.newPassword !== formData.confirmNewPassword) {
            setBackendErrors({confirmNewPassword: 'Passwords do not match'}); 
            return;
        }

        if (formRef.current.checkValidity()) {
            dispatch(actions.changePassword(user.id, formData.oldPassword, formData.newPassword,
                () => navigate('/'),
                errors => setBackendErrors(errors)));
        } else {
            formRef.current.classList.add('was-validated');
        }
    };

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div>
            <Errors errors={backendErrors} onClose={() => setBackendErrors(null)} />
            <div className="card bg-light border-dark">
                <h5 className="card-header">
                    Change Password 
                </h5>
                <div className="card-body">
                    <form ref={formRef} noValidate onSubmit={handleSubmit} className="needs-validation">
                        <div className="form-group row">
                            <label htmlFor="oldPassword" className="col-md-3 col-form-label">
                                Old Password 
                            </label>
                            <div className="col-md-4">
                                <input type="password" id="oldPassword" className="form-control"
                                    value={formData.oldPassword}
                                    onChange={e => handleChange('oldPassword', e.target.value)}
                                    required />
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

export default ChangePassword;
