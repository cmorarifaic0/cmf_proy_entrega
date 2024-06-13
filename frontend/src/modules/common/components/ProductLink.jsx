import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductLink = ({ id, name, className, style }) => {
    return (
        <Link to={`/catalog/product-details/${id}`} className={className} style={style} aria-label={`View details for ${name}`}>
            {name || 'Unnamed Product'}
        </Link>
    );
};

ProductLink.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    style: PropTypes.object
};

ProductLink.defaultProps = {
    className: '',
    style: {}
};

export default ProductLink;
