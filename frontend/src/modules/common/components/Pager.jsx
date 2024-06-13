import PropTypes from 'prop-types';


const PaginationButton = ({ enabled, onClick, messageId }) => {
    if (!enabled) return null;

    return (
        <li className="page-item">
            <button className="page-link" onClick={onClick}>
                <p>{messageId}</p>
            </button>
        </li>
    );
};

PaginationButton.propTypes = {
    enabled: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    messageId: PropTypes.string.isRequired
};

const Pager = ({ back, next }) => (
    <nav aria-label="page navigation">
        <ul className="pagination justify-content-center">
            <PaginationButton enabled={back.enabled} onClick={back.onClick} />
            <PaginationButton enabled={next.enabled} onClick={next.onClick} />
        </ul>
    </nav>
);

Pager.propTypes = {
    back: PropTypes.shape({
        enabled: PropTypes.bool.isRequired,
        onClick: PropTypes.func.isRequired
    }).isRequired,
    next: PropTypes.shape({
        enabled: PropTypes.bool.isRequired,
        onClick: PropTypes.func.isRequired
    }).isRequired
};

export default Pager;
