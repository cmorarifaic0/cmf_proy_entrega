
import React from 'react';
import NavBody from './modules/app/components/NavBody';
import { useAppInitialization } from './modules/hooks/useAppInitialization';
import Header from './modules/app/components/Header';
import Footer from './modules/app/components/Footer';

const App = () => {
    useAppInitialization();

    return (

            <div className="app-container">
                <Header/>
                <NavBody />
                <Footer/>
            </div>
    );
};

export default App;
