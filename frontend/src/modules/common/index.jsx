import { useNavigate } from 'react-router-dom';


const BackLink = ({ className, style, ariaLabel }) => {
    const navigate = useNavigate();

    return (
        <button
            type="button"
            className={`btn btn-link ${className}`}
            style={style}
            onClick={() => navigate(-1)}
            aria-label={ariaLabel || 'Go back'}
        >
            <p>Atrás</p>
        </button>
    );
};

BackLink.defaultProps = {
    className: '',
    style: {},
    ariaLabel: 'Go back' 
};

export default BackLink;
