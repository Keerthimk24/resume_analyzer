import ScoreGauge from './ScoreGauge';
import SkillChip from './SkillChip';
import CategoryBreakdown from './CategoryBreakdown';
import Recommendations from './Recommendations';
import './ResultsDashboard.css';

export default function ResultsDashboard({ results }) {
  if (!results) return null;

  const {
    matchScore,
    matchLevel,
    totalJobSkills,
    totalResumeSkills,
    matchingSkills,
    missingSkills,
    extraSkills,
    categoryBreakdown,
    recommendations
  } = results;

  return (
    <section className="results" id="results">
      <div className="results__container">
        <div className="results__header">
          <h2 className="results__title">
            <span className="text-gradient">Analysis</span> Results
          </h2>
          <p className="results__subtitle">
            Here's how your resume stacks up against the job description
          </p>
        </div>

        {/* Score Overview */}
        <div className="results__overview glass-card">
          <div className="results__score-section">
            <ScoreGauge score={matchScore} matchLevel={matchLevel} />
          </div>
          
          <div className="results__stats-grid">
            <div className="results__stat-card">
              <div className="results__stat-icon results__stat-icon--total">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="3" y="2" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M7 6h6M7 10h6M7 14h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="results__stat-value">{totalResumeSkills}</span>
              <span className="results__stat-label">Resume Skills</span>
            </div>
            
            <div className="results__stat-card">
              <div className="results__stat-icon results__stat-icon--job">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M7 4V3a1 1 0 011-1h4a1 1 0 011 1v1" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <span className="results__stat-value">{totalJobSkills}</span>
              <span className="results__stat-label">Required Skills</span>
            </div>
            
            <div className="results__stat-card">
              <div className="results__stat-icon results__stat-icon--match">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="results__stat-value results__stat-value--green">{matchingSkills.length}</span>
              <span className="results__stat-label">Matched</span>
            </div>
            
            <div className="results__stat-card">
              <div className="results__stat-icon results__stat-icon--missing">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M7 7l6 6M13 7l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="results__stat-value results__stat-value--red">{missingSkills.length}</span>
              <span className="results__stat-label">Missing</span>
            </div>
          </div>
        </div>

        {/* Skills Detail */}
        <div className="results__skills-grid">
          {/* Matching Skills */}
          <div className="results__skill-section glass-card">
            <div className="results__skill-header results__skill-header--matched">
              <span className="results__skill-header-icon">✅</span>
              <div>
                <h3 className="results__skill-title">Matching Skills</h3>
                <p className="results__skill-count">{matchingSkills.length} skills found in both</p>
              </div>
            </div>
            <div className="results__skill-chips">
              {matchingSkills.length > 0 ? (
                matchingSkills.map((skill, i) => (
                  <SkillChip key={skill.skill} skill={skill} variant="matched" index={i} />
                ))
              ) : (
                <p className="results__no-skills">No matching skills found</p>
              )}
            </div>
          </div>

          {/* Missing Skills */}
          <div className="results__skill-section glass-card">
            <div className="results__skill-header results__skill-header--missing">
              <span className="results__skill-header-icon">❌</span>
              <div>
                <h3 className="results__skill-title">Missing Skills</h3>
                <p className="results__skill-count">{missingSkills.length} skills to acquire</p>
              </div>
            </div>
            <div className="results__skill-chips">
              {missingSkills.length > 0 ? (
                missingSkills.map((skill, i) => (
                  <SkillChip key={skill.skill} skill={skill} variant="missing" index={i} />
                ))
              ) : (
                <p className="results__no-skills results__no-skills--good">
                  🎉 You have all the required skills!
                </p>
              )}
            </div>
          </div>

          {/* Extra Skills */}
          {extraSkills.length > 0 && (
            <div className="results__skill-section glass-card results__skill-section--full">
              <div className="results__skill-header results__skill-header--extra">
                <span className="results__skill-header-icon">💎</span>
                <div>
                  <h3 className="results__skill-title">Your Additional Skills</h3>
                  <p className="results__skill-count">{extraSkills.length} bonus skills not in job posting</p>
                </div>
              </div>
              <div className="results__skill-chips">
                {extraSkills.map((skill, i) => (
                  <SkillChip key={skill.skill} skill={skill} variant="extra" index={i} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Category Breakdown + Recommendations */}
        <div className="results__analysis-grid">
          <div className="results__analysis-col glass-card">
            <CategoryBreakdown categories={categoryBreakdown} />
          </div>
          <div className="results__analysis-col glass-card">
            <Recommendations recommendations={recommendations} />
          </div>
        </div>
      </div>
    </section>
  );
}
