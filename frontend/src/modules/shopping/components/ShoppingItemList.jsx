import { useState } from 'react';
import PropTypes from 'prop-types';

import ShoppingItem from './ShoppingItem';
import Errors from '../../common';

const ShoppingItemList = ({ list, edit, onUpdateQuantity, onRemoveItem }) => {
    const [backendErrors, setBackendErrors] = useState(null);

    if (!list.items.length) {
        return (
            <div className="alert alert-info" role="alert">
                Your shopping cart is empty. 
            </div>
        );
    }

    return (
        <div>
            <Errors errors={backendErrors} onClose={() => setBackendErrors(null)} />

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" style={{width: '60%'}}></th>
                        <th scope="col" style={{width: '20%'}}>
                            Price 
                        </th>
                        <th scope="col" style={{width: '20%'}}>
                            Quantity 
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {list.items.map(item => (
                        <ShoppingItem
                            key={item.productId}
                            shoppingItemListId={list.id}
                            item={item}
                            edit={edit}
                            onUpdateQuantity={onUpdateQuantity}
                            onRemoveItem={onRemoveItem}
                            onBackendErrors={setBackendErrors}
                        />
                    ))}
                </tbody>
            </table>

            <p className="text-center font-weight-bold">
                Total Price: 
                {list.totalPrice.toFixed(2)} EUR 
            </p>
        </div>
    );
}

ShoppingItemList.propTypes = {
    list: PropTypes.object.isRequired,
    edit: PropTypes.bool,
    onUpdateQuantity: PropTypes.func,
    onRemoveItem: PropTypes.func
}

export default ShoppingItemList;
