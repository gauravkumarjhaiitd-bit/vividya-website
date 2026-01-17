import React, { useState, useEffect } from 'react';
import { Palette } from 'lucide-react';

const themes = [
    { id: 'official', name: 'Official Warm', color: '#ec3865' },
    { id: 'dark', name: 'Dark Academia', color: '#0f172a' },
    { id: 'modern', name: 'Modern Tech', color: '#3b82f6' },
    { id: 'forest', name: 'Forest Elegant', color: '#059669' },
    { id: 'mono', name: 'Minimal Mono', color: '#000000' }
];

const ThemeSwitcher = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentTheme, setCurrentTheme] = useState('official');

    useEffect(() => {
        // Set default theme
        document.documentElement.setAttribute('data-theme', currentTheme);
    }, [currentTheme]);

    return (
        <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 9999 }}>
            <div style={{ position: 'relative' }}>
                {isOpen && (
                    <div style={{
                        position: 'absolute',
                        bottom: '100%',
                        right: '0',
                        marginBottom: '1rem',
                        background: 'white',
                        padding: '1rem',
                        borderRadius: '12px',
                        boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                        minWidth: '200px',
                        border: '1px solid #e5e7eb',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem'
                    }}>
                        <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', color: '#6b7280' }}>Select Theme</h4>
                        {themes.map((theme) => (
                            <button
                                key={theme.id}
                                onClick={() => {
                                    setCurrentTheme(theme.id);
                                    setIsOpen(false);
                                }}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '0.5rem',
                                    borderRadius: '6px',
                                    background: currentTheme === theme.id ? '#f3f4f6' : 'transparent',
                                    color: '#1f2937',
                                    border: 'none',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    fontWeight: 500
                                }}
                            >
                                <div style={{
                                    width: '16px',
                                    height: '16px',
                                    borderRadius: '50%',
                                    background: theme.color,
                                    border: '1px solid rgba(0,0,0,0.1)'
                                }} />
                                {theme.name}
                            </button>
                        ))}
                    </div>
                )}

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                        background: 'white',
                        color: '#1f2937',
                        width: '3.5rem',
                        height: '3.5rem',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.06)',
                        cursor: 'pointer',
                        border: '1px solid #e5e7eb',
                        transition: 'transform 0.2s'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                    <Palette size={24} />
                </button>
            </div>
        </div>
    );
};

export default ThemeSwitcher;
