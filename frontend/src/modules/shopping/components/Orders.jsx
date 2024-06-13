import PropTypes from 'prop-types';
import OrderLink from './OrderLink';

const Orders = ({ orders }) => {
    if (!orders || orders.length === 0) {
        return (
            <div className="alert alert-info">
                No orders available. 
            </div>
        );
    }

    return (
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">Purchase Order</th> 
                    <th scope="col">Date</th> 
                </tr>
            </thead>
            <tbody>
                {orders.map(order => (
                    <tr key={order.id}>
                        <td><OrderLink id={order.id}/></td>
                        <td>
                            {new Date(order.date).toLocaleDateString()} - {new Date(order.date).toLocaleTimeString()}
                            
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

Orders.propTypes = {
    orders: PropTypes.array.isRequired
};

export default Orders;
