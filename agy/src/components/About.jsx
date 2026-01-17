import React from 'react';
import { Target, Users, Award } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section-padding about-section">
            <div className="container">
                <div className="about-grid">
                    <div className="about-content">
                        <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                            Why Choose <span>Vividya?</span>
                        </h2>
                        <p className="about-text">
                            Vividya NEET & JEE Academy is more than just a coaching center; it's a sanctuary for aspirants who dare to dream big. Established with the vision of providing top-tier education in Mangalore,/we have consistently delivered results through a unique blend of traditional teaching values and modern pedagogical techniques.
                        </p>
                        <p className="about-text">
                            Our expert faculty comprises industry veterans who understand the nuances of competitive exams. We believe in personalized attention, ensuring no student is left behind in their journey towards academic excellence.
                        </p>

                        <div className="features-list">
                            <div className="feature-item">
                                <Target className="feature-icon" />
                                <div>
                                    <h4>Focused Approach</h4>
                                    <p>Targeted curriculum designed for maximum retention and application.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <Users className="feature-icon" />
                                <div>
                                    <h4>Small Batch Sizes</h4>
                                    <p>Ensuring individual attention and quicker doubt resolution.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <Award className="feature-icon" />
                                <div>
                                    <h4>Proven Track Record</h4>
                                    <p>Consistent results in NEET and JEE year after year.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-image">
                        <div className="image-frame">
                            {/* Placeholder for About Image */}
                            <div className="about-img-placeholder">
                                About Us Image
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
