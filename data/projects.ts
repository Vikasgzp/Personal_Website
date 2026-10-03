// Add a project here and the grid + /projects/[slug] page appear automatically.
export type Project = {
  slug: string;
  unlisted?: boolean;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  tech: string[];
  github?: string;
  live?: string;
  problem?: string;
  solution?: string;
  architecture?: string;
  challenges?: string;
  results?: string;
  screenshots?: string[];
  image?: string;
  featured?: boolean;
  year: string;
  category: string;
};
export const projects: Project[] = [
  {
    slug: "feedbackiq",
    unlisted: false,
    title: "FeedbackIQ",
    tagline: "Feedback collection with AI analysis",
    featured: true,
    year: "2026",
    category: "AI SaaS",
    description:
      "A SaaS platform that collects customer feedback and analyses it with AI, with RAG chat and advanced analytics.",
    features: [
      "Feedback collection",
      "AI analysis and RAG chat",
      "Analytics dashboard",
    ],
    tech: ["React", "Node.js", "Gemini", "PostgreSQL"],
    github: "https://github.com/Vikasgzp/FeedbackIQ",
    live: "https://feedback-iq-five.vercel.app",
  },
  {
    slug: "legal-rag-assistant",
    unlisted: false,
    title: "Legal RAG Assistant",
    tagline: "Question answering over a fixed legal corpus",
    featured: true,
    year: "2026",
    category: "AI / RAG",
    description:
      "A retrieval-augmented assistant that answers legal questions grounded in a fixed corpus of documents.",
    features: ["Document retrieval", "Grounded answers"],
    tech: ["Python", "LangChain", "Chroma"],
    github: "https://github.com/Vikasgzp/legal-rag-assistant",
    live: "",
  },
  {
    slug: "notehub",
    unlisted: false,

    title: "NoteHub",

    tagline: "A collaborative platform for sharing and discovering study notes",

    year: "2026",

    category: "Full Stack",

    description:
      "A MERN stack web application that enables users to upload, access, and discover study notes organized across 10+ topic categories.",

    features: [
      "10+ topic categories for organizing notes",
      "User authentication and authorization",
      "Cross-user note viewing",
      "5-star rating system",
    ],

    tech: ["React.js", "Node.js", "MongoDB"],

    github: "https://github.com/Vikasgzp/notehub-backend",

    live: "https://notehub-backend-orpin.vercel.app/",
  },
  {
    slug: "guest-house-portal",
    unlisted: false,
    title: "Guest House Portal",

    tagline:
      "A management system for streamlining college guest house operations",

    year: "2025",

    category: "Full Stack",

    description:
      "A college guest house management platform for managing rooms, guests, bookings, check-ins, check-outs, and pricing through a centralized dashboard.",

    features: [
      "Dashboard with occupancy, bookings, guests, rooms and revenue overview",
      "Room management with pricing, capacity and availability tracking",
      "Guest booking and reservation management",
      "Check-in / check-out management",
      "Configurable tax and meal pricing",
    ],

    tech: ["React.js", "Vite", "React Query"],

    github: "https://github.com/Vikasgzp/guest-house-portal-data",

    live: "https://guest-house-portal-data.vercel.app/dashboard",
  },
  {
    slug: "fake-news-detection-bert",

    unlisted: false,

    title: "Fake News Detection",

    tagline:
      "AI-powered misinformation detection using BERT and Retrieval-Augmented Generation",

    year: "2026",

    category: "AI / Machine Learning",

    description:
      "An AI-powered misinformation detection system combining a fine-tuned BERT model with Retrieval-Augmented Generation (RAG) to classify news content and provide context-aware verification.",

    features: [
      "Fine-tuned BERT-based fake news classification",
      "Retrieval-Augmented Generation (RAG) for contextual verification",
      "Real-time REAL / FAKE prediction",
      "Confidence score generation",
      "Interactive Streamlit interface",
      "Dockerized deployment on Hugging Face Spaces",
    ],

    tech: [
      "Python",
      "PyTorch",
      "BERT",
      "Hugging Face Transformers",
      "RAG",
      "Streamlit",
      "Docker",
    ],

    github: "https://github.com/Vikasgzp/fake-news-detection-using-bert",

    live: "https://huggingface.co/spaces/Vikasgzp/fake-news-detector",
  },

  {
    slug: "donation-reuse-platform",
    unlisted: false,
    title: "Donation & Reuse Platform",
    tagline: "Connecting donors with people who need items",
    year: "2026",
    category: "Full Stack",
    description:
      "Built during my Unified Mentor internship: donors, browsers and requesters across multiple item categories.",
    features: [
      "15+ REST APIs",
      "Workflows for donors, browsers and requesters",
      "Multiple item categories",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Vikasgzp/ShareForward",
    live: "https://share-forward.vercel.app/",
  },
  {
    slug: "purchase-intent-prediction",

    unlisted: true,

    title: "Online Shopping Behaviour — Purchase Intent Prediction",

    tagline: "Predicting e-commerce purchase intent from session behaviour",

    year: "2026",

    category: "AI / Machine Learning",

    description:
      "A binary classification system that predicts whether an e-commerce session ends in a purchase using browsing behaviour, device information, marketing attributes, and cart activity.",

    features: [
      "Data leakage analysis and feature selection",
      "Logistic Regression baseline and Random Forest modeling",
      "92% recall for identifying potential buyers",
      "Exploratory analysis of 25,000 e-commerce sessions",
    ],

    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],

    github: "https://github.com/Vikasgzp/IDRA/tree/main/final",

    live: "",
  },
];
