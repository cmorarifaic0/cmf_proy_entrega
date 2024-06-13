import { useSelector } from 'react-redux';


import ShoppingItemList from './ShoppingItemList';
import BuyForm from './BuyForm';
import * as selectors from '../../../store/selectors';

const Buy = () => {
    const cart = useSelector(selectors.getShoppingCart);

    if (!cart || cart.items.length === 0) {
        return (
            <div className="alert alert-info">
                <p>Tu carrito está vacío</p>
            </div>
        );
    }

    return (
        <div>
            <BuyForm shoppingCartId={cart.id} />
            <ShoppingItemList list={cart.items} />
        </div>
    );
}

export default Buy;
