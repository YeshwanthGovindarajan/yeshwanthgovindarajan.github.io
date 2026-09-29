import { useState, type ReactNode } from "react";

type FocusItem = { text: string; href?: string };

const iconProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "text-[var(--sec)] shrink-0",
};

const focuses: { title: string; icon: ReactNode; items: FocusItem[] }[] = [
  {
    title: "Multimodal AI",
    icon: (
      <svg {...iconProps}>
        <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
        <rect x="2" y="6" width="14" height="12" rx="2" />
      </svg>
    ),
    items: [
      { text: "Video generation for shot-by-shot marketing Reels", href: "/projects/heatmap" },
      {
        text: "Diffusion representation learning for fine-grained image understanding",
        href: "/projects/naturalbench-diffusion-features",
      },
      {
        text: "Latent world models with actor-critic planning",
        href: "/projects/latent-world-model-actor-critic",
      },
      {
        text: "Face, voice, and signature fusion for biometrics",
        href: "/research/multimodal-biometric-auth",
      },
    ],
  },
  {
    title: "Recommendation systems",
    icon: (
      <svg {...iconProps}>
        <path d="M3 5h.01" />
        <path d="M3 12h.01" />
        <path d="M3 19h.01" />
        <path d="M8 5h13" />
        <path d="M8 12h13" />
        <path d="M8 19h13" />
      </svg>
    ),
    items: [
      {
        text: "TIGER generative retrieval on 1M real ad sequences",
        href: "/projects/generative-retrieval-tiger",
      },
      { text: "Two-tower ad channel ranking at Chronicle Studio", href: "/#experience" },
      { text: "Hybrid BERT and extended Boolean retrieval", href: "/research/bert-extended-boolean-ir" },
    ],
  },
  {
    title: "Agentic AI",
    icon: (
      <svg {...iconProps}>
        <path d="M12 8V4H8" />
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M2 14h2" />
        <path d="M20 14h2" />
        <path d="M15 13v2" />
        <path d="M9 13v2" />
      </svg>
    ),
    items: [
      { text: "HeatMap, a LangGraph marketing copilot", href: "/projects/heatmap" },
      { text: "ATLAS agentic test suggestion at CGI", href: "/#experience" },
      { text: "MoleculeAgent, MCP tools for protein design", href: "/projects/molecule-agent" },
    ],
  },
];

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(focuses[0].title);

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        What I do
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {focuses.map(({ title, icon, items }) => (
          <li key={title} className="w-full">
            <div className="md:w-[440px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] overflow-hidden">
              <button
                type="button"
                onClick={() => toggleItem(title)}
                aria-expanded={openItem === title}
                className="w-full flex items-center gap-3 p-4 cursor-pointer text-left"
              >
                {icon}
                <span className="flex-grow text-[var(--white)] text-lg">{title}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                    openItem === title ? "rotate-180" : ""
                  }`}
                >
                  <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                </svg>
              </button>

              <div
                className={`transition-all duration-300 px-4 overflow-hidden ${
                  openItem === title ? "max-h-[500px] pb-4 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item) => (
                    <li key={item.text} className="flex items-start gap-3">
                      <span className="pl-1">•</span>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="hover:text-white underline-offset-4 hover:underline transition-colors"
                        >
                          {item.text}
                        </a>
                      ) : (
                        <span>{item.text}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
