import { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`} id="header">
      <div className="header__container">
        <div className="header__brand">
          <div className="header__logo">
            <div className="header__logo-icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="4" width="16" height="20" rx="2" stroke="url(#headerGrad)" strokeWidth="2"/>
                <line x1="6" y1="9" x2="14" y2="9" stroke="url(#headerGrad)" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="6" y1="13" x2="14" y2="13" stroke="url(#headerGrad)" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="6" y1="17" x2="11" y2="17" stroke="url(#headerGrad)" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="20" cy="18" r="6" stroke="url(#headerGrad)" strokeWidth="2"/>
                <path d="M18 18l1.5 1.5L23 16" stroke="url(#headerGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="headerGrad" x1="2" y1="4" x2="26" y2="24" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#8b5cf6"/>
                    <stop offset="1" stopColor="#06b6d4"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="header__title-group">
              <h1 className="header__title">
                <span className="text-gradient">SkillSync</span>
                <span className="header__badge">AI</span>
              </h1>
              <p className="header__subtitle">Resume Skill Analyzer</p>
            </div>
          </div>
        </div>
        <nav className="header__nav">
          <a href="#analyzer" className="header__nav-link">Analyzer</a>
          <a href="#how-it-works" className="header__nav-link">How It Works</a>
        </nav>
      </div>
    </header>
  );
}
