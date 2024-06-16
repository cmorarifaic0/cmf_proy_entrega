import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../users/authActions';
import './Navbar.css';

const Navbar = () => {
    const dispatch = useDispatch();
    const { token } = useSelector(state => state.auth);

    const handleLogout = () => {
        dispatch(logout());
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
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="categoryDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Catálogo
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="categoryDropdown">
                                <li><Link className="dropdown-item" to="/catalog/collares">Collares</Link></li>
                                <li><Link className="dropdown-item" to="/catalog/pulseras">Pulseras</Link></li>
                                <li><Link className="dropdown-item" to="/catalog/pendientes">Pendientes</Link></li>
                                <li><Link className="dropdown-item" to="/catalog/anillos">Anillos</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/shopping-cart">Carrito</Link>
                        </li>
                        <li className="nav-item">
                            {token ? (
                                <button className="nav-link btn btn-link" onClick={handleLogout}>Logout</button>
                            ) : (
                                <Link className="nav-link" to="/login">Login</Link>
                            )}
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                        <button className="btn bbuscar" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
