/* All copy comes from the FINAL v3 doc. [[ ]] markers are the doc's own
   pending-verification convention and must render as visibly-pending chips. */

export const SURFACES = ["Google", "Maps", "AI Overviews", "ChatGPT"];

export const CLIENTS = [
  "McNulty Counseling",
  "Astera",
  "Darussalam",
  "AurumFSG",
  "Day Translations",
];

export const TRUST_BULLETS = [
  {
    title: "Built for high-trust industries",
    body: "Specialized for healthcare, finance, legal, tax, and other businesses where compliance, accuracy, and trust decide the sale.",
  },
  {
    title: "Full-spectrum search coverage",
    body: "We handle the entire problem, including technical SEO, site migrations, local maps, content development, and AI search presence.",
  },
  {
    title: "Measured by business impact",
    body: "We tie our reporting directly to traffic, conversions, and sales pipeline, not vanity keyword positions.",
  },
];

export const STATS = [
  {
    value: 58,
    suffix: "%",
    label: "drop in click-through rates on search results where AI Overviews appear",
  },
  {
    value: 31,
    suffix: "%",
    label: "of U.S. adults now use AI platforms multiple times every day",
  },
  {
    value: 16,
    suffix: "%",
    prefix: "Only ",
    label: "of brands actually track how they look inside AI search results",
  },
];

export type CaseStudy = {
  client: string;
  industry: string;
  metric: string;
  summary: string;
  duration: string;
  featured?: boolean;
};

/* Doc note: swap any tile for Darussalam if its number is stronger; one number
   per tile; numbers must be figures the client would confirm if called. */
export const CASE_STUDIES: CaseStudy[] = [
  {
    client: "McNulty Counseling",
    industry: "Healthcare",
    metric: "[[ +X% organic leads / calls ]]",
    summary:
      "Came to us needing more clients from local search. We rebuilt their local footprint and intent targeting, and qualified inquiries followed.",
    duration: "[[X]] months",
    featured: true,
  },
  {
    client: "Astera",
    industry: "SaaS",
    metric: "[[ headline metric ]]",
    summary:
      "A recognized data integration platform. [[One line: what was broken, what we did.]]",
    duration: "[[X]] months",
  },
  {
    client: "AurumFSG",
    industry: "Finance and Crypto",
    metric: "[[ headline metric ]]",
    summary:
      "Visibility in one of the highest-scrutiny industries online. [[One line: what was broken, what we did.]]",
    duration: "[[X]] months",
  },
  {
    client: "Darussalam",
    industry: "Ecommerce",
    metric: "[[ headline metric ]]",
    summary: "[[One line: what was broken, what we did.]]",
    duration: "[[X]] months",
  },
];

export const METHOD_STEPS = [
  {
    index: "01",
    name: "Map",
    body: "We map out exactly where you are visible and where you are invisible across Google, Maps, and AI tools. Every campaign starts with real data, not guesses.",
  },
  {
    index: "02",
    name: "Fix",
    body: "We clear up technical errors, content gaps, and local business data, prioritizing tasks by what impacts revenue first rather than what is easiest to code.",
  },
  {
    index: "03",
    name: "Amplify",
    body: "We build the brand authority that earns traditional Google rankings and gets you cited inside AI answers at the same time.",
  },
  {
    index: "04",
    name: "Prove",
    body: "We deliver clear reporting tied to leads and pipeline revenue. You see what we changed, what it cost, and what it brought back.",
  },
];

export type Service = {
  slug: string;
  title: string;
  pain: string;
  items: { lead: string; text: string }[];
  wide?: boolean;
};

export const SERVICES: Service[] = [
  {
    slug: "core-seo",
    title: "SEO built around what drives revenue",
    pain: "You invest heavily in content and optimization, but your organic traffic has plateaued. Your current team cannot explain why the growth stopped.",
    items: [
      {
        lead: "SEO",
        text: "focused on the specific keywords that bring in actual customers, not just raw search impressions",
      },
      {
        lead: "Technical SEO",
        text: "fixes for site speed, crawl errors, indexation, and structured data. This is the foundation everything else relies on",
      },
      {
        lead: "Content optimization",
        text: "written to match user intent and formatted so both Google and AI platforms can read, trust, and display it",
      },
    ],
  },
  {
    slug: "local-seo",
    title: "Local SEO that wins every market you serve",
    pain: "Competitors take over the map pack for your best terms. Your locations are buried, or your business data is a mess across different cities.",
    items: [
      {
        lead: "Local SEO",
        text: "that gets your business found in local results and Google Maps by nearby buyers",
      },
      {
        lead: "Multi-location SEO",
        text: "managing landing pages, listings, and reviews across all locations at scale",
      },
      {
        lead: "Franchise SEO",
        text: "that builds national presence without leaving individual franchisees behind",
      },
    ],
  },
  {
    slug: "ai-search",
    title: "Visibility where buyers ask AI",
    pain: "Your market share is quietly shifting. Buyers are sourcing vendor recommendations directly from ChatGPT and AI Overviews, completely bypassing your traditional listings.",
    items: [
      {
        lead: "AEO (Answer Engine Optimization)",
        text: "structuring your content and data so it gets selected for AI Overviews, featured snippets, and direct answers",
      },
      {
        lead: "GEO (Generative Engine Optimization)",
        text: "building the web-wide citations and authority signals that make ChatGPT, Gemini, and Perplexity recommend your company",
      },
    ],
  },
  {
    slug: "recovery",
    title: "Recover lost traffic. Protect what you rebuilt.",
    pain: "An algorithm update, a redesign, or a migration wiped out your organic traffic overnight. Or traffic is fine and leads still are not coming.",
    wide: true,
    items: [
      {
        lead: "Traffic recovery",
        text: "that finds exactly what caused the drop, fixes the root issues, and rebuilds your presence",
      },
      {
        lead: "SEO migration",
        text: "that protects your hard-won rankings when you update your design, change domains, or swap platforms",
      },
      {
        lead: "Conversion-focused SEO",
        text: "because traffic is a vanity metric if visitors leave without buying. We optimize the path from search click to lead form",
      },
    ],
  },
];

/* Doc rule: one sentence per industry maximum, on hover or on the hub page. */
export const INDUSTRIES = [
  {
    name: "Healthcare",
    blurb:
      "For practices and providers where accuracy, compliance, and patient trust decide the sale.",
  },
  {
    name: "Tax and Financial Services",
    blurb:
      "Visibility that holds up in one of the highest-scrutiny corners of search.",
  },
  {
    name: "SaaS and Technology",
    blurb:
      "Turning product authority into rankings, citations, and AI recommendations.",
  },
  {
    name: "Ecommerce",
    blurb:
      "Getting your products found and chosen across every surface buyers check before they buy.",
  },
  {
    name: "Multi-location and Franchise",
    blurb: "National presence that never leaves an individual location behind.",
  },
];

export const WHY = [
  {
    title: "AI-native, not retrofitted",
    body: "We did not just add the word AI to an old 2015 SEO playbook. Our entire approach was built from day one for a world where Google, Maps, and AI platforms work together.",
  },
  {
    title: "Senior strategists, zero handoffs",
    body: "Your project is never passed down to an intern or a rotating account manager. The people who build your strategic roadmap are the ones doing the daily optimization work.",
  },
  {
    title: "Built for close scrutiny",
    body: "Clean documentation, transparent reporting, and realistic timelines. If something stalls out, we tell you clearly and adjust the strategy before you have to ask.",
  },
  {
    title: "No rigid contracts",
    body: "No mandatory 12-month commitments. We earn your budget every thirty days based on performance.",
  },
];

export const FAQS = [
  {
    q: "What is a search visibility agency?",
    lead: "A search visibility agency helps businesses get found across every platform where customers search, rather than just focusing on traditional Google keyword rankings.",
    rest: "This includes organic search, Google Maps, local listings, Google AI Overviews, and AI tools like ChatGPT. While an old-school SEO firm only optimizes for blue website links, we handle your entire presence across the modern web and connect that visibility straight to your sales pipeline.",
  },
  {
    q: "What is the difference between SEO, AEO, and GEO?",
    lead: "SEO improves your rankings in traditional, standard search engine results.",
    rest: "AEO formats your content so it gets pulled as direct answers in AI Overviews, featured snippets, and voice results. GEO builds the broader authority signals and digital citations that make conversational AI platforms like ChatGPT and Perplexity mention and recommend your brand. They are simply different layers of the same cohesive strategy, not competing services.",
  },
  {
    q: "I rank well but I am not getting leads. What is wrong?",
    lead: "It usually comes down to one of three issues.",
    rest: "Your current keywords might be attracting casual researchers instead of actual buyers. Your visibility might be strong on standard desktop results, but your buyers are choosing competitors on Maps or inside AI tools. Or your site traffic is fine, but the landing page fails to convert them. Our visibility review tracks the whole path from search to revenue to find the bottleneck.",
  },
  {
    q: "How do I get my business mentioned in ChatGPT and AI Overviews?",
    lead: "AI platforms recommend businesses they can find, read, and trust easily.",
    rest: "This requires a clean technical setup, highly accurate business listings across the web, and clear content that answers direct customer questions. There are no secret shortcuts or tricks that force automatic inclusion. The only reliable path is building real category authority, which is exactly what our AEO and GEO services handle.",
  },
  {
    q: "How do you measure search visibility?",
    lead: "Search visibility is measured across every surface where buyers can find you, not just keyword rankings.",
    rest: "We track organic positions and traffic, local map pack presence, appearances in Google AI Overviews, and how often AI tools like ChatGPT and Perplexity mention or recommend your business for buyer questions. Those signals are then tied to what actually matters: leads, conversions, and pipeline. Rankings and citations are indicators. Revenue is the result.",
  },
  {
    q: "How long does it take to see results?",
    lead: "It depends entirely on the technical health and current authority of your website.",
    rest: "Basic technical fixes and local map updates can show positive movement within a few weeks. Highly competitive keyword rankings and reliable AI search recommendations usually take three to six months of steady work. Anyone promising immediate guarantees on a fixed timeline is selling something they do not control.",
  },
  {
    q: "My traffic dropped. Can it be recovered?",
    lead: "Yes, in most cases, once we find out exactly what caused the issue.",
    rest: "Sudden drops usually happen because of an unannounced algorithm update, technical issues caused by a site redesign or migration, lost link equity, or content that no longer matches search intent. Every cause requires a completely different fix, which is why we start with a forensic diagnosis instead of guessing.",
  },
  {
    q: "How much does it cost?",
    lead: "Every engagement is custom-scoped to your specific market and business goals after the visibility review, so we do not use flat, one-size-fits-all pricing packages.",
    rest: "As a general market reference point, professional mid-market and enterprise search engagements typically range between $2,500 and $10,000+ per month depending on scope and competition. We will tell you honestly if your expected returns do not justify that investment.",
  },
];

/* Entity rule: this exact sentence appears on the About page and every
   directory listing and profile. Do not reword it. */
export const ENTITY_SENTENCE =
  "SearchNexio is a search visibility agency helping mid-size businesses and enterprises get found across Google, Maps, and AI search.";
