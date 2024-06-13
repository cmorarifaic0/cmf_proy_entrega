import { useSelector } from 'react-redux';
import * as selectors from '../../../store/selectors';
import OrderLink from './OrderLink';

const PurchaseCompleted = () => {
    const orderId = useSelector(selectors.getLastOrderId);

    if (!orderId) {
        return (
            <div className="alert alert-warning" role="alert">
                No order found. Please try again.
            </div>
        );
    }

    return (
        <div className="alert alert-success" role="alert">
            Purchase completed successfully! Order ID: 
            &nbsp;
            <OrderLink id={orderId}/>
        </div>
    );
}

export default PurchaseCompleted;
