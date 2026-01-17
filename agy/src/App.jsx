import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Results from './components/Results';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

import ThemeSwitcher from './components/ThemeSwitcher';
import BackgroundPattern from './components/BackgroundPattern';

function App() {
    return (
        <div className="app">
            <BackgroundPattern />
            <Header />
            <ThemeSwitcher />
            <main>
                <Hero />
                <About />
                <Results />
                <Courses />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
