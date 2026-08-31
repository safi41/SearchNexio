/* SEO Recovery Services page copy. Wording is the client's final PDF copy,
   unchanged. The PDF's implementation notes cap the page at four CTA
   placements (hero, post-diagnosis, post-measurement banner, final form)
   and forbid a placeholder case study, so no results section exists. */

export const R_ROUTES = {
  assessment: "#recovery-assessment",
  aiSeo: "/ai-search-optimization-services/",
  seoServices: "/services/",
};

export const RECOVERY_CTA = "Request an SEO Recovery Assessment";

export const RECOVERY_HERO = {
  eyebrow: "SEO Recovery",
  title: "SEO Recovery Services",
  accent: "Recovery",
  intro:
    "Lost organic traffic, rankings or leads? Search Nexio finds where the decline started, what caused it and which pages are worth recovering first. We separate algorithmic, technical, content, migration and search-result issues before recommending changes.",
  /* Where the traffic went: Google at the hub, the surfaces that now absorb
     or redistribute clicks around it. */
  orbit: [
    { title: "AI Overviews", sub: "answer features above the results", icon: "overview" },
    { title: "ChatGPT", sub: "AI-assisted discovery", icon: "chatgpt" },
    { title: "Gemini", sub: "AI-assisted discovery", icon: "gemini" },
    { title: "Perplexity", sub: "AI-assisted discovery", icon: "perplexity" },
    { title: "Bing", sub: "secondary search visibility", icon: "bing" },
    { title: "Local results", sub: "map packs and local features", icon: "maps" },
  ],
};

export const RECOVERY_DROPPED = {
  title: "Your Organic Traffic Dropped. Find Out Why Before You Fix It.",
  paras: [
    "A traffic decline is a symptom, not a diagnosis. One site may lose visibility after a Google update. Another may lose important URLs during a migration. A third may keep similar rankings but receive fewer clicks because the search results changed.",
    "The wrong response is to rewrite every page, disavow links, publish more content or change site architecture without knowing what caused the loss. We first establish when the decline began, where it is concentrated and which signals changed. Then we prioritize recovery around the pages and searches that matter commercially.",
  ],
};

/* SEO recovery may be right for you if: six signals, verbatim. */
export const RECOVERY_FIT = {
  eyebrow: "SEO recovery may be right for you if",
  items: [
    {
      title: "Google update loss",
      desc: "Traffic or rankings fell around a core or spam update.",
    },
    {
      title: "Migration or redesign",
      desc: "Organic performance dropped after a CMS change, replatform or URL restructure.",
    },
    {
      title: "Important pages disappeared",
      desc: "Commercial URLs lost indexation, rankings or search visibility.",
    },
    {
      title: "No clear explanation",
      desc: "Traffic declined even though no obvious site change explains it.",
    },
    {
      title: "Clicks fell, rankings did not",
      desc: "Positions look similar but CTR and organic sessions are down.",
    },
    {
      title: "Previous SEO caused problems",
      desc: "Content, links, redirects or technical changes created new risk.",
    },
  ],
};

/* What causes organic traffic and rankings to drop: seven causes. The AI
   SEO link inside the last cause is the PDF's own internal link. */
export const RECOVERY_CAUSES = {
  title: "What Causes Organic Traffic and Rankings to Drop?",
  causes: [
    {
      key: "updates",
      icon: "pulse",
      title: "Google Core and Spam Updates",
      desc: "We compare the timing of the decline with affected page types, query groups and competitor movement. We do not assume every algorithmic drop is a penalty or claim there is one hidden factor behind a broad update.",
    },
    {
      key: "migration",
      icon: "route",
      title: "Website Migrations and Redesigns",
      desc: "Traffic can fall when redirects are incomplete, internal links change, content is removed, canonicals break or important URLs become harder to crawl and index. We compare the old and new site states to find what was lost.",
    },
    {
      key: "technical",
      icon: "wrench",
      title: "Technical and Indexing Problems",
      desc: "Noindex directives, robots rules, canonical errors, rendering failures, duplicate URLs and broken internal links can weaken important pages quickly. Recovery focuses on failures that match the timing and pattern of the decline.",
    },
    {
      key: "content",
      icon: "doc",
      title: "Content Quality and Search Intent Changes",
      desc: "Pages can decline when search intent changes, content becomes outdated, competitors answer the query better or multiple URLs compete with each other. We decide whether the right response is improvement, consolidation, repositioning or removal.",
    },
    {
      key: "authority",
      icon: "link",
      title: "Lost Authority and Backlinks",
      desc: "Rankings can weaken when valuable links disappear, backlinks point to retired URLs or competitors build stronger authority. We focus on material authority changes rather than treating every unfamiliar link as toxic.",
    },
    {
      key: "manual",
      icon: "flag",
      title: "Manual Actions and Spam Issues",
      desc: "A manual action is different from an algorithmic decline because Google identifies the issue directly in Search Console. We review the affected area, correct the underlying policy or spam problem and support the reconsideration process where appropriate.",
    },
    {
      key: "serp",
      icon: "layout",
      title: "Search Results Changed",
      desc: "AI Overviews, featured elements, local results and other SERP changes can reduce clicks even when average positions remain similar. If AI-assisted discovery is part of the issue, our AI SEO services cover the dedicated optimization work.",
      /* "AI SEO services" carries the PDF's internal link. */
      linkAnchor: "AI SEO services",
      linkHref: R_ROUTES.aiSeo,
    },
  ],
};

/* How we diagnose an SEO traffic drop: five numbered steps. */
export const RECOVERY_DIAGNOSE = {
  title: "How We Diagnose an SEO Traffic Drop",
  steps: [
    {
      title: "Establish When the Decline Started",
      desc: "We compare Search Console, analytics, ranking history and major site changes to identify the point where performance changed. This helps separate a sudden event from a gradual decline and narrows the credible causes.",
    },
    {
      title: "Identify Which Pages and Queries Lost Visibility",
      desc: "We segment the loss by landing page, directory, topic, query type, country, device and branded versus non-branded search. A sitewide decline requires a different investigation from a problem isolated to one folder or a few commercial pages.",
    },
    {
      title: "Separate Ranking Loss From Click Loss",
      desc: "We compare impressions, positions, clicks, CTR and indexation. Falling positions, stable rankings with lower CTR and disappearing indexed URLs point to different problems and require different fixes.",
    },
    {
      title: "Test the Most Likely Causes",
      desc: "We review the technical state, content, migration history, internal architecture, backlinks, competitor movement and update timing against the actual pattern of loss. The goal is a small set of evidence-backed causes, not a long audit where every issue is treated equally.",
    },
    {
      title: "Prioritize the Losses That Affect Revenue",
      desc: "Not every lost keyword deserves the same effort. We prioritize commercial pages and queries that previously influenced leads, sales, signups or pipeline, so recovery work starts where the business impact is highest.",
    },
  ],
};

/* Post-diagnosis CTA, one of the PDF's four sanctioned placements. */
export const RECOVERY_MID_CTA = {
  eyebrow: "Not sure what caused the drop?",
  body: "Send us your website and the approximate date performance declined. We will identify what needs investigation first and whether the problem is suitable for a recovery engagement.",
};

/* Choose the level of recovery support you need: three tiers. */
export const RECOVERY_LEVELS = {
  title: "Choose the Level of Recovery Support You Need",
  tiers: [
    {
      title: "Recovery Assessment",
      desc: "Root-cause analysis, affected-page and query review, and a prioritized recovery plan. Best for teams that can implement recommendations internally.",
    },
    {
      title: "Recovery + Implementation",
      desc: "Diagnosis plus implementation of approved technical, content, redirect, internal-link and structural fixes where access permits.",
    },
    {
      title: "Ongoing Recovery Support",
      desc: "Continued remediation, monitoring and iteration for broader algorithmic, content or authority-related losses that cannot be resolved in one implementation cycle.",
    },
  ],
};

/* Our SEO recovery process: four steps. */
export const RECOVERY_PROCESS = {
  title: "Our SEO Recovery Process",
  steps: [
    {
      title: "Recovery Audit",
      desc: "Build the decline timeline, isolate affected areas and test the causes that fit the data.",
    },
    {
      title: "Prioritized Roadmap",
      desc: "Sequence the fixes by urgency, commercial impact and dependency. Low-value work is pushed down the list.",
    },
    {
      title: "Implementation",
      desc: "Apply the approved fixes directly where access allows instead of stopping at recommendations.",
    },
    {
      title: "Validation and Monitoring",
      desc: "Track crawling, indexation, rankings, clicks and business outcomes against the affected page and query groups.",
    },
  ],
};

/* Two recovery scenarios, each two paragraphs, verbatim. */
export const RECOVERY_SCENARIOS = [
  {
    key: "algorithm",
    title: "Google Algorithm Update Recovery",
    paras: [
      "If traffic or rankings fell around a Google core or spam update, we do not begin with a generic list of best practices. We identify which page groups and query types were affected, what changed in the competing results and which quality, relevance, technical or authority issues are most consistent with the pattern.",
      "There is no reliable way to promise that one change will reverse an algorithmic decline or that recovery will happen on a fixed date. We build the strongest evidence-based recovery plan, implement it correctly and measure whether the affected visibility returns as Google recrawls and reprocesses the site.",
    ],
  },
  {
    key: "migration",
    title: "SEO Recovery After a Website Migration or Redesign",
    paras: [
      "If traffic dropped after a migration, redesign or replatform, the timeline itself gives us an important clue. We compare old and new URLs, redirects, canonicals, internal links, sitemaps, templates, page content and indexation to find what changed during launch.",
      "The goal is not to recreate the old website. It is to restore search signals and page relationships that were unintentionally lost while keeping the improvements the new site was meant to deliver. If you are planning a future migration, that is a separate prevention-focused engagement.",
    ],
  },
];

/* How we measure SEO recovery: four measures plus the closing separation
   note, verbatim. */
export const RECOVERY_MEASURE = {
  title: "How We Measure SEO Recovery",
  items: [
    {
      title: "Search Visibility",
      desc: "Impressions, ranking distribution and the page and query groups affected by the decline.",
    },
    {
      title: "Organic Traffic",
      desc: "Whether qualified organic clicks and sessions return to the pages that lost visibility.",
    },
    {
      title: "Technical Validation",
      desc: "Crawling, canonicalization, indexation and related signals where technical failures caused the loss.",
    },
    {
      title: "Leads, Sales and Pipeline",
      desc: "Where tracking allows, we connect restored visibility with enquiries, transactions, demos, signups or pipeline.",
    },
  ],
  note: "If rankings remained stable while search behavior changed, we separate traditional ranking recovery from visibility changes caused by SERP features and AI-assisted search so the wrong problem is not being measured.",
};

/* Post-measurement banner, the PDF's third CTA placement. */
export const RECOVERY_BANNER = {
  title: "Lost Traffic but Still Not Sure What Caused It?",
  body: "Send us your website and the approximate date performance declined.",
};

/* Why choose Search Nexio for SEO recovery: four points plus the
   growth-continuation line carrying the professional SEO services link. */
export const RECOVERY_WHY = {
  title: "Why Choose Search Nexio for SEO Recovery?",
  points: [
    {
      title: "Diagnosis Before Recommendations",
      desc: "We do not begin with a standard package of content, links or technical fixes. The plan is built around the pattern of the decline and the evidence that explains it.",
    },
    {
      title: "Recovery Prioritized by Business Impact",
      desc: "A lost commercial landing page and an old blog post are not equal. We prioritize the pages and queries most likely to affect leads, sales or revenue.",
    },
    {
      title: "Implementation, Not Just an Audit",
      desc: "Where access allows, we can carry the recovery work through implementation instead of leaving your team with another list of recommendations.",
    },
    {
      title: "Google and AI Search Considered Together",
      desc: "We distinguish ranking loss, click loss and changes in AI-assisted discovery so every decline is not forced into the same traditional ranking explanation.",
    },
  ],
  /* "professional SEO services" carries the PDF's internal link. */
  growth:
    "Once recovery work is stable, businesses that want to move from restoring lost performance to building new organic growth can continue with our professional SEO services.",
  growthAnchor: "professional SEO services",
};

/* Founder quote. The PDF's implementation notes allow adding the founder
   name in the final design; it matches the attribution used site-wide. */
export const RECOVERY_QUOTE = {
  eyebrow: "Founder insight",
  quote:
    "SEO recovery is not about changing everything on a site. It is about identifying what actually changed, which losses matter to the business, and fixing the issues supported by the evidence.",
  name: "Hunain Lakhani",
  role: "Founder, Search Nexio",
};

/* FAQs, verbatim. */
export const RECOVERY_FAQS = [
  {
    q: "Why did my organic traffic suddenly drop?",
    a: "Common causes include Google updates, migrations, indexing failures, content or intent changes, lost authority, competitor improvements and changes to the search results themselves. The first step is to identify when and where the decline occurred.",
  },
  {
    q: "Can traffic lost after a Google update be recovered?",
    a: "Sometimes, yes, but recovery is not guaranteed and there is rarely one universal fix. We analyze the pages and queries that lost visibility, correct issues supported by the evidence and monitor how Google responds.",
  },
  {
    q: "How long does SEO recovery take?",
    a: "It depends on the cause. Some redirect or indexing problems can be corrected quickly, although search engines still need time to process changes. Content, authority and algorithm-related recovery can take longer.",
  },
  {
    q: "How much do SEO recovery services cost?",
    a: "Scope depends on the size of the decline, the number of affected page groups, the likely causes and whether you need diagnosis only or implementation as well. We define the recommended engagement after reviewing the site and traffic-loss pattern.",
  },
  {
    q: "Can you recover traffic lost after a website migration?",
    a: "Yes, when the decline is connected to recoverable migration problems such as redirects, lost URLs, canonical errors, internal-link changes, content removal or indexation issues. We compare pre- and post-migration states to identify what was lost.",
  },
  {
    q: "Do you handle Google penalties and manual actions?",
    a: "Yes. If Search Console shows a manual action, we identify the affected pages or practices, correct the underlying issue and support the reconsideration process where appropriate. If no manual action exists, we investigate whether the decline is algorithmic, technical or caused by another change.",
  },
  {
    q: "How do you know whether a traffic drop is technical or algorithmic?",
    a: "We compare timing, affected page groups, indexation, crawl data, site changes, Search Console patterns, ranking movement and known Google updates. More than one cause can be involved.",
  },
  {
    q: "Can rankings stay stable while organic traffic declines?",
    a: "Yes. CTR can fall even when positions remain similar if SERP layouts change, more answer features appear, AI Overviews satisfy part of the query or search behavior shifts.",
  },
  {
    q: "Is SEO recovery different from regular SEO?",
    a: "Yes. Regular SEO is primarily about improving and expanding organic visibility. SEO recovery begins with an existing loss, determines why performance declined and prioritizes remediation before broader growth work begins.",
  },
];

/* Final CTA + form, the PDF's fourth placement. */
export const RECOVERY_FINAL = {
  title: "Find Out What Caused Your Organic Traffic Drop",
  accent: "Organic Traffic Drop",
  body: "If organic traffic, rankings or leads have declined, send us the website and the approximate date the drop began. We will review where the loss occurred, what needs investigation first and whether the problem is suitable for an SEO recovery engagement.",
  submit: RECOVERY_CTA,
};
