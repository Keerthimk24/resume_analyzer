import './HowItWorks.css';

const steps = [
  {
    number: '01',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="3" width="16" height="22" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="8" y1="8" x2="16" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="8" y1="16" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="8" y1="20" x2="12" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M20 12l4 4M24 12l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Paste Your Resume',
    description: 'Copy and paste your resume text into the analyzer. Include all your skills, experience, and qualifications.'
  },
  {
    number: '02',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="5" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 5V4a1 1 0 011-1h8a1 1 0 011 1v1" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="3" y1="13" x2="25" y2="13" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="14" cy="13" r="2.5" fill="currentColor"/>
        <path d="M10 24h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Add Job Description',
    description: 'Paste the target job description with requirements, qualifications, and desired skills.'
  },
  {
    number: '03',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="22" cy="8" r="4" fill="currentColor" opacity="0.3"/>
        <path d="M20.5 8h3M22 6.5v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'AI Analyzes Skills',
    description: 'Our engine scans both texts, identifies skills from 100+ categories, and compares them instantly.'
  },
  {
    number: '04',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="22" height="22" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="6" y="14" width="4" height="8" rx="1" fill="currentColor" opacity="0.3"/>
        <rect x="12" y="10" width="4" height="12" rx="1" fill="currentColor" opacity="0.5"/>
        <rect x="18" y="6" width="4" height="16" rx="1" fill="currentColor" opacity="0.7"/>
        <path d="M7 12l5-3 5 2 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Get Detailed Results',
    description: 'View your match score, skill breakdown by category, and personalized recommendations to improve.'
  }
];

export default function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="how-it-works__container">
        <div className="how-it-works__header">
          <div className="how-it-works__eyebrow">How It Works</div>
          <h2 className="how-it-works__title">
            Four Simple <span className="text-gradient">Steps</span>
          </h2>
          <p className="how-it-works__description">
            Get actionable insights about your resume in seconds
          </p>
        </div>

        <div className="how-it-works__grid">
          {steps.map((step, index) => (
            <div 
              className="step-card glass-card" 
              key={index}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="step-card__number">{step.number}</div>
              <div className="step-card__icon">{step.icon}</div>
              <h3 className="step-card__title">{step.title}</h3>
              <p className="step-card__description">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="step-card__connector">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
