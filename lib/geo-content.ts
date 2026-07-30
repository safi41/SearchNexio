/* Content for the Generative Engine Optimization Agency page. Copy is taken
   verbatim from the client's final copy document. Compliance rules honored:
   no em dashes, "10+ years of SEO experience" / "50+ SEO projects" only (not
   GEO), sample dashboard data is labelled illustrative, no guaranteed
   results, and internal cross-page links point to placeholders until those
   pages exist. */

export const GEO_HERO = {
  eyebrow: "Generative search visibility",
  title: "Generative Engine Optimization Agency",
  intro:
    "Your buyers use AI tools to compare providers, validate expertise and build shortlists before they reach your website. Search Nexio strengthens the content, entity and authority signals that can improve how your brand is understood, cited and considered across ChatGPT, Gemini, Perplexity, Claude and Microsoft Copilot.",
  primaryCta: { label: "Request an AI Visibility Audit", href: "#visibility-audit" },
  secondaryCta: { label: "See Our GEO Process", href: "#geo-process" },
  stats: [
    { value: "10+ years of SEO experience", note: "Technical, content and authority-led search experience." },
    { value: "50+ SEO projects", note: "Experience across markets, industries and search challenges." },
    { value: "Enterprise-ready execution", note: "Collaboration across SEO, content, development, PR and analytics." },
  ],
};

/* Build visibility: the buyer journey. */
export const BUYER_JOURNEY = [
  { step: "Ask", desc: "Buyers ask AI tools to identify vendors for their need." },
  { step: "Compare", desc: "They compare capabilities, evidence and third-party coverage." },
  { step: "Validate", desc: "They validate claims and expertise before reaching out." },
  { step: "Shortlist", desc: "They build a shortlist from what the answers surface." },
];

/* Google Trends interest values (illustrative, from the client's analysis). */
export const TRENDS = {
  caption:
    "Search Nexio analysis using Google Trends. United States, Web Search, January 1, 2022 to July 26, 2026. Values are normalized relative interest scores within this comparison, not absolute search volumes. Data source: Google Trends.",
  series: [
    { name: "ChatGPT", avg: 37, color: "#635BFF" },
    { name: "Gemini", avg: 10, color: "#8F7BFF" },
    { name: "Claude", avg: 5, color: "#4CC9F0" },
    { name: "SEO", avg: 4, color: "#9AA0AD" },
  ],
};

/* SEO vs AEO vs GEO comparison. */
export const COMPARISON = {
  cols: ["SEO", "AEO", "GEO"],
  rows: [
    [
      "Organic rankings, traffic and conversions",
      "Direct-answer and answer-led visibility",
      "Mentions, citations and recommendations",
    ],
    [
      "Search result pages",
      "AI Overviews, AI Mode and direct answers",
      "ChatGPT, Gemini, Perplexity, Claude and Copilot",
    ],
    [
      "Rankings, clicks and conversions",
      "Answer visibility and retrieval coverage",
      "Prompt visibility, source coverage and AI referrals",
    ],
  ],
};

/* The eight GEO services, each with a short analysis-panel detail. */
export const GEO_SERVICES = [
  {
    key: "audit",
    title: "AI visibility audit",
    summary:
      "The AI Visibility Audit benchmarks your current presence across selected platforms, commercial prompt groups and competitors. It identifies brand mentions, citations, inaccurate descriptions, source gaps and the highest-priority opportunities for implementation.",
    panel: ["Benchmark across selected platforms", "Commercial prompt groups", "Competitor comparison", "Prioritized opportunities"],
  },
  {
    key: "prompt",
    title: "Prompt opportunity research",
    summary:
      "We map the recommendation, comparison, alternative, use-case and category prompts connected to real buying decisions. Prompts are grouped by commercial value, platform relevance and buyer stage so the strategy is based on demand rather than a generic list of questions.",
    panel: ["Recommendation and comparison prompts", "Grouped by commercial value", "Platform relevance", "Buyer-stage mapping"],
  },
  {
    key: "citation",
    title: "Citation source analysis",
    summary:
      "We record the owned and third-party sources that appear around priority prompts. This can include publications, review sites, directories, comparison pages, expert profiles and relevant community discussions. The result is a source plan showing where stronger content or external validation may be required.",
    panel: ["Owned and third-party sources", "Publications and review sites", "Comparison and directory pages", "A source plan"],
  },
  {
    key: "technical",
    title: "Technical GEO readiness",
    summary:
      "We review crawlability, indexation, rendering, canonicals, internal linking, content accessibility and structured data accuracy. The assessment is limited to technical conditions relevant to generative visibility and connects with our Technical SEO Services when broader implementation is required. No individual technical tactic is presented as a guaranteed citation factor.",
    panel: ["Crawlability and indexation", "Rendering and canonicals", "Internal linking", "Structured data accuracy"],
  },
  {
    key: "content",
    title: "GEO content optimization",
    summary:
      "We improve service pages, product pages, comparisons, use cases and expert-led resources around the questions buyers ask during evaluation. Recommendations focus on clear facts, useful evidence, original insight and strong commercial relevance rather than automated content production.",
    panel: ["Service and product pages", "Comparisons and use cases", "Expert-led resources", "Clear facts and evidence"],
  },
  {
    key: "entity",
    title: "Entity and brand clarity",
    summary:
      "We align organization, product, service, expert, location and market information across your website and relevant external profiles. This reduces conflicting descriptions and supports clearer interpretation of who the business is, what it offers and where it operates.",
    panel: ["Organization and product data", "Service and expert profiles", "Location and market info", "Consistent external profiles"],
  },
  {
    key: "authority",
    title: "Authority and mention building",
    summary:
      "We strengthen credible third-party validation through editorial coverage, expert contributions, relevant directories, reviews, associations and research promotion. Where a wider outreach program is needed, the work can connect with our Digital PR Services. The objective is to earn accurate coverage in sources relevant to your market, not to manufacture mentions solely for AI visibility.",
    panel: ["Editorial coverage", "Expert contributions", "Relevant directories and reviews", "Research promotion"],
  },
  {
    key: "monitoring",
    title: "GEO visibility monitoring",
    summary:
      "We monitor representative prompt groups across selected platforms and compare changes against the starting baseline. Reporting can include mentions, citations, recommendation frequency, competitor share of voice, brand accuracy, source coverage, AI-referred sessions and qualified leads where attribution is available.",
    panel: ["Representative prompt groups", "Change vs baseline", "Competitor share of voice", "AI-referred sessions"],
  },
];

/* What you receive: deliverables. */
export const DELIVERABLES = [
  { title: "Generative visibility benchmark", desc: "A documented baseline across selected platforms, prompts and competitors." },
  { title: "Commercial prompt library", desc: "A prioritized set of recommendation, comparison and buyer-research prompts." },
  { title: "Competitor visibility analysis", desc: "A comparison of brands mentioned, cited or recommended for the same prompts." },
  { title: "Citation source report", desc: "The owned and third-party sources influencing generated responses." },
  { title: "Technical readiness findings", desc: "Prioritized issues connected to discovery, accessibility and interpretation." },
  { title: "GEO content roadmap", desc: "Existing pages to improve and missing commercial assets to develop." },
  { title: "Entity gap analysis", desc: "Inconsistencies across organization, product, service, expert and location information." },
  { title: "Authority development plan", desc: "Relevant publications, profiles and third-party credibility opportunities." },
  { title: "Implementation roadmap", desc: "A phased plan based on commercial relevance, dependencies and effort." },
  { title: "Monthly GEO report", desc: "Visibility movement, competitor changes, source coverage and next actions." },
];

/* Research areas assessed in the sample report. */
export const RESEARCH_AREAS = [
  { area: "Prompt coverage", assess: "Where the brand appears across commercial prompt groups" },
  { area: "Platform coverage", assess: "How visibility differs between selected AI platforms" },
  { area: "Competitor visibility", assess: "Which brands appear instead and in what context" },
  { area: "Citation sources", assess: "Which owned and external pages support generated responses" },
  { area: "Brand accuracy", assess: "Whether company, product and service information is correct" },
  { area: "Commercial impact", assess: "Referral traffic and qualified demand where measurable" },
];

/* Platforms optimized for. */
export const PLATFORMS = [
  { name: "ChatGPT", desc: "Monitor brand mentions, recommendations, competitor appearances, description accuracy and citations where available." },
  { name: "Google AI search", desc: "Assess relevant visibility across Google AI Overviews and AI Mode while keeping the deeper answer strategy within AEO." },
  { name: "Gemini", desc: "Evaluate brand representation, source coverage and commercial research visibility." },
  { name: "Perplexity", desc: "Analyze citations, source selection, comparisons and research-led buying journeys." },
  { name: "Claude and Copilot", desc: "Monitor visibility where these platforms are relevant to enterprise research and the client technology environment." },
];

/* GEO process. */
export const GEO_PROCESS = [
  { index: "01", name: "Benchmark", body: "We identify priority prompts, platforms, competitors, current visibility, citation sources and brand-description issues. The client receives a documented starting point before implementation begins." },
  { index: "02", name: "Prioritize", body: "We rank technical, content, entity and authority gaps according to commercial value, dependencies and implementation effort. This separates foundational problems from longer-term growth opportunities." },
  { index: "03", name: "Build", body: "Search Nexio completes the agreed work or collaborates with internal SEO, content, development, PR, analytics and compliance teams. Responsibilities and implementation status are documented through the Search Nexio methodology." },
  { index: "04", name: "Measure", body: "We track changes across platforms, prompt groups, competitors and source domains. Reporting connects visibility movement with referral traffic, leads and business outcomes where reliable attribution is available." },
];

/* Measurement metrics (illustrative). */
export const METRICS = [
  { title: "Brand mention rate", desc: "The percentage of monitored prompts where the brand appears." },
  { title: "Citation rate", desc: "How often a company-owned or relevant brand source is cited." },
  { title: "Recommendation frequency", desc: "How often the brand appears in vendor or service recommendations." },
  { title: "AI share of voice", desc: "The brand visibility compared with selected competitors." },
  { title: "Brand accuracy", desc: "How consistently platforms describe the company, products and services correctly." },
  { title: "Source coverage", desc: "The owned and third-party sources supporting generated responses." },
  { title: "AI-referred demand", desc: "Traffic, leads and pipeline contribution where attribution is reliable." },
];

/* Why choose Search Nexio. */
export const WHY_GEO = [
  { title: "10+ years of SEO experience", desc: "Search Nexio brings more than 10 years of SEO experience across technical, content and authority-led search programs. This foundation supports GEO execution without treating generative visibility as a separate system of shortcuts." },
  { title: "Experience across 50+ projects", desc: "Our experience spans more than 50 SEO projects across different industries, markets and search challenges. These are not presented as 50 GEO engagements. They provide the technical and strategic foundation behind the service." },
  { title: "Enterprise collaboration", desc: "We work with internal SEO, content, development, product marketing, PR, analytics, compliance and regional teams. Recommendations are organized around ownership, dependencies and approval requirements." },
  { title: "Human quality control", desc: "Research and automation tools can support analysis, but final recommendations, content and client-specific claims are reviewed by experienced specialists before delivery or publication." },
  { title: "Transparent reporting", desc: "We distinguish between mentions, citations, recommendations, referral traffic, organic performance and business outcomes. We also identify where attribution is incomplete rather than assigning unsupported value." },
];

/* Industries. */
export const GEO_INDUSTRIES = [
  { name: "B2B SaaS", desc: "Support visibility across software comparisons, alternatives, integrations, capabilities and vendor shortlists.", prompt: "Best alternatives to [software] for mid-market teams" },
  { name: "Healthcare", desc: "Improve how services, experts, locations and factual information are represented across high-trust research journeys.", prompt: "Trusted [specialty] providers near [location]" },
  { name: "Financial services", desc: "Strengthen the accuracy and authority supporting advisor, firm, platform and service comparisons.", prompt: "How to choose a [service] advisor for [need]" },
  { name: "Professional services", desc: "Clarify expertise, specialisms, reputation and market differentiation across generated answers.", prompt: "Top [service] firms specialising in [area]" },
  { name: "Enterprise websites", desc: "Coordinate GEO implementation across multiple products, markets, regional teams and approval processes.", prompt: "Enterprise [category] platforms compared" },
];

/* Engagement options. */
export const ENGAGEMENTS = [
  { title: "GEO implementation", desc: "A defined project covering agreed technical, content, entity and authority priorities. This is suited to organizations with a completed audit or a clearly defined initial scope." },
  { title: "Ongoing GEO growth", desc: "A recurring engagement combining implementation, authority development, visibility testing and reporting. This is suited to competitive categories where the prompt and source landscape changes over time." },
  { title: "Enterprise GEO program", desc: "A cross-functional program for larger websites, product portfolios, markets and stakeholder teams. Scope, governance and reporting are defined around the organization rather than a standard package." },
];

/* What GEO cannot guarantee. */
export const LIMITATIONS = [
  "Results can differ between platforms and repeated tests.",
  "Prompt wording, location and user context can affect responses.",
  "Structured data does not guarantee inclusion.",
  "Visibility does not always produce a website visit.",
  "Business attribution is limited when no identifiable referral occurs.",
  "Strong SEO foundations remain important.",
];

/* FAQs. */
export const GEO_FAQS = [
  { q: "What does a GEO agency do", a: "A GEO agency improves the conditions supporting brand mentions, citations and recommendations across generative platforms. The work can include prompt research, content optimization, technical SEO, entity clarity, external authority and visibility monitoring." },
  { q: "How does GEO differ from SEO", a: "SEO focuses mainly on organic rankings, clicks and conversions. GEO extends that foundation to generative answers, prompt-level visibility, source coverage and brand representation across AI platforms." },
  { q: "How does GEO differ from AEO", a: "GEO focuses on brand mentions, citations and recommendations across generative platforms. AEO focuses on direct-answer retrieval, Google AI Overviews, AI Mode and clear answer architecture. Both sit within a broader AI search strategy." },
  { q: "Which AI platforms do you optimize for", a: "Coverage can include ChatGPT, Gemini, Perplexity, Claude, Microsoft Copilot and relevant Google AI experiences. The final platform mix depends on customer behavior and commercial relevance." },
  { q: "How do you select GEO prompts", a: "Prompts are selected according to buyer intent, commercial value, product or service comparisons, category questions and competitor visibility. Prompt groups are reviewed with the client before ongoing measurement begins." },
  { q: "How do you measure GEO visibility", a: "We use structured prompt groups, repeated testing and competitor comparisons. Metrics can include mentions, citations, recommendations, share of voice, brand accuracy, source coverage and AI-referred demand." },
  { q: "Can GEO citations be guaranteed", a: "No. Search Nexio can strengthen the content, entity and authority signals supporting visibility, but third-party platforms control their own retrieval, responses and citation choices." },
  { q: "How long does GEO take", a: "Timelines depend on the technical foundation, content depth, external authority, market competition and speed of implementation. The initial audit identifies the baseline and which opportunities can be addressed first." },
  { q: "How much do GEO services cost", a: "Pricing depends on the platforms, markets, products, prompt groups and implementation requirements. The engagement is scoped after the initial visibility review." },
  { q: "Is GEO an ongoing service", a: "GEO can begin as a defined implementation project. Competitive visibility usually benefits from continued monitoring, content improvement and authority development." },
  { q: "Can you work with our SEO team", a: "Yes. Search Nexio can provide the specialist GEO layer while collaborating with internal SEO, content, development, PR, analytics and compliance teams." },
];
