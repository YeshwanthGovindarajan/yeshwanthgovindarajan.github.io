export interface Project {
  title: string;
  image: string;
  status: string;
  /** Short line shown on the homepage card. */
  cardLine?: string;
  /** Small pills shown under the card title. */
  tags?: string[];
  /** Internal route to a case study page on this site. */
  caseStudy?: string;
  /** External repository link. Omit for private projects. */
  repo?: string;
  /** External live preview link. */
  preview?: string;
  /** Render a white-background diagram on a light panel, contained not cropped. */
  diagram?: boolean;
}

export const projects: Project[] = [
  {
    title: "HeatMap",
    image: "/projects/heatmap/thumbnail.jpg",
    status: "Case study",
    cardLine:
      "An agent that turns local competitors' best Reels into a shot-by-shot video for small businesses.",
    tags: ["Agentic AI", "Multimodal", "Retrieval", "Full stack"],
    caseStudy: "/projects/heatmap",
  },
  {
    title: "Multi-modal Biometric Authentication",
    image: "/projects/multimodal-biometric-auth/architecture.webp",
    status: "Published, IEEE Access",
    cardLine:
      "Face, voice, and signature fused into one authentication model at 94.65% accuracy.",
    tags: ["Multimodal", "CNNs + RNNs", "Biometrics"],
    caseStudy: "/research/multimodal-biometric-auth",
    diagram: true,
  },
  {
    title: "Secure Federated Learning for IIoT",
    image: "/projects/sfl-federated-learning-iiot/architecture.webp",
    status: "Published, IEEE Access",
    cardLine:
      "Federated learning that rejects poisoned updates with a digital twin and blocks fake clients with NFTs.",
    tags: ["Federated learning", "Blockchain", "Security"],
    caseStudy: "/research/sfl-federated-learning-iiot",
    diagram: true,
  },
  {
    title: "Findify, AI Lost-and-Found",
    image: "/projects/lost-and-found-patent/findify-homepage.webp",
    status: "Patent published",
    cardLine:
      "A patented lost-and-found system that uses AI captioning to make found items searchable.",
    tags: ["Patent", "BLIP captioning", "Web app"],
    caseStudy: "/research/lost-and-found-patent",
  },
];
