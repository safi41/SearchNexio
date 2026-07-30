/* Content for the AI Search Optimization Services hub page. Copy verbatim
   from the client's final copy doc. Compliance: no em dashes, illustrative
   data labelled, no invented figures, "10+ years of SEO experience / 50+ SEO
   projects" phrasing. Cross-links use real routes for pages we've built and
   placeholders for pages that do not exist yet. */

/* Routes for cross-linking (real where the page exists, placeholder = "#"). */
export const ROUTES = {
  seo: "#", // /services/ — not built yet
  geo: "/generative-engine-optimization/", // built
  aeo: "#", // /services/aeo/ — not built yet
  audit: "#visibility-review", // in-page form anchor
  technicalSeo: "#", // /services/technical-seo/ — not built yet
  enterpriseSeo: "#", // /services/enterprise-seo/ — not built yet
  about: "#", // /about/ — not built yet
  contact: "#", // /contact/ — not built yet
  privacy: "#", // /privacy-policy/
  localSeo: "/services/local-seo-services/", // built (sibling)
};

export const AISEARCH_HERO = {
  eyebrow: "AI search visibility",
  title: "AI Search Optimization Services",
  intro:
    "Your buyers use AI tools to research vendors, compare options and build shortlists before they reach your website. Search Nexio strengthens the technical, content and authority signals that improve how your brand is discovered, cited and considered across Google AI Overviews, ChatGPT, Gemini and Perplexity.",
  primaryCta: { label: "Request an AI Visibility Review", href: "#visibility-review" },
  secondaryCta: { label: "See How It Works", href: "#ai-process" },
  trust: ["10+ years of SEO experience", "50+ SEO projects", "Mid-market and enterprise focus"],
};

/* Build visibility across AI search: the buyer journey. */
export const AI_JOURNEY = [
  { step: "Research", desc: "A buyer uses an AI assistant to build an initial shortlist.", platforms: ["ChatGPT", "Gemini"] },
  { step: "Compare", desc: "They read a Google AI Overview for context on the options.", platforms: ["Google AI", "Perplexity"] },
  { step: "Validate", desc: "They return to search to validate the companies they are considering.", platforms: ["Google AI", "ChatGPT"] },
  { step: "Contact", desc: "They visit two or three websites before making contact.", platforms: ["Website"] },
];

/* Traditional SEO vs AI search optimization comparison. */
export const AI_COMPARISON = {
  cols: ["Traditional SEO", "AI search optimization"],
  rows: [
    ["Focuses on rankings and organic visits", "Focuses on mentions, citations and consideration"],
    ["Targets search result pages", "Covers search results and generated answers"],
    ["Measures rankings, clicks and conversions", "Measures visibility, citations, referrals and demand"],
    ["Optimizes pages and technical signals", "Connects website, entity and external authority signals"],
  ],
};

/* The three AI search services. */
export const AI_SERVICES = [
  {
    key: "geo",
    name: "Generative Engine Optimization Services",
    outcome:
      "Improve the signals supporting brand visibility, citations and recommendations across ChatGPT, Gemini, Perplexity, Claude and Microsoft Copilot.",
    bullets: ["Commercial prompt research and citation source analysis", "Entity clarification and comparison content", "Third-party authority development"],
    link: { label: "Explore Generative Engine Optimization Services", href: ROUTES.geo },
  },
  {
    key: "aeo",
    name: "Answer Engine Optimization Services",
    outcome:
      "Improve how clearly your content addresses the questions buyers ask during research and evaluation.",
    bullets: ["Google AI Overview opportunities and answer-focused content", "Comparison pages and internal linking", "Supporting evidence and expert review"],
    link: { label: "Explore Answer Engine Optimization Services", href: ROUTES.aeo },
  },
  {
    key: "audit",
    name: "AI Visibility Audit",
    outcome:
      "Establish a measurable starting point across priority platforms, commercial prompts and selected competitors.",
    bullets: ["Brand mentions, citations and recommendation frequency", "Source domains and brand accuracy", "The gaps that should be addressed first"],
    link: { label: "Start with an AI Visibility Audit", href: ROUTES.audit },
  },
];

/* What the work covers: five interactive delivery components. */
export const WORK_COVERS = [
  {
    key: "technical",
    title: "Technical search readiness",
    desc: "Crawlability, indexation, rendering, canonicals, internal linking, site architecture, structured data accuracy and content accessibility. Deeper technical implementation connects with our Technical SEO services.",
    points: ["Crawlability and indexation", "Rendering and canonicals", "Site architecture and internal linking", "Structured data accuracy"],
    link: { label: "Technical SEO services", href: ROUTES.technicalSeo },
  },
  {
    key: "content",
    title: "Content optimization",
    desc: "Buyer questions, commercial comparisons, use cases, expert review, original evidence and improvements to existing service pages.",
    points: ["Buyer questions and comparisons", "Use cases and evidence", "Expert review", "Service-page improvements"],
    link: null,
  },
  {
    key: "entity",
    title: "Entity and brand clarity",
    desc: "Consistent organization, service, product, expert and location information across owned and relevant external sources.",
    points: ["Organization and service data", "Product and expert profiles", "Location information", "Consistent external sources"],
    link: null,
  },
  {
    key: "authority",
    title: "Authority and citations",
    desc: "Digital PR, industry publications, expert contributions, relevant directories, reviews and unlinked brand mention reclamation.",
    points: ["Digital PR and publications", "Expert contributions", "Directories and reviews", "Unlinked mention reclamation"],
    link: null,
  },
  {
    key: "monitoring",
    title: "Visibility monitoring",
    desc: "Representative prompt groups, platform comparisons, citations, competitor presence, referral traffic and qualified demand where attribution is available.",
    points: ["Representative prompt groups", "Platform comparisons", "Competitor presence", "Referral traffic and demand"],
    link: null,
  },
];

/* Platforms. */
export const AI_PLATFORMS = [
  { name: "Google AI search", desc: "Assess visibility across Google AI Overviews and AI Mode, including the pages and sources supporting generated answers." },
  { name: "ChatGPT", desc: "Track brand mentions, vendor recommendations, citations and the accuracy of company descriptions." },
  { name: "Gemini", desc: "Evaluate brand representation and supporting sources across Google-connected AI experiences." },
  { name: "Perplexity", desc: "Monitor citations, commercial research prompts and competitor visibility." },
  { name: "Claude and Microsoft Copilot", desc: "Assess visibility where these platforms are relevant to the target market and buying audience." },
];

/* Process. */
export const AI_PROCESS = [
  { index: "01", name: "Benchmark", body: "Identify priority topics, commercial prompts, competitors, cited sources and the current visibility baseline." },
  { index: "02", name: "Prioritize", body: "Rank technical, content, entity and authority gaps by commercial relevance, dependency and implementation effort." },
  { index: "03", name: "Implement", body: "Complete the agreed work or collaborate with internal SEO, content, development, PR and analytics teams." },
  { index: "04", name: "Measure", body: "Track visibility changes, competitor movement, AI-referred traffic and business impact where reliable attribution is available." },
];

/* What you receive. */
export const AI_DELIVERABLES = [
  "AI visibility benchmark",
  "Commercial prompt library",
  "Competitor visibility analysis",
  "Citation source analysis",
  "Technical readiness findings",
  "Content opportunity map",
  "Entity and brand gap analysis",
  "Prioritized implementation roadmap",
  "Completed work record",
  "Monthly visibility report",
  "Executive summary",
];

/* Six core metrics. */
export const AI_METRICS = [
  "Brand mention rate",
  "Citation rate",
  "Recommendation frequency",
  "AI share of voice",
  "Brand accuracy",
  "AI-referred demand",
];

/* Why choose. First three are large stat cards. */
export const AI_WHY = [
  { title: "Experienced search leadership", desc: "More than 10 years of SEO experience across technical, content and authority-led search programs. This foundation supports AI search execution without treating generative visibility as a system of shortcuts disconnected from how search actually works." },
  { title: "Broad project experience", desc: "Our experience spans more than 50 SEO projects across different business models, markets and search challenges. These are not presented as AI-specific engagements. They provide the technical and strategic foundation the service is built on." },
  { title: "Search and AI under one strategy", desc: "We connect AI visibility work with the technical SEO, content and external authority required to support search performance across both traditional and AI-powered surfaces. Neither is treated as separate from the other." },
  { title: "Enterprise collaboration", desc: "We work with internal SEO, content, development, analytics, PR and compliance teams through documented priorities and clear ownership at each stage." },
  { title: "Human-reviewed execution", desc: "Research tools support analysis, but recommendations, content and implementation decisions are reviewed by experienced specialists before delivery." },
  { title: "Transparent reporting", desc: "We separate mentions, citations, referrals, organic traffic and business outcomes instead of presenting every AI appearance as a commercial result." },
];

/* Industries. */
export const AI_INDUSTRIES = [
  { name: "B2B SaaS", desc: "Support visibility across product comparisons, alternatives, use cases, integrations and vendor shortlists." },
  { name: "Healthcare", desc: "Improve service clarity, expert representation, location relationships and factual consistency across high-trust search journeys." },
  { name: "Financial and professional services", desc: "Strengthen the authority and accuracy supporting advisor, firm and service comparisons." },
  { name: "Multi-location brands", desc: "Align parent-brand, location and service information across local and AI-driven search." },
  { name: "Enterprise websites", desc: "Coordinate AI search implementation across large websites, multiple teams and complex approval processes." },
];

/* Ways to work with us. */
export const AI_ENGAGEMENTS = [
  { bestFor: "No reliable benchmark yet", title: "Start with an AI visibility audit", desc: "Establish the baseline, compare competitors and receive a prioritized roadmap before committing to implementation. The recommended starting point when no reliable benchmark exists.", next: { label: "Start with an AI Visibility Audit", href: ROUTES.audit } },
  { bestFor: "A defined visibility challenge", title: "Choose a focused GEO or AEO program", desc: "Address a defined visibility challenge through Generative Engine Optimization or Answer Engine Optimization with clear deliverables and documented ownership.", next: { label: "Explore GEO or AEO", href: ROUTES.geo } },
  { bestFor: "Ongoing, cross-platform growth", title: "Build an ongoing AI search program", desc: "Combine implementation, monitoring and strategic refinement across priority platforms, products and markets. Pricing depends on the service mix, number of platforms, markets and implementation requirements.", next: { label: "Discuss your program", href: ROUTES.contact } },
];

/* Limitations. */
export const AI_LIMITATIONS = {
  intro: "No agency controls the answers generated by Google, ChatGPT, Gemini, Perplexity or other third-party platforms. AI search optimization can improve the technical, content and authority conditions supporting visibility. It cannot guarantee that a particular platform will cite or recommend a company for a specific prompt.",
  outro: "Clients should expect differences between platforms, changes between repeated tests and gradual movement rather than permanent placements. Traditional SEO remains foundational. Search Nexio reports what changed, what can be measured and where uncertainty remains.",
};

/* FAQs. */
export const AI_FAQS = [
  { q: "What are AI search optimization services?", a: "AI search optimization services improve how a brand is discovered, interpreted, cited and considered across AI-driven search experiences. The work can include Generative Engine Optimization, Answer Engine Optimization, technical SEO, content optimization, entity clarity, external authority and visibility measurement across platforms including Google AI Overviews, ChatGPT, Gemini and Perplexity." },
  { q: "How does AI search optimization differ from SEO?", a: "Traditional SEO focuses on organic rankings, clicks and conversions. AI search optimization extends that work to generated answers, brand mentions, citations, recommendations and prompt-level visibility. The two disciplines share the same technical and authority foundations. Strong SEO is a prerequisite for effective AI search visibility, not a separate consideration." },
  { q: "What is the difference between GEO and AEO?", a: "Generative Engine Optimization focuses on brand visibility, citations and recommendations across generative platforms such as ChatGPT, Gemini and Perplexity. Answer Engine Optimization focuses on making content easier to retrieve and surface within direct-answer experiences including Google AI Overviews and AI Mode. Both sit within a broader AI search strategy." },
  { q: "Which platforms do you optimize for?", a: "Platform coverage can include Google AI Overviews, Google AI Mode, ChatGPT, Gemini, Perplexity, Claude and Microsoft Copilot. The final selection depends on where your customers research, compare and validate providers." },
  { q: "How do you measure AI search visibility?", a: "We use structured prompt groups, repeated platform testing and competitor comparisons. Measurement can include mentions, citations, recommendation frequency, share of voice, referral traffic and qualified leads where attribution is available. A single AI response is never presented as a permanent result." },
  { q: "Can AI citations be guaranteed?", a: "No agency can guarantee a specific AI-generated answer. Search Nexio improves the conditions supporting visibility and measures how brand presence changes over time across the platforms included in the engagement." },
  { q: "How long does AI search optimization take?", a: "The timeline depends on the technical starting point, content depth, competition, external authority and speed of implementation. Some changes produce early signals within weeks. Consistent, competitive visibility across priority prompts generally requires three to six months of structured work." },
  { q: "How much do the services cost?", a: "Pricing depends on the selected service, number of platforms, markets, products, prompt groups and implementation requirements. Every engagement is scoped after the initial visibility review." },
  { q: "Can you work with our existing SEO team?", a: "Yes. Search Nexio can provide the specialist AI search layer while working with internal SEO, content, development, PR and analytics teams through documented responsibilities and shared reporting." },
];
