import { useSelector } from 'react-redux';
import * as selectors from '../../../store/selectors';

const ShoppingCartIcon = () => {
    const shoppingCart = useSelector(selectors.getShoppingCart);
    const itemCount = shoppingCart ? shoppingCart.totalQuantity : 0; 

    return (
        <div>
            <span className="fa-solid fa-cart-shopping" aria-label={`Shopping cart with ${itemCount} items`}>
                &nbsp;{itemCount}
            </span>
        </div>
    );
}

export default ShoppingCartIcon;
