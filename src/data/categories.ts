export type PortfolioCategory =
  | "multimodal-representation-learning"
  | "recommendation-systems"
  | "agentic-ai";

export const portfolioCategories: {
  id: PortfolioCategory;
  label: string;
  short: string;
}[] = [
  {
    id: "multimodal-representation-learning",
    label: "Multimodal representation learning",
    short: "Multimodal",
  },
  {
    id: "recommendation-systems",
    label: "Recommendation systems",
    short: "Recommendations",
  },
  {
    id: "agentic-ai",
    label: "Agentic AI",
    short: "Agentic AI",
  },
];
