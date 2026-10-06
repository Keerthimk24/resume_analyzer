import { useState } from 'react';
import { getSampleResume, getSampleJobDescription } from '../utils/skillAnalyzer';
import './InputSection.css';

export default function InputSection({ onAnalyze, isAnalyzing }) {
  const [resumeText, setResumeText] = useState('');
  const [jobText, setJobText] = useState('');

  const handleAnalyze = () => {
    if (resumeText.trim() && jobText.trim()) {
      onAnalyze(resumeText, jobText);
    }
  };

  const handleLoadSample = () => {
    setResumeText(getSampleResume());
    setJobText(getSampleJobDescription());
  };

  const handleClear = () => {
    setResumeText('');
    setJobText('');
  };

  const canAnalyze = resumeText.trim().length > 0 && jobText.trim().length > 0;

  return (
    <section className="input-section" id="analyzer">
      <div className="input-section__container">
        <div className="input-section__header">
          <h2 className="input-section__title">
            <span className="text-gradient">Analyze</span> Your Resume
          </h2>
          <p className="input-section__description">
            Paste your resume and the job description below to get an instant skill analysis
          </p>
        </div>

        <div className="input-section__grid">
          {/* Resume Input */}
          <div className="input-card glass-card">
            <div className="input-card__header">
              <div className="input-card__icon input-card__icon--resume">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <rect x="3" y="2" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <line x1="7" y1="7" x2="13" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="7" y1="11" x2="13" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="7" y1="15" x2="10" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <h3 className="input-card__title">Your Resume</h3>
                <p className="input-card__subtitle">Paste your resume content</p>
              </div>
              {resumeText && (
                <span className="input-card__count">
                  {resumeText.split(/\s+/).filter(Boolean).length} words
                </span>
              )}
            </div>
            <textarea
              className="input-card__textarea"
              placeholder="Paste your resume text here...&#10;&#10;Include your skills, experience, education, certifications, and any relevant qualifications."
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              id="resume-input"
              rows={14}
            />
          </div>

          {/* Job Description Input */}
          <div className="input-card glass-card">
            <div className="input-card__header">
              <div className="input-card__icon input-card__icon--job">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <rect x="2" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M8 4V3a1 1 0 011-1h4a1 1 0 011 1v1" stroke="currentColor" strokeWidth="1.5"/>
                  <line x1="2" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="11" cy="10" r="2" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <h3 className="input-card__title">Job Description</h3>
                <p className="input-card__subtitle">Paste the job posting</p>
              </div>
              {jobText && (
                <span className="input-card__count">
                  {jobText.split(/\s+/).filter(Boolean).length} words
                </span>
              )}
            </div>
            <textarea
              className="input-card__textarea"
              placeholder="Paste the job description here...&#10;&#10;Include required skills, qualifications, responsibilities, and nice-to-have skills."
              value={jobText}
              onChange={(e) => setJobText(e.target.value)}
              id="job-description-input"
              rows={14}
            />
          </div>
        </div>

        <div className="input-section__actions">
          <button 
            className="input-section__btn input-section__btn--sample"
            onClick={handleLoadSample}
            id="load-sample-btn"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 4h12M2 8h12M2 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Load Sample Data
          </button>
          
          <button 
            className="input-section__btn input-section__btn--analyze"
            onClick={handleAnalyze}
            disabled={!canAnalyze || isAnalyzing}
            id="analyze-btn"
          >
            {isAnalyzing ? (
              <>
                <span className="input-section__spinner" />
                Analyzing...
              </>
            ) : (
              <>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M12 12l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M8 5.5v5M5.5 8h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                Analyze Skills
              </>
            )}
          </button>

          {(resumeText || jobText) && (
            <button 
              className="input-section__btn input-section__btn--clear"
              onClick={handleClear}
              id="clear-btn"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Clear All
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
