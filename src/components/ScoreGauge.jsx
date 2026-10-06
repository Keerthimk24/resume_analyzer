import { useState, useEffect } from 'react';
import './ScoreGauge.css';

export default function ScoreGauge({ score, matchLevel }) {
  const [animatedScore, setAnimatedScore] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();
    
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * score);
      
      setAnimatedScore(current);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [score]);

  // SVG circle parameters
  const size = 200;
  const strokeWidth = 12;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (animatedScore / 100) * circumference;

  const getScoreColor = () => {
    if (score >= 80) return '#10b981';
    if (score >= 60) return '#3b82f6';
    if (score >= 40) return '#fbbf24';
    if (score >= 20) return '#f97316';
    return '#ef4444';
  };

  const getGradientId = () => {
    if (score >= 80) return 'scoreGradGreen';
    if (score >= 60) return 'scoreGradBlue';
    if (score >= 40) return 'scoreGradYellow';
    if (score >= 20) return 'scoreGradOrange';
    return 'scoreGradRed';
  };

  return (
    <div className="score-gauge" id="score-gauge">
      <div className="score-gauge__ring">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <defs>
            <linearGradient id="scoreGradGreen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>
            <linearGradient id="scoreGradBlue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
            <linearGradient id="scoreGradYellow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
            <linearGradient id="scoreGradOrange" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#fb923c" />
            </linearGradient>
            <linearGradient id="scoreGradRed" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#f87171" />
            </linearGradient>
            <filter id="scoreGlow">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth={strokeWidth}
          />
          
          {/* Score circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={`url(#${getGradientId()})`}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
            filter="url(#scoreGlow)"
            style={{ transition: 'stroke-dashoffset 0.1s ease-out' }}
          />
        </svg>
        
        <div className="score-gauge__center">
          <span className="score-gauge__value" style={{ color: getScoreColor() }}>
            {animatedScore}%
          </span>
          <span className="score-gauge__label">Match Score</span>
        </div>
      </div>
      
      <div className="score-gauge__info">
        <span className="score-gauge__level" style={{ color: getScoreColor() }}>
          {matchLevel.emoji} {matchLevel.label}
        </span>
      </div>
    </div>
  );
}
