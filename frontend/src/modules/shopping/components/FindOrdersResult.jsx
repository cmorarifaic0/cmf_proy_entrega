import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../../../store/actions';
import * as selectors from '../../../store/selectors';
import Pager from '../../common';
import Orders from './Orders';

const FindOrdersResult = () => {
    const orderSearch = useSelector(selectors.getOrderSearch);
    const dispatch = useDispatch();
    const isLoading = useSelector(selectors.isLoadingOrders);

    useEffect(() => {
        dispatch(actions.findOrders({ page: 0 }));
        return () => dispatch(actions.clearOrderSearch());
    }, [dispatch]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!orderSearch || orderSearch.result.items.length === 0) {
        return (
            <div className="alert alert-info" role="alert">
                No orders found. {/* Direct string usage */}
            </div>
        );
    }

    return (
        <div>
            <Orders orders={orderSearch.result.items} />
            <Pager 
                back={{
                    enabled: orderSearch.criteria.page > 0,
                    onClick: () => dispatch(actions.previousFindOrdersResultPage(orderSearch.criteria))
                }}
                next={{
                    enabled: orderSearch.result.existMoreItems,
                    onClick: () => dispatch(actions.nextFindOrdersResultPage(orderSearch.criteria))
                }}
            />
        </div>
    );
}

export default FindOrdersResult;
