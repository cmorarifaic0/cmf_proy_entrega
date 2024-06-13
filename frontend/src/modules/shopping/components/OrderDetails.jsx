import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import * as actions from '../../../store/actions';
import * as selectors from '../../../store/selectors';
import ShoppingItemList from './ShoppingItemList';
import BackLink from '../../common'; 

const OrderDetails = () => {
    const { id } = useParams();
    const order = useSelector(selectors.getOrder);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!Number.isNaN(Number(id))) {
            setIsLoading(true);
            dispatch(actions.findOrder(id))
                .finally(() => setIsLoading(false))
                .catch(err => setError('Error fetching order details'));
        }
        return () => dispatch(actions.clearOrder());
    }, [id, dispatch]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error || !order) {
        return (
            <div>
                <BackLink />
                <div className="alert alert-danger">
                    No order found 
                </div>
            </div>
        );
    }

    return (
        <div>
            <BackLink />
            <div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title">
                        Purchase Order: {order.id} 
                    </h5>
                    <h6 className="card-subtitle text-muted">
                        {new Date(order.date).toLocaleDateString()} - {new Date(order.date).toLocaleTimeString()}
                    </h6>
                    <p className="card-text">
                        {order.postalAddress} - {order.postalCode}
                    </p>
                </div>
            </div>
            <ShoppingItemList list={order.items}/>
        </div>
    );
}

export default OrderDetails;
