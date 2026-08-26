/* Crypto SEO Services page copy. Wording is the client's final PDF copy,
   unchanged. Verified-result placeholders are intentional: nothing on this
   page may present an invented figure, client name or case study. */

/* Link targets. Pages that do not exist yet stay inert ("#") so the static
   export produces no broken links. */
export const C_ROUTES = {
  audit: "#visibility-review",
  process: "#crypto-process",
  geo: "/generative-engine-optimization/",
  aiSearch: "/ai-search-optimization-services/",
  localSeo: "/services/local-seo-services/",
  contact: "/contact/",
  results: "#crypto-results",
  caseStudies: "/case-studies/",
  saasSeo: "/b2b-saas-seo-agency/",
  /* not built yet */
  technicalSeo: "#",
  aeo: "#",
  aiVisibilityAudit: "#",
  privacy: "#",
  bookCall: "#",
};

export const CRYPTO_HERO = {
  eyebrow: "Crypto SEO Company",
  /* H1 is locked by the brief: keep exactly "Crypto SEO Services". */
  title: "Crypto SEO Services",
  intro:
    "Turn high-intent crypto searches into users, demos and qualified demand. SearchNexio builds SEO programs for exchanges, DeFi protocols, wallets, Web3 platforms and blockchain companies across Google and AI search.",
  primaryCta: { label: "Request a Crypto SEO Review", href: C_ROUTES.audit },
  secondaryCta: { label: "View Crypto SEO Results", href: C_ROUTES.results },
  /* Trust bar, verbatim from the brief. */
  chips: [
    { title: "10+ Years", sub: "SEO Experience", icon: "chart" },
    { title: "Crypto + Web3", sub: "Specialist Focus", icon: "target" },
    { title: "Google + AI Search", sub: "Visibility", icon: "search" },
    { title: "Human-Reviewed", sub: "Strategy and Delivery", icon: "shield" },
  ],
  /* Six orbit nodes: the crypto platforms and assets this page's buyers
     actually research. Brand marks in each project's own colour. */
  orbit: [
    { title: "Ethereum", sub: "staking, gas and protocol searches", icon: "ethereum" },
    { title: "Coinbase", sub: "exchange and fiat on-ramp searches", icon: "coinbase" },
    { title: "Binance", sub: "exchange comparison and fee searches", icon: "binance" },
    { title: "Tether", sub: "stablecoin and on-ramp searches", icon: "tether" },
    { title: "Solana", sub: "chain, DEX and ecosystem searches", icon: "solana" },
    { title: "Ledger", sub: "wallet, custody and security searches", icon: "ledger" },
  ],

};

/* Search Should Drive Qualified Demand. */
export const QUALIFIED_DEMAND = {
  title: "Crypto SEO That Drives Qualified Growth",
  paras: [
    "Traffic only matters when it reaches the people your business needs.",
    "SearchNexio builds crypto SEO strategies around commercial searches that lead to account registrations, demos, wallet connections, funded accounts and other measurable acquisition events. Rankings are a means to an end. The end is users.",
  ],
};

/* AurumFSG.de case study. Client confirmed permission to publish the name
   and these figures. Every number here is the client's own verified result;
   nothing is estimated or rounded up. */
export const AURUM_PROOF = {
  title: "AurumFSG.de: 10x More Leads & 2x Organic Traffic in 2 Months",
  meta: "Crypto Financial Services | Germany",
  stats: [
    { value: "10x", label: "Increase in Leads" },
    { value: "2x", label: "Organic Traffic" },
    { value: "2 Months", label: "Timeframe" },
  ],
  body: "AurumFSG.de needed stronger visibility for competitive crypto service searches. SearchNexio improved the site's technical SEO, service-page targeting, internal linking, content strategy and multilingual search structure. Within two months, organic traffic doubled and lead volume increased by 10x.",
  /* The brief asks for a verified GSC or GA4 graph here. Until the client
     supplies one, the slot states plainly that it is pending rather than
     showing an invented chart. */
  graphPending:
    "A verified Google Search Console or GA4 performance graph is added here before go-live.",
};

/* The three CTA banners the brief places after the industry section, the
   four-step process and pricing. Copy verbatim. */
export const CRYPTO_BANNERS = {
  opportunity: {
    eyebrow: "Crypto search opportunity",
    title: "Not Sure Which Search Market Is Worth Prioritizing?",
    body: "We will map the commercial queries, technical gaps and competitors that matter for your product before recommending a full SEO program.",
    primaryCta: { label: "Request a Crypto SEO Review", href: C_ROUTES.audit },
    secondaryCta: { label: "Book a Strategy Call", href: C_ROUTES.bookCall },
  },
  visibility: {
    eyebrow: "Visibility review",
    title: "Find the Search Demand Your Competitors Are Capturing",
    body: "We review where your company appears today, which commercial searches you are missing and what we would prioritize first.",
    primaryCta: { label: "Request a Crypto SEO Review", href: C_ROUTES.audit },
    secondaryCta: { label: "Contact Us", href: C_ROUTES.contact },
  },
  pricing: {
    eyebrow: "Pricing & scope",
    title: "Need a Multi-Market or Enterprise SEO Plan?",
    body: "Tell us your product, markets and growth targets. We will recommend the scope that makes commercial sense before work begins.",
    primaryCta: { label: "Book a Strategy Call", href: C_ROUTES.bookCall },
    secondaryCta: { label: "Request a Crypto SEO Review", href: C_ROUTES.audit },
  },
};

/* Proof-before-promises banner, verbatim. */
export const PROOF_BANNER = {
  eyebrow: "Proof before promises",
  title: "See the Work Behind the Results",
  body: "Review SearchNexio case studies and the strategies used to turn organic visibility into qualified demand.",
  primaryCta: { label: "View Case Studies", href: C_ROUTES.caseStudies },
  secondaryCta: { label: "Book a Strategy Call", href: C_ROUTES.bookCall },
};

/* Founder insight. Editorial commentary, not a testimonial. */
export const FOUNDER_INSIGHT = {
  eyebrow: "Founder insight",
  quote:
    "Crypto SEO often operates in YMYL territory. When content influences financial decisions, Google expects a much higher level of trust, expertise and accuracy. That is why crypto SEO has to build authority around both the topic and the brand, not just optimize keywords.",
  name: "Hunain Lakhani",
  role: "Founder, SearchNexio",
};

/* How Crypto Customers Search: four stages, each with an example query. */
export const CRYPTO_SEARCH_STAGES = {
  intro:
    "The most common keyword mistake in crypto is building a search strategy around how the team describes the product rather than how prospective users describe the problem they need to solve. Blockchain terminology, internal project names, and tokenomics language can fill a keyword list without a single term a real user is actually typing.",
  stages: [
    {
      name: "Problems and use cases",
      query: "fix Koinly transactions",
      desc: "Users search for what they want to accomplish, not for what the product is called. Fix Koinly transactions. Crypto tax help. Stablecoin payment API. Blockchain analytics for compliance. The gap between product vocabulary and user intent language is often where the most valuable organic acquisition sits.",
    },
    {
      name: "Products and services",
      query: "crypto tax accountant",
      desc: "Product-selection searches sit close to conversion. Crypto tax accountant. Crypto reconciliation service. Best hardware wallet for long-term storage. A user typing these has already decided they need something and is now evaluating options.",
    },
    {
      name: "Comparisons and alternatives",
      query: "best crypto tax software",
      desc: "Best crypto tax software. Koinly alternatives. Crypto exchange with lowest fees. These searches happen when a user is actively comparing options. Appearing in them means being in the consideration set at the moment the decision is made.",
    },
    {
      name: "Brand and trust searches",
      query: "[brand] reviews",
      desc: "After discovering a crypto product, many users search the brand before committing, whether that means connecting a wallet, depositing funds, or sharing financial data. Brand reviews, brand safe, brand scam, founder name. These branded research searches are part of the acquisition funnel, not a vanity metric. What appears in those results affects conversion.",
    },
  ],
};

/* Why Crypto SEO Is Different: four text-led cards. */
export const CRYPTO_DIFFERENT_INTRO =
  "Crypto SEO shares the same foundations as our broader SEO services. The websites, search behavior and trust requirements are different in ways that matter.";

/* Four cards in a 2x2 grid. Each carries a problem statement and its own
   supporting bullets. The brief states no decorative icons are required. */
export const CRYPTO_DIFFERENT = [
  {
    title: "Crypto Websites Are Technically Complex",
    desc: "Most crypto products rely on JavaScript-heavy interfaces, documentation portals, apps, subdomains and programmatic pages that create specific crawlability and indexation problems.",
    bullets: [
      "Important pages hidden behind JavaScript rendering",
      "Marketing sites separated from apps and documentation",
      "Domain authority split across multiple subdomains",
      "Hundreds or thousands of token and trading-pair pages without a clear SEO strategy",
      "Weak internal linking between commercial content and documentation",
      "Duplicate or low-value programmatic pages",
      "Poor indexation of high-intent service pages",
    ],
    close:
      "We identify which technical issues are actually limiting organic visibility and prioritize them by commercial impact, not by how many items appear on an audit spreadsheet.",
  },
  {
    title: "Paid Advertising Is Restricted Across Many Crypto Categories",
    desc: "Google Ads applies specific eligibility, certification and market requirements to cryptocurrency advertising. Certain exchanges, wallets and regulated products may be eligible in approved jurisdictions, while initial coin offerings, DeFi trading protocols and some other crypto-related offers remain prohibited or tightly restricted under Google Ads policy.",
    close:
      "That makes organic search especially valuable for crypto companies that cannot depend on paid acquisition at scale. SEO builds an owned acquisition channel that can continue bringing qualified demand without paying for every click.",
    note: "Google Ads cryptocurrency policies change by product and market. Verify the current policy before publishing or updating this section.",
  },
  {
    title: "Trust Directly Affects Conversion",
    desc: "A user considering an exchange, wallet or protocol does not convert on first impression. Before creating an account, depositing funds or connecting a wallet, they research your company. They search:",
    bullets: [
      "[brand] reviews",
      "is [brand] safe",
      "[brand] fees",
      "[brand] scam",
      "[brand] alternatives",
    ],
    close:
      "Ranking for non-branded keywords gets you discovered. What users find when they research your brand helps determine whether they convert. Both surfaces need to be managed deliberately.",
  },
  {
    title: "Search Demand Changes Quickly",
    desc: "Crypto terminology moves fast. New protocols, chains, narratives, regulations and product categories can create search demand almost overnight. Pages that performed well a year ago may now rank for outdated searches or contain information that no longer reflects the product.",
    close:
      "We review keyword opportunities and commercially important content continuously rather than treating SEO as a one-time publishing exercise.",
  },
];

/* What Our Crypto SEO Includes: ten services, sticky-nav list. */
export const CRYPTO_SERVICES_INTRO =
  "SearchNexio combines technical SEO, content, authority and measurement into one acquisition-focused program. Every activity connects back to a defined keyword gap or acquisition opportunity.";

/* Eight services, in the brief's order. Diagram keys map to the existing
   service diagrams in CryptoMid. */
export const CRYPTO_SERVICES: {
  key: string;
  diagram: string;
  title: string;
  desc: string;
  bullets?: string[];
  deliverable?: string;
  limit?: string;
  link: { label: string; href: string } | null;
  link2?: { label: string; href: string } | null;
}[] = [
  {
    key: "keyword",
    diagram: "intent",
    title: "Crypto Keyword Strategy",
    desc: "The searches that produce registrations, demos and wallet connections are not always the searches with the highest volume. We identify what your buyers search before they know your brand, including category searches, product comparisons, alternative searches, problem-based queries and branded evaluation searches, then evaluate each against intent, commercial value, competition and the page required to rank.",
    deliverable:
      "The goal is not a large keyword spreadsheet. The goal is a prioritized list of searches capable of producing users.",
    link: null,
  },
  {
    key: "technical",
    diagram: "crawl",
    title: "Technical Crypto SEO",
    desc: "Crypto websites create technical challenges that general SEO audits often miss. A JavaScript-heavy DeFi interface behaves differently in Google's crawler than a standard content site. A documentation subdomain can fragment authority. Programmatic trading-pair pages can create thin-content problems at scale.",
    bullets: [
      "JavaScript crawlability and rendering",
      "Indexation of high-intent commercial pages",
      "Subdomain architecture and authority consolidation",
      "App versus marketing-site structure",
      "Documentation portal integration",
      "Programmatic and token page strategy",
      "Canonical tags and duplicate content",
      "Internal linking between content and commercial pages",
      "Structured data",
      "International SEO",
      "Core Web Vitals",
    ],
    deliverable:
      "Recommendations are prioritized by commercial impact, not by how many issues appear on an audit list.",
    link: null,
  },
  {
    key: "content",
    diagram: "workflow",
    title: "Crypto Content Strategy",
    desc: "Crypto buyers research heavily before making decisions. Exchange comparisons, wallet security guides, staking explainers, DeFi protocol overviews and alternatives pages all represent acquisition opportunities, provided they are built around the actual searches buyers use rather than what the company wants to publish.",
    bullets: [
      "Exchange and wallet comparison pages",
      "Protocol guides and use-case content",
      "Staking and yield content",
      "Token and trading-pair pages",
      "Security resources",
      "Integration and developer guides",
      "Alternatives pages",
      "Regulatory resources",
      "Industry-specific landing pages",
    ],
    deliverable:
      "Existing content is reviewed for accuracy, search intent and commercial relevance. Crypto content becomes outdated quickly. A page that still ranks but contains incorrect information can damage both visibility and trust.",
    link: null,
  },
  {
    key: "optimization",
    diagram: "coverage",
    title: "Content Optimization",
    desc: "Publishing more content is not always the right answer. We identify pages that already carry authority but underperform because of search-intent mismatch, weak topical coverage, poor heading structure, cannibalization, thin internal linking or outdated information.",
    deliverable:
      "Improving an existing page often produces results faster than publishing another article from scratch.",
    link: null,
  },
  {
    key: "authority",
    diagram: "authority",
    title: "Authority Building",
    desc: "Competitive crypto searches require external authority. We identify and build toward relevant opportunities across crypto publications, blockchain media, fintech and technology press, industry directories, research organizations and developer communities.",
    deliverable:
      "We focus on relevant mentions and citations that can strengthen organic credibility and support visibility across search surfaces. We do not sell bulk link packages or guarantee placements in publications we do not control.",
    link: null,
  },
  {
    key: "ai",
    diagram: "entity",
    title: "AI Search Visibility",
    desc: "Crypto research also happens outside traditional Google results. Users ask ChatGPT, Perplexity, Gemini and Google AI systems questions such as: What are the safest crypto exchanges? What are the best DeFi lending protocols? Which wallets support the most chains? What are the best alternatives to a given competitor?",
    deliverable:
      "We assess whether your company appears in those answers and identify the content, entity and authority gaps limiting AI visibility. For brands that need a wider AI-search program, our AI SEO services, GEO services and AEO services address those search surfaces in more depth.",
    link: { label: "Start with an AI Visibility Audit", href: C_ROUTES.aiVisibilityAudit },
  },
  {
    key: "branded",
    diagram: "serp",
    title: "Branded Search Management",
    desc: "Ranking for category keywords gets you discovered. Branded search helps determine whether you convert. We review what prospective users find when they search your company name, product, founders, reviews, fees, security and trust-related queries.",
    deliverable:
      "Where gaps exist, we build the content and authority strategy around information your company can legitimately influence.",
    link: null,
  },
  {
    key: "tracking",
    diagram: "attribution",
    title: "Acquisition Tracking",
    desc: "Organic traffic should connect to business outcomes. We configure analytics to track account registrations, demo bookings, contact requests, wallet connections, depositing accounts, product sign-ups and other conversion events relevant to your product.",
    deliverable:
      "Reporting focuses on what organic search is producing for the business, not impressions and session counts.",
    link: null,
  },
];

/* Crypto SEO Results. Both cards hold until verified data exists. */
export const CRYPTO_RESULTS = {
  title: "Crypto SEO Results",
  cards: [
    {
      label: "Crypto tax growth",
      heading: "Case study available on request",
      body: "Challenge, strategy, verified result, timeframe and measurement method are shared during scoping.",
    },
    {
      label: "Crypto reconciliation growth",
      heading: "Case study available on request",
      body: "One strong verified case study is more credible than two vague ones. This section is held until real proof exists.",
    },
  ],
};

/* Who We Help: six audience cards. */
export const CRYPTO_AUDIENCES_INTRO =
  "SearchNexio works across crypto, Web3, blockchain, fintech and related financial technology markets. Each category has a different search landscape, buyer journey and trust requirement, so the SEO strategy has to match how that market is actually researched.";

/* Eight markets, in the brief's order. The visual brief calls for a 2x4
   grid on desktop. */
export const CRYPTO_AUDIENCES: {
  name: string;
  desc: string;
  query?: string;
  link?: { label: string; href: string };
}[] = [
  {
    name: "Crypto Exchanges",
    desc: "Exchange SEO focuses on the searches that lead to funded accounts: trading-pair pages, cryptocurrency price pages, exchange comparison searches, fee-related queries, fiat on-ramp searches, country-specific searches and branded trust queries. We build visibility for the searches most closely connected to registration and deposit activity.",
  },
  {
    name: "DeFi and Web3 Protocols",
    desc: "DeFi users often discover products while researching a problem or category before they have selected a specific protocol. Search opportunities span lending, borrowing, staking, yield, DEXs, liquidity, bridges and Layer 2 comparisons. We build visibility before the user has already chosen a competitor.",
  },
  {
    name: "Crypto Wallets and Custody",
    desc: "Wallet buyers compare products heavily before making a decision. Search strategy covers wallet comparisons, security resources, supported assets, hardware versus software comparisons, staking support, network compatibility, fees and competitor alternatives. The objective is to appear in the consideration stage, not only for brand-aware searches.",
  },
  {
    name: "Blockchain Infrastructure and Developer Tools",
    desc: "Developer-focused products require a different SEO strategy. The acquisition surface is different: API documentation, integration guides, technical tutorials, infrastructure comparisons and chain-specific developer content. Your documentation is part of your acquisition strategy. We treat it that way.",
  },
  {
    name: "Crypto SaaS and Compliance Platforms",
    desc: "Crypto software companies often sell to sophisticated B2B buyers who conduct systematic vendor evaluation. We build visibility around use cases, product categories, software comparisons, competitor alternatives, integrations and problem-based searches, with the objective of appearing before buyers finalize their shortlist.",
    link: { label: "SaaS SEO services", href: C_ROUTES.saasSeo },
  },
  {
    name: "Fintech and Crypto Payment Platforms",
    desc: "Fintech and crypto payment products compete around high-intent searches for payments, on-ramps, off-ramps, cards, cross-border transfers, custody and business use cases. We map the searches that sit closest to adoption and build the technical, content and authority signals needed to compete in high-trust financial SERPs.",
  },
  {
    name: "Crypto Tax, Accounting and Financial Services",
    desc: "Crypto tax firms, reconciliation providers and specialist financial services compete on high-trust searches where expertise and credibility matter as much as keyword relevance. Our AurumFSG.de work is one example of this market. For firms that also depend on city or regional demand, our local SEO services can support the location layer without mixing local intent into national crypto service pages.",
    link: { label: "local SEO services", href: C_ROUTES.localSeo },
  },
  {
    name: "NFT and Digital Asset Platforms",
    desc: "Search demand for NFT products varies heavily by market cycle and product type. We evaluate whether meaningful commercial search demand exists before recommending a large content investment. If the demand is not there, we say so.",
  },
];

/* Built for Crypto Trust: four numbered workflow cards. */
export const CRYPTO_TRUST = [
  {
    title: "Clear authorship",
    desc: "Crypto content about tax, financial processes, or security carries more weight when readers can identify who produced it and on what basis. Named authors with relevant experience and clear organizational affiliation matter both for the user evaluating a company and for the search systems that assess content quality in financial categories.",
  },
  {
    title: "Review workflows",
    desc: "Content with financially consequential claims may require specialist review depending on the claim type, the audience, and the client's compliance environment. We build that review step into the workflow with the client's qualified team, not around it. We do not provide independent financial or tax review.",
  },
  {
    title: "Credible sourcing",
    desc: "Crypto content that cites primary regulatory guidance, official product documentation, or recognized data providers is more credible than content that repeats conventional wisdom without a verifiable basis. We build sourcing practices into the content workflow from the brief stage.",
  },
  {
    title: "Content freshness",
    desc: "Tax guidance, product functionality, fees, integrations, and regulatory frameworks change in crypto faster than most industries. We identify the commercially important pages where outdated information creates acquisition risk and build a maintenance schedule into the strategy rather than treating publication as the endpoint.",
  },
];

/* What You Receive: twelve deliverables, documented scope of work. */
export const CRYPTO_DELIVERABLES_INTRO = [
  "Every SearchNexio crypto SEO engagement includes a defined set of outputs. Scope is confirmed before any work begins.",
  "You leave every month knowing what was done, what changed, what produced results and what happens next.",
];

export const CRYPTO_DELIVERABLES = [
  { title: "Keyword Map", desc: "Priority searches grouped by buyer intent, commercial value, competition and page requirement." },
  { title: "Technical SEO Audit", desc: "Prioritized review of crawlability, indexation, architecture, JavaScript rendering, internal linking, structured data and technical issues specific to your site's structure." },
  { title: "Content Roadmap", desc: "Existing pages to improve, new pages to build and the commercial opportunity behind each recommendation." },
  { title: "Content Briefs", desc: "SEO briefs covering intent, entities, topical requirements, internal links and conversion goals." },
  { title: "Authority Plan", desc: "Relevant publications, directories, partnerships and third-party citation opportunities." },
  { title: "Branded Search Assessment", desc: "A review of what prospective users find when they research your brand." },
  { title: "AI Visibility Assessment", desc: "Where included, analysis of how your company currently appears across ChatGPT, Perplexity, Gemini and Google AI results." },
  { title: "Acquisition Tracking", desc: "Analytics configuration connecting SEO activity to the conversion events that matter to your business." },
  { title: "Monthly Reporting", desc: "Rankings, qualified organic traffic, conversions, completed work and next priorities." },
];

/* Our Crypto SEO Process. */
export const CRYPTO_PROCESS = [
  { index: "01", name: "Map", body: "We establish your current organic position: rankings, traffic, technical condition, competitor visibility, commercial keyword gaps, content gaps, authority gaps and AI visibility where relevant. We identify where competitors are capturing demand your company could realistically compete for." },
  { index: "02", name: "Fix", body: "We address the technical and content problems that are limiting organic visibility. High-impact issues are resolved before low-value housekeeping tasks. A page that cannot be crawled and indexed cannot rank regardless of how well the content is written." },
  { index: "03", name: "Amplify", body: "We build the pages, content and authority required to expand visibility for the high-value commercial searches your buyers use. Every activity connects back to a defined keyword or acquisition opportunity." },
  { index: "04", name: "Prove", body: "We track whether improved visibility translates into qualified traffic, registrations, leads, wallet connections, deposits and revenue. If rankings improve but acquisition does not, we investigate why before asking you to continue." },
];

export const CRYPTO_PROCESS_CTA = {
  heading: "How visible is your crypto business in the searches your prospective users are making?",
  body: "The crypto SEO audit maps your current position, where competitors own the demand you should have, and which gaps should be addressed first.",
  cta: { label: "Request a Crypto SEO Audit", href: C_ROUTES.audit },
};

/* How We Measure Growth: eight metrics in two groups. */
export const CRYPTO_METRICS = {
  intro: "Rankings matter, but they are not the final metric. We track:",
  items: [
    { name: "Priority keyword visibility", desc: "Are you gaining positions for searches directly connected to your product and acquisition goals?", group: "visibility" },
    { name: "Qualified organic traffic", desc: "Is organic search sending visitors who match your target customer profile?", group: "visibility" },
    { name: "Organic conversions", desc: "Registrations, leads, demo requests, wallet connections, depositing accounts and transactions where attribution is available.", group: "acquisition" },
    { name: "Branded search growth", desc: "Are more people actively researching your company after discovering it through organic channels?", group: "visibility" },
    { name: "Revenue impact", desc: "Where reliable attribution exists, we connect organic acquisition to downstream revenue figures.", group: "acquisition" },
    { name: "AI visibility", desc: "When AI search is included in the engagement, we monitor whether the brand appears for relevant category and recommendation prompts across tracked platforms.", group: "visibility" },
  ],
  note: "We are transparent about what cannot be measured. On-chain conversions, wallet connections and actions within authenticated product experiences often create attribution gaps that honest reporting needs to acknowledge.",
};

/* Why Choose Search Nexio: six proof points. */
export const CRYPTO_WHY = [
  {
    title: "Proven Crypto SEO Results",
    desc: "For AurumFSG.de, focused SEO work delivered 10x more leads and 2x organic traffic within two months. We focus on measurable acquisition outcomes, not SEO activity for its own sake.",
    links: [{ label: "View Case Studies", href: C_ROUTES.caseStudies }],
  },
  {
    title: "10+ Years of SEO Experience",
    desc: "SearchNexio combines long-term SEO experience with an understanding of how crypto products, websites and buyers behave differently from traditional businesses. That means our recommendations account for how crypto websites are actually built and how crypto buyers actually search.",
  },
  {
    title: "Technical Crypto Knowledge",
    desc: "We understand structures specific to crypto products: JavaScript applications, documentation subdomains, trading-pair pages, token pages, programmatic SEO at scale, multilingual crypto sites and the separation between app and marketing site. Recommendations reflect how the product actually works, not how a standard website would behave.",
  },
  {
    title: "Commercial Search Focus",
    desc: "We prioritize the searches that lead to users, demos, registrations and revenue. Traffic without commercial relevance is not the goal.",
  },
  {
    title: "Google and AI Search",
    desc: "Traditional SEO remains the foundation. We also account for how crypto brands are discovered and evaluated through ChatGPT, Perplexity, Gemini and Google AI Overviews.",
  },
  {
    title: "Human-Reviewed Work",
    desc: "Strategy, audits, briefs and recommendations are reviewed by an experienced member of the SearchNexio team before delivery. We use technology to improve efficiency. We do not use it to replace judgment.",
    links: [{ label: "View our case studies", href: C_ROUTES.caseStudies }],
  },
];

/* Engagement options. */
export const CRYPTO_PRICING_INTRO = [
  "Crypto SEO scope varies significantly. A focused Web3 protocol does not require the same program as a global exchange operating across multiple markets and languages.",
  "Pricing depends on website size, product type, target countries, number of languages, competition, technical complexity, content requirements, authority requirements, reporting infrastructure and internal team capabilities.",
];

export const CRYPTO_ENGAGEMENTS = [
  {
    title: "Crypto Growth",
    forWho: "Early-stage and growth-stage projects",
    desc: "For crypto products focused on one primary product category and market. Covers keyword strategy, technical SEO, content roadmap, content optimization, authority strategy and monthly reporting.",
    price: "$2,000 to $4,000 per month",
    priceNote: "Most single-market programs, depending on scope and competition.",
    highlight: false,
  },
  {
    title: "Multi-Market Crypto SEO",
    forWho: "Established products expanding into new geographies",
    desc: "For companies operating across several countries or languages. Adds international site architecture, hreflang implementation, market-specific keyword research, localized content strategy and country-level competitor analysis.",
    price: "Scoped by market",
    priceNote: "Pricing reflects the number of markets and languages in scope.",
    highlight: true,
  },
  {
    title: "Enterprise Crypto SEO",
    forWho: "Exchanges, major protocols and infrastructure companies",
    desc: "For exchanges, major protocols, infrastructure companies and crypto organizations with internal marketing teams. We work alongside developers, content teams, product marketers, PR teams and growth teams.",
    price: "Contact us",
    priceNote: "Scope and pricing are confirmed before any work begins.",
    highlight: false,
  },
];

export const CRYPTO_ENGAGEMENT_NOTE =
  "Scope and pricing depend on: website architecture, number of products and markets, technical state, content requirements, competition, authority position, and reporting infrastructure. Scope and price are confirmed before any work begins.";

/* What SEO Cannot Guarantee. */
export const CRYPTO_LIMITATIONS = [
  "Search Nexio cannot guarantee a specific ranking position. Rankings are determined by Google and influenced by competition, algorithm changes, and many factors outside an agency's control.",
  "We cannot guarantee a specific number of users, signups, deposits, or funded accounts. Organic acquisition depends on search demand, market competitiveness, product quality, pricing, and the trust environment.",
  "We cannot guarantee Google Maps placement, AI system citations, ChatGPT mentions, or Perplexity inclusions for any crypto business.",
  "Competition in crypto search is real. Markets, regulations, and search behavior change. We adapt the strategy when evidence points to a better approach and report honestly when progress is slower than expected.",
];

/* FAQs. */
export const CRYPTO_FAQS = [
  {
    q: "What are crypto SEO services?",
    a: "Crypto SEO services help cryptocurrency, blockchain and Web3 companies improve visibility in organic search. The work covers keyword strategy, technical SEO, content, authority building, branded search management, conversion tracking and AI search visibility, built around the commercial searches that produce users and revenue rather than traffic alone.",
  },
  {
    q: "Why is crypto SEO different from regular SEO?",
    a: "The fundamentals are the same. The execution differs because crypto websites often involve JavaScript-heavy products, documentation portals, programmatic pages and subdomain structures that create specific crawlability challenges. Crypto search behavior also evolves quickly, and trust signals can have a direct effect on conversion.",
  },
  {
    q: "Can you do SEO for crypto exchanges?",
    a: "Yes. Exchange SEO covers trading-pair pages, category searches, comparison keywords, fee-related searches, country-specific searches and branded trust queries. The objective is to connect SEO visibility with registrations and funded accounts.",
  },
  {
    q: "Can you do SEO for DeFi protocols?",
    a: "Yes. DeFi SEO targets category, comparison, educational and protocol-related searches across lending, staking, liquidity, DEXs, bridges and other DeFi use cases. The focus is on reaching buyers before they have already chosen a competitor.",
  },
  {
    q: "Do you provide Web3 SEO?",
    a: "Yes. SearchNexio works across crypto, blockchain and Web3 search strategies including consumer-facing products, infrastructure platforms and B2B crypto software.",
  },
  {
    q: "Do you optimize for ChatGPT and AI search?",
    a: "Yes. Where relevant, we assess and improve visibility across ChatGPT, Perplexity, Gemini and Google AI Overviews alongside traditional Google SEO. AI visibility is an additional discovery surface, not a replacement for strong organic foundations.",
  },
  {
    q: "How long does crypto SEO take?",
    a: "Timelines depend on current authority, technical condition, competition and target keywords. Technical improvements can produce early movement. Competitive commercial keywords require sustained content, technical and authority work. We establish realistic expectations after reviewing the site and search landscape, not before.",
  },
  {
    q: "How much do crypto SEO services cost?",
    a: "Single-market crypto SEO programs start from $2,000 per month. Final pricing depends on the product, website complexity, target markets, competition and required scope. We provide a defined scope and price after the initial review. If the expected outcome does not justify the investment, we say so.",
  },
  {
    q: "Can you guarantee Google rankings?",
    a: "No credible SEO company can guarantee a specific Google ranking. We improve the technical, content and authority signals that influence organic performance and measure whether those improvements translate into qualified acquisition.",
  },
];

/* Final review section. */
export const CRYPTO_FINAL = {
  title: "Start Your Crypto SEO Review",
  paras: [
    "Your buyers are already searching for exchanges, protocols, wallets and crypto products like yours. The question is whether they find you or your competitors.",
    "We review where your company appears today, which commercial searches you are missing and what we would prioritize first.",
  ],
  primaryCta: { label: "Request a Crypto SEO Review", href: C_ROUTES.audit },
  secondaryCta: { label: "Book a Call", href: C_ROUTES.bookCall },
  submit: "Request a Crypto SEO Review",
  privacy:
    "We use your details only to prepare and discuss your crypto SEO review.",
};
