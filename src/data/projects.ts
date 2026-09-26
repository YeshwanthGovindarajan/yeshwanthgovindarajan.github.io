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
    title: "Project Two",
    image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Project+Two",
    status: "On Development",
    repo: "https://github.com",
    preview: "https://example.com",
  },
  {
    title: "Project Three",
    image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Project+Three",
    status: "Contributor",
    repo: "https://github.com",
    preview: "https://example.com",
  },
  {
    title: "Project Four",
    image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Project+Four",
    status: "Deployed",
    repo: "https://github.com",
    preview: "https://example.com",
  },
];
