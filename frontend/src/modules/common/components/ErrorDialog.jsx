import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { NetworkError } from '../../../backend'; 

const ErrorDialog = ({ error, onClose }) => {
    useEffect(() => {
        if (error) {
        }
    }, [error]);

    if (!error) {
        return null;
    }

    const message = error instanceof NetworkError ?
        'Network error, please try again later.' : 
        error.message; 

    return (
        <div className="modal show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Error</h5> 
                    </div>
                    <div className="modal-body">
                        <p>{message}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={onClose}>
                            Close 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

ErrorDialog.propTypes = {
    error: PropTypes.instanceOf(Error),
    onClose: PropTypes.func.isRequired
};

export default ErrorDialog;
