import React from 'react';
import {
    Stethoscope,
    Atom,
    Dna,
    Calculator,
    FlaskConical,
    Microscope,
    Sigma,
    Activity,
    Zap,
    Brain
} from 'lucide-react';
import './BackgroundPattern.css';

const BackgroundPattern = () => {
    const icons = [
        { Icon: Stethoscope, top: '5%', left: '5%', size: 64, rotate: -15 },
        { Icon: Atom, top: '15%', left: '85%', size: 80, rotate: 10 },
        { Icon: Dna, top: '45%', left: '10%', size: 70, rotate: 45 },
        { Icon: Calculator, top: '75%', left: '88%', size: 60, rotate: -20 },
        { Icon: FlaskConical, top: '25%', left: '45%', size: 90, rotate: 5 },
        { Icon: Microscope, top: '65%', left: '5%', size: 75, rotate: 30 },
        { Icon: Sigma, top: '85%', left: '35%', size: 55, rotate: -10 },
        { Icon: Activity, top: '10%', left: '55%', size: 48, rotate: 15 },
        { Icon: Zap, top: '55%', left: '80%', size: 50, rotate: 25 },
        { Icon: Brain, top: '35%', left: '25%', size: 65, rotate: -5 },

        // Additional icons for better density
        { Icon: Stethoscope, top: '92%', left: '75%', size: 70, rotate: 45 },
        { Icon: Atom, top: '55%', left: '20%', size: 50, rotate: -30 },
    ];

    return (
        <div className="background-pattern">
            {icons.map(({ Icon, top, left, size, rotate }, index) => {
                // Generate random animation properties for organic feel
                // Use static seed-based logic or client-side only to avoid hydration errors in next.js, 
                // but for Vite simple random is fine if not SSR.
                const duration = 4 + Math.random() * 6 + 's';
                const delay = Math.random() * 5 + 's';

                return (
                    <div
                        key={index}
                        className="bg-icon-wrapper"
                        style={{
                            top,
                            left,
                            transform: `rotate(${rotate}deg)`
                        }}
                    >
                        <Icon
                            size={size}
                            strokeWidth={1.5}
                            className="bg-icon"
                            style={{
                                animationDuration: duration,
                                animationDelay: delay
                            }}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default BackgroundPattern;
