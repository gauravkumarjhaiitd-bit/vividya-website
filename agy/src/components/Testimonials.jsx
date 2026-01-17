import React from 'react';
import { Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
    {
        id: 1,
        name: "Dr. Ananya Rao",
        role: "NEET Rank 145 (2022)",
        text: "Vividya transformed my approach to Biology. The faculty's dedication is unmatched. They don't just teach chapters; they teach you how to think."
    },
    {
        id: 2,
        name: "Rahul K.",
        role: "JEE Advanced Rank 890 (2023)",
        text: "The rigorous testing and doubt clearing sessions at Vividya were instrumental in my success. I highly recommend their JEE program."
    },
    {
        id: 3,
        name: "Priya Shetty",
        role: "Parent",
        text: "Putting my son in Vividya Foundation course was the best decision. His confidence in Science and Maths has improved drastically."
    }
];

const Testimonials = () => {
    return (
        <section id="results" className="section-padding testimonials-section">
            <div className="container">
                <h2 className="section-title">Success <span>Stories</span></h2>

                <div className="testimonials-grid">
                    {testimonials.map((item) => (
                        <div key={item.id} className="testimonial-card">
                            <Quote className="quote-icon" size={40} />
                            <p className="testimonial-text">"{item.text}"</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">{item.name.charAt(0)}</div>
                                <div>
                                    <h4 className="author-name">{item.name}</h4>
                                    <span className="author-role">{item.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
