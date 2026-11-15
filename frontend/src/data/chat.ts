import { candidate } from './profile';

export type ChatMessage = {
  role: 'user' | 'assistant' | 'system';
  text: string;
  sources?: string[];
};

const cannedResponses = [
  {
    keywords: ['uber', 'dell'],
    response: `At Uber, ${candidate.name} focuses on production AI/ML systems for demand forecasting, pricing, and real-time prediction. He built Spark-based feature pipelines, Airflow orchestration, Dockerized REST API inference, and model monitoring for large-scale operations.`,
    sources: ['Uber Experience', 'AWS', 'Spark'],
  },
  {
    keywords: ['rag', 'langchain', 'openai', 'cognitive search'],
    response: `Jayanth has hands-on RAG experience with LangChain, OpenAI API, and Azure Cognitive Search. He built a document summarizer and chatbot that retrieves answers from thousands of documents with fast query latency and source-backed relevance.`,
    sources: ['RAG', 'LangChain', 'NLP', 'Resume'],
  },
  {
    keywords: ['skills'],
    response: `Jayanth’s core strengths include Python, machine learning, deep learning, NLP, RAG, Spark, Airflow, Docker, AWS, and scalable data pipelines. He pairs rigorous model development with deployment-ready MLOps practice.`,
    sources: ['Skills', 'Resume'],
  },
  {
    keywords: ['project', 'projects'],
    response: `Key projects include a LangChain-based RAG chatbot, a TensorFlow and Kafka fraud detection system, a Spark demand forecasting pipeline, and a hardware-failure prediction system built on SQL and AWS S3.`,
    sources: ['Projects', 'Resume'],
  },
];

export const initialMessages: ChatMessage[] = [
  {
    role: 'assistant',
    text: 'Hi! I’m Jayanth’s AI Resume Assistant. Ask me anything about his experience, skills, projects, or availability.',
    sources: ['Resume', 'Experience'],
  },
];

export function mockChatResponse(message: string) {
  const normalized = message.toLowerCase();

  for (const item of cannedResponses) {
    if (item.keywords.some((keyword) => normalized.includes(keyword))) {
      return {
        text: item.response,
        sources: item.sources,
      };
    }
  }

  if (normalized.includes('uber')) {
    return {
      text: `At Uber, ${candidate.name} built demand forecasting models and feature pipelines to support pricing decisions across more than 20 zones. He also delivered low-latency inference services and machine learning monitoring automation.`,
      sources: ['Uber Experience'],
    };
  }

  return {
    text: `I can answer about ${candidate.name}’s experience, skills, projects, availability, and role fit. Ask me a recruiter question to see concise, source-backed insights.`,
    sources: ['Resume'],
  };
}
