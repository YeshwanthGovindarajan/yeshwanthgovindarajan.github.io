export interface ProjectFigure {
  src: string;
  caption: string;
}

export interface ProjectPage {
  slug: string;
  title: string;
  tagline: string;
  status: string;
  year: string;
  role: string;
  teamProject?: boolean;
  stack: string[];
  links?: { label: string; href: string }[];
  problem: string;
  whatBuilt: string;
  howItWorks?: string[];
  myPart?: string;
  outcome?: string[];
  statTiles?: { big: string; small: string }[];
  figures?: ProjectFigure[];
  visualizations?: {
    title: string;
    intro: string;
    legend: { label: string; text: string }[];
    figures: ProjectFigure[];
  };
  nextSteps?: string[];
  statusNote?: string;
  short?: boolean;
}

const img = (slug: string, file: string) => `/projects/${slug}/${file}`;

export const projectPages: ProjectPage[] = [
  {
    slug: "generative-retrieval-tiger",
    title: "TIGER, Generative Retrieval for Ad Recommendation",
    tagline:
      "Retrieving the next ad by generating its Semantic ID token by token, instead of searching an embedding index.",
    status: "Completed",
    year: "2026",
    role: "Solo",
    stack: [
      "Python",
      "PyTorch",
      "RQ-VAE",
      "Transformer",
      "Beam search",
      "PCA",
      "TencentGR-1M",
    ],
    links: [
      {
        label: "TIGER paper (NeurIPS 2023)",
        href: "https://arxiv.org/abs/2305.05065",
      },
    ],
    problem:
      "Most recommender retrieval embeds users and items into one space and finds nearest neighbors with approximate search. Generative retrieval treats retrieval as sequence generation. Every item gets a short discrete Semantic ID, and a transformer decodes the next item's ID directly. This project reproduces that approach on real ad data.",
    whatBuilt:
      "A full TIGER pipeline on Tencent's TencentGR-1M advertising benchmark. Ad content embeddings compress into 3-token Semantic IDs with an RQ-VAE. A transformer reads interaction history and beam-decodes the Semantic ID of the next ad click, mapped back to ads in the candidate pool.",
    howItWorks: [
      "Text and image embeddings (3584-d each) are L2-normalized, concatenated, and projected to 1024-d with PCA",
      "RQ-VAE tokenizes each ad into three codebook indices",
      "A transformer encoder-decoder models the user's Semantic ID sequence",
      "Beam search retrieves top Semantic IDs mapped to a 642K-ad pool",
      "Leave-one-out evaluation on each user's last click with HitRate@10",
    ],
    statTiles: [
      { big: "1.0M", small: "user sequences" },
      { big: "90.2M", small: "interaction events" },
      { big: "4.78M", small: "ads in vocabulary" },
      { big: "Full", small: "dataset trained" },
    ],
    outcome: [
      "0.241 HitRate@10 at 0.37 s per user inference",
      "Beam decoding over a 642K-ad candidate pool",
    ],
    figures: [
      {
        src: img("generative-retrieval-tiger", "architecture.png"),
        caption: "End-to-end pipeline from ad embeddings to beam search retrieval",
      },
      {
        src: img("generative-retrieval-tiger", "rqvae-collisions.png"),
        caption: "Semantic ID collisions fall as RQ-VAE codebooks train",
      },
      {
        src: img("generative-retrieval-tiger", "stats.png"),
        caption: "Tokenizer training metrics across epochs",
      },
    ],
    nextSteps: [
      "Exposure-aware training that supervises only on clicks",
      "Cold-start vs warm ad evaluation splits",
      "Two-tower baseline on the same split for direct comparison",
    ],
  },
  {
    slug: "molecule-agent",
    title: "MoleculeAgent",
    tagline:
      "A chat agent that runs enzyme, heme-binder and protein-binder design pipelines through MCP tools.",
    status: "In progress",
    year: "2025 to 2026",
    role: "Team member. Owns enzyme category search and the enzyme data toolkit.",
    teamProject: true,
    stack: [
      "Python",
      "MCP",
      "Gemini",
      "Streamlit",
      "EnzyGen",
      "AlphaFold",
      "RF-DiffusionAA",
      "Rosetta",
      "UniProt",
    ],
    problem:
      "Computational protein design tools are powerful but hard to chain together. Each pipeline has its own environment, input format, and HPC job setup. Researchers want to describe the molecule they need in plain language and have the pipeline run.",
    whatBuilt:
      "A Streamlit chat app backed by a Gemini agent that calls three MCP servers for enzyme design (EnzyGen), heme binders, and protein binders. Jobs run on PSC Bridges-2 and results render as 3D views, plots and tables in chat.",
    myPart:
      "The EnzyGen pipeline starts by choosing the right EC number. I built browse_enzyme_ec_hierarchy so the agent drills down the Enzyme Commission tree level by level instead of flat keyword search, plus scripts to rebuild server data from ExPASy ENZYME and a gap-fill pipeline for categories missing mined motifs. Hierarchical search and data toolkit merged into the team repo in September 2026.",
    howItWorks: [
      "Researcher prompt goes to a Gemini agent in Streamlit",
      "Agent selects EnzyGen, Heme Binder, or PPDiff MCP servers",
      "EC hierarchy search narrows thousands of categories before motif mining",
      "HPC jobs on Bridges-2 return structures, docking scores, and plots",
    ],
    statTiles: [
      { big: "5,784", small: "EC categories with sequences" },
      { big: "3,006", small: "with mined motifs (52%)" },
      { big: "2,778", small: "gap-fill candidates" },
    ],
    figures: [
      {
        src: img("molecule-agent", "architecture.png"),
        caption: "Agent, MCP servers, and Bridges-2 execution",
      },
      {
        src: img("molecule-agent", "ec-hierarchy-search.png"),
        caption: "Hierarchical EC search instead of flat keyword match",
      },
      {
        src: img("molecule-agent", "motif-coverage-gap.png"),
        caption: "Motif coverage gap across EC categories",
      },
    ],
    outcome: ["Hierarchical search tool and data toolkit merged into the team repo"],
  },
  {
    slug: "naturalbench-diffusion-features",
    title: "Task-Aware Diffusion Features for Fine-Grained Visual Understanding",
    tagline:
      "Testing whether Stable Diffusion features help a multimodal LLM notice the small visual differences that flip an answer.",
    status: "In progress",
    year: "2026",
    role: "Leads Idea 4, privileged cross-image distillation (CMU 11-777 MMML)",
    teamProject: true,
    stack: ["LLaVA-style 7B MLLM", "CLIP", "Stable Diffusion 2.1", "PyTorch"],
    short: true,
    problem:
      "Multimodal LLMs often answer fluently while missing the visual detail that matters. On NaturalBench, each test group has two similar images and two questions whose answers flip between the images. CLIP-style encoders can map visibly different images to near-identical features.",
    whatBuilt:
      "Privileged cross-image distillation. At test time the model sees one image. During training it can see the confusable twin. A teacher sees both images and a difference module compresses contrast into 32 tokens. A student learns to predict those tokens from a single image, then deploys without the twin at inference.",
    howItWorks: [
      "Stable Diffusion UNet features are extracted with and without the question as the text condition, so their difference points at the regions the question is about",
      "Phase 1. Teacher with both images and a difference module trained through QA loss",
      "Phase 2. Frozen teacher distills difference tokens into a student that sees only image A",
      "Phase 3. Single-image fine-tune and deploy without the teacher or contrast image",
    ],
    figures: [
      {
        src: img("naturalbench-diffusion-features", "phase1-teacher.png"),
        caption: "Phase 1. Teacher sees both images",
      },
      {
        src: img("naturalbench-diffusion-features", "phase2-distillation.png"),
        caption: "Phase 2. Student predicts teacher difference tokens",
      },
      {
        src: img("naturalbench-diffusion-features", "phase3-single-image-model.png"),
        caption: "Phase 3. Deployed single-image model",
      },
    ],
    visualizations: {
      title: "Early feature visualizations",
      intro:
        "First qualitative checks on NaturalBench pairs, seed 0 at timestep 50. Each row is one image of a pair. Conditioning the diffusion model on the question shifts its features, and where that shift lands shows which parts of the image the question pulls attention toward.",
      legend: [
        { label: "Image", text: "What the model sees. Green boxes mark the regions the question refers to." },
        { label: "PCA uncond and cond", text: "Top three principal components of UNet features, without and with the question." },
        { label: "PCA cond minus uncond", text: "What the question changes in feature space." },
        { label: "|cond minus uncond|", text: "Size of that change, overlaid on the image." },
        { label: "attn", text: "Cross-attention for individual question words." },
      ],
      figures: [
        {
          src: img("naturalbench-diffusion-features", "motorcycle-q1-rider-helmet.png"),
          caption:
            "Is the rider wearing a helmet? In the second image the question-driven shift and the attention for helmet and rider gather around the rider's head, inside the green box.",
        },
        {
          src: img("naturalbench-diffusion-features", "motorcycle-q0-wheel-ground.png"),
          caption:
            "Same images, different question. Asking whether only one wheel touches the ground gives a different shift pattern across the bike body and wheels, so the features change with the question rather than staying fixed.",
        },
        {
          src: img("naturalbench-diffusion-features", "nb1588-q1-athlete-child.png"),
          caption:
            "Is the image showcasing a single athlete interacting with a child? The conditioned features pull the child apart from the adult in the second image, the separate yellow region in the cond minus uncond panel.",
        },
        {
          src: img("naturalbench-diffusion-features", "nb1588-q0-adults.png"),
          caption:
            "Are both individuals in the image adults? The shift separates the people from the background but does not single out either person, which is why a contrast signal between the two images still matters.",
        },
      ],
    },
    statusNote:
      "Experiments in progress. The feature maps above are early qualitative checks, and there are no benchmark numbers yet.",
  },
  {
    slug: "latent-world-model-actor-critic",
    title: "Actor-Critic Planning in Latent World Models",
    tagline:
      "Replacing CEM search with a learned actor-critic planner inside a latent world model.",
    status: "In progress",
    year: "2026",
    role: "Course project (CMU Deep Reinforcement Learning and Control)",
    stack: ["PyTorch", "Latent world models", "Actor-critic RL", "CEM baseline"],
    short: true,
    problem:
      "Latent world models learn a compact state from images and predict how it changes under actions. Planning usually uses CEM, which samples hundreds of action sequences every step. It is strong but expensive.",
    whatBuilt:
      "Replace or warm-start CEM with an actor-critic agent trained inside the learned latent space. The actor proposes action sequences toward the goal and the critic estimates value, aiming to match CEM success with fewer rollouts.",
    howItWorks: [
      "Frozen encoder maps observation and goal to latent state z",
      "Baseline planner runs CEM sampling and refinement in the world model",
      "Actor-critic proposes and scores trajectories in the same latent space",
      "First action executes, then replan",
    ],
    figures: [
      {
        src: img("latent-world-model-actor-critic", "cem-vs-actor-critic.png"),
        caption: "CEM baseline vs actor-critic planning in the latent world model",
      },
    ],
    statusNote:
      "Starting experiments. Builds on prior CMU work on planning in latent world models (cited by title only, not shown as our results).",
  },
];

export const projectPageBySlug = Object.fromEntries(
  projectPages.map((p) => [p.slug, p])
) as Record<string, ProjectPage>;
