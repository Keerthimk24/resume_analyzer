import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                <rect x="2" y="4" width="16" height="20" rx="2" stroke="url(#footGrad)" strokeWidth="2"/>
                <line x1="6" y1="9" x2="14" y2="9" stroke="url(#footGrad)" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="6" y1="13" x2="14" y2="13" stroke="url(#footGrad)" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="6" y1="17" x2="11" y2="17" stroke="url(#footGrad)" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="20" cy="18" r="6" stroke="url(#footGrad)" strokeWidth="2"/>
                <path d="M18 18l1.5 1.5L23 16" stroke="url(#footGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="footGrad" x1="2" y1="4" x2="26" y2="24" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#8b5cf6"/>
                    <stop offset="1" stopColor="#06b6d4"/>
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-gradient footer__title">SkillSync AI</span>
            </div>
            <p className="footer__tagline">
              AI-powered resume analysis to help you land your dream job.
            </p>
          </div>
          
          <div className="footer__links-group">
            <h4 className="footer__links-title">Quick Links</h4>
            <a href="#hero" className="footer__link">Home</a>
            <a href="#analyzer" className="footer__link">Analyzer</a>
            <a href="#how-it-works" className="footer__link">How It Works</a>
          </div>
          
          <div className="footer__links-group">
            <h4 className="footer__links-title">Features</h4>
            <span className="footer__link">Skill Matching</span>
            <span className="footer__link">Gap Analysis</span>
            <span className="footer__link">Recommendations</span>
          </div>
        </div>
        
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} SkillSync AI. Built for job seekers everywhere.
          </p>
          <p className="footer__powered">
            Powered by intelligent skill analysis ✨
          </p>
        </div>
      </div>
    </footer>
  );
}
