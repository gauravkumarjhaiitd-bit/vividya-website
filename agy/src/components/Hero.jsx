import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-bg"></div>
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="badge-wrapper">
                        <span className="badge">Admissions Open: Vedanta Residential PU College</span>
                    </div>
                    <h1 className="hero-title">
                        Don't Just Dream.<br />
                        <span className="highlight">Make It Happen.</span>
                    </h1>
                    <p className="hero-subtitle">
                        Mangalore's Ultimate Learning Hub for Future Medicos & Engineers.
                    </p>
                    <div className="hero-actions">
                        <button className="btn btn-primary">
                            Start Your Journey <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                        </button>
                        <button className="btn btn-outline">
                            View Courses <BookOpen size={20} style={{ marginLeft: '8px' }} />
                        </button>
                    </div>

                    <div className="hero-stats">
                        <div className="stat">
                            <span className="stat-number">5+</span>
                            <span className="stat-label">Years of Excellence</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat">
                            <span className="stat-number">1000+</span>
                            <span className="stat-label">Students Mentored</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat">
                            <span className="stat-number">98%</span>
                            <span className="stat-label">Success Rate</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-image-wrapper"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="hero-image-container">
                        <img src="/hero_vividya_grey.png" alt="Vividya Students" className="hero-img-real" />

                        <div className="floating-card card-1">
                            <span>✨ By IITians & Doctors</span>
                        </div>
                        <div className="floating-card card-2">
                            <span>🏆 NEET | JEE | CET</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
