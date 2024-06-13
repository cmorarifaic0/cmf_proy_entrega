import { useMemo } from 'react';

import PropTypes from 'prop-types';

import * as selectors from '../../../store/selectors';
import  ProductLink  from '../../common/components/ProductLink';

const Products = ({ products, categories }) => {
    const productRows = useMemo(() => products.map(product => (
        <tr key={product.id}>
            <td>{selectors.getCategoryName(categories, product.categoryId)}</td>
            <td><ProductLink id={product.id} name={product.name} /></td>
        </tr>
    )), [products, categories]);

    if (!products.length) {
        return <p>No hay artículos</p>;
    }

    return (
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">
                        <div className="">Categoría</div>
                    </th>
                    <th scope="col">
                    <div className="">Nombre del artículo</div>
                    </th>
                </tr>
            </thead>
            <tbody>
                {productRows}
            </tbody>
        </table>
    );
};

Products.propTypes = {
    products: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired
};

export default Products;
