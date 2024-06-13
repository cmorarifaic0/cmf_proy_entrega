import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const OrderLink = ({ id, label }) => {
    return (
        <Link to={`/shopping/order-details/${id}`} aria-label={`View details for order ${id}`}>
            {label || `Order #${id}`}
        </Link>
    );
};

OrderLink.propTypes = {
    id: PropTypes.number.isRequired,
    label: PropTypes.string 
};

export default OrderLink;
