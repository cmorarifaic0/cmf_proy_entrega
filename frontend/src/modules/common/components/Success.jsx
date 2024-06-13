import { useState } from 'react';
import PropTypes from 'prop-types';

const Success = ({ message, onClose }) => {
    const [visible, setVisible] = useState(true);

    const handleClose = () => {
        setVisible(false);
        onClose();
    };

    if (!message || !visible) return null;

    return (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
            {message}
            <button
                type="button"
                className="close"
                aria-label="Close"
                onClick={handleClose}
            >
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
};

Success.propTypes = {
    message: PropTypes.string,
    onClose: PropTypes.func.isRequired
};

export default Success;
