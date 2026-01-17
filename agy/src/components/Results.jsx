import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';
import './Results.css';

const topRankers = [
    {
        name: "Manaswini",
        college: "Hassan Institute of Medical Sciences",
        course: "NEET",
        rank: "Medical Seat",
        type: "medical"
    },
    {
        name: "Diya",
        college: "National Institute of Technology, Surathkal",
        course: "JEE Main",
        rank: "Superior Rank",
        type: "engineering"
    },
    {
        name: "Shanvy",
        college: "Bangalore Medical College",
        course: "NEET",
        rank: "Medical Seat",
        type: "medical"
    },
    {
        name: "Prakhyat",
        college: "National Institute of Technology, Surathkal",
        course: "JEE Main",
        rank: "Superior Rank",
        type: "engineering"
    },
    {
        name: "Srishti",
        college: "Kasturba Medical College, Mangalore",
        course: "NEET",
        rank: "Medical Seat",
        type: "medical"
    },
    {
        name: "Samruddhi",
        college: "RV College of Engineering, AI & ML",
        course: "KCET/JEE",
        rank: "Engineering Seat",
        type: "engineering"
    },
    {
        name: "Roshni",
        college: "Government Medical College, Ernakulam",
        course: "NEET",
        rank: "Medical Seat",
        type: "medical"
    },
    {
        name: "Imraz",
        college: "Koppal Institute of Medical Sciences",
        course: "NEET",
        rank: "Medical Seat",
        type: "medical"
    }
];

const Results = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCards = 3;

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % (topRankers.length - visibleCards + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
    };

    useEffect(() => {
        const timer = setInterval(() => {
            if (currentIndex < topRankers.length - visibleCards) {
                nextSlide();
            } else {
                setCurrentIndex(0);
            }
        }, 4000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    return (
        <section id="results" className="section-padding results-section">
            <div className="container">
                <h2 className="section-title">Hall of <span>Fame</span></h2>

                <div className="results-banner-container">
                    <img src="/results-banner.png" alt="Vividya Top Rankers" className="results-banner" />
                </div>

                <div className="carousel-container">
                    <div className="carousel-header">
                        <h3>Our Shining Stars</h3>
                        <div className="carousel-controls">
                            <button onClick={prevSlide} disabled={currentIndex === 0} className="nav-btn">
                                <ChevronLeft size={24} />
                            </button>
                            <button onClick={nextSlide} disabled={currentIndex >= topRankers.length - visibleCards} className="nav-btn">
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>

                    <div className="carousel-track-container">
                        <div
                            className="carousel-track"
                            style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
                        >
                            {topRankers.map((student, index) => (
                                <div key={index} className="student-card-wrapper" style={{ flex: `0 0 ${100 / visibleCards}%` }}>
                                    <div className="student-card">
                                        <div className="student-icon">
                                            <Award size={32} />
                                        </div>
                                        <h4 className="student-name">{student.name}</h4>
                                        <div className={`student-badge badge-${student.type}`}>{student.course}</div>
                                        <p className="student-college">{student.college}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Results;
