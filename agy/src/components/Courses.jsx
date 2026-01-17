import React from 'react';
import { Microscope, Calculator, GraduationCap } from 'lucide-react';
import './Courses.css';

const courses = [
    {
        id: 1,
        title: 'NEET Long Term',
        icon: Microscope,
        desc: 'Comprehensive coaching for medical aspirants. In-depth coverage of Biology, Physics, and Chemistry.',
        tags: ['Class 11 & 12', 'Repeaters']
    },
    {
        id: 2,
        title: 'JEE Main & Advanced',
        icon: Calculator,
        desc: 'Rigorous preparation for engineering entrance exams. Master problem-solving skills and concepts.',
        tags: ['Class 11 & 12', 'Foundation']
    },
    {
        id: 3,
        title: 'Foundation Course',
        icon: GraduationCap,
        desc: 'Laying a strong foundation for Class 8, 9, and 10 students to prepare early for competitive exams.',
        tags: ['Class 8-10', 'Early Start']
    }
];

const Courses = () => {
    return (
        <section id="courses" className="section-padding courses-section">
            <div className="container">
                <h2 className="section-title">Our <span>Programs</span></h2>

                <div className="courses-grid">
                    {courses.map((course) => (
                        <div key={course.id} className="course-card">
                            <div className="course-icon-bg">
                                <course.icon size={32} />
                            </div>
                            <h3 className="course-title">{course.title}</h3>
                            <p className="course-desc">{course.desc}</p>
                            <div className="course-tags">
                                {course.tags.map(tag => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>
                            <button className="btn-link">Learn More &rarr;</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;
