import { useState, useRef, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InputSection from './components/InputSection';
import ResultsDashboard from './components/ResultsDashboard';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import { analyzeResume } from './utils/skillAnalyzer';
import './App.css';

function App() {
  const [results, setResults] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const analyzerRef = useRef(null);
  const resultsRef = useRef(null);

  const handleScrollToAnalyzer = useCallback(() => {
    const el = document.getElementById('analyzer');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleAnalyze = useCallback((resumeText, jobText) => {
    setIsAnalyzing(true);
    setResults(null);

    // Simulate brief processing time for UX
    setTimeout(() => {
      const analysisResults = analyzeResume(resumeText, jobText);
      setResults(analysisResults);
      setIsAnalyzing(false);

      // Scroll to results after a brief delay
      setTimeout(() => {
        const el = document.getElementById('results');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 200);
    }, 800);
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <Hero onScrollToAnalyzer={handleScrollToAnalyzer} />
        <div ref={analyzerRef}>
          <InputSection onAnalyze={handleAnalyze} isAnalyzing={isAnalyzing} />
        </div>
        {results && (
          <div ref={resultsRef}>
            <ResultsDashboard results={results} />
          </div>
        )}
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}

export default App;
