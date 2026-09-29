export const site = {
  name: "Yeshwanth Govindarajan",
  firstName: "Yeshwanth",
  role: "ML Engineer",
  school: "Carnegie Mellon University",
  program: "MS in Computational Data Science",
  location: "Pittsburgh, PA",
  email: "ygovinda@andrew.cmu.edu",
  github: "https://github.com/YeshwanthGovindarajan",
  /** Leave empty to hide LinkedIn links. */
  linkedin: "",
  url: "https://yeshwanthgovindarajan.github.io",
  description:
    "Yeshwanth Govindarajan, ML Engineer and second-year MS in Computational Data Science student at Carnegie Mellon, building multimodal AI, recommendation systems, and agentic AI.",
};

export const socialLinks = [
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
  { label: "Email", href: `mailto:${site.email}` },
].filter((l) => l.href);

export const techStack: { icon: string; label: string }[] = [
  { icon: "python", label: "Python" },
  { icon: "pytorch", label: "PyTorch" },
  { icon: "huggingface", label: "Hugging Face" },
  { icon: "langgraph", label: "LangGraph" },
  { icon: "modelcontextprotocol", label: "MCP" },
  { icon: "googlegemini", label: "Gemini" },
  { icon: "ollama", label: "Ollama" },
  { icon: "tensorflow", label: "TensorFlow" },
  { icon: "scikitlearn", label: "scikit-learn" },
  { icon: "numpy", label: "NumPy" },
  { icon: "pandas", label: "Pandas" },
  { icon: "apachespark", label: "Spark" },
  { icon: "fastapi", label: "FastAPI" },
  { icon: "docker", label: "Docker" },
  { icon: "kubernetes", label: "Kubernetes" },
  { icon: "googlecloud", label: "Google Cloud" },
  { icon: "postgresql", label: "PostgreSQL" },
  { icon: "mongodb", label: "MongoDB" },
  { icon: "git", label: "Git" },
];
