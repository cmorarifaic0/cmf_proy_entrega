import React from 'react';
import { Container } from 'react-bootstrap';
import './topbanner.css';

const TopBanner = () => {
    return (
        <div className="topbanner">
            <Container>
                    <p className="texto">Envíos gratis a partir de 150€</p>
            </Container>
        </div>
    );
};

export default TopBanner;
