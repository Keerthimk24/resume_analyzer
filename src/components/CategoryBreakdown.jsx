import './CategoryBreakdown.css';

export default function CategoryBreakdown({ categories }) {
  const sortedCategories = Object.entries(categories)
    .sort((a, b) => b[1].total - a[1].total);

  const getCategoryIcon = (category) => {
    const icons = {
      'Programming Languages': '💻',
      'Frontend Development': '🎨',
      'Backend Development': '⚙️',
      'Database': '🗄️',
      'Cloud & DevOps': '☁️',
      'Data Science & ML': '🤖',
      'Mobile Development': '📱',
      'Testing & QA': '🧪',
      'Tools & Practices': '🔧',
      'Soft Skills': '🤝',
      'Security': '🔒'
    };
    return icons[category] || '📋';
  };

  const getBarColor = (percentage) => {
    if (percentage >= 80) return 'var(--gradient-success)';
    if (percentage >= 60) return 'var(--gradient-secondary)';
    if (percentage >= 40) return 'var(--gradient-warning)';
    return 'var(--gradient-danger)';
  };

  return (
    <div className="category-breakdown" id="category-breakdown">
      <h3 className="category-breakdown__title">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="2" y="10" width="4" height="8" rx="1" fill="url(#catGrad)"/>
          <rect x="8" y="6" width="4" height="12" rx="1" fill="url(#catGrad)"/>
          <rect x="14" y="2" width="4" height="16" rx="1" fill="url(#catGrad)"/>
          <defs>
            <linearGradient id="catGrad" x1="2" y1="2" x2="18" y2="18" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8b5cf6"/>
              <stop offset="1" stopColor="#06b6d4"/>
            </linearGradient>
          </defs>
        </svg>
        Category Breakdown
      </h3>
      
      <div className="category-breakdown__list">
        {sortedCategories.map(([category, data], index) => (
          <div 
            className="category-item" 
            key={category}
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className="category-item__header">
              <span className="category-item__icon">{getCategoryIcon(category)}</span>
              <span className="category-item__name">{category}</span>
              <span className="category-item__ratio">
                {data.matched}/{data.total}
              </span>
              <span className={`category-item__percent category-item__percent--${
                data.percentage >= 80 ? 'high' : 
                data.percentage >= 50 ? 'mid' : 'low'
              }`}>
                {data.percentage}%
              </span>
            </div>
            
            <div className="category-item__bar-bg">
              <div 
                className="category-item__bar-fill"
                style={{ 
                  width: `${data.percentage}%`,
                  background: getBarColor(data.percentage)
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
