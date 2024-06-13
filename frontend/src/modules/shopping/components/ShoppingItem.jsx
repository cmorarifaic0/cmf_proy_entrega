import { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import ProductLink from '../../common';

const ShoppingItem = ({ shoppingItemListId, item, edit, onUpdateQuantity, onRemoveItem, onBackendErrors }) => {
    const [quantity, setQuantity] = useState(item.quantity);
    const formRef = useRef(null);

    const handleSubmit = event => {
        event.preventDefault();

        if (formRef.current.checkValidity()) {
            onUpdateQuantity(shoppingItemListId, item.productId, quantity,
                () => onBackendErrors(null),
                backendErrors => {
                    setQuantity(item.quantity);
                    onBackendErrors(backendErrors);
                });
        } else {
            onBackendErrors('Please correct the errors before saving.');
            formRef.current.classList.add('was-validated');
        }
    };

    const handleRemoveItem = () => {
        onRemoveItem(shoppingItemListId, item.productId,
            () => onBackendErrors(null),
            backendErrors => onBackendErrors(backendErrors));
    };

    return (
        <tr>
            <td>
                {edit && (
                    <span>
                        <button type="button" className="btn btn-danger btn-sm" onClick={handleRemoveItem}>
                            <span className="fa-solid fa-trash-can"></span>
                        </button>
                        &nbsp;&nbsp;
                    </span>
                )}
                <ProductLink id={item.productId} name={item.productName} />
            </td>
            <td>
                {item.productPrice.toFixed(2)} EUR {/* Direct currency formatting */}
            </td>
            {edit ? (
                <td>
                    <form ref={formRef} className="form-inline needs-validation" noValidate onSubmit={handleSubmit}>
                        <input type="number" className="form-control mr-2" style={{width: '50%'}}
                            value={quantity} onChange={e => setQuantity(Number(e.target.value))}
                            min="1" required/>
                        <button type="submit" className="btn btn-primary">
                            Save {/* Static text replacement */}
                        </button>
                        <div className="invalid-feedback">
                            Incorrect quantity {/* Static text replacement */}
                        </div>
                    </form>
                </td>
            ) : (
                <td>{item.quantity}</td>
            )}
        </tr>
    );
};

ShoppingItem.propTypes = {
    shoppingItemListId: PropTypes.number.isRequired,
    item: PropTypes.object.isRequired,
    edit: PropTypes.bool,
    onUpdateQuantity: PropTypes.func,
    onRemoveItem: PropTypes.func,
    onBackendErrors: PropTypes.func
};

export default ShoppingItem;
