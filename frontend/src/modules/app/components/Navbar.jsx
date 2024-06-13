import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchAndCategory from './SearchAndCategory';
import CategorySelector from '../../catalog/components/CategorySelector';
import './Navbar.css';
const Navbar = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const options = ['Option 1', 'Option 2', 'Option 3']; // Example options
    const categories = ['Collares', 'Pulseras', 'Pendientes', 'Anillos']; // Example categories

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        console.log(`Selected category: ${category}`);

    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Noroc:Design_</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                <FontAwesomeIcon icon="home" /> Home
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="categoryDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <FontAwesomeIcon icon="list-alt" /> Catálogo
                            </a>
                            <CategorySelector categories={categories} onSelectCategory={handleCategorySelect} />
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/shopping-cart">
                                <FontAwesomeIcon icon="shopping-cart" /> Carrito
                            </Link>
                        </li>
                    </ul>
                    <SearchAndCategory options={options} categories={categories} />
                </div>
            </div>
            
        </nav>
        

    );
};

export default Navbar;
