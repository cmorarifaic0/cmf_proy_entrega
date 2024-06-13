import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchAndCategory from './SearchAndCategory';
import CategorySelector from '../../catalog/components/CategorySelector';
import Navbar from './Navbar';
const Header = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const options = ['Option 1', 'Option 2', 'Option 3']; 
    const categories = ['Collares', 'Pulseras','Pendientes', 'Anillos'];

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        console.log(`Selected category: ${category}`);
    };

    return (
        <Navbar/>
    );
};

export default Header;
