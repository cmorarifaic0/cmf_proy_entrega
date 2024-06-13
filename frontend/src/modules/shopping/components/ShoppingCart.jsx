import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import ShoppingItemList from './ShoppingItemList';
import * as selectors from '../../../store/selectors';
import * as actions from '../../../store/actions';

const ShoppingCart = () => {
    const cart = useSelector(selectors.getShoppingCart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    if (!cart || cart.items.length === 0) {
        return (
            <div className="alert alert-info">
                Your shopping cart is empty.
            </div>
        );
    }

    return (
        <div>
            <ShoppingItemList
                list={cart.items}
                onUpdateQuantity={(productId, quantity) =>
                    dispatch(actions.updateShoppingCartItemQuantity(cart.id, productId, quantity))}
                onRemoveItem={(productId) =>
                    dispatch(actions.removeShoppingCartItem(cart.id, productId))}
            />
            <div className="text-center mt-3">
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => navigate('/shopping/buy')}
                >
                    Checkout
                </button>
            </div>
        </div>
    );
}

export default ShoppingCart;
