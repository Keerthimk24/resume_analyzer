import './Recommendations.css';

export default function Recommendations({ recommendations }) {
  const getTypeClass = (type) => {
    const classes = {
      critical: 'recommendations__card--critical',
      category: 'recommendations__card--category',
      positive: 'recommendations__card--positive',
      improvement: 'recommendations__card--improvement',
      growth: 'recommendations__card--growth',
      info: 'recommendations__card--info',
      tip: 'recommendations__card--tip'
    };
    return classes[type] || '';
  };

  return (
    <div className="recommendations" id="recommendations">
      <h3 className="recommendations__title">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 2a5 5 0 00-3 9v2a1 1 0 001 1h4a1 1 0 001-1v-2a5 5 0 00-3-9z" 
                stroke="url(#recGrad)" strokeWidth="1.5" fill="none"/>
          <line x1="8" y1="16" x2="12" y2="16" stroke="url(#recGrad)" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="8.5" y1="18" x2="11.5" y2="18" stroke="url(#recGrad)" strokeWidth="1.5" strokeLinecap="round"/>
          <defs>
            <linearGradient id="recGrad" x1="5" y1="2" x2="15" y2="18" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fbbf24"/>
              <stop offset="1" stopColor="#f97316"/>
            </linearGradient>
          </defs>
        </svg>
        Personalized Recommendations
      </h3>

      <div className="recommendations__grid">
        {recommendations.map((rec, index) => (
          <div 
            className={`recommendations__card glass-card ${getTypeClass(rec.type)}`}
            key={index}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="recommendations__card-header">
              <span className="recommendations__card-icon">{rec.icon}</span>
              <h4 className="recommendations__card-title">{rec.title}</h4>
            </div>
            
            <p className="recommendations__card-desc">{rec.description}</p>
            
            {rec.skills && rec.skills.length > 0 && (
              <div className="recommendations__skills">
                {rec.skills.map((skill, i) => (
                  <span className="recommendations__skill-tag" key={i}>{skill}</span>
                ))}
              </div>
            )}
            
            <div className="recommendations__card-action">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>{rec.action}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
