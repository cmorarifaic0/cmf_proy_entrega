import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import './styles.css';

import backend from './backend';
import NetworkError from './backend/NetworkError';
import { setError } from './modules/app/actions';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faShoppingCart, faListAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faShoppingCart, faListAlt);
backend.init(() => store.dispatch(setError(new NetworkError())));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
