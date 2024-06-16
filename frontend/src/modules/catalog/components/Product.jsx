import React from 'react';

const Product = ({ name, description, price, imageUrl }) => (
    <div className="col-md-4 col-lg-3 mb-4">
        <div className="card">
            <img src={imageUrl} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">{price}€</p>
            </div>
        </div>
    </div>
);

export default Product;