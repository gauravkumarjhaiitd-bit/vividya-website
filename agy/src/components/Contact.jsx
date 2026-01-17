import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section-padding contact-section">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h2 className="section-title" style={{ textAlign: 'left', color: 'white' }}>
                            Get in <span>Touch</span>
                        </h2>
                        <p className="contact-sub">
                            Ready to start your journey? Visit our campus or send us an inquiry.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <MapPin className="contact-icon" />
                                <p>2nd Floor, Yenepoya Mall, Kadri Road, Mallikatte, Mangaluru, Karnataka 575002</p>
                            </div>
                            <div className="contact-item">
                                <Phone className="contact-icon" />
                                <p>+91 999 888 7777</p>
                            </div>
                            <div className="contact-item">
                                <Mail className="contact-icon" />
                                <p>admissions@vividya.com</p>
                            </div>
                            <div className="contact-item">
                                <Clock className="contact-icon" />
                                <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                            </div>
                        </div>

                        <div className="map-container">
                            <iframe
                                title="Vividya Location"
                                src="https://maps.google.com/maps?q=Yenepoya%20Mall%2C%20Kadri%20Road%2C%20Mangaluru&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="250"
                                style={{ border: 0, borderRadius: '12px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <h3>Enquire Now</h3>
                            <div className="form-group">
                                <input type="text" placeholder="Student Name" required />
                            </div>
                            <div className="form-group">
                                <input type="tel" placeholder="Phone Number" required />
                            </div>
                            <div className="form-group">
                                <select>
                                    <option>Select Course</option>
                                    <option>NEET</option>
                                    <option>JEE</option>
                                    <option>Foundation</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <textarea rows="4" placeholder="Your Message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
