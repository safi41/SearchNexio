/* Ecommerce SEO Services page copy. Wording is the client's final copy
   deck, unchanged. The proof blocks are intentional placeholders: the deck
   ships with [Insert verified ecommerce result] and two [Insert verified
   ecommerce case study] slots, and nothing here may present an invented
   figure, client name or case study in their place. */

/* Link targets. The deck specifies exactly one internal link, to the AI SEO
   page. Anything not built yet stays inert ("#") so the static export
   produces no broken links. */
export const E_ROUTES = {
  review: "#ecommerce-review",
  process: "#ecommerce-process",
  aiSeo: "/ai-search-optimization-services/",
};

export const ECOM_HERO = {
  eyebrow: "Ecommerce SEO agency",
  title: "Ecommerce SEO Services That Drive Organic Sales",
  /* the indigo accent phrase, matched against the title */
  accent: "Organic Sales",
  intro:
    "Paid ads shouldn't carry your entire acquisition strategy. Our ecommerce SEO services fix the category, collection and product pages losing you organic revenue, and prioritize the work by commercial impact rather than keyword count.",
  primaryCta: { label: "Request an Ecommerce SEO Review", href: E_ROUTES.review },
  secondaryCta: { label: "See How We Work", href: E_ROUTES.process },
  platformLine:
    "Ecommerce brands we work with sell across Shopify, WooCommerce, Magento, BigCommerce and headless setups.",
  /* Trust bar. The experience line matches the wording used site-wide
     rather than the deck's narrower ecommerce-specific claim. */
  chips: [
    { title: "10+ Years", sub: "SEO Experience", icon: "chart" },
    { title: "Revenue-led", sub: "Not keyword counts", icon: "target" },
    { title: "Implementation", sub: "Not just an audit", icon: "wrench" },
    { title: "Catalog scale", sub: "Thousands of SKUs", icon: "grid" },
  ],
  /* Five orbit nodes: the platforms the copy names, with Shopify at the
     hub as the most common ecommerce stack. */
  orbit: [
    { title: "WooCommerce", sub: "URL and taxonomy control", icon: "woocommerce" },
    { title: "Magento", sub: "large layered catalogs", icon: "magento" },
    { title: "BigCommerce", sub: "faceted navigation and variants", icon: "bigcommerce" },
    { title: "Headless", sub: "rendering checked manually", icon: "headless" },
    { title: "Google Merchant Center", sub: "product feed consistency", icon: "merchant" },
  ],
};

/* Ecommerce SEO Built Around Revenue, Not Just Rankings. */
export const ECOM_REVENUE = {
  badge: "The argument",
  title: "Ecommerce SEO Built Around Revenue, Not Just Rankings",
  accent: "Revenue",
  paras: [
    "Rankings and traffic are easy to report and easy to misread. A category page can sit on page one and still contribute nothing to revenue if it targets the wrong intent or sends shoppers to a thin, poorly linked page.",
    "We build ecommerce SEO strategy around the pages that generate transactions: categories, collections and priority products. Keyword research, technical fixes and content all get prioritized by the commercial value of the page they support, not by how many keywords they touch.",
  ],
};

/* Ecommerce SEO Results. Placeholder until verified figures are supplied. */
export const ECOM_RESULTS = {
  badge: "Proof",
  title: "Ecommerce SEO Results",
  accent: "Results",
  lead: "Where we have verified ecommerce results, we report the metrics that matter to a store: organic revenue, transactions and non-brand traffic to commercial pages, not just keyword counts or impressions.",
  snapshot: {
    label: "Results snapshot",
    heading: "Verified ecommerce case study available on request",
    body: "Organic revenue, transactions and category growth from a verified engagement are shared during scoping, with the measurement method stated alongside them.",
  },
  /* The metrics the deck names, as labels only. No figures: none supplied. */
  measures: [
    "Organic revenue",
    "Organic transactions",
    "Non-brand organic visibility",
    "Category and product page performance",
    "Organic conversion rate",
    "Qualified organic traffic",
  ],
};

/* Why Ecommerce Stores Need a Different SEO Strategy. */
export const ECOM_DIFFERENT = {
  badge: "Why it differs",
  title: "Why Ecommerce Stores Need a Different SEO Strategy",
  accent: "Different",
  lead: "A ten-page brochure site and a catalog with thousands of SKUs are not the same SEO problem.",
  paras: [
    "Ecommerce sites generate URLs automatically. Every filter combination, product variant and out-of-stock item can create a new page, whether or not it should be indexed. Categories and collections need to rank for broad buying searches while individual products compete for narrower ones, and the two can cannibalize each other if the structure isn't clear.",
    "Inventory changes constantly. Products go out of stock, get discontinued or get replaced, and each change affects crawl paths, internal links and the authority flowing to the pages that matter. On a catalog with thousands of URLs, deciding what to fix first is as important as knowing how to fix it. This is the layer of ecommerce SEO that general website SEO doesn't touch.",
  ],
};

/* Our Ecommerce SEO Services. Nine services, in the deck's order. */
export const ECOM_SERVICES = {
  badge: "What we do",
  title: "Our Ecommerce SEO Services",
  accent: "Services",
  intro:
    "What we work on depends on your catalog, platform and current performance. Here's the core of it.",
  items: [
    {
      key: "strategy",
      diagram: "pagetype",
      title: "Ecommerce SEO Strategy and Keyword Research",
      desc: "We map search demand to the right page type: broad buying searches to categories, specific searches to products, and comparison or research searches to supporting content. Opportunities are then prioritized by search volume, competition and the commercial value of the page they'd support.",
    },
    {
      key: "category",
      diagram: "cannibalization",
      title: "Category and Collection Page SEO",
      desc: "Category and collection pages usually carry more commercial weight than individual products, because they match the broad searches shoppers use before settling on a specific item. We work on search intent alignment, category and subcategory structure, unique category content, internal linking between related collections, and resolving keyword cannibalization where several pages compete for the same search.",
      close:
        "For many stores, category and collection SEO is one of the strongest organic growth opportunities.",
    },
    {
      key: "product",
      diagram: "product",
      title: "Product Page SEO",
      desc: "Product pages need to match what a shopper is actually trying to decide, not just describe the item. We work on search intent, product information depth, titles, internal links from relevant categories and content, structured data, and how reviews and variants are handled, along with a plan for discontinued or out-of-stock products so they don't quietly damage crawl paths or link equity.",
    },
    {
      key: "technical",
      diagram: "crawl",
      title: "Technical Ecommerce SEO",
      desc: "Ecommerce sites lose organic revenue to problems that don't show up in a normal audit: filters and parameters generating thousands of near-duplicate URLs, faceted navigation consuming crawl budget on pages that shouldn't be indexed, canonical tags pointing the wrong way after a platform update, pagination fragmenting authority across a category, or a migration that quietly dropped internal links to priority pages.",
      close:
        "We fix crawlability, indexation, canonicalization, sitemaps, site performance and JavaScript rendering issues where they affect what Google can see and rank, and we protect organic traffic through platform changes and migrations.",
    },
    {
      key: "architecture",
      diagram: "architecture",
      title: "Ecommerce Site Architecture and Internal Linking",
      desc: "Search engines and shoppers should be able to move the same way through your store: homepage to category, category to subcategory, subcategory to product. We structure internal linking so authority flows toward the categories and products that generate the most revenue, rather than spreading evenly across every page in the catalog.",
    },
    {
      key: "content",
      diagram: "content",
      title: "Ecommerce Content Strategy",
      desc: "Content exists to support commercial pages, not to run alongside them. Buying guides, product comparisons, use-case pages and FAQs are built to link into the categories and products they're relevant to, so the traffic they attract has somewhere commercial to go. A blog that generates visits with no path to a category or product page isn't doing ecommerce SEO work.",
    },
    {
      key: "authority",
      diagram: "authority",
      title: "Ecommerce Link Building and Digital PR",
      desc: "Authority building is planned around the categories, collections and products that matter commercially, not spread evenly across the domain. We look for coverage and links relevant to your products and industry, and prioritize the pages that would benefit most from additional authority. We don't make backlink-quantity promises.",
      close:
        "Authority building should ultimately strengthen the parts of the site responsible for commercial growth.",
    },
    {
      key: "schema",
      diagram: "schema",
      title: "Product Schema and Google Merchant Center",
      desc: "Product structured data helps Google understand price, availability, ratings and variants directly from your product pages, and it needs to stay consistent with what's in your product feed. We implement and audit product schema, review how variants are represented, and check that pricing and availability data is consistent between your site and Google Merchant Center, since mismatches here affect how products are understood and shown across search.",
    },
    {
      key: "ai",
      diagram: "aisearch",
      title: "Ecommerce SEO for AI Search",
      desc: "Product discovery is no longer limited to a traditional list of results. AI-assisted search experiences draw on the same product data, structured markup and category content we already work on, so making that information clear and consistent benefits both.",
      close:
        "If AI visibility is a priority for your store, this typically sits alongside our AI SEO services rather than replacing core ecommerce SEO work.",
      link: { label: "AI SEO services", href: E_ROUTES.aiSeo },
    },
  ],
};

/* Ecommerce SEO Problems We Solve. Six problems. */
export const ECOM_PROBLEMS = {
  badge: "Where it breaks",
  title: "Ecommerce SEO Problems We Solve",
  accent: "Problems",
  items: [
    {
      title: "Your Category Pages Aren't Ranking",
      body: "Usually a mix of thin category content, weak internal linking, or several pages competing for the same search. We fix the structure and content, then link to the category from pages that actually carry authority.",
    },
    {
      title: "Important Products Aren't Being Indexed",
      body: "Often caused by crawl budget spent on filter and parameter URLs, weak internal linking to the product, or duplicate content across variants. We clean up what Google is crawling and make priority products easier to find.",
    },
    {
      title: "Organic Traffic Isn't Turning Into Sales",
      body: "If traffic is growing but revenue isn't, the pages ranking usually aren't the pages that convert. We check whether the right page type is ranking for the right intent and close the gap.",
    },
    {
      title: "Paid Ads Generate Most of Your Customers",
      body: "Organic search can capture commercial buying searches your paid campaigns are currently paying for. We prioritize the categories and products with the strongest search demand and weakest current organic visibility first.",
    },
    {
      title: "Filters and Variants Are Creating Too Many URLs",
      body: "Every filter combination and variant can generate a new URL, most of which shouldn't be indexed. We decide what should be indexed, canonicalized or excluded so Google focuses on pages worth ranking.",
    },
    {
      title: "Your Catalog Has No Clear SEO Priority",
      body: "With thousands of URLs, trying to fix everything at once usually means fixing nothing well. We rank pages by search demand and commercial value, then work through them in that order.",
    },
  ],
};

/* Mid-page CTA banner. */
export const ECOM_MID_CTA = {
  title: "Not sure what is holding your store back?",
  body: "We can review your categories, products, site structure and technical setup to identify the SEO issues and opportunities worth prioritizing.",
  cta: { label: "Request an Ecommerce SEO Review", href: E_ROUTES.review },
};

/* Ecommerce SEO for Your Platform. Five platforms. */
export const ECOM_PLATFORMS = {
  badge: "Platforms",
  title: "Ecommerce SEO for Your Platform",
  accent: "Platform",
  intro: "We work across the platforms most ecommerce brands run on.",
  items: [
    {
      title: "Shopify SEO",
      icon: "shopify",
      body: "Shopify's URL structure, app ecosystem and collection setup create specific constraints, including limited control over some URL and pagination behavior. We work within those constraints rather than fighting them.",
    },
    {
      title: "WooCommerce SEO",
      icon: "woocommerce",
      body: "WooCommerce gives more direct control over URLs, taxonomies and site structure, which also means more ways for duplicate content and category conflicts to appear if it isn't configured carefully.",
    },
    {
      title: "Magento SEO",
      icon: "magento",
      body: "Magento catalogs are often large and layered with attribute-based navigation, which makes crawl budget, indexation rules and category structure especially important to get right.",
    },
    {
      title: "BigCommerce SEO",
      icon: "bigcommerce",
      body: "BigCommerce sites need the same attention to category structure, faceted navigation and product data consistency as other major platforms, adjusted for how BigCommerce handles URLs and variants.",
    },
    {
      title: "Headless and Custom Ecommerce SEO",
      icon: "headless",
      body: "Headless and custom-built stores need rendering, indexation and site structure checked manually rather than relying on platform defaults, since there's no built-in SEO configuration to fall back on.",
    },
  ],
};

/* How Our Ecommerce SEO Process Works. Five steps. */
export const ECOM_PROCESS = {
  badge: "How we work",
  title: "How Our Ecommerce SEO Process Works",
  accent: "Process",
  steps: [
    {
      n: "01",
      title: "Ecommerce SEO Audit",
      body: "We review your site's technical health, current rankings, category and product structure, internal linking and competitor positioning to identify where organic revenue is being lost.",
    },
    {
      n: "02",
      title: "Search Demand and Revenue Opportunity Mapping",
      body: "We map search demand across your catalog and match it to the right page type, categories for broad buying searches, products for specific ones, then rank opportunities by volume, competition and commercial value.",
    },
    {
      n: "03",
      title: "Technical and On-Page Implementation",
      body: "We implement the fixes ourselves, from canonical tags and indexation rules to category content and internal linking, rather than handing over a list of recommendations for your team to action.",
    },
    {
      n: "04",
      title: "Content and Authority Development",
      body: "We build the content and links that support your priority categories and products, connecting new pages back to the commercial pages they're meant to strengthen.",
    },
    {
      n: "05",
      title: "Measurement and Refinement",
      body: "We track organic revenue, transactions and category or product performance against the roadmap, then adjust priorities based on what's actually moving and what isn't.",
    },
  ],
};

/* What We Measure in Ecommerce SEO. */
export const ECOM_MEASURE = {
  badge: "Measurement",
  title: "What We Measure in Ecommerce SEO",
  accent: "Measure",
  intro:
    "Rankings still matter, but only alongside the metrics that show whether SEO is contributing to the business.",
  /* the same six store metrics the results section names */
  items: ECOM_RESULTS.measures,
  close:
    "We report on these against your priority pages, so it's clear which categories and products are contributing to revenue and which still need work.",
};

/* Why Choose Search Nexio as Your Ecommerce SEO Agency? */
export const ECOM_WHY = {
  badge: "Why Search Nexio",
  title: "Why Choose Search Nexio as Your Ecommerce SEO Agency?",
  accent: "Choose",
  items: [
    {
      title: "Ecommerce-Specific Strategy",
      body: "We prioritize categories, collections and products the way ecommerce SEO actually works, not as an afterthought bolted onto general website SEO.",
      icon: "grid",
    },
    {
      title: "Technical and Content Expertise in One Team",
      body: "The same team handles technical fixes, category and product content, and internal linking, so nothing gets stuck between departments or handed off with gaps.",
      icon: "layers",
    },
    {
      title: "Implementation, Not Just Recommendations",
      body: "We make the changes directly wherever access allows, rather than sending an audit and leaving your team to interpret and build it.",
      icon: "wrench",
    },
    {
      title: "Reporting Tied to Revenue",
      body: "Reports focus on organic revenue, transactions and category or product performance, not just rankings or traffic that don't explain whether SEO is working.",
      icon: "chart",
    },
    {
      title: "Clear Prioritization",
      body: "On large catalogs, you get a ranked list of what we're working on and why, based on commercial value and search demand, not a generic checklist.",
      icon: "target",
    },
  ],
};

/* When Should You Hire an Ecommerce SEO Agency? */
export const ECOM_WHEN = {
  badge: "Timing",
  title: "When Should You Hire an Ecommerce SEO Agency?",
  accent: "Hire",
  intro: "Ecommerce SEO usually becomes a priority when:",
  signals: [
    "Organic sales have plateaued despite consistent effort",
    "Paid advertising is responsible for most new customers",
    "Important categories or collections aren't ranking or converting",
    "A large part of your catalog gets little to no search visibility",
    "You're planning a migration, replatform or redesign",
    "Organic traffic is growing without a matching increase in revenue",
    "Your team needs specialist ecommerce SEO support alongside existing marketing work",
  ],
  close:
    "If any of these sound familiar, it's worth a proper review before deciding what to fix first.",
};

/* Ecommerce SEO FAQs. Copy is verbatim; the JSON-LD mirrors it exactly. */
export const ECOM_FAQS = [
  {
    q: "What is included in ecommerce SEO services?",
    a: "Typically technical SEO, category and collection page optimization, product page SEO, site architecture and internal linking, content that supports commercial pages, link building, and product schema and Merchant Center work. The exact mix depends on your catalog size, platform and current performance, which is why we start with an audit rather than a fixed package.",
  },
  {
    q: "How much do ecommerce SEO services cost?",
    a: "Cost depends on catalog size, platform, current technical condition and how much implementation work is needed. A small catalog with a clean technical setup requires less work than a large, multi-platform store with existing indexation problems. We'll give you a specific quote after an initial review rather than a generic number that doesn't reflect your site.",
  },
  {
    q: "How long does ecommerce SEO take?",
    a: "Meaningful movement can begin within three to six months, but timing depends on site condition, competition, authority, catalog size and implementation speed. We won't guarantee a specific ranking or timeline upfront, but we will tell you what to realistically expect after the audit.",
  },
  {
    q: "Is ecommerce SEO worth it?",
    a: "For most stores relying heavily on paid acquisition, yes. Organic search reaches shoppers actively searching for your categories and products without an ongoing cost per click, and it compounds over time in a way paid traffic doesn't. Whether it's worth it for your specific store depends on your catalog, competition and current visibility.",
  },
  {
    q: "Do you provide Shopify SEO services?",
    a: "Yes. We work with Shopify stores regularly, including the platform-specific constraints around URL structure, collection setup, apps and themes that affect crawlability and indexation.",
  },
  {
    q: "Can you work with large ecommerce websites?",
    a: "Yes. Large catalogs with thousands of SKUs are where prioritization matters most, and it's a core part of how we approach ecommerce SEO, rather than treating every URL the same way.",
  },
  {
    q: "How do you measure ecommerce SEO performance?",
    a: "Primarily organic revenue, transactions, non-brand traffic and conversion rate on your priority categories and products. Rankings are tracked too, but as a supporting metric rather than the main measure of success.",
  },
  {
    q: "Can ecommerce SEO reduce reliance on paid advertising?",
    a: "It can reduce how much of your customer acquisition depends on paid channels by capturing commercial buying searches organically. It won't replace paid advertising entirely, but it gives you a second acquisition channel that doesn't scale in cost the way ads do.",
  },
  {
    q: "Can you support an ecommerce site migration?",
    a: "Yes. Migrations and replatforms are one of the most common causes of ecommerce organic traffic loss, usually from broken redirects, changed URL structures or lost internal linking. We plan and check migrations to protect existing rankings and traffic.",
  },
];

/* Closing CTA. */
export const ECOM_FINAL = {
  accent: "Organic Search",
  body: "Category pages, product pages and technical performance all affect how much of your revenue comes from organic search rather than paid channels. We identify where the opportunity is, prioritize it by commercial value, and do the work to capture it.",
  submit: "Request an Ecommerce SEO Review",
  privacy:
    "We use your details only to prepare and discuss your ecommerce SEO review.",
};
