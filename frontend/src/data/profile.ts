export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
  { label: 'Skills', path: '/skills' },
  { label: 'Chatbot', path: '/chatbot' },
  { label: 'Resume', path: '/resume' },
  { label: 'Contact', path: '/contact' },
];

export const candidate = {
  name: 'Jayanth Ruddraraju',
  title: 'AI/ML Engineer',
  location: 'Maryland, USA',
  email: 'jayanthruddraraju9@gmail.com',
  linkedIn: 'linkedin.com/in/jayanth-ruddraraju',
  summary:
    'AI/ML Engineer with 3+ years of experience across mobility and enterprise technology domains. Skilled in production-ready ML systems, NLP, RAG, LangChain, and AWS-powered data pipelines.',
  stats: [
    { label: 'Years Experience', value: '3+' },
    { label: 'Top Companies', value: '2' },
    { label: 'Projects', value: '10+' },
    { label: 'Technologies', value: '15+' },
  ],
};

export const heroTags = ['Verified Answers', 'Up-to-date', 'Private & Secure'];

export const heroQuickPhrases = [
  'Ask anything about experience.',
  'Explore skills, projects, and fit.',
  'Get recruiter-ready insights instantly.',
];

export const featureCards = [
  {
    title: 'Ask natural questions',
    description: 'Recruiters can query career impact, technology fit, and project outcomes in plain language.',
    accent: 'text-brand-500',
  },
  {
    title: 'Instant resume insights',
    description: 'Get crisp answers from Jayanth’s experience, projects, and skills in a single conversation.',
    accent: 'text-cyan-500',
  },
  {
    title: 'Verified source answers',
    description: 'Every answer connects to resume facts, company experience, and project highlights.',
    accent: 'text-slate-900',
  },
  {
    title: 'Contact in one click',
    description: 'Send an email or open LinkedIn with recruiter-ready context in hand.',
    accent: 'text-emerald-500',
  },
];

export const experienceSnapshot = [
  {
    company: 'Uber',
    role: 'AI/ML Engineer',
    dates: 'Jul 2025 – Present',
    bullets: [
      'Built real-time demand forecasting models using Python and Apache Spark.',
      'Processed 2M+ daily trip records with temporal and geospatial features.',
      'Supported surge pricing decisions across 20+ high-demand zones.',
      'Developed Airflow workflows for scalable feature engineering.',
      'Deployed Dockerized REST API inference services with ~90 ms latency.',
    ],
    tech: ['Python', 'Spark', 'Airflow', 'Docker', 'PyTorch', 'SQL'],
  },
  {
    company: 'Dell Technologies',
    role: 'Machine Learning Engineer',
    dates: 'Jun 2021 – Aug 2023',
    bullets: [
      'Trained models on 2M+ device telemetry records for failure prediction.',
      'Predicted 8K+ hardware failure cases and improved maintenance planning.',
      'Built ETL pipelines using SQL, AWS S3, and batch processing.',
      'Designed classification models for 40K+ monthly support tickets.',
      'Delivered batch inference scoring for 500K+ records per execution.',
    ],
    tech: ['Python', 'SQL', 'AWS S3', 'Pandas', 'XGBoost', 'TensorFlow'],
  },
];

export const skillGroups = [
  {
    title: 'ML & AI',
    skills: ['Machine Learning', 'Deep Learning', 'Gradient Boosting', 'Random Forest', 'XGBoost', 'PyTorch', 'TensorFlow'],
  },
  {
    title: 'Data Engineering',
    skills: ['Apache Spark', 'PySpark', 'SQL', 'Pandas', 'Data Cleaning', 'ETL Pipelines', 'Apache Airflow'],
  },
  {
    title: 'Deployment',
    skills: ['Docker', 'REST APIs', 'MLflow', 'Model Monitoring', 'Kubernetes', 'CI/CD'],
  },
  {
    title: 'GenAI & NLP',
    skills: ['LLMs', 'RAG', 'LangChain', 'OpenAI API', 'BERT', 'Transformers', 'NLP'],
  },
];

export const processSteps = [
  {
    title: 'Ask',
    description: 'Pose a recruiter question in plain language and get context-aware answers.',
  },
  {
    title: 'Understand',
    description: 'See experience, skills, projects, and fit distilled into concise recruiter insights.',
  },
  {
    title: 'Connect',
    description: 'Use contact-ready notes to reach out with confidence and relevancy.',
  },
];

export const featuredQuestions = [
  'What are his current responsibilities?',
  'What ML projects has he built?',
  'What is his experience with RAG?',
  'Is he open to full-time roles?',
];

export const recruiterHighlights = [
  {
    label: '6K+ documents supported',
    value: 'RAG-ready reference',
  },
  {
    label: '90 ms inference',
    value: 'Production mindset',
  },
  {
    label: 'Top-tier impact',
    value: 'Uber & Dell experience',
  },
  {
    label: 'Cloud-ready workflows',
    value: 'AWS, Docker, Kafka',
  },
];

export const chatQuickPrompts = [
  'Summarize in 5 bullets',
  'Key skills match',
  'Project highlights',
  'Experience timeline',
  'Role fit analysis',
  'Work authorization',
];

export const conversationHistory = [
  'Summarize Jayanth’s background',
  'Uber experience details',
  'RAG and NLP experience',
  'Fit for AI/ML engineer roles?',
  'Projects overview',
  'Availability and notice period',
];

export const quickStats = [
  { label: 'Python', value: 'Expert' },
  { label: 'Machine Learning', value: 'Advanced' },
  { label: 'Big Data', value: 'Advanced' },
  { label: 'MLOps', value: 'Experienced' },
];

export const projectCards = [
  {
    title: 'Generative AI Document Summarizer & Chatbot',
    subtitle: 'RAG system built with LangChain, OpenAI API, and Azure Cognitive Search.',
    metrics: ['3,000+ docs', '2s query latency', '5 datasets'],
    tags: ['RAG', 'LangChain', 'Azure', 'OpenAI API'],
  },
  {
    title: 'AI-Based Fraud Detection System',
    subtitle: 'An anomaly detection pipeline using Isolation Forest, Autoencoders, and TensorFlow.',
    metrics: ['100K+ transactions', '10K+ daily scores'],
    tags: ['Python', 'TensorFlow', 'Kafka', 'AWS Lambda'],
  },
  {
    title: 'Demand Forecasting System',
    subtitle: 'Real-time models for pricing and demand using Spark and Airflow.',
    metrics: ['2M+ records/day', '20+ zones'],
    tags: ['Spark', 'Airflow', 'AWS', 'Python'],
  },
  {
    title: 'Hardware Failure Prediction',
    subtitle: 'Batch inference and ETL for device telemetry using SQL and scikit-learn.',
    metrics: ['2M+ records', '8K+ failure cases'],
    tags: ['SQL', 'scikit-learn', 'AWS S3', 'XGBoost'],
  },
];

export const skillDashboard = [
  {
    title: 'Core AI/ML',
    description: 'Machine learning, deep learning, NLP, model design, training, and evaluation.',
    level: '95%',
    tags: ['Python', 'scikit-learn', 'TensorFlow', 'PyTorch', 'XGBoost'],
  },
  {
    title: 'GenAI & NLP',
    description: 'RAG, LangChain workflows, transformers, and large language model applications.',
    level: '92%',
    tags: ['LLMs', 'RAG', 'LangChain', 'BERT', 'Transformers'],
  },
  {
    title: 'Data Engineering',
    description: 'Pipelines, data quality, ETL, Spark, and analytical feature stores.',
    level: '88%',
    tags: ['Spark', 'SQL', 'PySpark', 'Airflow', 'Pandas'],
  },
  {
    title: 'MLOps & Deployment',
    description: 'Deployment automation, model monitoring, containerization, and pipelines.',
    level: '86%',
    tags: ['Docker', 'MLflow', 'Kubernetes', 'AWS', 'REST APIs'],
  },
];

export const faqQuestions = [
  'What are his strongest technical skills?',
  'What type of roles is he targeting?',
  'What industries has he worked in?',
  'How has he delivered business impact?',
  'What tools and technologies does he use?',
  'Is he open to relocation or remote roles?',
];

export const resumeHighlights = {
  summary:
    'Experienced AI/ML Engineer focused on production-ready machine learning systems, real-time predictions, RAG-enabled search, and enterprise-scale pipelines.',
  bestFit: ['AI/ML Engineer', 'Data Science Lead', 'RAG/NLP Specialist'],
  strengths: ['Production ML deployment', 'NLP and RAG systems', 'Big data pipelines', 'Cross-functional delivery'],
  technologies: ['Python', 'Spark', 'AWS', 'Docker', 'LangChain', 'PyTorch', 'SQL'],
  workAuthorization: 'Authorized to work in the USA',
};

export const contactCards = [
  {
    title: 'Email',
    value: candidate.email,
    icon: 'Mail',
  },
  {
    title: 'LinkedIn',
    value: candidate.linkedIn,
    icon: 'Linkedin',
  },
];
