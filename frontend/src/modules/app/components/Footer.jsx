import './yass.css';

const Footer = ({ year }) => {
    return (
        <div className="footr">
            <div className="container text-center">
                <div className="footer bg-pink">
                    <div className="container ">
                        <div className="row">
                            <div className="col-sm">
                                <h3>ATENCIÓN AL CLIENTE</h3>
                                <p>Información sobre pedidos</p>
                                <p>Seguimiento de su pedido</p>
                                <p>Cambios y devoluciones</p>
                                <p>Preguntas más frecuentes</p>
                            </div>
                            <div className="col-sm">
                                <h3>CONTACTO</h3>
                                <p>Póngase en contacto con nosotros</p>
                                <p>Correo electrónico</p>
                                <p>WhatsApp</p>
                            </div>
                            <div className="col-sm">
                                <h3>ABOUT</h3>
                                <p>Nuestro compromiso</p>
                                <p>Ethics & compliance</p>
                            </div>
                            <div className="col-sm">
                                <h3>ASPECTOS LEGALES</h3>
                                <p>Terminos y Condiciones</p>
                                <p>Política de cookies</p>
                                <p>Política de privacidad</p>
                                <p>Menciones legales y términos de uso</p>
                            </div>
                        </div>
                        <div className="footer-copyright text-center py-3">
                            <p>© {year} Noroc:Design_ All rights reserved.</p>
                            <p>Follow us on:
                                <a href="http://facebook.com">Facebook</a>,
                                <a href="http://twitter.com">Twitter</a>,
                                <a href="http://instagram.com">Instagram</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
