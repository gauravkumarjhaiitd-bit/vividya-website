import React from 'react';
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <h2 className="footer-logo">Vividya</h2>
                    <p>Dream. Act. Succeed.</p>
                </div>

                <div className="footer-social">
                    <a href="#" className="social-link"><Facebook size={20} /></a>
                    <a href="#" className="social-link"><Instagram size={20} /></a>
                    <a href="#" className="social-link"><Youtube size={20} /></a>
                </div>

                <div className="footer-copyright">
                    <p>&copy; {new Date().getFullYear()} Vividya NEET & JEE Academy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
