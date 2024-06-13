import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

const CategorySelector = ({ categories, onSelectCategory }) => {
    return (
        <Dropdown.Menu>
            {categories.map(category => (
                <Dropdown.Item as={Link} to={`/catalog/${category.toLowerCase()}`} key={category} onClick={() => onSelectCategory(category)}>
                    {category}
                </Dropdown.Item>
            ))}
        </Dropdown.Menu>
    );
};

export default CategorySelector;
