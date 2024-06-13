import React from 'react';
import { Container } from 'react-bootstrap';
import './topbanner.css'
const TopBanner = () => {
    return (
        <div className="banner text-center my-0">
            <Container>
                <div className="banner-text">
                    <p>Envíos gratis a partir de 150€</p>
                </div>
            </Container>
        </div>
    );
};

export default TopBanner;
