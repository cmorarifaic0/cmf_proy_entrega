import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = ({ year }) => {
    return (
        <div className="footr">
            <div className="container text-center">
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <h3 className="my-3">ATENCIÓN AL CLIENTE</h3>
                                <p className="my-3"><Link to="/info-pedidos">Información sobre pedidos</Link></p>
                                <p className="my-3"><Link to="/seguimiento-pedido">Seguimiento de su pedido</Link></p>
                                <p className="my-3"><Link to="/cambios-devoluciones">Cambios y devoluciones</Link></p>
                                <p className="my-3"><Link to="/faq">Preguntas más frecuentes</Link></p>
                            </div>
                            <div className="col-sm">
                                <h3 className="my-3">CONTACTO</h3>
                                <p className="my-3"><Link to="/contacto">Teléfono de contacto</Link></p>
                                <p className="my-3"><Link to="/contacto/correo">Correo electrónico</Link></p>
                                <p className="my-3"><Link to="/contacto/whatsapp">WhatsApp</Link></p>
                            </div>
                            <div className="col-sm">
                                <h3 className="my-3">ABOUT</h3>
                                <p className="my-3"><Link to="/compromiso">Nuestro compromiso</Link></p>
                                <p className="my-3"><Link to="/ethics-compliance">Ethics & compliance</Link></p>
                            </div>
                            <div className="col-sm">
                                <h3 className="my-3">ASPECTOS LEGALES</h3>
                                <p className="my-3"><Link to="/terminos-condiciones">Términos y Condiciones</Link></p>
                                <p className="my-3"><Link to="/politica-cookies">Política de cookies</Link></p>
                                <p className="my-3"><Link to="/politica-privacidad">Política de privacidad</Link></p>
                                <p className="my-3"><Link to="/menciones-legales">Menciones legales y términos de uso</Link></p>
                            </div>
                        </div>
                        <div className="footer-copyright text-center py-3">
                            <p>© {year} Noroc:Design_ All rights reserved.</p>
                            <p>Follow us on:
                                <a href="http://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a>,
                                <a href="http://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>,
                                <a href="http://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
