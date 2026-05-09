export type Project = {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  year: string;
  overview: string;
  challenge: string;
  impact: string;
  approach: string;
  takeaway: string;
  coverImage?: string;
  stats?: { label: string; value: string }[];
  live?: string;
  caseStudyUrl?: string;
  figmaUxUrl?: string;
  figmaUiUrl?: string;
  featured: boolean;
  type: "work" | "research";
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "flowda-dashboard",
    coverImage: "/assets/projects/flowda.webp",
    figmaUiUrl: "https://www.figma.com/design/G4VwyCQCXPouCJvtgL6j9a/FlowDa-Project-Preview?node-id=5-3&t=ygJO1NQZ1fP2WbDA-1",
    title: "Flowda Dashboard Redesign",
    subtitle: "Lead Designer & Project Manager · Enterprise UX · Agile",
    tags: ["Enterprise UX", "Agile", "Design System", "Arabic Markets"],
    year: "2023",
    overview:
      "Enterprise resource management dashboard for Arabic-speaking markets. Research question: can systematic UX intervention resolve structural usability failures at scale?",
    stats: [
      { label: "Delivery Timeline", value: "2 Months" },
      { label: "Agile Phases", value: "4" },
      { label: "Design System", value: "Modular" },
      { label: "Market", value: "Arabic RTL" },
    ],
    challenge:
      "Poorly structured user flows, cluttered inaccessible interface, need for a customizable design system, and a tight two-month delivery constraint within in-house development limitations.",
    impact:
      "Delivered within deadline. Performance and accessibility significantly improved. Modular Figma design system enabling client brand customization. Strengthened design–dev collaboration through iterative Agile cycles.",
    approach:
      "Agile methodology: (1) Research & Discovery — user behavior analysis; (2) Wireframing & Prototyping; (3) Modular Figma Design System; (4) Implementation within dev constraints.",
    takeaway:
      "Modular design systems enhance scalability and client satisfaction. Agile iteration ensures adaptability across constraints. Close design–dev collaboration balances feasibility with excellence.",
    featured: true,
    type: "work",
  },
  {
    id: 2,
    slug: "silverbakhshi",
    coverImage: "/assets/projects/noghrebakhshi.webp",
    live: "https://noghrebakhshi.com/",
    title: "SilverBakhshi — Luxury UX Redesign",
    subtitle: "Lead UX Researcher & Product Designer · Luxury E-commerce · A/B Testing",
    tags: ["Luxury E-commerce", "A/B Testing", "WordPress", "CRO"],
    year: "2024",
    overview:
      "Luxury silver jewelry brand for high-net-worth clients. Research question: can evidence-based UX intervention improve measurable digital performance without compromising an established luxury brand identity?",
    challenge:
      "(1) Preserving luxury brand identity while implementing UX improvements; (2) Educating non-expert stakeholders on UX methodology; (3) Cross-functional coordination under real-world constraints.",
    impact:
      "Overall performance score: 67 → 88/100 (+31.3%). LCP: 6.8s → 3.9s (−42.7%). FID: 9ms → 4ms (−55.6%). Conversion rate: 2% → 3.5% (+75% relative growth). Estimated 20% bounce rate reduction.",
    approach:
      "Mixed-methods approach: competitive analysis, user behavior tracking via Microsoft Clarity, A/B testing, and a scalable Figma design system. WordPress enabled controlled pre/post measurement of performance metrics.",
    takeaway:
      "Rigorous UX methodology produces quantifiable business outcomes even within constrained brand identity parameters. Stakeholder education is a design challenge in itself.",
    stats: [
      { label: "Performance Score", value: "+31.3%" },
      { label: "LCP Improvement", value: "−42.7%" },
      { label: "Conversion Rate", value: "+75%" },
      { label: "FID Improvement", value: "−55.6%" },
    ],
    featured: true,
    type: "work",
  },
  {
    id: 3,
    slug: "bagh-e-ketab",
    coverImage: "/assets/projects/bagheketab.webp",
    live: "https://bagheketab.com/",
    title: "Bagh-e Ketab Digital Platform",
    subtitle: "Lead UX Designer & Project Manager · Information Architecture · Cultural Institution",
    tags: ["Information Architecture", "Design Systems", "Cultural Institution", "IA"],
    year: "2025",
    overview:
      "Tehran's cultural institution required a unified platform merging multiple independent systems. Research question: how can information architecture deliver coherent UX at scale without fragmenting sub-system identity?",
    challenge:
      "(1) Scale — extensive page count demanded a modular approach; (2) Content diversity — competing demands across user groups; (3) System integration — merging independent platforms without losing individual functionality.",
    impact:
      "Unified multiple systems into one coherent platform, eliminating navigational fragmentation. Modular design system reduced future overhead. High-fidelity prototypes enabled informed institutional decision-making and buy-in.",
    approach:
      "IA-first methodology: documentation-based requirements analysis, hierarchical content structuring, wireframe scaffolding to validate navigation logic, then modular Figma component library. Iterative stakeholder loops via Mizito.",
    takeaway:
      "Scalable information architecture is the primary determinant of usability in high-volume, multi-system environments. This maps directly onto HCI and service design research on complexity navigation.",
    stats: [
      { label: "Systems Unified", value: "3" },
      { label: "Approach", value: "IA-First" },
      { label: "Component Library", value: "Modular" },
      { label: "Collaboration Tool", value: "Mizito" },
    ],
    featured: true,
    type: "work",
  },
  {
    id: 4,
    slug: "arman-software",
    coverImage: "/assets/projects/armanproject.webp",
    title: "Arman Software Website",
    subtitle: "Lead UI/UX Designer · B2B Tech · Enterprise · Responsive Design",
    tags: ["B2B", "Enterprise", "Responsive Design", "Trust UX"],
    year: "2023",
    overview:
      "Arman Software, a leading enterprise software provider in Iran, required a complete website redesign to strengthen credibility with professional clients and decision-makers.",
    challenge:
      "Communicating a complex portfolio of enterprise solutions clearly to non-technical decision-makers. Establishing a modern, trustworthy visual identity while ensuring cross-device responsiveness.",
    impact:
      "Redesigned website positions Arman Software as a modern, credible, and innovative provider. Improved navigation allows users to quickly access key solutions and case studies. Live at armansoftware.ir.",
    approach:
      "User research and competitor benchmarking against leading B2B tech platforms. Wireframing with attention to user flows for diverse stakeholder groups. Comprehensive style guide for design consistency.",
    takeaway:
      "In B2B contexts, trust is a UX variable — visual clarity and information hierarchy directly influence conversion. Scalable design systems are essential when showcasing complex service portfolios.",
    stats: [
      { label: "Sector", value: "B2B" },
      { label: "Responsive Breakpoints", value: "3" },
      { label: "Style Guide", value: "Complete" },
      { label: "Status", value: "Live" },
    ],
    live: "https://www.armansoftware.ir/",
    featured: false,
    type: "work",
  },
  {
    id: 5,
    slug: "vivooland",
    coverImage: "/assets/projects/vivooland.webp",
    title: "Vivooland E-Commerce Platform",
    subtitle: "Lead Designer & Project Manager · E-Commerce · Mobile-First · Brand Identity",
    tags: ["E-Commerce", "Mobile-First", "Brand Identity", "WordPress"],
    year: "2025",
    overview:
      "Electronics e-commerce platform for direct purchase and installment plans — built from zero brand identity. Challenge: design a complete visual system and UX simultaneously for a mobile-first market.",
    challenge:
      "No existing brand identity required building a design system from scratch. Balancing a visually modern aesthetic with optimal performance. Strong client emphasis on mobile-first experience — critical given that most Iranian e-commerce traffic is mobile.",
    impact:
      "Visually cohesive, high-performing e-commerce platform exceeding client expectations. Optimized mobile experience with seamless navigation across all devices. Strong brand foundation established from zero to launch. Live at vivoooland.ir.",
    approach:
      "In-depth competitor research across leading e-commerce platforms. Scalable Figma design system built before any screen design began. Mobile-first approach: all layouts designed at mobile breakpoint first, then expanded.",
    takeaway:
      "Building brand identity and UX simultaneously requires a design system as the shared foundation — not an afterthought. Mobile-first is not a constraint but a clarifying design discipline.",
    stats: [
      { label: "Brand Starting Point", value: "Zero" },
      { label: "Approach", value: "Mobile-First" },
      { label: "Platform", value: "WordPress" },
      { label: "Status", value: "Live" },
    ],
    live: "https://vivooland.ir",
    featured: false,
    type: "work",
  },
  {
    id: 6,
    slug: "calmind",
    caseStudyUrl: "https://drive.google.com/file/d/11x0q3oJP8adL92XSWBWugIpkMmqw1WoM/view?usp=sharing",
    title: "Calmind — Stress Management App",
    subtitle: "Research Mentor & Co-Researcher · Mental Health UX · HCI",
    tags: ["Mental Health UX", "HCI", "EdTech", "Mixed Methods"],
    year: "2023",
    overview:
      "How can UX design address the unmet stress management needs of university students? Mixed-methods research combining survey (10+ participants) and in-depth user interviews.",
    challenge:
      "Three structural failures: (1) 99% of participants experience stress, yet apps like Calm and Headspace offer generic mindfulness with no academic context awareness; (2) 70% of students report loneliness — a dimension entirely absent from all competing wellness apps analyzed; (3) financial and academic stressors dominate the student experience but are treated as out-of-scope by existing mental health UX. The core gap: students need a contextual companion, not a meditation library.",
    impact:
      "Established a multidimensional model of student wellbeing spanning financial, social, and academic stressors — demonstrating that the dominant mindfulness-only paradigm is insufficient for university populations. Three evidence-grounded personas mapped the behavioral and emotional spectrum of student stress. Six affinity clusters provided a validated framework for feature prioritization in student-centered wellness design. Findings directly inform HCI research on mental health technology and participatory design methodology.",
    approach:
      "Double Diamond: (1) Discover — survey (10+ participants) covering stress frequency, coping strategies, and app usage patterns; (2) Define — 5 in-depth user interviews surfacing loneliness, financial anxiety, and academic pressure as primary themes; (3) Competitive analysis of Calm, Headspace, Youper, and MindDoc mapping feature gaps and emotional tone; (4) Affinity diagram → 6 core themes; (5) 3 detailed personas capturing distinct student stress profiles; (6) Design recommendations grounded in participatory research methodology.",
    takeaway:
      "Loneliness is the most underserved dimension in mental health UX — and the most socially stigmatized to design for. The 70% loneliness finding forced a complete reframing of the feature set: the app needed to be a companion, not a tool. This project demonstrates that participatory design under real-world constraints produces more robust, human-centered insights than controlled lab studies. Student wellbeing cannot be reduced to a mindfulness habit tracker.",
    stats: [
      { label: "Participants Experience Stress", value: "99%" },
      { label: "Report Loneliness", value: "70%" },
      { label: "Interview Participants", value: "5" },
      { label: "Affinity Themes", value: "6" },
    ],
    featured: false,
    type: "research",
  },
  {
    id: 7,
    slug: "dietbetes",
    caseStudyUrl: "https://www.figma.com/design/XADezc0rXlHArXo9W2cfNf/Dietbetes-Preview?node-id=0-1&p=f&t=MDFXuuF9AWpXQZMb-0",
    title: "DietBetes — AI Nutrition for Diabetes",
    subtitle: "Research Mentor & Co-Researcher · Healthcare UX · AI Design",
    tags: ["Healthcare UX", "AI Design", "Chronic Condition", "Empathy Mapping"],
    year: "2023",
    overview:
      "How can AI-driven UX reduce information overload and emotional fatigue in people managing diabetes daily? Survey (10+ users, Type 1 & 2 diabetes, ages 25–65) + user interviews.",
    challenge:
      "Five compounding pain points across Type 1 and Type 2 patients (ages 25–65): (1) Information overload — conflicting advice creates decision paralysis; (2) Zero personalization — apps treat all diabetics identically regardless of type, lifestyle, or cultural diet; (3) Alert fatigue — intrusive, context-unaware notifications patients learn to ignore; (4) Emotional burden — chronic fear, guilt cycles, and burnout that existing apps amplify rather than reduce; (5) Fragmented ecosystems — users juggling 3–4 separate apps for glucose, nutrition, medication, and appointments. The core insight: 'I feel like a patient, not a person.'",
    impact:
      "Produced a comprehensive emotional and functional map of the chronic disease management experience — applicable beyond diabetes to any long-term condition. Empathy mapping revealed that the primary UX problem is emotional regulation, not information delivery: apps that only track data worsen guilt cycles. Three personas spanning newly diagnosed young adults to long-term elderly patients provided a validated design foundation for an AI-driven nutrition companion that adapts to emotional state, not just glucose readings.",
    approach:
      "Mixed methods: (1) Quantitative survey across 10+ users (Type 1 & 2, ages 25–65) covering app usage, pain frequency, and unmet needs; (2) Qualitative interviews surfacing emotional experience — fear, guilt, burnout — invisible in survey data alone; (3) App store review analysis identifying recurring complaints across 4 competing apps; (4) Affinity diagram → 6 themes; (5) Empathy mapping revealing the full emotional journey from diagnosis to daily management; (6) 3 personas spanning newly diagnosed, long-term managed, and elderly diabetic profiles.",
    takeaway:
      "Chronic condition management is an emotional design problem, not an information design problem. Every feature decision in DietBetes was filtered through a single question: does this reduce fear, or increase it? AI personalization in healthcare only delivers value when it addresses the user's emotional state alongside their clinical data — a finding with direct implications for HCI research on persuasive technology in medical contexts.",
    stats: [
      { label: "Pain Points Identified", value: "5" },
      { label: "User Age Range", value: "25–65" },
      { label: "Apps Analyzed", value: "4" },
      { label: "Empathy Themes", value: "6" },
    ],
    featured: false,
    type: "research",
  },
  {
    id: 8,
    slug: "divar-redesign",
    caseStudyUrl: "https://www.figma.com/design/dbupPi9ZTcjhTf7CQFVI5u/Redesigning-Divar%E2%80%99s-Ad-Form?node-id=0-1&t=t0uNeu7zdbKJfgRD-1",
    figmaUxUrl: "https://www.figma.com/board/kzRfO5m2qj8GZ9EhX9EXSw/Divaar-Redesign?node-id=1-1015&t=YwR07cwPYM9cUcMD-0",
    title: "Divar — Ad Posting Optimization",
    subtitle: "Research Mentor · Marketplace UX · Drop-off Reduction",
    tags: ["Marketplace UX", "Form Design", "Real Product", "Drop-off Reduction"],
    year: "2023",
    overview:
      "Why do experienced Divar users abandon the ad-posting process, and how can form redesign reduce drop-off? Research on Iran's largest C2C marketplace.",
    challenge:
      "Three structural product failures: (1) Pricing opacity — 29% of active sellers cite posting fees as the primary abandonment trigger, revealed only after the listing is complete; (2) Photo quality barrier — 1 in 4 sellers identify photo quality as their biggest challenge, despite Divar offering zero in-app editing tools; (3) Bundle selling workaround — users independently invented the practice of creating single listings for multiple items to avoid per-item fees, revealing a fundamental mismatch between product assumptions and real seller behavior.",
    impact:
      "Delivered the first structured behavioral analysis of Divar's ad-posting drop-off, surfacing workarounds invisible to standard analytics. The bundle-selling finding — a user-invented behavior not anticipated by the product team — illustrates how ethnographic observation reveals design debt that A/B testing cannot. Competitive analysis across eBay, OLX, and Instagram Marketplace identified three highest-impact intervention points: transparent upfront pricing, integrated photo editing, and multi-item listing support.",
    approach:
      "Mixed methods on a real, high-scale product: (1) 14-question survey with active Divar sellers — quantitative baseline on drop-off triggers and workaround behaviors; (2) Qualitative interviews deepening the 'why' behind each quantitative signal; (3) Behavioral observation documenting the bundle-selling workaround — undetectable through surveys alone; (4) Competitive analysis across eBay, OLX, and Instagram Marketplace; (5) Affinity diagram → 5 structural themes; (6) Evidence-based feature recommendations prioritized by impact and implementation feasibility.",
    takeaway:
      "The most valuable research finding is never what users say — it is what they do instead. The bundle-selling behavior was not a feature request: it was a workaround, and workarounds are the most precise signal of design debt. Form redesign without addressing the underlying fee structure and photo quality gap would have optimized the wrong layer of the problem entirely.",
    stats: [
      { label: "Cited Fees as Challenge", value: "29%" },
      { label: "Photo Quality Issue", value: "1 in 4" },
      { label: "Survey Questions", value: "14" },
      { label: "Research Themes", value: "5" },
    ],
    featured: false,
    type: "research",
  },
  {
    id: 9,
    slug: "bemabespaar",
    coverImage: "/assets/projects/bemabespar.webp",
    figmaUxUrl: "https://www.figma.com/board/X9iwXY0dmA5XerBVbJHvzM/BeMaBespar--Copy-?node-id=0-1&p=f&t=5VvYAcqVsoVaY9Cn-0",
    figmaUiUrl: "https://www.figma.com/design/Q1fhz0Aw826qq0lBLDkiDK/BeMaBespar--Copy-?node-id=0-1&p=f&t=ZqX5xUYT68ORoawz-0",
    title: "BeMaBespaar — UX Redesign for Trust",
    subtitle: "Lead UX Designer & Mentor · Design Thinking · Digital Agency · Real Project",
    tags: ["Design Thinking", "UX Redesign", "Trust UX", "Design System", "Research"],
    year: "2025",
    overview:
      "Digital agency specializing in UI/UX, e-commerce, and SEO. A 6-week Design Thinking redesign to rebuild user trust and conversion — supervised student team on a live client project.",
    challenge:
      "Users lacked sufficient trust signals to engage with the agency's services. The existing experience failed to communicate credibility, leading to high drop-off. The redesign needed to address trust barriers while creating a scalable design system for future growth.",
    impact:
      "Delivered a comprehensive UX overhaul: full design system, style guide, component library, and high-fidelity UI. Qualitative and quantitative research validated design decisions. Real client project — not a student exercise — executed with a supervised student team.",
    approach:
      "6-week Design Thinking sprint: (1) Brief analysis & research planning; (2) Questionnaire, interviews & desk research; (3) Competitive analysis, pattern discovery & affinity mapping; (4) Persona, empathy map, task flows & feature definition; (5) Moodboard, benchmark, style guide & wireframes; (6) Component building, UI design & final handoff.",
    takeaway:
      "Trust is a design system problem — it must be embedded across every touchpoint, not added as a visual afterthought. Real-world constraints (client expectations, timelines) sharpened the Design Thinking process rather than limiting it. Supervising students on a live project is itself a research methodology.",
    stats: [
      { label: "Process Duration", value: "6 Weeks" },
      { label: "Research Methods", value: "4" },
      { label: "Design Phases", value: "5" },
      { label: "Team", value: "Student + Real Client" },
    ],
    featured: false,
    type: "work",
  },
  {
    id: 10,
    slug: "fontnegar",
    coverImage: "/assets/projects/fontnegar.webp",
    figmaUxUrl: "https://www.figma.com/board/iWHcABo2RcrCobhboKdV6h/Fontnegar-Project?t=hp8pxHhGfMUBGnjS-0",
    figmaUiUrl: "https://www.figma.com/design/pYnfxIulz0brUKOYkqhM5u/Fontnegar-Project?t=RmiIWRhV0uhT5Gfd-0",
    title: "Fontnegar — Persian Font Discovery Platform",
    subtitle: "Lead Product Designer · UX Research · Double Diamond · Platform Design",
    tags: ["Platform UX", "Double Diamond", "Typography", "Persian Design", "Design System"],
    year: "2025",
    overview:
      "Specialized platform for searching, comparing, and selecting Persian fonts. Research question: how can UX design transform fragmented font discovery into a fast, trustworthy, and professional experience?",
    challenge:
      "Persian-language designers were lost across scattered, poorly designed font sites. Research revealed that users don't just want to find a 'beautiful font' — their core need is trust, control, and saved time. The redesign had to shift focus from 'displaying fonts' to 'guiding intelligent choice.'",
    impact:
      "17 task flows covering every buyer journey. Full design system with typography hierarchy, color and component library. Key pages: Home, Font Lab (live testing environment), Font Details (comparison + licensing), Community, Educational content, and Quick Install Guide.",
    approach:
      "Double Diamond methodology: (1) Discover — interviews, questionnaires, desk research, competitive analysis of MyFonts and local alternatives; (2) Define — empathy maps, affinity diagram, user journey map, Impact–Effort Matrix for feature prioritization; (3) Develop — personas, task flows, wireframes, style guide; (4) Deliver — component library, high-fidelity UI across 7 core pages.",
    takeaway:
      "Users don't search for fonts — they search for confidence. Every friction point (unclear licensing, no live preview, no community) is a trust failure. Designing a typography platform is itself an exercise in typographic craft: the medium must embody the message.",
    stats: [
      { label: "Task Flows Designed", value: "17" },
      { label: "Core Pages", value: "7" },
      { label: "Research Methods", value: "5" },
      { label: "Methodology", value: "Double Diamond" },
    ],
    featured: true,
    type: "work",
  },
  {
    id: 11,
    slug: "gulfgate",
    coverImage: "/assets/projects/ggt.webp",
    figmaUxUrl: "https://www.figma.com/board/fZpmNq4GJLWwm4wJpQ8iyv/GGT-Ux?node-id=0-1&t=YfL2r3iisrueh6Ox-1",
    figmaUiUrl: "https://www.figma.com/design/cW65ZiFtbOENQTVbLQ0klM/GGT-Ui?node-id=113-27&t=aY4UEWvRi1ghMhFR-1",
    title: "GulfGate — Immigration UX Platform",
    subtitle: "Lead UX Designer · Legal Tech · Trust Architecture · Migration Platform",
    tags: ["Legal Tech", "Trust UX", "Information Architecture", "JTBD", "Atomic Design"],
    year: "2025",
    overview:
      "Digital platform transforming the immigration process into a legally-backed system for Switzerland, Germany, and Oman. Research question: how can UX architecture convert immigration uncertainty into measurable user trust?",
    challenge:
      "Over 50% of target users found existing online sources contradictory and untrustworthy. Traditional immigration consulting lacked cost transparency, legal credibility signals, and unified case-tracking — making high-stakes decisions stressful and abandonment-prone. Users felt treated as sales targets, not people with legitimate fears.",
    impact:
      "Delivered end-to-end UX system covering 5 core pages and 3 critical conversion flows. Defined two market-differentiating Value Propositions absent in all analyzed competitors: immigration cost calculator (financial transparency) and embassy interview simulator (confidence building). Atomic Design system established for scalable development. 3-step assessment flow and frictionless booking reduce decision barriers for high-intent users.",
    approach:
      "User-Centered Design: (1) Stakeholder interviews aligning business revenue goals with user needs; (2) JTBD analysis + 8-user depth interviews via Google Meet; (3) Quantitative questionnaire confirming >50% source distrust at scale; (4) Competitive analysis mapping self-service tool gaps; (5) Affinity diagram → 4 core themes; (6) 3 personas — Barbad (investor, fears hidden costs), Sara (needs dedicated support), Nastaran (journey mapping) + Empathy Maps + User Journey Maps; (7) Storyboard, Task Flows, Site Map; (8) Low-fidelity wireframes → Yekan Bakh Style Guide → Atomic Design system → High-fidelity UI.",
    takeaway:
      "Trust in immigration services is an information architecture problem — users need cost transparency, eligibility clarity, and step-by-step guidance before they engage with any provider. Self-service tools (cost calculator, interview simulator) are not features: they are trust infrastructure. Designing for high-stakes decisions requires emotional precision: every CTA placement must map to a specific user fear.",
    stats: [
      { label: "Users Interviewed", value: "8" },
      { label: "Target Markets", value: "3" },
      { label: "Core Pages Designed", value: "5" },
      { label: "Key Task Flows", value: "3" },
    ],
    featured: true,
    type: "work",
  },
  {
    id: 12,
    slug: "taaghche-redesign",
    figmaUxUrl: "https://www.figma.com/board/3WYEl3q5IVqxSOx9DltFB8/Quadteam1-Taghche?node-id=0-1&p=f&t=zfGBS0kyGgwD3u9n-0",
    figmaUiUrl: "https://www.figma.com/design/9SVqaxtsb5wMk7ECYXIaDD/Quadteam1-Taghche?node-id=214-133&p=f&t=lZaml55YIeDrJS7j-0",
    title: "Taaghche Redesign — Solving the Unfinished Books Problem",
    subtitle: "Research Mentor & Co-Researcher · Social UX · Gamification · Mobile App Redesign",
    tags: ["Social UX", "Gamification", "Mobile Redesign", "Design Thinking", "Reading Engagement"],
    year: "2024",
    overview:
      "Taaghche faced a critical drop-off problem: users abandoned books mid-read. Research question: how can social and motivational UX transform solitary digital reading into a persistent, community-driven experience?",
    challenge:
      "Four root causes identified: no structured reading plan, no social interaction or sense of companionship, no external motivation or reward system, and difficulty returning to abandoned books. The existing comments section was ineffective and the app offered no sense of belonging to a reading community.",
    impact:
      "UX: Reading transformed from a solitary activity into a collective journey. Book Club with three tabs (Challenges, Study Room, Co-Reading) embedded motivation and social accountability into the core experience — users now have a reason to return beyond the book itself. UI: Brand visual identity preserved while adding an interactive language: progress bars, challenge cards, and achievement badges made progress tangible. Restructured navigation simplified access to core features and increased coherence across screens. Result: Taaghche didn't just become more beautiful — it became more human.",
    approach:
      "Design Thinking: (1) Empathy — deep user interviews surfacing loneliness and lack of progress feedback as core pain points; (2) Define — correlation diagram revealing users return when they feel personal progress or social interaction; (3) Competitive analysis of 5 apps (Kobo, Goodreads, Audible, Bookmate, Fidibo) — Goodreads highest social engagement but weakest UX; (4) Ideation — brainstorming and mind mapping; (5) 3 personas + user scenarios; (6) Task flows, site map, wireframes; (7) Visual identity and bottom navigation redesign.",
    takeaway:
      "Reading persists when it is seen. Social visibility is the primary motivational mechanism in digital reading — reframing the design problem from 'how do we make the app stickier' to 'how do we make progress meaningful to others.' Gamification works only when the social layer is genuine, not performative. Good design does not end with a more beautiful product: it ends with changed user behavior. This project proved that loneliness is a product problem, and belonging is a design solution.",
    stats: [
      { label: "Apps Analyzed", value: "5" },
      { label: "Team Size", value: "5" },
      { label: "New Social Features", value: "3" },
      { label: "Root Causes Identified", value: "4" },
    ],
    featured: false,
    type: "research",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const workProjects = projects.filter((p) => p.type === "work");
export const researchProjects = projects.filter((p) => p.type === "research");
