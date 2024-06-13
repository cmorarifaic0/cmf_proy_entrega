import React from 'react';

const FindProductsResult = ({ filteredOptions }) => {
    return (
        <div>
            {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => (
                    <div key={index}>
                        <p>{option}</p>
                    </div>
                ))
            ) : (
                <p>No results found</p>
            )}
        </div>
    );
};

export default FindProductsResult;
