import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import Catalog from '../../catalog/components/Catalog';
import ProductDetails from '../../catalog/components/ProductDetails';
import Cart from '../../shopping/components/Cart';
import PulserasCategory from '../../catalog/components/PulserasCategory';
import CollaresCategory from '../../catalog/components/CollaresCategory';
import PendientesCategory from '../../catalog/components/PendientesCategory';
import AnillosCategory from '../../catalog/components/AnillosCategory';
import Header from './Header';
import TopBanner from './TopBanner';
import Login from '../../users/components/Login';
import SignUp from '../../users/components/SignUp';
import ForgotPassword from '../../users/components/ForgotPassword';

const NavLinks = () => {
    return (
        <>

            <TopBanner />
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/catalog/collares" element={<CollaresCategory />} />
                    <Route path="/catalog/pulseras" element={<PulserasCategory />} />
                    <Route path="/catalog/pendientes" element={<PendientesCategory />} />
                    <Route path="/catalog/anillos" element={<AnillosCategory />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route path="/shopping-cart" element={<Cart />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                </Routes>
            </div>
        </>
    );
};

export default NavLinks;
