import React from 'react';
import '../assets/css/Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <p>&copy; {new Date().getFullYear()} Pizzería Mamma Mía. Todos los derechos reservados.</p>
            <div className="footer-links">
            </div>
        </footer>
    );
};

export default Footer;
