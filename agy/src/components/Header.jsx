import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, GraduationCap } from 'lucide-react';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <div className="logo">
                    <img src="/logo.png" alt="Vividya" className="logo-img" />
                </div>

                <nav className="desktop-nav">
                    <a href="#hero">Home</a>
                    <a href="#about">About</a>
                    <a href="#courses">Courses</a>
                    <a href="#results">Results</a>
                    <a href="#contact" className="btn btn-sm btn-primary">Enquire Now</a>
                </nav>

                <button
                    className="mobile-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>

                {mobileMenuOpen && (
                    <div className="mobile-nav">
                        <a href="#hero" onClick={() => setMobileMenuOpen(false)}>Home</a>
                        <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
                        <a href="#courses" onClick={() => setMobileMenuOpen(false)}>Courses</a>
                        <a href="#results" onClick={() => setMobileMenuOpen(false)}>Results</a>
                        <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
