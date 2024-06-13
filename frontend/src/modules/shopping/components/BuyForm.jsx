import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import Errors from '../../common';
import * as actions from '../actions';

const BuyForm = ({ shoppingCartId }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [postalAddress, setPostalAddress] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [backendErrors, setBackendErrors] = useState(null);
    const formRef = useRef(null);

    const handleSubmit = event => {
        event.preventDefault();

        if (formRef.current.checkValidity()) {
            dispatch(actions.buy(shoppingCartId, 
                postalAddress.trim(), postalCode.trim(), 
                () => navigate('/shopping/purchase-completed'),
                errors => setBackendErrors(errors)));
        } else {
            setBackendErrors(null);
            formRef.current.classList.add('was-validated');
        }
    }

    return (
        <div>
            <Errors errors={backendErrors} onClose={() => setBackendErrors(null)}/>
            <div className="card bg-light border-dark">
                <h5 className="card-header">
                    Buy Form 
                </h5>
                <div className="card-body">
                    <form ref={formRef}
                        className="needs-validation" noValidate 
                        onSubmit={handleSubmit}>
                        <div className="form-group row">
                            <label htmlFor="postalAddress" className="col-md-3 col-form-label">
                                Postal Address 
                            </label>
                            <div className="col-md-4">
                                <input type="text" id="postalAddress" className="form-control"
                                    value={postalAddress}
                                    onChange={e => setPostalAddress(e.target.value)}
                                    autoFocus required/>
                                <div className="invalid-feedback">
                                    Field is required 
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="postalCode" className="col-md-3 col-form-label">
                                Postal Code 
                            </label>
                            <div className="col-md-4">
                                <input type="text" id="postalCode" className="form-control"
                                    value={postalCode}
                                    onChange={e => setPostalCode(e.target.value)}
                                    required/>
                                <div className="invalid-feedback">
                                    Field is required 
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="offset-md-3 col-md-1">
                                <button type="submit" className="btn btn-primary">
                                    Buy 
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

BuyForm.propTypes = {
    shoppingCartId: PropTypes.number.isRequired
};

export default BuyForm;
