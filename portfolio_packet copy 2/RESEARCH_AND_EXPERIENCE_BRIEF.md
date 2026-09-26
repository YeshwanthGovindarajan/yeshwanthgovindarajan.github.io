# Research, Patents and Experience: Portfolio Packet

Hand this file to the portfolio agent with the image folders under `public/projects/`. It covers the 11 research papers and patents from the old Webflow portfolio (Yeshfolio) plus the Experience section. HeatMap has its own brief (`HEATMAP_CASE_STUDY_BRIEF.md`).

Sources used: Webflow CMS entries (descriptions, co-authors, images), the itemized research CV (statuses, DOIs, numbers), and the current resume (all Experience content). Where they disagree, see Part E.

---

## PART A. Instructions for the portfolio agent

### A1. What to build

1. An **Experience** section on the homepage, from Part C. It is the resume, not project pages.
2. A **Research & Patents** page listing all 11 items as compact rows grouped into Journal papers, Conference papers, Patents, and Manuscripts. Each row shows title, venue or patent number, year, status chip, and a link. Items with a detail page link to it.
3. **Detail pages for 7 items** that have real figures, in the brief format below. Tier 1 items get a full page with a figure gallery. Tier 2 items get a short page.
4. **Homepage grid.** HeatMap first, then these three research cards: Multi-modal biometric authentication, Secure Federated Learning for IIoT, and the Findify lost-and-found patent. Everything else lives on the Research page.

| Tier | Slug | Why |
|---|---|---|
| 1 | `multimodal-biometric-auth` | Published, 3 original figures, matches a resume role |
| 1 | `sfl-federated-learning-iiot` | Published, 2 original figures |
| 1 | `fl-digital-twin-6g-transport` | 3 original figures |
| 1 | `lost-and-found-patent` | Real product UI plus flow diagrams |
| 1 | `cognitive-assessment-patent` | 4 patent figures |
| 2 | `wearable-safety-patent` | 1 patent figure |
| 2 | `clinical-ensemble-model` | Certificate only |
| list only | autism CNN ensemble, BERT retrieval, smart city NTN, exam malpractice | No original figures |

### A2. Rules

1. **Only use the images in `public/projects/<slug>/`.** Do not add stock photos. The old Webflow thumbnails were stock or third-party images (Getty, iStock, a ZF marketing photo, the Google BERT logo, a news illustration), so they are deliberately excluded.
2. **Cards without an image** (list-only items, and any card needing a thumbnail) use a typographic cover: the venue name small, a 2 to 4 word short title large, on a subtle tinted background. Build it in CSS, not as an image.
3. **Figures are white-background diagrams and charts.** Show them on a light rounded panel with padding inside the dark theme so they don't look like glaring white boxes. Enable click-to-zoom, since several are dense.
4. **Status chips** use exactly the status given in each brief. Never upgrade "Under review" to "Published".
5. Keep every number exactly as written. Do not add numbers.
6. Any line in a brief marked `[TODO Yeshwanth]` must not be published as-is. If it is still there at build time, leave that section out of the page.
7. No colons or em-dashes in visible page copy. The `key: value` lines below are metadata for you, not page text.

---

## PART B. Project briefs

## Project: Multi-modal Biometric Authentication

- slug: multimodal-biometric-auth
- tagline: One authentication model that fuses face, voice, and signature through shared and modality-specific layers.
- status: Published, IEEE Access (2025)
- year: 2024 to 2025
- role: Research Assistant at VIT University, led a team of 5 researchers
- stack: Python, CNNs, RNNs, PCA, gradient boosting, multimodal fusion
- tier: 1 · homepage card: yes

### Links
- paper: https://ieeexplore.ieee.org/document/10854437/
- preprint: https://arxiv.org/abs/2411.02112

### Problem
Single-factor biometric systems struggle with accuracy, privacy, and spoofing. Each modality fails in different conditions, so relying on one leaves gaps.

### What I built
A multi-modal authentication model that combines facial images, voice recordings, and signatures. Shared layers learn features common to all inputs, and modality-specific layers refine what is unique to each one. The fused representation is compressed with PCA and classified with a gradient boosting model.

### How it works
- Shared layers built from CNNs (spatial features) and RNNs (temporal features such as voice and dynamic signatures)
- Task-specific layers per modality refine face, voice, and signature features
- PCA reduces the fused feature vector before classification
- A gradient boosting classifier makes the final identity match decision

### My contribution
Led a team of 5 researchers to design, develop, and deploy the model as a Research Assistant at VIT University (May to October 2024).

### Outcome
- 94.65% authentication accuracy on 20,000+ fused samples, with 85% AUC
- False Accept and False Reject rates reduced to 0.09%

### Images
- hero: public/projects/multimodal-biometric-auth/architecture.webp (shared layers, task-specific layers, PCA and boosted classifier)
- screens: accuracy-by-modality.webp (per-modality accuracy over 50 epochs on LFW, VoxCeleb, MCYT-100, SigWiComp), processing-time.webp (processing time per modality across epochs)

### Card
- thumbnail: architecture.webp
- card line: Face, voice, and signature fused into one authentication model at 94.65% accuracy.

---

## Project: Secure Federated Learning for Industrial IoT

- slug: sfl-federated-learning-iiot
- tagline: A federated learning framework that uses a digital twin and blockchain NFTs to resist poisoning and Sybil attacks.
- status: Published, IEEE Access (May 2024)
- year: 2024
- role: Co-author (second author)
- stack: Federated learning, digital twins, blockchain, NFTs, Python
- tier: 1 · homepage card: yes

### Links
- paper: https://doi.org/10.1109/ACCESS.2024.3401039

### Problem
Federated learning in industrial IoT is exposed to data poisoning, model poisoning, and Sybil attacks where one attacker poses as many clients. Any of these can quietly corrupt the shared model.

### What I built
Secure Federated Learning (SFL), a framework that checks every aggregated model against a digital twin before accepting it, and authenticates every participating node with a blockchain NFT so fake identities cannot join.

### How it works
- Nodes mint an NFT to register, and must present it to join a training round
- Each node trains locally and submits weights, recorded on the blockchain
- The server aggregates the weights, then compares the new global model against a digital twin of the last good model
- If the digital twin performs better, the aggregated update is rejected and the previous model is restored

### My contribution
[TODO Yeshwanth] One or two sentences on what you personally built or ran.

### Outcome
- 97% accuracy in IIoT scenarios, above conventional federated learning
- Loss of 0.07 against 0.14 for standard federated learning

### Images
- hero: public/projects/sfl-federated-learning-iiot/architecture.webp (local training, aggregation, digital twin check)
- screens: protocol-flowchart.webp (full protocol across server, node, and blockchain lanes; tall image, show with zoom)
- optional: cover-optional.jpg (illustrative cover image; use only if Yeshwanth confirms he made it)

### Card
- thumbnail: architecture.webp
- card line: Federated learning that rejects poisoned updates with a digital twin and blocks fake clients with NFTs.

---

## Project: Distributed Intelligence Framework for 6G Autonomous Transport

- slug: fl-digital-twin-6g-transport
- tagline: Vehicles learn from each other's rare events through federated learning and digital twin simulation.
- status: Under review, IEEE Transactions on Intelligent Transportation Systems [TODO Yeshwanth: confirm current status]
- year: 2024
- role: Research Assistant, VIT (June to July 2024), co-author (second author)
- stack: Federated learning, digital twins, edge computing, 6G networks, Python
- tier: 1 · homepage card: no

### Links
- none public yet

### Problem
6G-connected autonomous vehicles still struggle with rare, unpredictable road conditions that any single vehicle may never have seen. Sharing raw driving data to learn from each other raises privacy and bandwidth problems.

### What I built
The Distributed Intelligence Framework (DIF). Vehicles train locally and share only model updates through edge servers, and digital twins simulate adverse traffic scenarios in real time so the system can adjust decisions and resources before those conditions hit.

### How it works
- Vehicle and device layer, with autonomous vehicles connected through 6G base stations
- Edge servers run local model training and host digital twins
- Model parameters are aggregated into a global model in the federated learning layer
- Digital twins simulate adverse scenarios to drive proactive resource allocation and traffic management

### My contribution
Developed the Distributed Intelligence Framework during a Research Assistant role at VIT, integrating federated learning with digital twins. [TODO Yeshwanth: add specifics if you want]

### Outcome
- 65% reduction in convergence error within five epochs
- Highest accuracy among compared methods (AFL, DFL, HFL, FedAvg) across 5 to 30 edge servers

### Images
- hero: public/projects/fl-digital-twin-6g-transport/architecture.webp (vehicle layer, edge servers, digital twins, global model)
- screens: accuracy-vs-edge-servers.webp (DIF against four federated baselines), return-rate.webp (return rate against surrounding vehicles at high and low density)

### Card
- thumbnail: architecture.webp
- card line: Federated learning and digital twins so autonomous vehicles learn from each other's rare events.

---

## Project: Findify, AI Lost-and-Found System (Patent)

- slug: lost-and-found-patent
- tagline: Snap a photo of a found item and AI captioning plus geolocation make it searchable for its owner.
- status: Patent published, Indian Patent Application 202441066940 (filed September 4, 2024, published September 13, 2024)
- year: 2024
- role: First-named inventor
- stack: BLIP image captioning (Hugging Face), geolocation, relational database, web app
- tier: 1 · homepage card: yes

### Links
- patent: Indian Patent Office application 202441066940 (show the number, no URL)

### Problem
Lost-and-found desks depend on manual logs and vague descriptions, so owners rarely find their items even when they were handed in.

### What I built
Findify, a web system where a finder reports an item with a photo and location. An image captioning model writes a detailed description automatically, which makes the item searchable, and owners claim items through a verified claim flow.

### How it works
- The finder reports an item on the website, and the app captures their geolocation
- The photo and details are stored in a relational database
- BLIP image captioning generates a detailed text description of the item for indexing and search
- The owner searches, finds the item, and presses Claim It
- Identity verification and messaging handle the handover

### My contribution
[TODO Yeshwanth] What you built (for example the web app, the captioning pipeline).

### Outcome
- Published patent application
- [TODO Yeshwanth] Any usage or demo results, if they exist

### Images
- hero: public/projects/lost-and-found-patent/findify-homepage.webp (Findify landing page)
- screens: reporting-flow.webp (reporting flow from upload to return; tall image), claim-flow.webp (owner claim flow), patent-application-record.jpg (official application record)

### Card
- thumbnail: findify-homepage.webp
- card line: A patented lost-and-found system that uses AI captioning to make found items searchable.

---

## Project: Cognitive Assessment System for Autistic Children (Patent)

- slug: cognitive-assessment-patent
- tagline: A multi-modal system that predicts cognitive ability from facial expressions and response timing during tasks.
- status: Patent published, Indian Patent Application 202441045820 (filed June 13, 2024, published June 28, 2024)
- year: 2024
- role: First-named inventor
- stack: CNNs, ANNs, facial expression analysis, deep learning
- tier: 1 · homepage card: no

### Links
- patent: Indian Patent Office application 202441045820

### Problem
Cognitive assessment of autistic children in schools relies on manual grading, which is slow and can miss the strengths of children with savant syndrome or other atypical profiles.

### What I built
A system that records a child's facial expressions, response initiation time, and response duration while they do verbal, non-verbal, memory, and problem-solving tasks. Deep learning models learn how those signals relate to educator grading, then predict cognitive ability scores and group students for personalized support.

### How it works
- Image capture units record each user during cognitive tasks, connected over a network to a central server
- A processing engine with data acquisition, relationship identification, cognitive assessment prediction, and detection modules
- CNNs and ANNs learn the link between behavioral responses and cognitive performance
- A detection module flags possible savant syndrome and other autistic profiles

### My contribution
[TODO Yeshwanth]

### Outcome
- Published patent application

### Images
- hero: public/projects/cognitive-assessment-patent/fig1-system-overview.png (FIG. 1, system overview)
- screens: fig2-processing-engine.png (FIG. 2, processing engine modules), fig3-assessment-flow.png (FIG. 3, assessment flow; dense, zoom), fig4-hardware.png (FIG. 4, hardware)

### Card
- thumbnail: fig1-system-overview.png
- card line: A patented system that predicts cognitive ability from facial and timing signals during tasks.

---

## Project: Wearable Personal Safety Device (Patent)

- slug: wearable-safety-patent
- tagline: A wearable that detects emergencies from physiological signals and alerts contacts if the user doesn't respond.
- status: Patent application filed, Indian Patent Application 202441078698 (filed October 16, 2024) [TODO Yeshwanth: add publication date if published]
- year: 2024
- role: First-named inventor
- stack: HRV and EDA sensing, microcontroller, AI-based threshold adaptation
- tier: 2 · homepage card: no

### Links
- patent: Indian Patent Office application 202441078698

### Problem
People in danger often can't call for help themselves.

### What I built
A wearable that reads physiological signals such as heart rate variability and electrodermal activity. It detects an emergency when they move past thresholds that adapt to the user over time, then asks the user to confirm they are safe. If there is no response in time, it sends an alert with location to predefined emergency contacts.

### How it works
- Sensors feed a microcontroller unit on the wearable
- Readings are compared against user-specific thresholds
- On a possible emergency, the device waits for a safety confirmation
- No confirmation triggers an alert with real-time location to emergency contacts over the network

### My contribution
[TODO Yeshwanth]

### Outcome
- Patent application filed

### Images
- hero: public/projects/wearable-safety-patent/fig1-system.png (device, sensors, network, emergency contacts)

### Card
- thumbnail: fig1-system.png
- card line: A wearable that detects emergencies from body signals and alerts contacts automatically.

---

## Project: Clinical Prediction Ensemble Model

- slug: clinical-ensemble-model
- tagline: An ensemble of four model families combined by a meta-learner for clinical prediction.
- status: Published, 2nd IEEE NMITCON 2024
- year: 2024
- role: Co-author (second author), presented in person in Bangalore
- stack: Decision trees, neural networks, random forests, SVMs, linear regression meta-learner
- tier: 2 · homepage card: no

### Links
- paper: https://doi.org/10.1109/NMITCON62075.2024.10699100

### Problem
Single models give uneven accuracy on clinical data, and each fails differently.

### What I built
A stacked ensemble where decision trees, neural networks, random forests, and SVMs each make predictions, and a linear regression meta-learner weights them by how reliable each one is.

### How it works
- Four base model families trained on clinical data
- A linear regression meta-learner learns how much to trust each model

### My contribution
Presented the paper in person at NMITCON 2024 in Bangalore. [TODO Yeshwanth: modeling contribution]

### Outcome
- 89.63% clinical prediction accuracy

### Images
- hero: public/projects/clinical-ensemble-model/nmitcon-certificate.jpg (conference certificate; show small, not full width)

### Card
- thumbnail: typographic cover ("IEEE NMITCON" / "Clinical Ensemble")

---

## List-only items (Research page rows, no detail page)

| Title | Venue | Year | Status | Link | One-line summary |
|---|---|---|---|---|---|
| Prediction and Evaluation of Autism Spectrum Disorder using AI-enabled CNN and Transfer Learning, An Ensemble Approach | 2nd IEEE WCONF | 2024 | Published | https://doi.org/10.1109/WCONF61366.2024.10692110 | Soft-voting ensemble of EfficientNet B5, MobileNet, and InceptionV3 at 91% accuracy |
| Enhanced Information Retrieval Using Hybrid p-Norm Extended Boolean Models with BERT | Procedia Computer Science (ICMLDE) | 2025 | Published [TODO Yeshwanth: confirm] | https://www.sciencedirect.com/science/article/pii/S1877050925016679 | Fine-tuned BERT combined with extended Boolean retrieval, 0.92 accuracy and AUC |
| Enhancing Smart City Connectivity through Non-Terrestrial Networks and Quantum Security | IEEE Consumer Electronics Magazine | 2024 | Under review [TODO Yeshwanth: confirm] | none | Weather-balloon networks for connectivity plus quantum key distribution for security |
| Machine Learning based Model for Predicting Malpractice in Automated Examination Systems | Manuscript | 2024 | In preparation [TODO Yeshwanth: confirm or drop] | none | Multi-modal proctoring with Isolation Forest anomaly detection |

---

## PART C. Experience section (from the resume only)

Render as a vertical timeline, newest first. Each entry shows role, company, dates, and the bullets. Link the HeatMap entry to its case study and the VIT entry to the biometric page.

**AI/ML Research Engineer Intern, Chronicle Studio** · May 2026 to August 2026
- Built a multimodal two-tower ranking model scoring ad-channel fit for Google Ads targeting, hitting 0.924 AUC on unseen channels and projecting $3K monthly savings per creator account in prod by reducing spend on target channel discovery.
- Swept 27 architectures across five modality Gemini embeddings, benchmarking fusion and interaction depth to ColBERT-style late interaction, reaching 82% cold-start accuracy against 55.5% by zero-shot Gemini 3.1 in Vertex AI with web search.
- Caught 8 defects corrupting 16% of customer-facing recommendations by shipping an agentic LLM-as-a-Judge workflow with tools to access metrics, judging the internal diagnostic engine in production via a three-model judge panel.

**Forward Deployed Engineer / Co-Founder, HeatMap** · December 2025 to March 2026 · links to `/projects/heatmap`
- Led development of an agentic multimodal AI system using vision models and LLM reasoning to analyze competitor media and generate evidence-backed marketing videos (Seedance), reducing effort by 50 hours per business.
- Engineered a cloud-native AI pipeline on Kubernetes using FastAPI, Redis workers, Postgres, and S3 to orchestrate brand ingestion, competitor discovery, video analysis, and iterative idea and video generation for 40 users.

**AI Engineering Intern, CGI** · January 2025 to June 2025
- Architected, built, and deployed ATLAS, an agentic AI code suggestion system using LangChain to retrieve dependency-linked code context from the knowledge graph and prompt DeepSeek-Coder in Ollama to generate test recommendations.
- Deployed ATLAS for utilization by 2 internal teams and publication in the Guidewire marketplace to generate revenue.
- Increased test coverage to 79% despite eliminating 400 regression test cases per cycle by parsing and structuring a 100k line insurance codebase into a test-impact knowledge graph using NetworkX.

**Research Assistant, VIT University** · May 2024 to October 2024 · links to `/projects/multimodal-biometric-auth`
- Led a team of 5 researchers to design, develop, and deploy a multi-modal biometric authentication model to predict identity match on 20,000+ fused samples with 85% AUC and 94.65% authentication accuracy.
- Fused spatial features with CNN and temporal features with RNN; integrated face, voice, and signature embeddings; applied PCA for dimensionality reduction; and used a Gradient Boosting classifier as the final classification layer.

**Data Science Intern, Highperformr AI** · August 2023 to March 2024
- Decreased OpenAI API response endpoint costs by 38% per user, saved $20K annually, reduced prompt attempts from 6 to 3.7, and protected generation quality by finetuning and deploying the llama2-7B model with QLoRA on a bio dataset.

**Education**
- Master of Science in Computational Data Science, Carnegie Mellon University · December 2026 · 3.7 GPA
- Bachelor of Science in Computer Science with High Honors, VIT University · June 2025 · 9.18 GPA

---

## PART D. Image inventory

| Folder | Files |
|---|---|
| `multimodal-biometric-auth/` | architecture.webp, accuracy-by-modality.webp, processing-time.webp |
| `sfl-federated-learning-iiot/` | architecture.webp, protocol-flowchart.webp, cover-optional.jpg |
| `fl-digital-twin-6g-transport/` | architecture.webp, accuracy-vs-edge-servers.webp, return-rate.webp |
| `lost-and-found-patent/` | findify-homepage.webp, reporting-flow.webp, claim-flow.webp, patent-application-record.jpg |
| `cognitive-assessment-patent/` | fig1-system-overview.png, fig2-processing-engine.png, fig3-assessment-flow.png, fig4-hardware.png |
| `wearable-safety-patent/` | fig1-system.png |
| `clinical-ensemble-model/` | nmitcon-certificate.jpg |

---

## PART E. Notes to Yeshwanth (not for the page)

1. **Statuses I updated from your CV.** The biometric paper is listed on IEEE Xplore (document 10854437), and the BERT retrieval paper appears in Procedia Computer Science on ScienceDirect. Both were "under review" in Webflow. Confirm both listings are yours before publishing the links.
2. **Still unknown.** The 6G transport paper (T-ITS) and the smart city article were "under review" in 2024, and I could not find published versions. The wearable patent may be published by now. The exam malpractice paper was "under work". Update or drop each.
3. **Contributions.** Your resume and CV only describe your personal role for the biometric paper and the DIF framework. Everything else shows author position only, so every `[TODO Yeshwanth]` needs your one-line contribution or that section gets left out.
4. **Kiosk claim.** Your CV says the lost-and-found system was "deployed via user-friendly kiosks", but the patent and Webflow describe a web interface. I left kiosks out. Add it back only if it was actually deployed.
5. **Team size.** The resume says you led 5 researchers on the biometric work, and the CV says you led a team of 3 across 11 projects. They can both be true, but be ready to explain it.
6. **Dates and GPA.** The resume has the VIT Research Assistant role as May to October 2024, and the CV as June to July 2024. The resume shows a 9.18 GPA, and the CV 9.11. The page uses the resume.
7. **Typo on your resume.** The Highperformr bullet says "repsonses". I fixed it here, but fix the resume too.
8. **Stock images left out.** The Webflow thumbnails for autism, cognitive assessment (Getty), lost and found (iStock), 6G transport (a ZF marketing photo), BERT (the Google logo), exam malpractice (a news illustration), smart city, fingerprint, and heart rate were not yours to reuse. The BLIP architecture diagram is from the BLIP paper, so I left it out too. The SFL cover looks AI-generated. Keep it only if you made it.
9. **Resume project with no images.** "Generative Sequential Retrieval for Large-Scale Ad Recommendation" is on your resume but not in Webflow. If you want it on the site, send me the repo or some figures and I'll write a brief for it.
10. Webflow still holds template placeholder text ("Prof. Dolores Umbridge", "Andreas Scheuer", fake completion dates). None of it was used.
