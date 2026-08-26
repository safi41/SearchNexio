/* B2B SaaS SEO Agency page copy. Wording is the client's final PDF copy,
   unchanged. The results block is an intentional placeholder: the PDF's
   publishing note states no performance figures were invented because
   verified SaaS metrics were not supplied. Nothing here may present an
   invented figure, client name or case study. */

/* Link targets. The PDF's internal-link anchors are mapped to live routes
   where they exist; anything not built yet stays inert ("#") so the static
   export produces no broken links. */
export const S_ROUTES = {
  strategy: "#saas-strategy",
  results: "#saas-results",
  geo: "/generative-engine-optimization/",
  aiSearch: "/ai-search-optimization-services/",
  /* not built yet */
  keywordResearch: "#",
  productLedSeo: "#",
  technicalSeoSaas: "#",
  saasStrategy: "#",
  aeo: "#",
};

export const SAAS_HERO = {
  eyebrow: "B2B SaaS search growth",
  title: "B2B SaaS SEO Agency for Pipeline Growth",
  /* the indigo accent word, matched against the title */
  accent: "Pipeline Growth",
  intro:
    "Get found when SaaS buyers are comparing platforms, evaluating vendors and searching for a better way to solve a real problem. Search Nexio combines SEO and AI search optimization to turn high-intent visibility into demos, trials and qualified sales opportunities.",
  primaryCta: { label: "Get Your SaaS SEO Strategy", href: S_ROUTES.strategy },
  secondaryCta: { label: "See Our Results", href: S_ROUTES.results },
  /* Hero chips. Each states something the page copy stands behind. */
  chips: [
    { title: "Buyer intent first", sub: "Not volume alone", icon: "target" },
    { title: "Product-led pages", sub: "Features and use cases", icon: "layers" },
    { title: "Google and AI search", sub: "One discovery strategy", icon: "sparkle" },
    { title: "Pipeline attribution", sub: "Trials, demos, SQLs", icon: "funnel" },
  ],
  /* Five orbit nodes: the B2B SaaS platforms this page's buyers evaluate
     and compare. Brand marks in each product's own colour, with Salesforce
     at the hub. */
  orbit: [
    { title: "HubSpot", sub: "category and comparison searches", icon: "hubspot" },
    { title: "Slack", sub: "integration and use-case searches", icon: "slack" },
    { title: "Stripe", sub: "pricing and implementation searches", icon: "stripe" },
    { title: "Notion", sub: "alternative and template searches", icon: "notion" },
    { title: "Zoom", sub: "feature and plan comparison searches", icon: "zoom" },
  ],
};

/* B2B SaaS SEO Results. Placeholder until verified metrics are supplied. */
export const SAAS_RESULTS = {
  badge: "Proof",
  title: "B2B SaaS SEO Results",
  accent: "Results",
  lead: "Show the strongest commercial proof available: qualified organic traffic, non-brand keyword growth, demo or trial volume, lead quality, conversion gains, or revenue influenced by organic search.",
  body: "The goal is simple: prove early that Search Nexio has worked on SaaS growth problems before the reader reaches the detailed service sections.",
  snapshot: {
    label: "Results snapshot",
    heading: "Verified SaaS case study available on request",
    body: "Real before-and-after data, the relevant SaaS case study and the measurement method are shared during scoping.",
  },
  /* The commercial proof points the PDF asks to be shown, as labels only.
     No figures: none were supplied. */
  measures: [
    "Qualified organic traffic",
    "Non-brand keyword growth",
    "Demo and trial volume",
    "Lead quality",
    "Conversion gains",
    "Revenue influenced by organic search",
  ],
};

/* SEO Built for B2B SaaS Growth. */
export const SAAS_BUILT_FOR = {
  badge: "The opportunity",
  title: "SEO Built for B2B SaaS Growth",
  accent: "SaaS Growth",
  paras: [
    "SaaS buying cycles rarely look like one search and one click. A prospect may discover you through an educational article, come back through a comparison search, loop in colleagues, check integrations and pricing, and only then book a demo. Your SEO strategy has to support that full decision process, not just the first visit.",
    "Broad traffic can make a dashboard look healthy while the pages closest to revenue stay invisible. The real opportunity often sits in feature pages, use cases, integrations, comparison pages, alternative pages and category terms that match how buyers evaluate software.",
    "Our broader SEO services cover the technical, content and authority foundations behind this work. For SaaS, we apply those foundations to buyer intent, product discovery and the points in the journey where a search can become a sales opportunity.",
    "Search behavior is also spreading across Google, AI Overviews, ChatGPT, Gemini and Perplexity. The goal is not to chase every new surface. It is to make your product easy to find, understand and evaluate wherever your buyers are researching.",
  ],
  /* The page types the copy names as where the real opportunity sits. */
  pageTypes: [
    "Feature pages",
    "Use cases",
    "Integrations",
    "Comparison pages",
    "Alternative pages",
    "Category terms",
  ],
};

/* Why SaaS SEO Fails to Generate Pipeline. */
export const SAAS_FAILS = {
  badge: "Where it breaks",
  title: "Why SaaS SEO Fails to Generate Pipeline",
  accent: "Fails",
  intro:
    "Most SaaS teams are not short on SEO activity. The problem is that a lot of that activity is disconnected from how buyers evaluate software. Here's where it usually breaks down.",
  items: [
    {
      title: "Traffic Without Buying Intent",
      body: "Organic sessions go up. Demos do not. This happens when a site ranks for broad informational terms that attract researchers and casual readers rather than people evaluating a purchase. We prioritize keywords based on buyer intent, product relevance and how close the searcher is to a meaningful next step.",
    },
    {
      title: "Blogs Without Product Visibility",
      body: "Many SaaS content programs are built almost entirely around top-of-funnel blog posts. The blog ranks, while product, feature and use-case pages remain buried. If the pages that explain what your software actually does cannot be found, the content doing the most commercial work is missing from search.",
    },
    {
      title: "Missing BOFU Opportunities",
      body: "Competitors often capture searches that happen close to a decision: competitor alternatives, software comparisons, best-fit use cases, feature-specific queries and integration searches. These terms may have less volume than broad educational keywords, but the searcher is usually much closer to evaluating a product.",
    },
    {
      title: "Weak Search Attribution",
      body: "Rankings and sessions tell only part of the story. We connect organic performance to the actions that matter to a SaaS business, including trials, demos, MQLs, SQLs and sales opportunities, wherever the tracking setup allows it.",
    },
    {
      title: "Low AI Visibility",
      body: "SaaS buyers now use AI-assisted search alongside Google when they research categories, compare tools and look for recommendations. If your brand is absent from those answers, potential buyers may encounter competitors before they ever reach your website.",
    },
  ],
};

/* Our B2B SaaS SEO Services. */
export const SAAS_SERVICES = {
  badge: "What we do",
  title: "Our B2B SaaS SEO Services",
  accent: "Services",
  items: [
    {
      title: "SaaS Keyword Strategy",
      body: "Not every keyword deserves the same amount of effort. We map opportunities by ICP relevance, commercial intent, funnel stage, product fit and realistic ranking difficulty. That keeps the strategy focused on searches that can move a buyer forward instead of terms that simply look impressive in a report.",
      linkLabel: "See our approach to SaaS keyword research.",
      href: S_ROUTES.keywordResearch,
      diagram: "intent",
    },
    {
      title: "Product-Led SEO",
      body: "Your product can be one of your strongest search assets. We optimize feature, use-case, integration, solution, comparison and alternative pages so the product itself appears when buyers are evaluating options.",
      linkLabel: "Read more about product-led SEO.",
      href: S_ROUTES.productLedSeo,
      diagram: "pages",
    },
    {
      title: "Technical SEO",
      body: "Modern SaaS sites can run into JavaScript rendering issues, crawl and indexation problems, duplicate URLs, weak site architecture, Core Web Vitals issues and large programmatic page sets. We fix the technical foundation so important pages can be discovered and understood.",
      linkLabel: "Our technical SEO for SaaS resource covers the issues most specific to SaaS platforms.",
      href: S_ROUTES.technicalSeoSaas,
      diagram: "render",
    },
    {
      title: "SaaS Content Strategy",
      body: "We do not build a blog calendar just to hit a publishing quota. We prioritize decision-stage and product-adjacent content first, then expand into educational topics that support the same buying journey.",
      linkLabel: "See how we sequence this in our SaaS SEO strategy.",
      href: S_ROUTES.saasStrategy,
      diagram: "sequence",
    },
    {
      title: "Authority & Link Building",
      body: "Competitive SaaS categories need more than strong on-page work. We focus on relevant editorial links, original data, digital PR, industry publications and genuine partnerships rather than chasing a backlink count with little connection to your market.",
      diagram: "authority",
    },
    {
      title: "AI Search Optimization",
      body: "We connect traditional SEO with AI search optimization services so your brand has a stronger chance of being understood and surfaced across Google and AI-driven discovery. Where the need is more specific, we also support generative engine optimization, answer engine optimization and an AI visibility audit.",
      linkLabel: "Explore our AI search optimization services.",
      href: S_ROUTES.aiSearch,
      diagram: "surfaces",
    },
  ],
};

/* Our B2B SaaS SEO Process. */
export const SAAS_PROCESS = {
  badge: "How we work",
  title: "Our B2B SaaS SEO Process",
  accent: "Process",
  steps: [
    {
      n: "01",
      title: "Understand Your ICP",
      body: "We start with who you actually need to reach. Buying roles, use cases, objections and product fit shape the keyword and page decisions that follow.",
    },
    {
      n: "02",
      title: "Map Revenue Keywords",
      body: "We group search opportunities by intent, funnel stage and product relevance, then prioritize the terms most likely to lead to evaluation, trial or sales conversations.",
    },
    {
      n: "03",
      title: "Fix Technical Barriers",
      body: "We resolve crawling, indexation, rendering and architecture issues that limit how well search engines and AI systems can access important pages.",
    },
    {
      n: "04",
      title: "Build High-Intent Pages",
      body: "We create and improve the feature, use-case, comparison, alternative, integration and solution pages that sit closest to a buying decision.",
    },
    {
      n: "05",
      title: "Grow Search Authority",
      body: "We strengthen topical depth and earn relevant links so priority pages have the authority needed to compete.",
    },
    {
      n: "06",
      title: "Measure Commercial Impact",
      body: "We track rankings and traffic, but the real focus is what happens after the click: trials, demos, qualified leads and revenue-related outcomes wherever attribution is available.",
    },
  ],
};

/* SEO Across the SaaS Buyer Journey. */
export const SAAS_JOURNEY = {
  badge: "Buyer journey",
  title: "SEO Across the SaaS Buyer Journey",
  accent: "Buyer Journey",
  intro:
    "SaaS buyers search differently depending on where they are in the decision. A strategy built for only one stage will miss valuable demand elsewhere in the journey.",
  stages: [
    {
      title: "Problem-Aware Searches",
      body: "The buyer knows something is not working but has not named a category of solution yet. Educational content can earn attention here, but it needs a clear path toward the product.",
    },
    {
      title: "Solution-Aware Searches",
      body: "The buyer understands the type of software that may solve the problem and starts researching categories, workflows and solution approaches.",
    },
    {
      title: "Product-Aware Searches",
      body: "The buyer is evaluating named products and looking at features, use cases, integrations, implementation and product fit.",
    },
    {
      title: "Comparison Searches",
      body: "The buyer is actively weighing products against each other. Comparison and alternative pages help your brand compete when evaluation is already underway.",
    },
    {
      title: "Decision-Stage Searches",
      body: "Pricing questions, best-fit software searches, competitor alternatives and integration queries often appear close to a final shortlist or buying decision.",
    },
  ],
};

/* Product-Led SEO for SaaS. */
export const SAAS_PRODUCT_LED = {
  badge: "Product-led SEO",
  title: "Product-Led SEO for SaaS",
  accent: "Product-Led",
  paras: [
    "A SaaS site should not rely on the blog to carry organic growth. The product pages themselves need to answer the searches buyers make while evaluating software.",
    "That means building a clear search role for feature pages, use cases, industry solutions, integrations, templates, comparisons and competitor alternatives. Each page should answer a distinct question, show product relevance and lead naturally toward a trial, demo or deeper evaluation.",
    "Our product-led SEO framework connects those pages into one structure so they support both discovery and conversion without creating overlapping search intent.",
  ],
  /* The page roles the copy names, each answering a distinct question. */
  roles: [
    "Feature pages",
    "Use cases",
    "Industry solutions",
    "Integrations",
    "Templates",
    "Comparisons",
    "Competitor alternatives",
  ],
};

/* SaaS SEO for Google and AI Search. */
export const SAAS_AI = {
  badge: "Google and AI search",
  title: "SaaS SEO for Google and AI Search",
  accent: "AI Search",
  items: [
    {
      title: "Google Search & AI Overviews",
      body: "Google remains an important part of B2B software discovery, while AI Overviews add another layer to how answers are presented. We structure pages for clear relevance, strong supporting evidence and useful answers rather than treating AI visibility as a separate content exercise.",
    },
    {
      title: "Generative Engine Optimization",
      body: "We make key product and expertise pages easier for AI systems to understand, summarize and cite accurately.",
      linkLabel: "Learn more about our generative engine optimization approach.",
      href: S_ROUTES.geo,
    },
    {
      title: "Answer Engine Optimization",
      body: "We map the questions prospects ask while researching a problem, category or vendor, then improve the pages that should answer them.",
      linkLabel: "See our answer engine optimization service.",
      href: S_ROUTES.aeo,
    },
    {
      title: "AI Visibility Tracking",
      body: "Visibility is difficult to improve if you cannot see where your brand appears. Our AI visibility audit benchmarks how your SaaS company is showing up across relevant AI search experiences and feeds those findings back into your broader AI search optimization services.",
      linkLabel: "Explore our AI search optimization services.",
      href: S_ROUTES.aiSearch,
    },
  ],
  /* Honesty note, verbatim. Required by the source copy. */
  note: "No agency can guarantee placement or citations inside a specific AI platform. We focus on strengthening the technical, content and authority signals that improve your chances of being discovered, understood and cited accurately.",
};

/* Mid-page CTA banner. */
export const SAAS_MID_CTA = {
  title: "Organic traffic is growing. Are sales opportunities growing with it?",
  body: "See where your SaaS company is losing high-intent demand across Google and AI search.",
  cta: { label: "Get Your SaaS SEO Strategy", href: S_ROUTES.strategy },
};

/* Why SaaS Companies Choose Search Nexio. */
export const SAAS_WHY = {
  badge: "Why Search Nexio",
  title: "Why SaaS Companies Choose Search Nexio",
  accent: "Choose",
  items: [
    {
      title: "Revenue-Led SEO",
      body: "We judge recommendations by their commercial purpose, not by how much traffic they might add to a dashboard. Keyword and page priorities are tied to buyer intent and the actions your growth team actually cares about.",
      icon: "target",
    },
    {
      title: "SaaS Experience",
      body: "We work with the realities of SaaS growth: long sales cycles, multiple stakeholders, product-led and sales-led motions, complex products and modern technical frameworks.",
      icon: "layers",
    },
    {
      title: "Google + AI Search",
      body: "Traditional SEO and AI search visibility are treated as one connected discovery strategy. The buyer may move between Google, an AI answer, a comparison page and your product site before they ever speak to sales.",
      icon: "sparkle",
    },
    {
      title: "Transparent Reporting",
      body: "Reporting connects rankings and landing-page performance with conversions wherever tracking allows, so your team can see which parts of organic search contribute to demos, trials and qualified demand.",
      icon: "chart",
    },
    {
      title: "Strategy and Execution",
      body: "We do not stop at recommendations. Search Nexio can work through the technical fixes, page strategy, content execution and internal linking needed to put the plan into practice.",
      icon: "wrench",
    },
  ],
};

/* B2B SaaS SEO FAQs. Copy is verbatim; the JSON-LD mirrors it exactly. */
export const SAAS_FAQS = [
  {
    q: "What does a B2B SaaS SEO agency do?",
    a: "A B2B SaaS SEO agency helps software companies grow qualified organic visibility across Google and AI-assisted search. The work typically includes keyword strategy, technical SEO, product-led page optimization, content built around the buyer journey, authority building and measurement tied to trials, demos or other commercial actions.",
  },
  {
    q: "How is SaaS SEO different from traditional SEO?",
    a: "SaaS SEO has to account for long buying cycles, multiple stakeholders, product-led or sales-led motions, modern frameworks such as React and Next.js, and search intent that ranges from early education to direct competitor comparisons. That makes product pages, feature pages, use cases and BOFU content especially important.",
  },
  {
    q: "How long does SaaS SEO take?",
    a: "Timelines depend on your current authority, technical condition, competition and the amount of page and content work required. Existing-page improvements and technical fixes can sometimes create earlier movement, while new competitive topics and authority building usually take longer. We set expectations from the condition of your site rather than using a generic promise.",
  },
  {
    q: "How much do SaaS SEO services cost?",
    a: "Cost depends on the size of the site, competitive landscape, technical work required, content scope and how much execution your team needs from us. We scope the work after reviewing the site and your growth priorities rather than quoting a standard package that may not fit.",
  },
  {
    q: "Can SEO generate SaaS demos and trials?",
    a: "Yes, when the strategy targets searches connected to product evaluation and gives the visitor a clear route to the next step. Feature pages, use cases, integrations, comparisons and alternative pages can support demos and trials because they meet prospects when they are already evaluating options.",
  },
  {
    q: "What is the difference between SaaS SEO and GEO?",
    a: "SaaS SEO focuses on organic visibility across search engines and the pages that support software discovery and evaluation. Generative engine optimization focuses more specifically on how a brand and its content are understood and surfaced inside AI-generated answers. The two overlap, so we plan them together rather than treating them as unrelated channels.",
  },
  {
    q: "Can SEO improve our visibility in ChatGPT?",
    a: "SEO, content quality, clear site structure, authority and strong brand signals can improve the conditions for being discovered and cited by AI systems. We can strengthen those signals and track visibility, but we cannot guarantee placement inside ChatGPT or any other AI platform.",
  },
];

/* Closing CTA. */
export const SAAS_FINAL = {
  accent: "Predictable",
  body: "Organic traffic only matters if it helps the right buyers discover, evaluate and choose your product. Let us look at where you are visible today, where competitors are winning high-intent demand, and which opportunities are worth prioritizing first.",
  cta: { label: "Get Your SaaS SEO Strategy", href: S_ROUTES.strategy },
};
