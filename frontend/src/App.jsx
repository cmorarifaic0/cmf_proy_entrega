
import React from 'react';
import NavBody from './modules/app/components/NavLinks';
import { useAppInitialization } from './modules/hooks/useAppInitialization';
import Header from './modules/app/components/Header';
import Footer from './modules/app/components/Footer';
import Navbar from './modules/app/components/Navbar';
import TopBanner from './modules/app/components/TopBanner';
import NavLinks from './modules/app/components/NavLinks';
const App = () => {
    useAppInitialization();

    return (

            <div className="app-container">
            <Header />
            <NavLinks/>
            <Footer />
            </div>
    );
};

export default App;
