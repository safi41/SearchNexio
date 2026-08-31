/* Professional SEO Services page copy. Wording is the client's final PDF
   copy deck, unchanged. Every [Insert ...] slot in the deck is a verified-
   proof placeholder: nothing on this page may present an invented metric,
   client logo, case study or team bio, so those slots state plainly that
   they are pending rather than showing fabricated data.

   The deck's design brief caps the page at five conversion touchpoints:
   hero, a small inline button after Problems, the main banner, a small
   button after Why Choose, and the final section. */

export const SEO_ROUTES = {
  review: "/contact/",
  results: "#seo-results",
  aiSeo: "/ai-search-optimization-services/",
  ecommerce: "/ecommerce-seo-services/",
  saas: "/b2b-saas-seo-agency/",
  localSeo: "/services/local-seo-services/",
  healthcare: "/industries/healthcare/",
  crypto: "/industries/crypto-seo/",
};

export const SEO_CTA = "Request an SEO Review";

export const SEO_HERO = {
  eyebrow: "Professional SEO Services",
  title: "Professional SEO Services Built Around Leads and Revenue",
  accent: "Leads and Revenue",
  intro:
    "Search Nexio helps growth-stage and mid-market businesses show up for the searches that influence leads, sales and revenue. Our professional SEO services combine technical fixes, content and implementation around the pages that matter most commercially.",
  secondaryCta: "See Our Results",
  /* The hero visual's four stations, from the deck's design brief:
     Search Demand -> Priority Pages -> Qualified Visitor -> Lead / Revenue. */
  flow: [
    { label: "Search Demand", sub: "the searches your buyers make", icon: "search" },
    { label: "Priority Pages", sub: "the pages that matter commercially", icon: "page" },
    { label: "Qualified Visitor", sub: "intent matched to the offer", icon: "visitor" },
    { label: "Lead / Revenue", sub: "the outcome the work is judged on", icon: "revenue" },
  ],
};

/* The deck's trust-bar slots. All four are verified-proof placeholders. */
export const SEO_TRUST_SLOTS = [
  "Verified years of SEO experience",
  "Client logos",
  "Verified SEO result",
  "Reviews and certifications where applicable",
];

export const SEO_FOCUSED = {
  title: "SEO Focused on Leads, Sales and Revenue",
  paras: [
    "Rankings and traffic are useful signals, but neither pays the bills on their own. A page can rank well and still contribute nothing if it attracts the wrong visitor or fails to explain the offer once they arrive.",
    "We build SEO strategy around the pages that generate leads, transactions or revenue, then work backward to the keyword research, technical fixes, content and authority that support them. Visibility is the means. Business outcomes are the point.",
  ],
  /* The deck's four-step diagram beside the copy. */
  chain: ["Visibility", "Qualified Traffic", "Conversion", "Revenue"],
};

export const SEO_PROBLEMS = {
  title: "SEO Problems We Solve",
  items: [
    {
      icon: "competition",
      title: "Your Competitors Rank for Your Most Valuable Searches",
      desc: "If competitors consistently appear above you for the searches that drive business, it's usually a mix of stronger commercial pages, better internal linking or more established authority. We identify which searches matter most and what it will actually take to compete for them.",
    },
    {
      icon: "stalled",
      title: "Organic Traffic Has Stopped Growing",
      desc: "Growth stalls for different reasons on different sites: technical limitations, thin or outdated pages, an authority gap, or simply stronger competition than before. We diagnose which of these is actually holding your site back before recommending any work.",
    },
    {
      icon: "leads",
      title: "Traffic Is Growing but Leads Are Not",
      desc: "More visits don't automatically mean more business. If the pages attracting traffic don't match what the visitor was looking for, or don't give them a clear next step, growth in traffic won't turn into growth in leads.",
    },
    {
      icon: "reporting",
      title: "Your SEO Agency Reports Activity but Little Progress",
      desc: "Rankings, impressions and traffic charts don't tell you what was actually changed on your site or why. We show what was implemented, on which pages, and what we expect it to influence, not just where the numbers moved.",
    },
    {
      icon: "technical",
      title: "Technical Issues Are Holding Important Pages Back",
      desc: "A well-written page can still underperform if it isn't being crawled properly, competes with a duplicate, or loads slowly on mobile. We check whether technical problems are limiting pages that would otherwise perform.",
    },
    {
      icon: "content",
      title: "Content Is Being Published Without a Clear Search Strategy",
      desc: "A blog can generate visits without ever supporting the pages your business actually needs to rank. We connect content decisions to real search demand and to the commercial pages it should be strengthening.",
    },
  ],
};

export const SEO_SERVICES = {
  title: "Our Professional SEO Services",
  intro: "The mix of work depends on your site, market and current performance. Here's what we typically cover.",
  services: [
    {
      icon: "strategy",
      title: "SEO Strategy and Keyword Research",
      desc: "Keyword research isn't a spreadsheet of search volumes. We look at search demand, search intent, competition and your current rankings, then map the opportunities to the right pages on your site. Priorities are set by commercial value, meaning how likely a keyword is to influence leads or revenue, not simply how many people search for it each month.",
    },
    {
      icon: "technical",
      title: "Technical SEO",
      desc: "Technical problems often limit pages that would otherwise perform well. We work on crawlability, indexation, canonicalization, redirects, duplicate content, site architecture, Core Web Vitals, JavaScript rendering, sitemaps and structured data where it helps, and we plan carefully around migrations so rankings and traffic aren't lost in the process. Each fix is tied to the pages it actually affects, not treated as a general checklist.",
    },
    {
      icon: "onpage",
      title: "On-Page SEO",
      desc: "Each page is reviewed against what the searcher is actually trying to do: does the page match their intent, is the structure and heading logical, does the content answer the question, and does internal linking and the conversion path make the next step obvious. On-page SEO is about relevance and usability, not adding keywords to existing copy.",
    },
    {
      icon: "contentstrategy",
      title: "SEO Content Strategy",
      desc: "Content strategy starts with your commercial pages, not a publishing calendar. We identify which existing pages need improvement, which new commercial pages should exist, and which supporting content is worth creating to strengthen them. A blog post only earns its place if it connects back to a page your business needs to rank.",
    },
    {
      icon: "linking",
      title: "Internal Linking and Site Architecture",
      desc: "Internal linking helps search engines understand how your pages relate to each other and helps visitors move through your site logically. We structure links so authority flows toward your most commercially important pages, and so supporting content has a clear path back to the pages it's meant to strengthen.",
    },
    {
      icon: "authority",
      title: "Link Building and Digital PR",
      desc: "Authority building is planned around the pages that matter commercially, not reported as a monthly quantity. We look for relevant links, mentions and digital PR opportunities tied to your industry, and prioritize the ones most likely to support meaningful growth rather than pad a report.",
    },
    {
      icon: "conversion",
      title: "Conversion-Focused SEO",
      desc: "Ranking a page is only half the job. We also look at whether the page satisfies the intent behind the search, explains the offer clearly, and gives the visitor an obvious next step. This isn't a substitute for full conversion rate optimization, but it closes an obvious gap between traffic and leads.",
    },
    {
      icon: "ai",
      title: "SEO for AI Search",
      desc: "Search increasingly extends beyond a list of blue links, and people now discover brands through AI-assisted search experiences as well. The fundamentals that support this, clear entities, useful content, accessible information and a strong site structure, are largely the same ones core SEO already relies on. If AI visibility is a priority, this typically sits alongside our AI SEO services rather than replacing the core SEO work.",
      /* "AI SEO services" carries the deck's internal link. */
      linkAnchor: "AI SEO services",
      linkHref: SEO_ROUTES.aiSeo,
    },
  ],
};

export const SEO_RESULTS = {
  title: "SEO Results That Connect to Business Performance",
  intro:
    "Where we have verified results, we show what changed and what it produced: organic leads, qualified conversions, organic revenue where it's measurable, and growth in the searches that actually matter commercially. Traffic can support the story, but it isn't the headline.",
  /* Both slots are verified-case-study placeholders per the deck; nothing
     is invented while proof is pending. */
  cards: [
    {
      label: "Verified case study",
      heading: "Case study available on request",
      body: "Challenge, work completed and the measurable business result are shared during scoping, and published here once verified.",
    },
    {
      label: "Verified case study",
      heading: "Case study available on request",
      body: "One strong verified case study is more credible than two vague ones. This section is held until real proof exists.",
    },
  ],
};

export const SEO_NEEDS = {
  title: "SEO Services for Different Business Needs",
  intro: "Some industries and business models need a more specific approach. These pages go deeper on each.",
  cards: [
    {
      icon: "ecommerce",
      title: "Ecommerce SEO",
      desc: "Category, product and site architecture work built around organic revenue and the technical problems that come with large catalogs.",
      linkLabel: "See our ecommerce SEO services",
      href: SEO_ROUTES.ecommerce,
    },
    {
      icon: "saas",
      title: "B2B SaaS SEO",
      desc: "SEO built around high-intent searches, comparison and evaluation content, and the pages that influence pipeline rather than just trial sign-ups.",
      linkLabel: "See our B2B SaaS SEO services",
      href: SEO_ROUTES.saas,
    },
    {
      icon: "local",
      title: "Local SEO",
      desc: "Search strategy for businesses competing in specific locations, including map visibility, location pages and geographic search intent.",
      linkLabel: "See our local SEO services",
      href: SEO_ROUTES.localSeo,
    },
    {
      icon: "healthcare",
      title: "Healthcare SEO",
      desc: "SEO that accounts for trust, expertise and the specific competition and compliance considerations that come with healthcare search.",
      linkLabel: "See our healthcare SEO services",
      href: SEO_ROUTES.healthcare,
    },
    {
      icon: "crypto",
      title: "Crypto SEO",
      desc: "SEO for a space with complex terminology, high competition and search behavior that shifts quickly.",
      linkLabel: "See our crypto SEO services",
      href: SEO_ROUTES.crypto,
    },
    {
      icon: "ai",
      title: "AI SEO",
      desc: "How your brand and content are understood, surfaced and cited in AI-assisted search experiences, alongside traditional Google results.",
      linkLabel: "See our AI SEO services",
      href: SEO_ROUTES.aiSeo,
    },
  ],
};

/* The main CTA banner, placed between the business-needs grid and the
   process section per the deck. */
export const SEO_BANNER = {
  title: "Not Sure Where Your Organic Growth Is Being Lost?",
  body: "We can review your current visibility, competitors, priority landing pages and technical setup to identify the SEO work worth prioritizing.",
};

export const SEO_PROCESS = {
  title: "How Our SEO Process Works",
  steps: [
    {
      title: "Understand Your Business and Search Opportunity",
      desc: "We start by learning what you sell, who buys it, which conversions actually matter, and where organic search realistically fits into how you acquire customers.",
    },
    {
      title: "Audit Your Website and Competitors",
      desc: "We review your current visibility, technical health, competitors, content gaps, authority and internal structure to understand where you stand and where the opportunity is.",
    },
    {
      title: "Prioritize the Highest-Impact SEO Work",
      desc: "Recommendations are ranked by likely commercial impact, effort and dependencies, so the work starts with what will move the business rather than what's easiest to report.",
    },
    {
      title: "Implement Technical, Content and On-Page Improvements",
      desc: "We make the changes directly, from technical fixes to page content and internal linking, rather than handing over a document for your team to build.",
    },
    {
      title: "Build Authority and Expand Search Visibility",
      desc: "We grow content and authority around your priority pages and expand into new search opportunities as they're identified.",
    },
    {
      title: "Measure Results and Refine the Strategy",
      desc: "We track performance against the roadmap and adjust priorities based on what's actually moving the business, not just what was originally planned.",
    },
  ],
};

export const SEO_MEASURE = {
  title: "How We Measure SEO Performance",
  intro:
    "Rankings and traffic are useful indicators, but they don't tell you whether SEO is creating business value on their own.",
  metrics: [
    "Organic leads and form submissions",
    "Calls",
    "Transactions and organic revenue where measurable",
    "Qualified organic traffic",
    "Conversion rate",
    "Non-brand visibility",
    "Priority commercial rankings",
    "Performance of key landing pages",
  ],
  close:
    "We report against these, so it's clear whether the work is contributing to the business, not just moving numbers on a dashboard.",
};

export const SEO_WHY = {
  title: "Why Choose Search Nexio as Your SEO Agency?",
  points: [
    {
      title: "Clear SEO Priorities",
      desc: "You know what's being worked on, why it was prioritized, and what we expect it to influence, rather than receiving a long list with no order to it.",
    },
    {
      title: "Implementation, Not Just Audits",
      desc: "An audit is a starting point, not the deliverable. We prioritize what it finds and do the work, rather than leaving a document for your team to action.",
    },
    {
      title: "Reporting You Can Understand",
      desc: "Reports show what changed, what was completed, what improved, what didn't, and what we're working on next, in language that doesn't require an SEO background to follow.",
    },
    {
      title: "Strategy Connected to Business Goals",
      desc: "Priorities reflect your actual products, services and customers, not a generic SEO checklist applied to every client the same way.",
    },
    {
      /* The deck's fifth card is a verified-bio placeholder; the slot is
         held rather than filled with an invented team description. */
      title: "Experienced SEO Specialists",
      desc: "Genuine details on who works on your account and their SEO experience are added here once confirmed.",
      pending: true,
    },
  ],
};

export const SEO_WHEN = {
  title: "When Are Professional SEO Services the Right Investment?",
  intro: "SEO tends to make sense when:",
  checks: [
    "People already search for what you sell",
    "Competitors are capturing valuable search demand you are missing",
    "Organic growth has plateaued despite ongoing effort",
    "Paid acquisition costs are rising",
    "Your site has strong offers but weak search visibility",
    "You want a channel that compounds over time rather than stopping when spend stops",
    "An internal marketing team needs specialist SEO support",
  ],
  close:
    "It isn't automatically the right investment for every business at every stage. If you need customers immediately or there's very little search demand for what you sell, another channel may deserve attention first, and we'll tell you if that's what we see.",
};

export const SEO_FAQS = [
  {
    q: "What are professional SEO services?",
    a: "An ongoing, managed approach to organic search rather than a one-off task like a title tag update or a single audit. It combines strategy, technical work, content, internal linking, authority building and implementation, prioritized around the pages and searches that matter most to your business.",
  },
  {
    q: "What is included in SEO services?",
    a: "Typically technical SEO, keyword and search strategy, on-page improvements, content strategy, internal linking, link building and digital PR, implementation and reporting. The exact scope depends on your site's condition, competition and goals, which is why we start with an audit rather than a fixed package.",
  },
  {
    q: "How much do professional SEO services cost?",
    a: "Cost depends on your site's size, competitiveness, target markets, technical complexity, content needs and how much implementation work is required. A newer site with light competition needs less investment than an established, multi-market business with existing technical problems. We provide a specific quote after reviewing your situation.",
  },
  {
    q: "How long does SEO take to produce results?",
    a: "Early movement can appear within the first few months, but meaningful results depend on your current authority, technical health, competition, search demand and how quickly changes can be implemented. We won't guarantee a specific timeline, but we'll tell you what's realistic after reviewing your site.",
  },
  {
    q: "How do you measure SEO performance?",
    a: "Primarily organic leads, conversions, transactions and revenue where measurable, alongside qualified traffic and conversion rate on your priority pages. Rankings and traffic are tracked too, but as supporting indicators rather than the main measure of success.",
  },
  {
    q: "Do you guarantee SEO rankings?",
    a: "No. No reputable SEO provider can guarantee a specific Google ranking, because search engines control their own results. What we can control is the quality of the technical work, content, structure and authority building behind your site, and we focus on those.",
  },
  {
    q: "Does Search Nexio implement SEO recommendations?",
    a: "Yes. We prioritize the findings from strategy and audit work and carry out the changes directly wherever access allows, rather than leaving a list of recommendations for your team to build.",
  },
  {
    q: "Does SEO still work with AI search?",
    a: "Yes. Traditional search is still where most commercial search demand lives, and the fundamentals that support it, clear content, strong structure and genuine authority, are largely the same ones that help a brand get discovered and cited in AI-assisted search.",
  },
  {
    q: "Can Search Nexio work with our in-house marketing team?",
    a: "Yes. We regularly support internal marketing, content and development teams, providing strategy, prioritization and specialist execution alongside the work your team already handles.",
  },
];

export const SEO_FINAL = {
  title: "Find Out What Is Limiting Your Organic Growth",
  accent: "Organic Growth",
  body: "Competitors, technical issues, weak landing pages and unclear priorities can all quietly limit organic growth at the same time. We review your site to find out which of these is actually holding you back, and prioritize the work by commercial impact.",
};
