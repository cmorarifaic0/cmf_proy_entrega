import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import Catalog from './../../catalog/components/Catalog'; 
import ProductDetails from './../../catalog/components/ProductDetails'; 
import ShoppingCart from './../../shopping/components/ShoppingCart';
import PulserasCategory from './../../catalog/components/PulserasCategory'; 
import CollaresCategory from './../../catalog/components/CollaresCategory'; 
import PendientesCategory from './../../catalog/components/PendientesCategory'; 
import AnillosCategory from './../../catalog/components/AnillosCategory'; 
import Header from './Header';
import TopBanner from './TopBanner'; 
import Login from './../../users/components/Login';
const NavBody = () => {
    return (
        <>
            <Header />
            <TopBanner />
            <div className="main-content pt-5 mt-5"> 
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog/*" element={<Catalog />}>
                        <Route path="collares" element={<CollaresCategory />} /> 
                        <Route path="pulseras" element={<PulserasCategory />} />
                        <Route path="pendientes" element={<PendientesCategory />} />                  
                        <Route path="anillos" element={<AnillosCategory />} /> 
                    </Route>
                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route path="/shopping-cart" element={<ShoppingCart />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </>
    );
};

export default NavBody;
