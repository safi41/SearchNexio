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
  /* not built yet */
  technicalSeo: "#",
  aeo: "#",
  privacy: "#",
  bookCall: "#",
};

export const CRYPTO_HERO = {
  eyebrow: "Crypto search growth",
  title: "Crypto SEO Services",
  intro:
    "Search Nexio helps crypto, blockchain and Web3 businesses connect their products and services with the searches their prospective users are already making, then measure what those users do after they find you.",
  primaryCta: { label: "Request a Crypto SEO Audit", href: C_ROUTES.audit },
  secondaryCta: { label: "See How We Work", href: C_ROUTES.process },
  trust:
    "Built on direct experience in crypto tax, transaction reconciliation and other high-trust crypto service businesses.",
  /* Hero trust chips. Each states something the page can stand behind. */
  chips: [
    { title: "High trust content", sub: "Sourced and reviewed", icon: "shield" },
    { title: "Commercial intent", sub: "Not volume alone", icon: "target" },
    { title: "Technical depth", sub: "dApps and docs portals", icon: "code" },
    { title: "Tracked acquisition", sub: "Events, not just traffic", icon: "chart" },
  ],
  /* The four orbit nodes of the crypto acquisition loop, clockwise from
     the top. Reflects this page's own journey: a user searches a problem,
     compares options, checks the brand, then converts. */
  orbit: [
    { title: "Users search", sub: "problems, products and comparisons", icon: "search" },
    { title: "They evaluate", sub: "your product and service pages", icon: "compare" },
    { title: "Qualified acquisition", sub: "consultations, trials and signups", icon: "trend" },
    { title: "They check the brand", sub: "reviews, founders and coverage", icon: "verify" },
  ],
};

/* Search Should Drive Qualified Demand. */
export const QUALIFIED_DEMAND = {
  title: "Search Should Drive Qualified Demand",
  paras: [
    "Rankings and traffic are useful diagnostic signals. The outcome that actually matters depends on the business: a consultation request for a crypto tax firm, a product trial for a crypto SaaS company, a funded account for an exchange, a qualified B2B conversation for a blockchain infrastructure provider.",
    "Search Nexio builds organic search strategies around the acquisition actions specific to each business model. Crypto SEO that produces traffic without producing qualified users is not a working acquisition channel.",
  ],
  /* Results snapshot card. Holds until a verified result is supplied. */
  snapshot: {
    label: "Results snapshot",
    heading: "Verified result available on request",
    body: "Client type, challenge, the three actions taken, the verified result, timeframe and measurement method are shared during scoping.",
    note: "Only confirmed figures are published.",
  },
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
export const CRYPTO_DIFFERENT = [
  {
    title: "Trust matters",
    desc: "Crypto users arrive with more skepticism than most consumer software categories because the market has given them reasons to be skeptical. Discoverability is not enough. What users find when they search your brand, founders, and product has to be as credible as what brought them there in the first place.",
  },
  {
    title: "Financial accuracy matters",
    desc: "Crypto content covering tax, trading, investing, security, and yield affects real financial decisions. Content in these areas carries a higher standard for accuracy, clear authorship, credible sourcing, and freshness than general software content, and that standard is built into how we approach every financially consequential page.",
  },
  {
    title: "Search intent moves quickly",
    desc: "Crypto product categories and terminology change faster than most industries, but the evergreen commercial searches, service intent, product comparison, high-intent tax and compliance queries, are more stable. We prioritize based on what produces qualified acquisition, not what generates impressions at a point in time.",
  },
  {
    title: "Reputation matters",
    desc: "Organic search touches the acquisition funnel in two places: it drives initial discovery, and it determines what users see when they conduct due diligence afterward. A search strategy that ignores the branded research environment is missing half the conversion problem.",
  },
];

/* What Our Crypto SEO Includes: ten services, sticky-nav list. */
export const CRYPTO_SERVICES = [
  {
    key: "strategy",
    diagram: "intent",
    title: "Crypto search strategy",
    desc: "We research the specific searches prospective users make in your product category, problem-based queries, service intent, comparison terms, branded research, and competitor demand, then map them to pages by intent stage and commercial proximity to acquisition.",
    deliverable:
      "A crypto search opportunity map with priority queries, page assignments, and prioritization rationale.",
    link: null,
  },
  {
    key: "content",
    diagram: "workflow",
    title: "High trust content SEO",
    desc: "Content covering tax treatment, financial processes, security practices, or product accuracy claims requires clear authorship, appropriate sourcing, human review before publication, and a maintenance process for pages where information changes. We build that workflow into the content strategy rather than treating publication as the endpoint.",
    limit:
      "We do not provide financial, tax, or legal advice. Where specialist review is appropriate, we coordinate it with the client's qualified team.",
    link: null,
  },
  {
    key: "pages",
    diagram: "coverage",
    title: "Product and service pages",
    desc: "The pages closest to conversion are usually not the high-traffic educational articles. They are the product and service pages a user lands on when evaluating specific options. We audit existing commercial pages for search visibility, content quality, and conversion effectiveness, and build new pages where gaps in coverage create acquisition risk.",
    link: null,
  },
  {
    key: "technical",
    title: "Technical crypto SEO",
    desc: "JavaScript-heavy products, dApps, documentation portals, programmatic asset pages, app subdomains, and large-scale trading-pair page architectures all create indexation and crawlability problems that generic SEO strategies do not address. We audit the technical foundation with attention to the issues specific to crypto websites.",
    link: { label: "Technical SEO services", href: C_ROUTES.technicalSeo },
    diagram: "crawl",
  },
  {
    key: "authority",
    diagram: "authority",
    title: "Crypto authority building",
    desc: "Authority in this category is earned through relevant editorial coverage, original research, founder and expert commentary, digital PR, and third-party reference sources that carry credibility in the specific sub-category.",
    limit:
      "We do not promise backlink volumes or guaranteed placements in named publications.",
    link: null,
  },
  {
    key: "branded",
    diagram: "serp",
    title: "Branded search reputation",
    desc: "We assess what appears when users search the brand name, founder names, and product safety terms, then identify and address the gaps in owned content, third-party coverage, and business information that are within the organization's control.",
    limit:
      "We do not promise reputation suppression or removal of legitimate negative coverage.",
    link: null,
  },
  {
    key: "international",
    diagram: "markets",
    title: "International crypto SEO",
    desc: "We research search demand by market, structure international site architecture around the search strategy, and implement hreflang, language targeting, and market-specific landing pages for businesses operating across several countries.",
    limit:
      "We do not provide regulatory or legal advice about where a crypto product may operate.",
    link: null,
  },
  {
    key: "conversion",
    diagram: "friction",
    title: "Conversion optimization",
    desc: "We review the experience a prospective user has after arriving from a search: whether the page addresses the search intent, how visible the next action is, whether the onboarding path creates unnecessary friction, and whether the trust signals available support the conversion decision.",
    link: null,
  },
  {
    key: "tracking",
    diagram: "attribution",
    title: "Acquisition tracking",
    desc: "We connect organic sessions to the conversion events that matter for the specific business model, consultations, demos, signups, registrations, funded accounts where attribution is reliable, then report on those events alongside the visibility data. We are explicit about what cannot be reliably tracked and where attribution gaps exist.",
    link: null,
  },
  {
    key: "ai",
    diagram: "entity",
    title: "AI assisted crypto discovery",
    desc: "Crypto users increasingly research products through AI-assisted tools alongside traditional search. For AI systems to represent a crypto business accurately, entity signals need to be clear: what the company does, what the product offers, who the founders are, and how authoritative third-party sources describe the business. We assess current AI representation and address structural gaps.",
    limit: "We do not guarantee AI recommendations.",
    link: { label: "AI SEO services", href: C_ROUTES.aiSearch },
    link2: { label: "GEO services", href: C_ROUTES.geo },
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
export const CRYPTO_AUDIENCES = [
  {
    name: "Crypto tax firms",
    desc: "Crypto tax service businesses compete for high-intent service searches where a user is actively looking to hire. The pages that convert are the ones that address the specific problem, complex transaction histories, multi-exchange reporting, DeFi tax treatment, with clear expertise and a straightforward path to a consultation. That is where Search Nexio's direct experience in this category is most relevant.",
  },
  {
    name: "Reconciliation and accounting",
    desc: "Transaction reconciliation and data repair services are found through problem-based searches: fix Koinly transactions, missing crypto cost basis, reconcile DeFi transactions. Building service pages and supporting content around those user-language queries, not around the technical description of the work, determines whether the business is found when those problems are being actively searched.",
    query: "fix Koinly transactions",
  },
  {
    name: "Exchanges and trading platforms",
    desc: "Exchange SEO involves programmatic page management at scale, financial content trust across high volumes of asset and trading-pair pages, and branded trust management for a product where users are considering entrusting significant funds. We are transparent that our strongest current proof is in crypto service businesses rather than consumer exchanges, and happy to discuss how the methodology applies to exchange challenges.",
  },
  {
    name: "Wallet and payment products",
    desc: "Wallet and crypto payment products compete in comparison-heavy environments. Visibility for comparison searches, use-case queries, and alternative searches is often more commercially valuable than ranking for the category name alone. Product pages built around what the user wants to accomplish, send USDC internationally, accept crypto payments on Shopify, convert better than pages built around technical specifications.",
    query: "accept crypto payments on Shopify",
  },
  {
    name: "DeFi and Web3 platforms",
    desc: "DeFi and Web3 businesses often write for the blockchain-native audience while missing the larger population of mainstream investors, compliance professionals, and enterprise buyers researching the product category through general search. Building organic visibility in this space requires understanding who actually searches for the product, not just who already uses it.",
  },
  {
    name: "Crypto SaaS and infrastructure",
    desc: "Blockchain analytics, developer tooling, compliance infrastructure, and API-based crypto services are evaluated by buyers who conduct systematic B2B research. Developer-intent queries, integration-specific terms, and comparison searches matter, and documentation that is internally linked to commercial pages and indexed correctly is often a significant untapped acquisition asset.",
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
export const CRYPTO_DELIVERABLES = [
  { title: "Crypto search opportunity map", desc: "Priority queries by intent stage, product area, and market, with page assignments and prioritization rationale." },
  { title: "Competitor visibility analysis", desc: "Where competitors appear for your priority product and service searches, and the signals that support their positions." },
  { title: "Technical SEO audit", desc: "Rendering, indexation, architecture, canonical structure, and the issues specific to crypto websites." },
  { title: "Commercial page roadmap", desc: "Which product and service pages have search demand without effective coverage, and the prioritized build and improvement plan." },
  { title: "Content opportunity map", desc: "Prioritized briefs with target intent, sourcing requirements, and authorship recommendations where applicable." },
  { title: "Authority roadmap", desc: "Specific publications, PR opportunities, and third-party reference sources relevant to your product category." },
  { title: "Branded search assessment", desc: "What appears for your brand and key associated searches, and the gaps within your control to address." },
  { title: "Conversion recommendations", desc: "Identified friction points in the signup, consultation, or onboarding path with specific changes." },
  { title: "Acquisition tracking plan", desc: "Analytics and event configuration for your business model, with explicit statement of attribution limitations." },
  { title: "International SEO recommendations", desc: "Market-specific search architecture and implementation plan for each priority geography where included." },
  { title: "Monthly performance report", desc: "Organic visibility for priority searches, acquisition events by source, branded search monitoring, and trend data." },
  { title: "AI discovery assessment", desc: "Where included, how AI systems currently represent the business and what structural improvements would support accurate representation." },
];

/* Our Crypto SEO Process. */
export const CRYPTO_PROCESS = [
  { index: "01", name: "Discover", body: "We begin by understanding the business model before reviewing a single keyword: how the product makes money, which user actions constitute meaningful acquisition, how the website architecture relates to the product structure, and where the most significant gaps exist between what prospective users search and what the website currently offers." },
  { index: "02", name: "Prioritize", body: "Technical problems that prevent content from being indexed come first. High-intent product and service pages with no search presence come next. Branded search improvements, authority building, and content creation follow in a sequence based on commercial impact and implementation practicality." },
  { index: "03", name: "Implement", body: "We execute agreed work in collaboration with whoever needs to be involved: developers for technical implementation, product leads for accuracy review, legal and compliance teams for regulated content. All account credentials remain with the client. Changes are documented as they are made." },
  { index: "04", name: "Measure", body: "Monthly reporting covers organic visibility for priority searches, acquisition events from organic sources, branded search performance, and authority development. When something is not producing expected results, we identify why and adjust before asking the client to continue." },
];

export const CRYPTO_PROCESS_CTA = {
  heading: "How visible is your crypto business in the searches your prospective users are making?",
  body: "The crypto SEO audit maps your current position, where competitors own the demand you should have, and which gaps should be addressed first.",
  cta: { label: "Request a Crypto SEO Audit", href: C_ROUTES.audit },
};

/* How We Measure Growth: eight metrics in two groups. */
export const CRYPTO_METRICS = {
  intro:
    "The right acquisition metrics depend on the business model. We do not apply a uniform measurement framework to every engagement.",
  items: [
    { name: "Qualified enquiries", desc: "Consultation and contact requests from organic sessions, mapped to the page that generated them.", group: "acquisition" },
    { name: "Demo and trial requests", desc: "For crypto SaaS and infrastructure, completed demo bookings and trial signups attributed to organic search.", group: "acquisition" },
    { name: "Product signups and registrations", desc: "Account creation events from organic sessions where architecture allows reliable attribution.", group: "acquisition" },
    { name: "Funded accounts", desc: "Where client analytics track deposit events, attributed funding actions from organic acquisition cohorts.", group: "acquisition" },
    { name: "Branded demand", desc: "Changes in branded search volume over time as an indicator of overall organic marketing effectiveness.", group: "visibility" },
    { name: "Priority search visibility", desc: "Ranking movement for the specific commercial queries most important to the business, tracked individually.", group: "visibility" },
    { name: "International market performance", desc: "Visibility and conversion metrics by country for multi-market businesses, reported separately.", group: "visibility" },
    { name: "Organic revenue", desc: "Where reliable CRM integration exists, revenue attributable to organic acquisition over the reporting period.", group: "visibility" },
  ],
  note: "We are transparent about what cannot be measured. On-chain conversions, wallet connections, and actions within authenticated product experiences often create attribution gaps that honest reporting needs to acknowledge.",
};

/* Why Choose Search Nexio: six proof points. */
export const CRYPTO_WHY = [
  {
    title: "Crypto SEO experience",
    desc: "Our strongest crypto experience is in the part of the market where standards are highest, crypto tax documentation and transaction reconciliation, where the buyer is entrusting a company with financial records or tax obligations. This required understanding how high-intent financially motivated searches behave, how YMYL content standards apply in crypto, and how trust signals affect conversion when users are cautious before committing.",
  },
  {
    title: "Commercial search strategy",
    desc: "Keyword decisions are built around the acquisition actions specific to each client's business model, not around search volume as a primary filter. The highest-volume crypto queries are often not the highest-value acquisition queries for most crypto businesses.",
  },
  {
    title: "High trust experience",
    desc: "Working with crypto tax and reconciliation clients means understanding what the branded search environment looks like for a high-trust financial service, what content standards apply to financially consequential pages, and how to build a search presence that supports the trust evaluation users conduct before committing financial data.",
  },
  {
    title: "Human reviewed execution",
    desc: "Research tools and AI-assisted analysis support opportunity identification and monitoring. Every recommendation and client deliverable is reviewed by an experienced member of the team before it is delivered. We do not publish unreviewed output on behalf of clients in financially sensitive categories.",
  },
  {
    title: "Cross team collaboration",
    desc: "Crypto SEO engagements regularly involve compliance teams reviewing content, legal advisers approving specific claims, product teams validating technical accuracy, and developers implementing structural changes. We work within those coordination requirements, producing documentation and specifications that each team can act on in their own workflow.",
  },
  {
    title: "Search beyond Google",
    desc: "Our dedicated AI search, GEO and AEO services address the full methodology for businesses where AI-assisted discovery is a strategic priority. The crypto SEO work on this page builds the entity clarity, content quality, and authoritative web presence that supports both traditional and AI-assisted discovery.",
    links: [
      { label: "AI SEO services", href: C_ROUTES.aiSearch },
      { label: "GEO services", href: C_ROUTES.geo },
    ],
  },
];

/* Engagement options. */
export const CRYPTO_ENGAGEMENTS = [
  {
    title: "Crypto growth",
    forWho: "Crypto service businesses",
    desc: "For crypto tax firms, reconciliation services, crypto SaaS businesses, and specialist crypto service providers. Covers commercial search strategy, product and service page optimization, branded search assessment, authority building, acquisition tracking, and monthly reporting tied to qualified acquisition events.",
    highlight: false,
  },
  {
    title: "Multi-market growth",
    forWho: "Several countries or languages",
    desc: "For businesses operating across several countries or language markets. Covers international search architecture, market-specific research, language targeting, and market-level performance tracking.",
    highlight: true,
  },
  {
    title: "Enterprise crypto SEO",
    forWho: "Internal marketing teams",
    desc: "For larger crypto businesses and fintech organizations with internal marketing teams that need a specialist SEO partner. We work within existing workflows, produce technical specifications and content briefs, and provide the specialist layer most in-house teams cannot maintain.",
    highlight: false,
    link: { label: "Contact us", href: C_ROUTES.contact },
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
  { q: "What are crypto SEO services", a: "Crypto SEO services are search optimization programs for cryptocurrency, blockchain, and Web3 businesses. They address the acquisition challenges specific to crypto: commercially oriented search strategy, high-trust financial content, branded due diligence management, technical SEO for complex crypto architectures, authority building in a category prone to low-quality link schemes, and acquisition tracking tied to signups, leads, or product actions rather than traffic alone." },
  { q: "Why is crypto SEO different", a: "Four things distinguish crypto SEO from standard commercial SEO. Trust affects conversion at a higher level than most software categories because users investigate carefully before connecting wallets or sharing financial data. Financial accuracy is required for content covering tax, trading, security, and investment. Branded search is a meaningful part of the acquisition funnel. And technical architecture in crypto, JavaScript products, dApps, programmatic pages, documentation portals, creates indexation challenges that generic strategies do not address." },
  { q: "How does crypto SEO drive users", a: "Organic search drives users by connecting the searches prospective users make, researching a problem, comparing products, conducting due diligence, with the pages that answer those searches well and make the next step clear. The chain from search to acquisition depends on visibility, content quality, trust signals, and a friction-free conversion path. SEO improves each of those without guaranteeing the outcome." },
  { q: "Do you work with crypto companies", a: "Yes. Our strongest current experience is in crypto tax documentation and transaction reconciliation. We work with specialist crypto service businesses where accuracy, YMYL content standards, and qualified lead acquisition are the primary requirements. We are transparent about where our experience is deepest." },
  { q: "Do you have crypto SEO experience", a: "Yes. Direct experience in crypto tax documentation and transaction reconciliation, the part of the market where search intent is most commercially specific and content standards are most demanding. This is the experience that informs how we approach every crypto SEO engagement." },
  { q: "Can you handle crypto tax SEO", a: "Yes, and it is the area of our strongest current crypto proof. We have built search visibility programs for crypto tax documentation and transaction reconciliation businesses, requiring understanding of high-intent service searches, YMYL content standards, and the trust signals that affect conversion for users sharing financial records. We do not provide tax advice." },
  { q: "Do you work with exchanges", a: "Our current proof is in service businesses rather than consumer exchanges. Exchange SEO involves programmatic page management at scale, financial content trust across large page sets, and branded trust management at a different complexity level. We are happy to discuss how the methodology applies to exchange-specific challenges and are transparent about where we are building from research rather than direct experience." },
  { q: "Can you manage international SEO", a: "Yes. We research search demand by market, structure international architecture to support market-specific visibility, and implement hreflang, language targeting, and localized commercial pages. We do not advise on where a crypto product may legally operate. Those determinations remain with the client and their legal advisers." },
  { q: "How do you handle crypto content", a: "Through a structured process: search research defines the intent, content briefs specify the audience and accuracy requirements, writers produce drafts, and content is reviewed by an experienced team member before publication. For financially consequential content, specialist review from the client's team is coordinated where appropriate. We do not produce AI-generated crypto content at scale." },
  { q: "How do you build crypto authority", a: "Through relevant editorial placements, original research, founder and expert commentary, digital PR, and third-party references that carry credibility in the specific sub-category. We do not promise backlink volumes, guaranteed placements in named publications, or DR improvements on a schedule." },
  { q: "Can SEO improve brand trust", a: "SEO can improve what is found when users search the brand name, founder names, or product safety terms: optimizing owned pages, earning relevant third-party coverage, and ensuring accurate business information across external references. We do not suppress legitimate negative coverage or guarantee reputation outcomes." },
  { q: "How do you measure acquisition", a: "Based on the specific conversion actions relevant to the business model: consultation requests, demo bookings, trial signups, registrations, or funded account attribution where the analytics infrastructure supports it. We are explicit about attribution gaps and what cannot be reliably tracked." },
  { q: "How long does crypto SEO take", a: "Depends on the starting visibility, competitiveness of the search category, technical state of the website, content and authority gap relative to ranking competitors, and implementation speed. Technical corrections can produce early indexation improvements within weeks. Competitive commercial searches in active crypto markets take three to six months of structured work. We set timelines based on the specific starting position." },
  { q: "How much does crypto SEO cost", a: "Pricing reflects scope: number of products and markets, technical state, content requirements, competitive intensity, and reporting infrastructure. We confirm scope and price after the initial audit. If the expected acquisition return does not justify the investment at the required scope, we say so." },
  { q: "Can you guarantee rankings", a: "No. We commit to improving the signals that affect rankings: content quality, technical health, authoritative external references, and commercial page relevance, and to measuring whether those improvements translate into qualified acquisition events." },
  { q: "Can crypto SEO support AI discovery", a: "SEO work that improves entity clarity, content accuracy, and authoritative web presence also supports how AI systems represent a crypto business in AI-assisted research contexts. Our dedicated AI SEO services and GEO services address the full methodology for businesses where AI visibility is a strategic priority. We do not guarantee AI-generated mentions." },
];

/* Final review section. */
export const CRYPTO_FINAL = {
  title: "Start Your Crypto SEO Review",
  body: "The initial crypto SEO review assesses where the business currently appears across the searches that matter for qualified acquisition, where competitors own the commercial demand, and which technical, content, authority, and branded search gaps should be prioritized first.",
  primaryCta: { label: "Request a Crypto SEO Audit", href: C_ROUTES.audit },
  secondaryCta: { label: "Book a Call", href: C_ROUTES.bookCall },
  submit: "Request My Crypto SEO Audit",
  privacy:
    "By submitting this form you agree that Search Nexio may use the information provided in accordance with the Privacy Policy.",
};
