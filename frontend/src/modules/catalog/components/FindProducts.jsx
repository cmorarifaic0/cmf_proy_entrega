import React from 'react';

const FindProducts = ({ options, onSearch }) => {
    return (
        <div>
            <input type="text" placeholder="Search..." onChange={onSearch} />
        </div>
    );
};

export default FindProducts;
