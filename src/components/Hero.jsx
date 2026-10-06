import './Hero.css';

export default function Hero({ onScrollToAnalyzer }) {
  return (
    <section className="hero" id="hero">
      {/* Animated background orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />
      
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-dot" />
            AI-Powered Analysis
          </div>
          
          <h2 className="hero__heading">
            Match Your <span className="text-gradient">Resume Skills</span> to
            <br />
            Any Job Description
          </h2>
          
          <p className="hero__description">
            Instantly compare your resume against job postings. Discover matching skills,
            identify gaps, and get personalized recommendations to boost your job readiness.
          </p>
          
          <div className="hero__actions">
            <button 
              className="hero__cta hero__cta--primary" 
              onClick={onScrollToAnalyzer}
              id="start-analyzing-btn"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9 2a7 7 0 105.68 11.09l3.12 3.12a1 1 0 001.41-1.42l-3.11-3.11A7 7 0 009 2zm0 2a5 5 0 110 10A5 5 0 019 4z" fill="currentColor"/>
              </svg>
              Start Analyzing
            </button>
            <a href="#how-it-works" className="hero__cta hero__cta--secondary" id="learn-more-btn">
              Learn More →
            </a>
          </div>
          
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-value text-gradient">100+</span>
              <span className="hero__stat-label">Skills Tracked</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-value text-gradient">10+</span>
              <span className="hero__stat-label">Categories</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-value text-gradient">Instant</span>
              <span className="hero__stat-label">Results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
