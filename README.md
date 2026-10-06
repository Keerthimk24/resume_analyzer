# SkillSync AI - AI Resume Skill Analyzer

A modern, React-based web application that compares a candidate's resume against a job description, extracts key skills, calculates an overall match score, identifies missing skills, and delivers personalized recommendations to improve job readiness.

![AI Resume Skill Analyzer](public/favicon.svg)

---

## ✨ Features

- **⚡ Instant Skill Extraction**: Scans resume text and job description against 100+ skills across 11 technical and soft skill categories.
- **🎯 Dynamic Match Score**: Interactive SVG circular gauge visualizing match percentage with color-coded readiness ratings (Excellent, Good, Moderate, Partial, Low).
- **🏷️ Visual Skill Badges**:
  - **Matching Skills**: Highlighting skills present in both resume and job listing.
  - **Missing Skills**: Clear identification of critical skills required by the employer.
  - **Additional Skills**: Bonus skills in candidate's resume that set them apart.
- **📊 Category Breakdown**: Visual progress bars showing strengths across Programming Languages, Frontend, Backend, Databases, Cloud & DevOps, Data Science/ML, Testing, and more.
- **💡 Personalized AI Recommendations**: Context-aware recommendations detailing priority skills to add, category-level growth areas, and resume optimization tips.
- **✨ One-Click Demo**: Pre-loaded sample resume and job description for quick testing.
- **🎨 Premium Dark UI**: Modern glassmorphism design with responsive layout, fluid micro-animations, and Inter typography.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS with CSS Custom Properties, Glassmorphism, and responsive design
- **Typography**: Inter (Google Fonts)
- **Icons**: Custom SVG vector graphics

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Keerthimk24/resume_analyzer.git

# Navigate to project directory
cd resume_analyzer

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Production Build

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
├── public/
│   ├── favicon.svg             # Custom SVG favicon
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation & branding
│   │   ├── Hero.jsx            # Hero section with animated orbs
│   │   ├── InputSection.jsx    # Dual-panel text inputs with sample loader
│   │   ├── ResultsDashboard.jsx# Aggregated analytics dashboard
│   │   ├── ScoreGauge.jsx      # Animated SVG circular gauge
│   │   ├── SkillChip.jsx       # Color-coded skill chips
│   │   ├── CategoryBreakdown.jsx# Category progress bars
│   │   ├── Recommendations.jsx # Actionable feedback cards
│   │   ├── HowItWorks.jsx      # 4-step workflow explainer
│   │   └── Footer.jsx          # Footer links and copyright
│   ├── utils/
│   │   └── skillAnalyzer.js    # Skill extraction & matching engine
│   ├── App.jsx                 # Main application orchestrator
│   ├── index.css               # Design system & tokens
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 📄 License

MIT License. Built for job seekers everywhere.
