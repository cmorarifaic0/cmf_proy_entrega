import PropTypes from 'prop-types';

const Errors = ({ errors, onClose }) => {
    if (!errors) return null;

    const renderFieldErrors = (fieldErrors) => (
        <ul>
            {fieldErrors.map((error, index) => {
                const fieldName = error.fieldName;
                return <li key={index}>{`${fieldName}: ${error.message}`}</li>;
            })}
        </ul>
    );

    const globalError = errors.globalError;
    const fieldErrors = errors.fieldErrors ? renderFieldErrors(errors.fieldErrors) : null;

    return (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
            {globalError && <p>{globalError}</p>}
            {fieldErrors}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={onClose}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
};

Errors.propTypes = {
    errors: PropTypes.shape({
        globalError: PropTypes.string,
        fieldErrors: PropTypes.arrayOf(PropTypes.shape({
            fieldName: PropTypes.string.isRequired,
            message: PropTypes.string.isRequired
        }))
    }),
    onClose: PropTypes.func.isRequired
};

export default Errors;
