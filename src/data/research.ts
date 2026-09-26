export type ResearchGroup = "journal" | "conference" | "patent" | "manuscript";

export interface ResearchLink {
  label: string;
  href: string;
}

export interface ResearchFigure {
  src: string;
  caption: string;
  /** Render smaller than full width (used for certificates). */
  small?: boolean;
}

export interface ResearchItem {
  /** Present when the item has its own detail page at /research/<slug>. */
  slug?: string;
  group: ResearchGroup;
  kicker: string;
  title: string;
  /** Venue or patent label shown on the research listing row. */
  venue: string;
  year: string;
  /** Exact status chip text. Never upgraded. */
  status: string;
  tier?: 1 | 2;
  tagline?: string;
  role?: string;
  stack?: string[];
  links?: ResearchLink[];
  /** Patent application number shown as text, not a link. */
  patentNumber?: string;
  /** One-line summary for the listing row. */
  summary?: string;
  problem?: string;
  whatBuilt?: string;
  howItWorks?: string[];
  /** Omitted when the source only had a TODO placeholder. */
  contribution?: string;
  outcome?: string[];
  figures?: ResearchFigure[];
}

const img = (slug: string, file: string) => `/projects/${slug}/${file}`;

export const researchItems: ResearchItem[] = [
  // ---------------- Tier 1 detail pages ----------------
  {
    slug: "multimodal-biometric-auth",
    group: "journal",
    kicker: "Research paper",
    title: "Multi-modal Biometric Authentication",
    venue: "IEEE Access",
    year: "2025",
    status: "Published",
    tier: 1,
    tagline:
      "One authentication model that fuses face, voice, and signature through shared and modality-specific layers.",
    role: "Research Assistant at VIT University, led a team of 5 researchers",
    stack: ["Python", "CNNs", "RNNs", "PCA", "Gradient boosting", "Multimodal fusion"],
    links: [
      { label: "IEEE paper", href: "https://ieeexplore.ieee.org/document/10854437/" },
      { label: "Preprint", href: "https://arxiv.org/abs/2411.02112" },
    ],
    summary:
      "Face, voice, and signature fused into one authentication model at 94.65% accuracy.",
    problem:
      "Single-factor biometric systems struggle with accuracy, privacy, and spoofing. Each modality fails in different conditions, so relying on one leaves gaps.",
    whatBuilt:
      "A multi-modal authentication model that combines facial images, voice recordings, and signatures. Shared layers learn features common to all inputs, and modality-specific layers refine what is unique to each one. The fused representation is compressed with PCA and classified with a gradient boosting model.",
    howItWorks: [
      "Shared layers built from CNNs for spatial features and RNNs for temporal features such as voice and dynamic signatures",
      "Task-specific layers per modality refine face, voice, and signature features",
      "PCA reduces the fused feature vector before classification",
      "A gradient boosting classifier makes the final identity match decision",
    ],
    contribution:
      "Led a team of 5 researchers to design, develop, and deploy the model as a Research Assistant at VIT University from May to October 2024.",
    outcome: [
      "94.65% authentication accuracy on 20,000+ fused samples, with 85% AUC",
      "False Accept and False Reject rates reduced to 0.09%",
    ],
    figures: [
      { src: img("multimodal-biometric-auth", "architecture.webp"), caption: "Architecture with shared layers, task-specific layers, PCA, and a boosted classifier" },
      { src: img("multimodal-biometric-auth", "accuracy-by-modality.webp"), caption: "Per-modality accuracy over 50 epochs on LFW, VoxCeleb, MCYT-100, and SigWiComp" },
      { src: img("multimodal-biometric-auth", "processing-time.webp"), caption: "Processing time per modality across epochs" },
    ],
  },
  {
    slug: "sfl-federated-learning-iiot",
    group: "journal",
    kicker: "Research paper",
    title: "Secure Federated Learning for Industrial IoT",
    venue: "IEEE Access",
    year: "2024",
    status: "Published",
    tier: 1,
    tagline:
      "A federated learning framework that uses a digital twin and blockchain NFTs to resist poisoning and Sybil attacks.",
    role: "Co-author, second author",
    stack: ["Federated learning", "Digital twins", "Blockchain", "NFTs", "Python"],
    links: [{ label: "Paper", href: "https://doi.org/10.1109/ACCESS.2024.3401039" }],
    summary:
      "Federated learning that rejects poisoned updates with a digital twin and blocks fake clients with NFTs.",
    problem:
      "Federated learning in industrial IoT is exposed to data poisoning, model poisoning, and Sybil attacks where one attacker poses as many clients. Any of these can quietly corrupt the shared model.",
    whatBuilt:
      "Secure Federated Learning, a framework that checks every aggregated model against a digital twin before accepting it, and authenticates every participating node with a blockchain NFT so fake identities cannot join.",
    howItWorks: [
      "Nodes mint an NFT to register, and must present it to join a training round",
      "Each node trains locally and submits weights, recorded on the blockchain",
      "The server aggregates the weights, then compares the new global model against a digital twin of the last good model",
      "If the digital twin performs better, the aggregated update is rejected and the previous model is restored",
    ],
    // contribution omitted (source had a TODO placeholder)
    outcome: [
      "97% accuracy in IIoT scenarios, above conventional federated learning",
      "Loss of 0.07 against 0.14 for standard federated learning",
    ],
    figures: [
      { src: img("sfl-federated-learning-iiot", "architecture.webp"), caption: "Architecture with local training, aggregation, and the digital twin check" },
      { src: img("sfl-federated-learning-iiot", "protocol-flowchart.webp"), caption: "Full protocol across server, node, and blockchain lanes" },
    ],
  },
  {
    slug: "fl-digital-twin-6g-transport",
    group: "journal",
    kicker: "Research paper",
    title: "Distributed Intelligence Framework for 6G Autonomous Transport",
    venue: "IEEE Transactions on Intelligent Transportation Systems",
    year: "2024",
    status: "Under review",
    tier: 1,
    tagline:
      "Vehicles learn from each other's rare events through federated learning and digital twin simulation.",
    role: "Research Assistant at VIT, co-author, second author",
    stack: ["Federated learning", "Digital twins", "Edge computing", "6G networks", "Python"],
    summary:
      "Federated learning and digital twins so autonomous vehicles learn from each other's rare events.",
    problem:
      "6G-connected autonomous vehicles still struggle with rare, unpredictable road conditions that any single vehicle may never have seen. Sharing raw driving data to learn from each other raises privacy and bandwidth problems.",
    whatBuilt:
      "The Distributed Intelligence Framework. Vehicles train locally and share only model updates through edge servers, and digital twins simulate adverse traffic scenarios in real time so the system can adjust decisions and resources before those conditions hit.",
    howItWorks: [
      "A vehicle and device layer, with autonomous vehicles connected through 6G base stations",
      "Edge servers run local model training and host digital twins",
      "Model parameters are aggregated into a global model in the federated learning layer",
      "Digital twins simulate adverse scenarios to drive proactive resource allocation and traffic management",
    ],
    contribution:
      "Developed the Distributed Intelligence Framework during a Research Assistant role at VIT, integrating federated learning with digital twins.",
    outcome: [
      "65% reduction in convergence error within five epochs",
      "Highest accuracy among compared methods AFL, DFL, HFL, and FedAvg across 5 to 30 edge servers",
    ],
    figures: [
      { src: img("fl-digital-twin-6g-transport", "architecture.webp"), caption: "Vehicle layer, edge servers, digital twins, and the global model" },
      { src: img("fl-digital-twin-6g-transport", "accuracy-vs-edge-servers.webp"), caption: "DIF against four federated baselines" },
      { src: img("fl-digital-twin-6g-transport", "return-rate.webp"), caption: "Return rate against surrounding vehicles at high and low density" },
    ],
  },
  {
    slug: "lost-and-found-patent",
    group: "patent",
    kicker: "Patent",
    title: "Findify, AI Lost-and-Found System",
    venue: "Indian Patent 202441066940",
    year: "2024",
    status: "Published",
    tier: 1,
    tagline:
      "Snap a photo of a found item and AI captioning plus geolocation make it searchable for its owner.",
    role: "First-named inventor",
    stack: ["BLIP image captioning", "Geolocation", "Relational database", "Web app"],
    patentNumber:
      "Indian Patent Application 202441066940, filed September 4, 2024, published September 13, 2024",
    summary:
      "A patented lost-and-found system that uses AI captioning to make found items searchable.",
    problem:
      "Lost-and-found desks depend on manual logs and vague descriptions, so owners rarely find their items even when they were handed in.",
    whatBuilt:
      "Findify, a web system where a finder reports an item with a photo and location. An image captioning model writes a detailed description automatically, which makes the item searchable, and owners claim items through a verified claim flow.",
    howItWorks: [
      "The finder reports an item on the website, and the app captures their geolocation",
      "The photo and details are stored in a relational database",
      "BLIP image captioning generates a detailed text description of the item for indexing and search",
      "The owner searches, finds the item, and presses Claim It",
      "Identity verification and messaging handle the handover",
    ],
    // contribution omitted (source had a TODO placeholder)
    outcome: ["Published patent application"],
    figures: [
      { src: img("lost-and-found-patent", "findify-homepage.webp"), caption: "Findify landing page" },
      { src: img("lost-and-found-patent", "reporting-flow.webp"), caption: "Reporting flow from upload to return" },
      { src: img("lost-and-found-patent", "claim-flow.webp"), caption: "Owner claim flow" },
      { src: img("lost-and-found-patent", "patent-application-record.jpg"), caption: "Official patent application record" },
    ],
  },
  {
    slug: "cognitive-assessment-patent",
    group: "patent",
    kicker: "Patent",
    title: "Cognitive Assessment System for Autistic Children",
    venue: "Indian Patent 202441045820",
    year: "2024",
    status: "Published",
    tier: 1,
    tagline:
      "A multi-modal system that predicts cognitive ability from facial expressions and response timing during tasks.",
    role: "First-named inventor",
    stack: ["CNNs", "ANNs", "Facial expression analysis", "Deep learning"],
    patentNumber:
      "Indian Patent Application 202441045820, filed June 13, 2024, published June 28, 2024",
    summary:
      "A patented system that predicts cognitive ability from facial and timing signals during tasks.",
    problem:
      "Cognitive assessment of autistic children in schools relies on manual grading, which is slow and can miss the strengths of children with savant syndrome or other atypical profiles.",
    whatBuilt:
      "A system that records a child's facial expressions, response initiation time, and response duration while they do verbal, non-verbal, memory, and problem-solving tasks. Deep learning models learn how those signals relate to educator grading, then predict cognitive ability scores and group students for personalized support.",
    howItWorks: [
      "Image capture units record each user during cognitive tasks, connected over a network to a central server",
      "A processing engine with data acquisition, relationship identification, cognitive assessment prediction, and detection modules",
      "CNNs and ANNs learn the link between behavioral responses and cognitive performance",
      "A detection module flags possible savant syndrome and other autistic profiles",
    ],
    // contribution omitted (source had a TODO placeholder)
    outcome: ["Published patent application"],
    figures: [
      { src: img("cognitive-assessment-patent", "fig1-system-overview.png"), caption: "FIG 1, system overview" },
      { src: img("cognitive-assessment-patent", "fig2-processing-engine.png"), caption: "FIG 2, processing engine modules" },
      { src: img("cognitive-assessment-patent", "fig3-assessment-flow.png"), caption: "FIG 3, assessment flow" },
      { src: img("cognitive-assessment-patent", "fig4-hardware.png"), caption: "FIG 4, hardware" },
    ],
  },
  // ---------------- Tier 2 short detail pages ----------------
  {
    slug: "wearable-safety-patent",
    group: "patent",
    kicker: "Patent",
    title: "Wearable Personal Safety Device",
    venue: "Indian Patent 202441078698",
    year: "2024",
    status: "Filed",
    tier: 2,
    tagline:
      "A wearable that detects emergencies from physiological signals and alerts contacts if the user doesn't respond.",
    role: "First-named inventor",
    stack: ["HRV and EDA sensing", "Microcontroller", "AI-based threshold adaptation"],
    patentNumber: "Indian Patent Application 202441078698, filed October 16, 2024",
    summary:
      "A wearable that detects emergencies from body signals and alerts contacts automatically.",
    problem: "People in danger often can't call for help themselves.",
    whatBuilt:
      "A wearable that reads physiological signals such as heart rate variability and electrodermal activity. It detects an emergency when they move past thresholds that adapt to the user over time, then asks the user to confirm they are safe. If there is no response in time, it sends an alert with location to predefined emergency contacts.",
    howItWorks: [
      "Sensors feed a microcontroller unit on the wearable",
      "Readings are compared against user-specific thresholds",
      "On a possible emergency, the device waits for a safety confirmation",
      "No confirmation triggers an alert with real-time location to emergency contacts over the network",
    ],
    outcome: ["Patent application filed"],
    figures: [
      { src: img("wearable-safety-patent", "fig1-system.png"), caption: "Device, sensors, network, and emergency contacts" },
    ],
  },
  {
    slug: "clinical-ensemble-model",
    group: "conference",
    kicker: "Research paper",
    title: "Clinical Prediction Ensemble Model",
    venue: "IEEE NMITCON 2024",
    year: "2024",
    status: "Published",
    tier: 2,
    tagline:
      "An ensemble of four model families combined by a meta-learner for clinical prediction.",
    role: "Co-author, second author, presented in person in Bangalore",
    stack: ["Decision trees", "Neural networks", "Random forests", "SVMs", "Linear regression meta-learner"],
    links: [{ label: "Paper", href: "https://doi.org/10.1109/NMITCON62075.2024.10699100" }],
    summary: "A stacked ensemble weighted by a meta-learner at 89.63% accuracy.",
    problem: "Single models give uneven accuracy on clinical data, and each fails differently.",
    whatBuilt:
      "A stacked ensemble where decision trees, neural networks, random forests, and SVMs each make predictions, and a linear regression meta-learner weights them by how reliable each one is.",
    howItWorks: [
      "Four base model families trained on clinical data",
      "A linear regression meta-learner learns how much to trust each model",
    ],
    contribution: "Presented the paper in person at NMITCON 2024 in Bangalore.",
    outcome: ["89.63% clinical prediction accuracy"],
    figures: [
      { src: img("clinical-ensemble-model", "architecture.png"), caption: "Stacked ensemble with linear meta-learner" },
      { src: img("clinical-ensemble-model", "nmitcon-certificate.jpg"), caption: "Conference certificate, NMITCON 2024", small: true },
    ],
  },
  {
    slug: "autism-cnn-ensemble",
    group: "conference",
    kicker: "Research paper",
    title:
      "Prediction and Evaluation of Autism Spectrum Disorder using AI-enabled CNN and Transfer Learning",
    venue: "2nd IEEE WCONF",
    year: "2024",
    status: "Published",
    tier: 2,
    tagline:
      "Soft-voting ensemble of EfficientNet B5, MobileNet, and InceptionV3 for ASD detection from images.",
    links: [{ label: "Paper", href: "https://doi.org/10.1109/WCONF61366.2024.10692110" }],
    summary:
      "Soft-voting ensemble of EfficientNet B5, MobileNet, and InceptionV3 at 91% accuracy.",
    problem:
      "Diagnosis of autism spectrum disorder benefits from models that generalize across imaging conditions while staying accurate on subtle facial cues.",
    whatBuilt:
      "An ensemble of transfer-learned CNNs fine-tuned for binary ASD detection, combined with soft voting over model predictions.",
    outcome: ["About 91% accuracy on held-out evaluation"],
    figures: [
      { src: img("autism-cnn-ensemble", "architecture.png"), caption: "Ensemble of EfficientNet B5, MobileNet, and InceptionV3" },
    ],
  },
  {
    slug: "bert-extended-boolean-ir",
    group: "journal",
    kicker: "Research paper",
    title:
      "Enhanced Information Retrieval Using Hybrid p-Norm Extended Boolean Models with BERT",
    venue: "Procedia Computer Science, ICMLDE",
    year: "2025",
    status: "Published",
    tier: 2,
    tagline:
      "Fine-tuned BERT combined with extended Boolean retrieval for hybrid information retrieval.",
    links: [
      { label: "Paper", href: "https://www.sciencedirect.com/science/article/pii/S1877050925016679" },
    ],
    summary:
      "Fine-tuned BERT combined with extended Boolean retrieval, 0.92 accuracy and AUC.",
    problem:
      "Classic Boolean retrieval misses semantic matches while dense models miss precise logical constraints. Hybrid models aim to combine both.",
    whatBuilt:
      "A hybrid p-norm extended Boolean retrieval framework paired with a fine-tuned BERT encoder for ranking.",
    outcome: ["0.92 accuracy and AUC on the evaluation setup"],
    figures: [
      { src: img("bert-extended-boolean-ir", "architecture.png"), caption: "Hybrid BERT and extended Boolean retrieval architecture" },
    ],
  },
  {
    slug: "smart-city-ntn-quantum",
    group: "journal",
    kicker: "Research paper",
    title:
      "Enhancing Smart City Connectivity through Non-Terrestrial Networks and Quantum Security",
    venue: "IEEE Consumer Electronics Magazine",
    year: "2024",
    status: "Under review",
    tier: 2,
    tagline:
      "Weather-balloon networks for connectivity plus quantum key distribution for security.",
    summary:
      "Weather-balloon networks for connectivity plus quantum key distribution for security.",
    problem:
      "Smart city sensors need resilient connectivity where terrestrial links fail, without sacrificing confidentiality of telemetry.",
    whatBuilt:
      "An architecture combining non-terrestrial network relays with quantum-secured key exchange for city-scale IoT backhaul.",
    figures: [
      { src: img("smart-city-ntn-quantum", "architecture.png"), caption: "NTN and quantum security architecture for smart cities" },
    ],
  },
  {
    slug: "exam-malpractice-detection",
    group: "manuscript",
    kicker: "Manuscript",
    title:
      "Machine Learning based Model for Predicting Malpractice in Automated Examination Systems",
    venue: "Manuscript",
    year: "2024",
    status: "In preparation",
    tier: 2,
    tagline: "Multi-modal proctoring with Isolation Forest anomaly detection.",
    summary: "Multi-modal proctoring with Isolation Forest anomaly detection.",
    problem:
      "Automated exam platforms need to flag suspicious behavior without storing unnecessary personal video long term.",
    whatBuilt:
      "A multi-modal proctoring pipeline with anomaly detection to flag likely malpractice events during online exams.",
    figures: [
      { src: img("exam-malpractice-detection", "architecture.png"), caption: "Proctoring and anomaly detection pipeline" },
    ],
  },
];

export const researchDetails = researchItems.filter((item) => item.slug);

export const groupOrder: { key: ResearchGroup; label: string }[] = [
  { key: "journal", label: "Journal papers" },
  { key: "conference", label: "Conference papers" },
  { key: "patent", label: "Patents" },
  { key: "manuscript", label: "Manuscripts" },
];

/** Papers and manuscripts only (no patents). */
export const scholarlyItems = researchItems.filter((item) => item.group !== "patent");

export const patentItems = researchItems.filter((item) => item.group === "patent");

export const scholarlyGroupOrder = groupOrder.filter((g) => g.key !== "patent");
