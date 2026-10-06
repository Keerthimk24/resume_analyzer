/**
 * AI Resume Skill Analyzer - Core Analysis Engine
 * 
 * This module handles:
 * - Skill extraction from resume and job description text
 * - Matching algorithm for skill comparison
 * - Score calculation
 * - Personalized recommendation generation
 */

// Comprehensive skill database organized by category
const SKILL_DATABASE = {
  'Programming Languages': [
    'javascript', 'typescript', 'python', 'java', 'c++', 'c#', 'c',
    'ruby', 'php', 'swift', 'kotlin', 'go', 'golang', 'rust', 'scala',
    'perl', 'r', 'matlab', 'dart', 'lua', 'haskell', 'elixir',
    'objective-c', 'assembly', 'fortran', 'cobol', 'visual basic',
    'groovy', 'clojure', 'f#', 'julia', 'solidity'
  ],
  'Frontend Development': [
    'react', 'reactjs', 'react.js', 'angular', 'angularjs', 'vue',
    'vuejs', 'vue.js', 'svelte', 'next.js', 'nextjs', 'nuxt',
    'nuxtjs', 'gatsby', 'html', 'html5', 'css', 'css3', 'sass',
    'scss', 'less', 'tailwind', 'tailwindcss', 'bootstrap',
    'material ui', 'material-ui', 'mui', 'chakra ui', 'ant design',
    'styled-components', 'emotion', 'webpack', 'vite', 'parcel',
    'rollup', 'babel', 'jquery', 'redux', 'mobx', 'zustand',
    'recoil', 'context api', 'pwa', 'responsive design',
    'web components', 'storybook', 'figma', 'adobe xd', 'sketch'
  ],
  'Backend Development': [
    'node.js', 'nodejs', 'node', 'express', 'expressjs', 'django',
    'flask', 'fastapi', 'spring', 'spring boot', 'springboot',
    'asp.net', '.net', 'dotnet', 'rails', 'ruby on rails', 'laravel',
    'symfony', 'gin', 'fiber', 'actix', 'rocket', 'nest.js', 'nestjs',
    'koa', 'hapi', 'graphql', 'rest', 'restful', 'rest api',
    'microservices', 'api design', 'grpc', 'websocket', 'websockets',
    'oauth', 'jwt', 'authentication', 'authorization', 'middleware'
  ],
  'Database': [
    'sql', 'mysql', 'postgresql', 'postgres', 'mongodb', 'redis',
    'elasticsearch', 'cassandra', 'dynamodb', 'firebase', 'firestore',
    'sqlite', 'oracle', 'sql server', 'mariadb', 'couchdb',
    'neo4j', 'influxdb', 'memcached', 'supabase', 'prisma',
    'sequelize', 'mongoose', 'typeorm', 'knex', 'database design',
    'data modeling', 'normalization', 'indexing', 'query optimization'
  ],
  'Cloud & DevOps': [
    'aws', 'amazon web services', 'azure', 'gcp', 'google cloud',
    'docker', 'kubernetes', 'k8s', 'terraform', 'ansible', 'jenkins',
    'ci/cd', 'cicd', 'github actions', 'gitlab ci', 'circleci',
    'travis ci', 'nginx', 'apache', 'linux', 'unix', 'bash',
    'shell scripting', 'powershell', 'serverless', 'lambda',
    'cloudformation', 'helm', 'prometheus', 'grafana', 'datadog',
    'new relic', 'elk stack', 'vagrant', 'puppet', 'chef',
    'cloud computing', 'iaas', 'paas', 'saas', 'load balancing',
    'cdn', 'ssl', 'tls', 'dns'
  ],
  'Data Science & ML': [
    'machine learning', 'deep learning', 'artificial intelligence',
    'ai', 'ml', 'neural networks', 'tensorflow', 'pytorch', 'keras',
    'scikit-learn', 'sklearn', 'pandas', 'numpy', 'scipy',
    'matplotlib', 'seaborn', 'plotly', 'jupyter', 'data analysis',
    'data visualization', 'statistics', 'regression', 'classification',
    'clustering', 'nlp', 'natural language processing',
    'computer vision', 'opencv', 'reinforcement learning',
    'feature engineering', 'model deployment', 'mlops',
    'data pipeline', 'etl', 'data warehousing', 'big data',
    'spark', 'hadoop', 'kafka', 'airflow', 'dbt',
    'power bi', 'tableau', 'looker', 'data engineering',
    'generative ai', 'llm', 'large language models', 'transformers',
    'hugging face', 'langchain', 'rag', 'prompt engineering'
  ],
  'Mobile Development': [
    'react native', 'flutter', 'ios', 'android', 'xamarin',
    'ionic', 'cordova', 'capacitor', 'expo', 'swiftui',
    'jetpack compose', 'mobile development', 'app development',
    'responsive design', 'mobile ui', 'push notifications',
    'app store', 'google play'
  ],
  'Testing & QA': [
    'testing', 'unit testing', 'integration testing', 'e2e testing',
    'end-to-end testing', 'jest', 'mocha', 'chai', 'cypress',
    'selenium', 'playwright', 'puppeteer', 'pytest', 'junit',
    'testng', 'rspec', 'tdd', 'bdd', 'test-driven development',
    'behavior-driven development', 'qa', 'quality assurance',
    'load testing', 'performance testing', 'security testing',
    'penetration testing', 'code review', 'debugging'
  ],
  'Tools & Practices': [
    'git', 'github', 'gitlab', 'bitbucket', 'svn', 'jira',
    'confluence', 'trello', 'asana', 'slack', 'agile', 'scrum',
    'kanban', 'waterfall', 'sdlc', 'design patterns',
    'solid principles', 'clean code', 'code review',
    'pair programming', 'documentation', 'technical writing',
    'system design', 'architecture', 'microservices architecture',
    'monorepo', 'npm', 'yarn', 'pnpm', 'pip', 'maven', 'gradle'
  ],
  'Soft Skills': [
    'communication', 'leadership', 'teamwork', 'problem solving',
    'problem-solving', 'critical thinking', 'time management',
    'project management', 'stakeholder management', 'mentoring',
    'coaching', 'presentation', 'public speaking', 'negotiation',
    'conflict resolution', 'adaptability', 'creativity',
    'attention to detail', 'analytical skills', 'decision making',
    'strategic thinking', 'collaboration', 'cross-functional',
    'self-motivated', 'fast learner', 'quick learner'
  ],
  'Security': [
    'cybersecurity', 'information security', 'network security',
    'application security', 'owasp', 'encryption', 'ssl/tls',
    'firewall', 'vpn', 'ids', 'ips', 'siem', 'soc',
    'vulnerability assessment', 'incident response',
    'compliance', 'gdpr', 'hipaa', 'pci dss', 'iso 27001',
    'zero trust', 'identity management', 'access control'
  ]
};

// Flatten all skills for quick lookup
const ALL_SKILLS = {};
Object.entries(SKILL_DATABASE).forEach(([category, skills]) => {
  skills.forEach(skill => {
    ALL_SKILLS[skill.toLowerCase()] = category;
  });
});

// Skill aliases for normalization
const SKILL_ALIASES = {
  'js': 'javascript',
  'ts': 'typescript',
  'py': 'python',
  'react.js': 'react',
  'reactjs': 'react',
  'vue.js': 'vue',
  'vuejs': 'vue',
  'angular.js': 'angular',
  'angularjs': 'angular',
  'node': 'node.js',
  'nodejs': 'node.js',
  'express': 'expressjs',
  'next': 'next.js',
  'nextjs': 'next.js',
  'nest': 'nest.js',
  'nestjs': 'nest.js',
  'postgres': 'postgresql',
  'mongo': 'mongodb',
  'k8s': 'kubernetes',
  'tf': 'tensorflow',
  'aws': 'amazon web services',
  'gcp': 'google cloud',
  'ml': 'machine learning',
  'ai': 'artificial intelligence',
  'dl': 'deep learning',
  'nlp': 'natural language processing',
  'ci/cd': 'cicd',
  'dotnet': '.net',
  'golang': 'go',
};

/**
 * Normalize a skill name by applying aliases and lowercasing
 */
function normalizeSkill(skill) {
  const lower = skill.toLowerCase().trim();
  return SKILL_ALIASES[lower] || lower;
}

/**
 * Extract skills from raw text using the skill database
 * Returns an array of { skill, category, original } objects
 */
export function extractSkills(text) {
  if (!text || typeof text !== 'string') return [];
  
  const normalizedText = text.toLowerCase();
  const foundSkills = new Map();
  
  // Sort skills by length (longest first) to match multi-word skills first
  const allSkillEntries = Object.entries(SKILL_DATABASE)
    .flatMap(([category, skills]) => 
      skills.map(skill => ({ skill, category }))
    )
    .sort((a, b) => b.skill.length - a.skill.length);
  
  for (const { skill, category } of allSkillEntries) {
    const normalized = normalizeSkill(skill);
    if (foundSkills.has(normalized)) continue;
    
    // Create a regex pattern that matches the skill as a whole word
    const escapedSkill = skill.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const pattern = new RegExp(`(?:^|[\\s,;|/()\\[\\]{}•\\-])${escapedSkill}(?:[\\s,;|/()\\[\\]{}•\\-.]|$)`, 'i');
    
    if (pattern.test(normalizedText)) {
      foundSkills.set(normalized, {
        skill: normalized,
        displayName: skill.charAt(0).toUpperCase() + skill.slice(1),
        category,
        original: skill
      });
    }
  }
  
  return Array.from(foundSkills.values());
}

/**
 * Analyze resume against job description
 * Returns comprehensive analysis results
 */
export function analyzeResume(resumeText, jobDescriptionText) {
  const resumeSkills = extractSkills(resumeText);
  const jobSkills = extractSkills(jobDescriptionText);
  
  const resumeSkillSet = new Set(resumeSkills.map(s => s.skill));
  const jobSkillSet = new Set(jobSkills.map(s => s.skill));
  
  // Matching skills (in both resume and job description)
  const matchingSkills = jobSkills.filter(s => resumeSkillSet.has(s.skill));
  
  // Missing skills (in job description but not in resume)
  const missingSkills = jobSkills.filter(s => !resumeSkillSet.has(s.skill));
  
  // Extra skills (in resume but not in job description)
  const extraSkills = resumeSkills.filter(s => !jobSkillSet.has(s.skill));
  
  // Calculate match score
  const matchScore = jobSkills.length > 0 
    ? Math.round((matchingSkills.length / jobSkills.length) * 100) 
    : 0;
  
  // Category breakdown
  const categoryBreakdown = getCategoryBreakdown(jobSkills, matchingSkills, missingSkills);
  
  // Generate recommendations
  const recommendations = generateRecommendations(
    matchScore, matchingSkills, missingSkills, extraSkills, categoryBreakdown
  );
  
  // Determine match level
  const matchLevel = getMatchLevel(matchScore);
  
  return {
    matchScore,
    matchLevel,
    totalJobSkills: jobSkills.length,
    totalResumeSkills: resumeSkills.length,
    matchingSkills,
    missingSkills,
    extraSkills,
    categoryBreakdown,
    recommendations,
    resumeSkills,
    jobSkills
  };
}

/**
 * Get category-wise breakdown of skill matching
 */
function getCategoryBreakdown(jobSkills, matchingSkills, missingSkills) {
  const categories = {};
  
  jobSkills.forEach(skill => {
    if (!categories[skill.category]) {
      categories[skill.category] = { total: 0, matched: 0, missing: 0, skills: [] };
    }
    categories[skill.category].total++;
  });
  
  matchingSkills.forEach(skill => {
    if (categories[skill.category]) {
      categories[skill.category].matched++;
      categories[skill.category].skills.push({ ...skill, status: 'matched' });
    }
  });
  
  missingSkills.forEach(skill => {
    if (categories[skill.category]) {
      categories[skill.category].missing++;
      categories[skill.category].skills.push({ ...skill, status: 'missing' });
    }
  });
  
  // Calculate percentage for each category
  Object.values(categories).forEach(cat => {
    cat.percentage = cat.total > 0 ? Math.round((cat.matched / cat.total) * 100) : 0;
  });
  
  return categories;
}

/**
 * Determine the match level based on score
 */
function getMatchLevel(score) {
  if (score >= 80) return { label: 'Excellent Match', emoji: '🎯', color: 'green' };
  if (score >= 60) return { label: 'Good Match', emoji: '✅', color: 'blue' };
  if (score >= 40) return { label: 'Moderate Match', emoji: '📊', color: 'yellow' };
  if (score >= 20) return { label: 'Partial Match', emoji: '⚠️', color: 'orange' };
  return { label: 'Low Match', emoji: '🔄', color: 'red' };
}

/**
 * Generate personalized recommendations
 */
function generateRecommendations(score, matching, missing, extra, categories) {
  const recommendations = [];
  
  // Priority missing skills (most impactful categories first)
  const priorityCategories = [
    'Programming Languages',
    'Frontend Development',
    'Backend Development',
    'Cloud & DevOps',
    'Database',
    'Data Science & ML'
  ];
  
  // High priority recommendations for critical missing skills
  const criticalMissing = missing.filter(s => 
    priorityCategories.includes(s.category)
  );
  
  if (criticalMissing.length > 0) {
    const topMissing = criticalMissing.slice(0, 5);
    recommendations.push({
      type: 'critical',
      icon: '🚨',
      title: 'Priority Skills to Add',
      description: `These technical skills are explicitly mentioned in the job description and should be highlighted in your resume:`,
      skills: topMissing.map(s => s.displayName),
      action: 'Focus on acquiring or highlighting these skills first.'
    });
  }
  
  // Category-specific recommendations
  Object.entries(categories).forEach(([category, data]) => {
    if (data.percentage < 50 && data.missing > 0) {
      const missingInCategory = data.skills
        .filter(s => s.status === 'missing')
        .map(s => s.displayName);
      
      recommendations.push({
        type: 'category',
        icon: '📚',
        title: `Strengthen ${category}`,
        description: `You're matching only ${data.percentage}% of required ${category.toLowerCase()} skills.`,
        skills: missingInCategory,
        action: `Consider adding experience or projects showcasing these ${category.toLowerCase()} skills.`
      });
    }
  });
  
  // Score-based general advice
  if (score >= 80) {
    recommendations.push({
      type: 'positive',
      icon: '🌟',
      title: 'Strong Profile Match',
      description: 'Your resume demonstrates excellent alignment with this job description.',
      action: 'Focus on tailoring your accomplishments and quantifying your impact for each matching skill.'
    });
  } else if (score >= 60) {
    recommendations.push({
      type: 'improvement',
      icon: '💡',
      title: 'Good Foundation, Room to Grow',
      description: 'You have a solid skill foundation. A few targeted additions could significantly boost your profile.',
      action: 'Consider online courses, certifications, or personal projects to fill the gaps.'
    });
  } else if (score >= 40) {
    recommendations.push({
      type: 'improvement',
      icon: '🎯',
      title: 'Targeted Skill Development Needed',
      description: 'There\'s a moderate gap between your current skills and job requirements.',
      action: 'Create a 3-6 month learning plan focusing on the missing technical skills. Consider bootcamps or structured courses.'
    });
  } else {
    recommendations.push({
      type: 'growth',
      icon: '🔄',
      title: 'Significant Skill Gap Identified',
      description: 'This role requires substantial additional skills beyond your current profile.',
      action: 'Consider entry-level roles in this domain or invest in comprehensive training programs to build foundational skills.'
    });
  }
  
  // Extra skills recommendation
  if (extra.length > 0) {
    const relevantExtras = extra.filter(s => 
      !['Soft Skills', 'Tools & Practices'].includes(s.category)
    );
    
    if (relevantExtras.length > 0) {
      recommendations.push({
        type: 'info',
        icon: '💎',
        title: 'Your Unique Strengths',
        description: `You have ${relevantExtras.length} additional skills not listed in the job description. These can set you apart.`,
        skills: relevantExtras.slice(0, 6).map(s => s.displayName),
        action: 'Highlight these as bonus qualifications in your cover letter or interview.'
      });
    }
  }
  
  // Resume optimization tips
  recommendations.push({
    type: 'tip',
    icon: '✍️',
    title: 'Resume Optimization Tips',
    description: 'General tips to improve your resume-job alignment:',
    action: 'Use exact keywords from the job description. Quantify achievements. Tailor your summary section to match the role. Use action verbs and specific project examples.'
  });
  
  return recommendations;
}

/**
 * Get sample resume text for demo purposes
 */
export function getSampleResume() {
  return `John Doe - Software Engineer

Summary:
Experienced full-stack developer with 5 years of expertise in building scalable web applications. Proficient in modern JavaScript frameworks and cloud technologies.

Technical Skills:
- Languages: JavaScript, TypeScript, Python, Java
- Frontend: React, Next.js, HTML5, CSS3, Tailwind CSS, Redux
- Backend: Node.js, Express, Django, REST API, GraphQL
- Databases: PostgreSQL, MongoDB, Redis
- Cloud: AWS (EC2, S3, Lambda), Docker, Kubernetes
- Testing: Jest, Cypress, Selenium
- Tools: Git, GitHub, Jira, CI/CD, Agile/Scrum

Experience:
Senior Frontend Developer at TechCorp (2022-Present)
- Led development of a React-based dashboard serving 50K+ daily users
- Implemented responsive design and PWA features
- Reduced page load time by 40% through code splitting and lazy loading
- Mentored 3 junior developers in React and TypeScript best practices

Full Stack Developer at StartupXYZ (2020-2022)
- Built RESTful APIs using Node.js and Express
- Designed and implemented PostgreSQL database schemas
- Deployed applications using Docker and AWS
- Implemented CI/CD pipelines using GitHub Actions

Education:
B.S. Computer Science, State University (2020)

Certifications:
- AWS Certified Developer Associate
- MongoDB Certified Developer`;
}

/**
 * Get sample job description text for demo purposes
 */
export function getSampleJobDescription() {
  return `Senior Full Stack Developer - TechVentures Inc.

About the Role:
We're looking for a Senior Full Stack Developer to join our engineering team. You'll work on building next-generation web applications using modern technologies and best practices.

Required Skills & Qualifications:
- 5+ years of experience in software development
- Strong proficiency in JavaScript/TypeScript
- Experience with React and Next.js for frontend development
- Proficiency in Node.js and Express for backend development
- Experience with Python and Django is a plus
- Strong knowledge of SQL databases (PostgreSQL, MySQL)
- Experience with NoSQL databases (MongoDB, Redis)
- Familiarity with cloud services (AWS, GCP, or Azure)
- Experience with Docker and Kubernetes
- Knowledge of CI/CD pipelines and DevOps practices
- Experience with GraphQL and REST API design
- Understanding of microservices architecture
- Proficiency in Git version control
- Experience with testing frameworks (Jest, Cypress)
- Knowledge of Agile/Scrum methodologies

Nice to Have:
- Experience with machine learning or AI integration
- Knowledge of Terraform for infrastructure as code
- Experience with Kafka or other message queuing systems
- Familiarity with Go or Rust
- Experience with performance optimization and monitoring
- Knowledge of security best practices and OWASP guidelines

What We Offer:
- Competitive salary and equity
- Remote-first work environment
- Professional development budget
- Health and wellness benefits`;
}
