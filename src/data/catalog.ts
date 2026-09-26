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
}

/** Browseable work on /projects (engineering + research by theme). Patents live on /patents. */
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
  },
  {
    id: "autism-wconf",
    category: "multimodal-representation-learning",
    kind: "research",
    title: "Autism spectrum detection (CNN ensemble)",
    status: "Published · IEEE WCONF 2024",
    cardLine:
      "Soft-voting ensemble of EfficientNet B5, MobileNet, and InceptionV3 for ASD detection from images.",
    highlight: "~91% accuracy",
    href: "https://doi.org/10.1109/WCONF61366.2024.10692110",
    external: true,
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
    image: "/projects/clinical-ensemble-model/nmitcon-certificate.jpg",
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
    href: "https://www.sciencedirect.com/science/article/pii/S1877050925016679",
    external: true,
    tags: ["BERT", "Information retrieval"],
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
];

export const featuredProject = catalogItems.find((i) => i.id === "heatmap")!;
