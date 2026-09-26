import type { PortfolioCategory } from "./categories";

export type CatalogKind = "project" | "research";

export interface CatalogItem {
  id: string;
  category: PortfolioCategory;
  kind: CatalogKind;
  title: string;
  status: string;
  cardLine: string;
  highlight?: string;
  href: string;
  external?: boolean;
  image?: string;
  diagram?: boolean;
  videoPoster?: string;
  videoSrc?: string;
  tags?: string[];
  /** Show on homepage project strip (below featured HeatMap). */
  homeStrip?: boolean;
  /** Show in "Currently working on" strip on homepage. */
  workingOn?: boolean;
}

export const catalogItems: CatalogItem[] = [
  {
    id: "heatmap",
    category: "agentic-ai",
    kind: "project",
    title: "HeatMap",
    status: "Case study",
    cardLine:
      "Agentic multimodal copilot that turns local competitors' Reels into shot-by-shot marketing video.",
    highlight: "40 users · ~50 hours saved per business",
    href: "/projects/heatmap",
    image: "/projects/heatmap/thumbnail.jpg",
    videoPoster: "/projects/heatmap/hero.jpg",
    videoSrc: "/projects/heatmap/final-video.mp4",
    tags: ["LangGraph", "Vision", "Retrieval", "Full stack"],
  },
  {
    id: "generative-retrieval-tiger",
    category: "recommendation-systems",
    kind: "project",
    title: "TIGER generative retrieval",
    status: "Completed",
    cardLine:
      "Generative retrieval on 1M real ad sequences, decoding the next ad's Semantic ID.",
    highlight: "0.241 HitRate@10 · 642K pool",
    href: "/projects/generative-retrieval-tiger",
    image: "/projects/generative-retrieval-tiger/architecture.png",
    diagram: true,
    tags: ["RQ-VAE", "Transformer", "TencentGR-1M"],
    homeStrip: true,
  },
  {
    id: "molecule-agent",
    category: "agentic-ai",
    kind: "project",
    title: "MoleculeAgent",
    status: "In progress · team",
    cardLine:
      "A chat agent for protein design. I built its enzyme category search and data toolkit.",
    href: "/projects/molecule-agent",
    image: "/projects/molecule-agent/architecture.png",
    diagram: true,
    tags: ["MCP", "Gemini", "EnzyGen"],
    homeStrip: true,
  },
  {
    id: "multimodal-biometric-auth",
    category: "multimodal-representation-learning",
    kind: "research",
    title: "Multi-modal Biometric Authentication",
    status: "Published · IEEE Access",
    cardLine:
      "Face, voice, and signature fused through shared and modality-specific layers at 94.65% accuracy.",
    highlight: "94.65% accuracy · 85% AUC",
    href: "/research/multimodal-biometric-auth",
    image: "/projects/multimodal-biometric-auth/architecture.webp",
    diagram: true,
    tags: ["CNN", "RNN", "PCA", "Gradient boosting"],
    homeStrip: true,
  },
  {
    id: "sfl-federated-learning-iiot",
    category: "recommendation-systems",
    kind: "research",
    title: "Secure Federated Learning for IIoT",
    status: "Published · IEEE Access",
    cardLine:
      "Federated learning with digital twin validation and NFT-gated clients against poisoning and Sybil attacks.",
    highlight: "97% accuracy · loss 0.07",
    href: "/research/sfl-federated-learning-iiot",
    image: "/projects/sfl-federated-learning-iiot/architecture.webp",
    diagram: true,
    tags: ["Federated learning", "Blockchain", "Digital twin"],
    homeStrip: true,
  },
  {
    id: "lost-and-found-patent",
    category: "agentic-ai",
    kind: "research",
    title: "Findify, AI Lost-and-Found",
    status: "Patent published",
    cardLine:
      "A patented lost-and-found system that uses AI captioning to make found items searchable.",
    href: "/research/lost-and-found-patent",
    image: "/projects/lost-and-found-patent/findify-homepage.webp",
    tags: ["Patent", "BLIP captioning", "Web app"],
    homeStrip: true,
  },
  {
    id: "naturalbench-diffusion-features",
    category: "multimodal-representation-learning",
    kind: "project",
    title: "NaturalBench diffusion features",
    status: "Proposal stage · team",
    cardLine:
      "Distilling what a model learns from comparing two images into one that sees only one.",
    href: "/projects/naturalbench-diffusion-features",
    image: "/projects/naturalbench-diffusion-features/phase1-teacher.png",
    diagram: true,
    tags: ["Stable Diffusion", "MLLM", "Distillation"],
    workingOn: true,
  },
  {
    id: "latent-world-model-actor-critic",
    category: "recommendation-systems",
    kind: "project",
    title: "Latent world model actor-critic",
    status: "In progress",
    cardLine:
      "Can a learned actor-critic replace CEM search in latent world model planning?",
    href: "/projects/latent-world-model-actor-critic",
    image: "/projects/latent-world-model-actor-critic/cem-vs-actor-critic.png",
    diagram: true,
    tags: ["World models", "CEM", "Actor-critic"],
    workingOn: true,
  },
  {
    id: "chronicle-ranking",
    category: "recommendation-systems",
    kind: "project",
    title: "Multimodal ad-channel ranking (Chronicle Studio)",
    status: "Internship · 2026",
    cardLine:
      "Two-tower ranking model for Google Ads channel fit with Gemini embeddings and ColBERT-style late interaction.",
    highlight: "0.924 AUC on unseen channels",
    href: "/#experience",
    tags: ["Two-tower", "Gemini", "Vertex AI"],
  },
  {
    id: "atlas-cgi",
    category: "agentic-ai",
    kind: "project",
    title: "ATLAS (CGI)",
    status: "Deployed · 2025",
    cardLine:
      "Agentic code suggestion over a test-impact knowledge graph with dependency-linked context for DeepSeek-Coder.",
    highlight: "79% coverage · 2 internal teams",
    href: "/#experience",
    tags: ["LangChain", "NetworkX", "Ollama"],
  },
  {
    id: "autism-cnn-ensemble",
    category: "multimodal-representation-learning",
    kind: "research",
    title: "Autism spectrum detection (CNN ensemble)",
    status: "Published · IEEE WCONF 2024",
    cardLine:
      "Soft-voting ensemble of EfficientNet B5, MobileNet, and InceptionV3 for ASD detection from images.",
    highlight: "~91% accuracy",
    href: "/research/autism-cnn-ensemble",
    image: "/projects/autism-cnn-ensemble/architecture.png",
    diagram: true,
    tags: ["Transfer learning", "Ensemble", "CNN"],
  },
  {
    id: "clinical-ensemble",
    category: "multimodal-representation-learning",
    kind: "research",
    title: "Clinical Prediction Ensemble Model",
    status: "Published · IEEE NMITCON 2024",
    cardLine:
      "Stacked ensemble with a linear meta-learner weighting trees, NNs, forests, and SVMs on clinical data.",
    highlight: "89.63% accuracy",
    href: "/research/clinical-ensemble-model",
    image: "/projects/clinical-ensemble-model/architecture.png",
    diagram: true,
    tags: ["Ensemble", "Healthcare ML"],
  },
  {
    id: "bert-retrieval",
    category: "recommendation-systems",
    kind: "research",
    title: "Hybrid p-Norm Extended Boolean Models with BERT",
    status: "Published · Procedia CS 2025",
    cardLine:
      "Fine-tuned BERT combined with extended Boolean retrieval for hybrid information retrieval.",
    highlight: "0.92 accuracy and AUC",
    href: "/research/bert-extended-boolean-ir",
    image: "/projects/bert-extended-boolean-ir/architecture.png",
    diagram: true,
    tags: ["BERT", "Information retrieval"],
  },
  {
    id: "fl-digital-twin-6g",
    category: "recommendation-systems",
    kind: "research",
    title: "Distributed Intelligence Framework (6G transport)",
    status: "Under review · IEEE T-ITS",
    cardLine:
      "Federated learning and digital twins so autonomous vehicles learn from rare events without sharing raw data.",
    highlight: "65% lower convergence error",
    href: "/research/fl-digital-twin-6g-transport",
    image: "/projects/fl-digital-twin-6g-transport/architecture.webp",
    diagram: true,
    tags: ["Federated learning", "Digital twin", "6G"],
  },
  {
    id: "smart-city-ntn",
    category: "recommendation-systems",
    kind: "research",
    title: "Smart city NTN and quantum security",
    status: "Under review",
    cardLine:
      "Weather-balloon networks for connectivity plus quantum key distribution for security.",
    href: "/research/smart-city-ntn-quantum",
    image: "/projects/smart-city-ntn-quantum/architecture.png",
    diagram: true,
    tags: ["NTN", "Quantum security", "IoT"],
  },
  {
    id: "exam-malpractice",
    category: "multimodal-representation-learning",
    kind: "research",
    title: "Exam malpractice detection",
    status: "In preparation",
    cardLine: "Multi-modal proctoring with Isolation Forest anomaly detection.",
    href: "/research/exam-malpractice-detection",
    image: "/projects/exam-malpractice-detection/architecture.png",
    diagram: true,
    tags: ["Proctoring", "Anomaly detection"],
  },
];

export const featuredProject = catalogItems.find((i) => i.id === "heatmap")!;

export const homeStripItems = catalogItems.filter((i) => i.homeStrip);

export const workingOnItems = catalogItems.filter((i) => i.workingOn);

/** Full browse list on /projects. */
export const projectsHubItems = catalogItems;
