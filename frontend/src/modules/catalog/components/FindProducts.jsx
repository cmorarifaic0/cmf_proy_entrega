import React from 'react';

const FindProducts = ({ options, onSearch }) => {
    return (
        <div className="d-inline-flex mx-3 p-2"> 
            <input
                type="text "
                id="searchInput"
                onChange={onSearch}
                placeholder="Search..."
                className="form-control"
            />
            <button id="buscar" className="mx-3 btn btn-primary">Buscar
            </button>
        </div>
    );
};

export default FindProducts;
