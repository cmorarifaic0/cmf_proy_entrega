import React, { useState } from 'react';
import FindProducts from '../../catalog/components/FindProducts';

const SearchAndCategory = ({ options, categories }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredOptions, setFilteredOptions] = useState(options);

    const handleSearch = (event) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);
        const filtered = options.filter(option =>
            option.toUpperCase().includes(searchTerm.toUpperCase())
        );
        setFilteredOptions(filtered);
    };

    return (
        <div >
            <FindProducts options={filteredOptions} onSearch={handleSearch} />
        </div>
    );
};

export default SearchAndCategory;
