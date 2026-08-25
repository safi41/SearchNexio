/* Healthcare SEO Services page copy. Wording is the client's final PDF copy,
   unchanged. YMYL-sensitive: no invented statistics, no fabricated patient
   testimonials, no fake client names. Verified-proof placeholders are
   intentional and must be replaced with confirmed data before publication. */

/* Link targets. Pages that do not exist yet stay inert ("#"). */
export const H_ROUTES = {
  audit: "#healthcare-review",
  process: "#healthcare-process",
  localSeo: "/services/local-seo-services/",
  aiSearch: "/ai-search-optimization-services/",
  geo: "/generative-engine-optimization/",
  services: "/services/",
  contact: "/contact/",
  /* not built yet */
  technicalSeo: "#",
  aeo: "#",
  privacy: "#",
  bookCall: "#",
};

export const HC_HERO = {
  eyebrow: "Healthcare search growth",
  title: "Healthcare SEO Services",
  intro:
    "Patients search for treatments, specialists and locations before they call. Search Nexio builds the organic search presence that puts your services in front of those searches, then connects visibility with the calls, appointment requests and bookings that reflect actual patient growth.",
  intro2:
    "We work with medical practices, specialist clinics, multi-location healthcare groups and healthcare organizations where the standard for accuracy, trust and measured results has to be higher than an ordinary commercial SEO engagement.",
  primaryCta: { label: "Request a Healthcare SEO Audit", href: H_ROUTES.audit },
  secondaryCta: { label: "See How We Work", href: H_ROUTES.process },
  /* Hero trust chips. "Privacy aware" rather than any HIPAA claim: the copy
     on this page is explicit that we do not provide compliance guarantees. */
  chips: [
    { title: "Privacy aware", sub: "Measurement by design", icon: "shield" },
    { title: "Patient focused", sub: "Enquiries, not just rankings", icon: "chart" },
    { title: "Multi-location", sub: "Reported per branch", icon: "pin" },
    { title: "Human reviewed", sub: "Before anything ships", icon: "check" },
  ],
  /* The four orbit nodes of the patient-acquisition loop, clockwise from
     the top. Labels sit outside the ring on the node's own side. */
  /* Four orbit nodes: the platforms patients actually use to find and
     evaluate a provider. Brand marks in each service's own colour. */
  orbit: [
    { title: "Google", sub: "treatment, specialist and location searches", icon: "google", side: "top" },
    { title: "Healthgrades", sub: "provider profiles and ratings", icon: "healthgrades", side: "right" },
    { title: "Zocdoc", sub: "appointment booking searches", icon: "zocdoc", side: "bottom" },
    { title: "WebMD", sub: "symptom and condition research", icon: "webmd", side: "left" },
  ],

};

/* Search should bring patients. */
export const HC_BRING_PATIENTS = {
  title: "Search Should Bring Patients",
  paras: [
    "Rankings and traffic are diagnostic measures. They tell you whether the SEO is working at the visibility layer. The outcome that matters to a healthcare practice is different: did the right patient find the right treatment page, trust what they read, and take the next step?",
    "A counseling practice can hold page-one positions for dozens of therapy-related searches and still generate fewer patient calls than a competitor ranked fourth, because the fourth-ranked competitor's pages load faster, explain the practice's approach more clearly, and make booking a first appointment easier.",
    "Search Nexio connects organic visibility with the actions that follow. Which searches produce calls. Which treatment pages generate appointment requests. Which locations drive qualified enquiries. Which providers are being found and which are invisible despite available appointment slots. Traffic matters when it leads somewhere. The work we do is designed to build toward that, not stop at rankings.",
  ],
  snapshot: {
    label: "Results snapshot",
    heading: "Verified result available on request",
    body: "Client type, the challenge, what changed, the verified result, time period and measurement method are shared during scoping.",
    note: "Only figures the client would confirm are published.",
  },
};

/* How patients search for care: four stages. */
export const HC_SEARCH_STAGES = {
  intro:
    "Most healthcare organizations think of their keyword strategy in terms of their services. Patients think in terms of their situation. The gap between those two perspectives is where most healthcare SEO strategies miss.",
  stages: [
    {
      name: "Symptoms and conditions",
      query: "why does my shoulder ache at night",
      desc: "A patient does not usually type the name of a specialty or the formal clinical term for their condition. They describe what they are experiencing. This is valuable traffic to understand, it defines the beginning of the care-seeking journey, but it does not automatically translate into appointment demand.",
    },
    {
      name: "Treatments and procedures",
      query: "cognitive behavioral therapy for anxiety",
      desc: "Treatment and procedure searches sit closer to care decisions. A patient researching GLP-1 weight loss injections, hip replacement recovery or cognitive behavioral therapy for anxiety has often already done their early research and is now comparing options, understanding what is involved, and evaluating which providers handle that specific need. These searches have higher patient intent, and the pages that serve them well produce the most qualified enquiries. Treatment page quality is one of the most consistently underinvested areas in healthcare websites, and it is one of the highest-leverage opportunities in healthcare SEO.",
    },
    {
      name: "Doctors and specialists",
      query: "doctor accepting new patients",
      desc: "Provider searches are among the highest-intent healthcare queries. A patient searching for a specific type of specialist, a named physician, or a doctor accepting new patients is usually close to making contact. The challenge is that most healthcare websites make it harder than necessary to find this information: provider pages that bury location details, specialty pages that do not connect to individual practitioners, and GBP profiles that route to a generic homepage rather than a scheduling page.",
    },
    {
      name: "Locations and availability",
      query: "specialist near me",
      desc: "Geographic searches are appointment-ready. The patient has decided they need care and is filtering by proximity. If the page they find does not immediately surface hours, location details, and a booking path, the opportunity is lost. Availability signals, accepting new patients, telehealth options, appointment types, are increasingly part of how patients filter their options in search results.",
    },
  ],
};

/* Why healthcare SEO is different: four text-led cards. */
export const HC_DIFFERENT = {
  intro:
    "Healthcare search is not more complex because of the volume of keywords. It is more complex because the standards for accuracy, trust, provider structure, and responsible measurement are higher than in most commercial categories.",
  cards: [
    {
      title: "Medical trust matters",
      desc: "A patient reading about a treatment option, a medication side effect, or a mental health condition is often in a vulnerable position. Content that is inaccurate, poorly sourced, or written purely to rank can affect real decisions about care. Healthcare content that makes substantive medical or clinical claims carries a higher expectation around clear authorship, credible sourcing, appropriate expertise, and the need for clinical review where the nature of the claim warrants it. Google says its systems use a mix of signals associated with experience, expertise, authoritativeness and trust, with stronger weight given to trust-related signals for topics that can significantly affect health. E-E-A-T is not a single ranking factor. Search Nexio does not summarize it as an SEO formula. It is a practical standard for how medical content should be produced, and we work within each client's clinical governance process where review is appropriate.",
    },
    {
      title: "Patient intent matters",
      desc: "A healthcare organization that ranks for a high-volume symptom keyword but whose treatment pages have no clear booking path has not acquired a patient. It has acquired a visitor. Search Nexio builds keyword strategies around the searches that are most likely to produce qualified patient enquiries for the treatments and locations the organization actually wants to grow. Volume is a secondary consideration after intent, commercial relevance, and the realistic path from that search to an appointment.",
    },
    {
      title: "Privacy matters",
      desc: "Healthcare measurement requires more careful configuration than a standard commercial website. Analytics events that capture patient-identifiable information, booking confirmation pages being tracked carelessly, or call tracking that records protected details all create exposure that a healthcare organization's legal and compliance team needs to be aware of. We do not give legal advice, and healthcare organizations remain responsible for determining their obligations with qualified legal counsel.",
    },
    {
      title: "Provider structure matters",
      desc: "A large general practice, a specialist group with multiple physicians, and a hospital system all have fundamentally different search architectures. If those presences are not structured deliberately, they compete with each other, produce inconsistent information in Google's index, and create patient confusion about where to direct an appointment request. Search Nexio maps the full search entity structure and identifies the points of conflict, cannibalization, and missed opportunity that generic SEO strategies rarely surface.",
    },
  ],
};

/* What our healthcare SEO includes: eleven services. */
export const HC_SERVICES = [
  {
    key: "strategy",
    title: "Patient search strategy",
    desc: "We research the searches patients are actually conducting in your service categories, not just the keywords your competitors are targeting. This covers treatment-specific searches, specialty queries, provider searches, symptom and condition research, location-based intent, and the booking-ready queries that sit at the bottom of the patient search journey. Every keyword is mapped to a page, an intent stage, and an estimated value to the practice.",
    deliverable:
      "A patient search map showing priority queries by intent stage, service line, and location, with specific page assignments and a rationale for each prioritization decision.",
  },
  {
    key: "content",
    title: "Medical content SEO",
    desc: "Treatment pages, condition pages, and specialty pages are the commercial core of a healthcare website. We review existing content against the searches patients are using, the quality of the information provided, the clarity of the call to action, and the standards appropriate for the medical nature of the content. For new content, we develop detailed briefs that define the target patient query, the intended search intent, the clinical accuracy requirements, and the recommended page structure.",
    limit:
      "We do not provide medical advice, and we do not replace the clinical judgment of qualified providers.",
  },
  {
    key: "local",
    title: "Local patient discovery",
    desc: "Patients search for care the way they search for everything else: with a location in mind, often on a mobile device, frequently using near me language or implicit geographic intent. We improve the local search presence of healthcare organizations through Google Business Profile management, location page optimization, local keyword strategy, citation accuracy, review workflows, and the technical setup that connects the website's location information with Google's local signals. For healthcare organizations managing several locations or practitioners with their own eligible profiles, we also review where profile conflicts or cannibalization may be limiting local visibility.",
    link: { label: "Local SEO services", href: H_ROUTES.localSeo },
  },
  {
    key: "provider",
    title: "Provider and practice SEO",
    desc: "Provider pages can become some of the highest-intent pages on a healthcare website when they are built and indexed correctly. We audit provider pages for search visibility, content quality, and conversion effectiveness. We map how individual practitioners connect to locations, specialties, and treatment pages, and identify where provider pages may be competing against each other or against the parent organization's pages for the same searches. Where providers change locations or leave a practice, we advise on how to handle those changes in a way that protects the search equity in existing pages and avoids creating orphaned or misleading content.",
    diagram: true,
  },
  {
    key: "treatment",
    title: "Treatment page optimization",
    desc: "A treatment page that ranks without converting is a visibility success and an acquisition failure. We evaluate treatment pages against the patient questions that search behavior reveals: what does the procedure involve, who performs it, what should I expect, how do I book. We review appointment CTAs, phone number visibility, online booking integration, provider availability signals, and location information.",
  },
  {
    key: "multilocation",
    title: "Multi-location healthcare SEO",
    desc: "Healthcare groups with several clinics, hospital systems with multiple campuses, and specialty practices with several locations face challenges that single-location practices do not encounter. Individual locations may rank strongly for nearby searches while distant locations are invisible. Location pages may be duplicated across the website with only the address changed. Provider pages may not correctly indicate which location a physician operates from. We manage multi-location healthcare SEO at the location level: separate keyword research for each clinic's market, location-specific content that reflects the services actually available there, individual GBP management, and location-level reporting that shows how each branch performs rather than averaging results.",
  },
  {
    key: "technical",
    title: "Technical healthcare SEO",
    desc: "Healthcare websites often carry technical complexity that affects how well their content is discovered and indexed. Provider directories built on JavaScript frameworks that search engines cannot fully crawl. Booking widgets that create duplicate URLs or prevent proper indexation of appointment pages. Location pages that share content across branches with only an address changed. We audit the technical foundation with attention to the structural issues specific to healthcare.",
    link: { label: "Technical SEO services", href: H_ROUTES.technicalSeo },
  },
  {
    key: "authority",
    title: "Healthcare authority building",
    desc: "We identify the healthcare publications, professional associations, local health organizations, specialty directories, and digital PR opportunities most relevant to the client's specialty and geography. Where providers have clinical expertise that could be communicated through expert commentary, research contributions, or professional organization participation, we map those opportunities as part of the authority-building plan. This is not a backlink-count exercise.",
  },
  {
    key: "reviews",
    title: "Patient reviews and reputation",
    desc: "Reviews of healthcare organizations can attach to a practice, to an individual practitioner, or to a specific location, and managing them consistently across all three requires more coordination than most practices invest in. We build review request workflows that are appropriate, consistent, and policy-compliant: systems that make it easy for satisfied patients to share their experience without pressure, gating, or incentive. We monitor review performance by location and by provider, advise on response practices that protect patient privacy, and help organizations manage their reputation across the platforms most relevant to patient research.",
    limit:
      "We do not remove legitimate negative reviews, recommend incentivized reviews, or create systems that filter patients by expected sentiment before requesting a review.",
  },
  {
    key: "booking",
    title: "Booking conversion optimization",
    desc: "An increase in organic traffic that produces no increase in patient calls usually points to a conversion problem, not an SEO problem. We review the experience a patient has after they arrive from a search: how visible the phone number is, whether the booking path requires too many steps, whether mobile patients can navigate easily to an appointment, whether provider pages make it clear how to book a specific physician. Small friction reductions in the booking path can produce measurable increases in contact rate without any additional SEO investment.",
  },
  {
    key: "tracking",
    title: "Patient acquisition tracking",
    desc: "We implement call tracking, form tracking, and online booking attribution that connects patient contacts to the search sources that produced them. Reporting covers call volume by source, appointment requests by page and service line, location-level organic performance, and revenue where reliable attribution exists through the client's CRM or practice management system.",
    limit:
      "Healthcare measurement requires careful configuration. Not every patient interaction can be perfectly attributed. Patients often research online and call through a number that bypasses tracking. We are transparent about those gaps and recommend clients review any tracking configuration with their legal or compliance team where HIPAA-related considerations apply.",
  },
  {
    key: "ai",
    title: "AI assisted patient discovery",
    desc: "Patients are increasingly using AI tools at some point in their health research. For AI systems to represent a healthcare organization accurately, the organization's entity signals need to be clear: what the practice does, who the providers are, what their credentials are, what specialties and treatments are offered, and which locations serve which service areas. Fragmented information, conflicting descriptions across the web, and missing entity data all reduce the likelihood that AI systems retrieve and represent the organization accurately. We assess how AI systems currently represent healthcare clients and address the structural issues that affect accurate AI representation.",
    limit:
      "We do not guarantee AI recommendations for any healthcare organization, and accurate AI representation depends on many signals beyond any single agency's control.",
    link: { label: "AI SEO services", href: H_ROUTES.aiSearch },
    link2: { label: "GEO services", href: H_ROUTES.geo },
  },
];

/* Testimonial placeholder. Held until a real approved video or written
   testimonial exists; nothing is manufactured. */
export const HC_TESTIMONIAL = {
  title: "What Our Clients Say",
  heading: "Client testimonial available on request",
  body: "We publish testimonials only in the client's own words, with their name, role and organization, alongside a verified result. One specific, verified testimonial is worth more than a carousel of vague five-star quotes.",
};

/* Healthcare SEO results. Held until verified. */
export const HC_RESULTS = {
  title: "Healthcare SEO Results",
  cards: [
    {
      label: "Case study",
      heading: "Case study available on request",
      body: "Challenge, strategy, verified result with time period and measurement method, and the attribution note describing what the result does and does not capture.",
    },
    {
      label: "Case study",
      heading: "Case study available on request",
      body: "We measure call growth, appointment request increases and treatment page visibility. Verified results are shared in the discovery call rather than estimated here.",
    },
  ],
};

/* Who we help: six audience cards. */
export const HC_AUDIENCES = [
  {
    name: "Medical practices",
    desc: "Single-location and small group practices typically have a core set of high-value treatments they want to grow, a primary service area where local search matters most, and a limited team that cannot manage complex SEO programs internally. The most common problem is that existing organic visibility is either absent or concentrated in informational searches that do not produce calls.",
  },
  {
    name: "Multi-location groups",
    desc: "Healthcare groups managing several locations face a version of every local SEO problem multiplied. Each location needs its own local search presence, its own provider pages connected correctly to that site, and its own performance tracking. Without a structured program, the locations that receive attention perform well while others remain effectively invisible.",
  },
  {
    name: "Behavioral health",
    desc: "Counseling practices, psychology groups, and behavioral health organizations have a specific challenge: their patients are often searching using symptom language that is highly informational, while the commercial value sits in the searches that identify the specific therapy approach or the practitioner type being sought. Behavioral health content also requires particular care around accuracy and sensitivity.",
  },
  {
    name: "Dental practices",
    desc: "Dental practices compete intensely in local search. The practices that perform well locally tend to have the most complete and consistent GBP profiles, the strongest review activity, and the clearest treatment pages, particularly for higher-value procedures like implants, orthodontics, and cosmetic dentistry where the patient's evaluation process is longer.",
  },
  {
    name: "Telehealth providers",
    desc: "Telehealth practices can serve patients across a state or multiple states, which changes the geographic scope of the keyword strategy entirely. Without physical location signals, ranking for location-based searches requires a different approach: content relevance, state-level page architecture, and provider pages that make geographic eligibility explicit.",
  },
  {
    name: "Hospitals and health systems",
    desc: "Larger healthcare organizations often have internal marketing teams who need a specialist SEO partner rather than a generalist agency. The challenges at this scale include managing hundreds of provider pages, ensuring the overall organization's search presence does not compete with individual department or location pages, and handling site migrations without losing search authority built over years.",
  },
];

/* Built for healthcare trust: four cards. */
export const HC_TRUST = [
  {
    title: "Medical review workflows",
    desc: "When healthcare content makes substantive clinical claims, appropriate expert review becomes a matter of patient safety, not just SEO. Search Nexio coordinates the content production workflow with each client's clinical or compliance team to ensure that the review step occurs where it is needed and is documented in the content audit trail. We do not provide clinical review ourselves, and our role in this process is coordination, not clinical judgment.",
  },
  {
    title: "Clear authorship",
    desc: "Healthcare content performs better, and serves patients better, when the people responsible for producing and reviewing it are identified. We advise on how to structure authorship and reviewer attribution across healthcare content in a way that accurately represents who contributed to each piece, rather than adding credential decorations that do not reflect actual involvement.",
  },
  {
    title: "Credible sourcing",
    desc: "Health information that is presented without the basis for its claims provides less patient value than the same information grounded in clinical evidence, published research, or recognized clinical guidelines. This is not primarily about satisfying an algorithm. A patient researching a treatment decision is better served by content that tells them where the information comes from.",
  },
  {
    title: "Privacy aware measurement",
    desc: "Analytics implementations that were designed for e-commerce may not be appropriate for healthcare. We review existing analytics and tracking configurations against healthcare-appropriate privacy standards, identify the gaps, and recommend adjustments that preserve measurement capability while minimizing unnecessary collection of sensitive information.",
  },
];

/* What you receive: eleven deliverables. */
export const HC_DELIVERABLES = [
  { title: "Patient search map", desc: "The specific queries patients use to find treatments, providers, and locations in your service categories, mapped to pages with intent stage and commercial priority." },
  { title: "Competitor visibility analysis", desc: "Where competitors appear for your priority treatments and locations, and what signals support their positions." },
  { title: "Technical SEO audit", desc: "A complete review of crawlability, indexation, page architecture, structured data, and technical issues specific to provider directories, booking technology, and multi-location structure." },
  { title: "Treatment opportunity map", desc: "Which treatment pages have search demand and no effective page, which pages exist but are not indexed or ranking, and the prioritized content roadmap." },
  { title: "Provider SEO recommendations", desc: "A review of physician and practitioner pages, their search visibility, and how they connect to location and specialty pages." },
  { title: "Local visibility benchmark", desc: "Your current GBP profile condition, local pack visibility for priority searches, citation consistency, and review performance by location." },
  { title: "Content roadmap", desc: "A prioritized list of content improvements and new content with detailed briefs for each piece, including authorship requirements where applicable." },
  { title: "Authority roadmap", desc: "The specific publications, directories, and digital PR opportunities most relevant to your specialty and geography." },
  { title: "Conversion recommendations", desc: "Identified friction points in the booking and enquiry path with specific changes to address each one." },
  { title: "Measurement framework", desc: "The call tracking, form tracking, and booking attribution configuration recommended for your site and practice management system." },
  { title: "Monthly performance report", desc: "Organic visibility by treatment area and location, patient contact metrics, GBP performance, and quarter-over-quarter trend data." },
  { title: "AI discovery assessment", desc: "Where included, an evaluation of how AI systems currently represent your organization and what structural improvements would support more accurate representation." },
];

/* Our healthcare SEO process. */
export const HC_PROCESS = [
  { index: "01", name: "Discover", body: "We begin by understanding the organization's clinical structure before we look at a single keyword. Which treatments and services carry the highest priority for patient growth. Which providers and locations are performing and which are not. How the website is organized in relation to the actual clinical structure of the practice. What the current search visibility looks like and what the most significant technical gaps are." },
  { index: "02", name: "Prioritize", body: "Once the diagnostic picture is complete, we sequence the work by the combination of patient acquisition value and implementation practicality. Technical problems that prevent content from being indexed come first. High-intent treatment pages with no current search presence come next. We produce a phased plan that shows what we are working on, why, and in what order." },
  { index: "03", name: "Implement", body: "We complete the agreed work in collaboration with the client's internal teams where their involvement is needed: developers for technical changes, clinical staff for content review where appropriate, and marketing leads for GBP updates and listing management. Every change is documented as it is made. Client account credentials remain under client ownership throughout the engagement. We hold manager-level access to the platforms we manage and return it cleanly if the engagement ends." },
  { index: "04", name: "Measure", body: "Monthly reporting tracks organic visibility for priority treatments and locations, patient contact metrics from organic sources, GBP performance, and the authority signals being built over time. When something is not working, we say so and adjust before asking the client to continue. Transparent reporting about negative findings is part of the engagement, not an exception." },
];

export const HC_PROCESS_CTA = {
  heading: "How visible are your treatments, providers and locations in the searches your patients are making?",
  body: "The healthcare SEO audit maps your current position, where competitors are outperforming you, and which problems should be addressed first.",
  cta: { label: "Request a Healthcare SEO Audit", href: H_ROUTES.audit },
};

/* How we measure patient growth: eight metrics in two groups. */
export const HC_METRICS = {
  intro:
    "Healthcare SEO measurement is more complicated than most agency reporting acknowledges. Not every patient contact can be traced to its search source. Some patients research online and call from a number they found elsewhere. Some appointment conversions happen through front-desk phone lines with no digital tracking in place. We measure what can be reliably measured and are transparent about what cannot.",
  items: [
    { name: "Patient calls from organic sources", desc: "Phone calls traced to organic search through call tracking, separated from calls originating through GBP, paid search, or direct traffic.", group: "acquisition" },
    { name: "Appointment requests", desc: "Online form submissions from organic sessions, mapped to the treatment or location page that generated the enquiry.", group: "acquisition" },
    { name: "Online booking completions", desc: "Where booking technology is connected to analytics, completed bookings attributed to organic search sessions.", group: "acquisition" },
    { name: "Qualified enquiry rate", desc: "The proportion of calls and forms assessed as genuine patient enquiries, separated from referrals, supplier contacts, and misdials.", group: "acquisition" },
    { name: "Treatment visibility", desc: "Search position movement for the specific treatment queries most important to the organization's growth objectives.", group: "visibility" },
    { name: "Provider visibility", desc: "Whether physician and practitioner pages are appearing in the searches patients use to find specific providers or specialties.", group: "visibility" },
    { name: "Location performance", desc: "Visibility, call volume, and enquiry rates for each branch, tracked separately rather than aggregated.", group: "visibility" },
    { name: "Revenue where reliable attribution exists", desc: "For organizations with CRM integration or practice management systems that record patient source, the revenue connected to organic patient enquiries.", group: "visibility" },
  ],
  note: "We report each of these with its measurement method and its limitations. A call that cannot be sourced does not disappear from the total. We note the attribution gap and work on closing it over time.",
};

/* Why choose Search Nexio: six proof points. */
export const HC_WHY = [
  {
    title: "Healthcare SEO experience",
    desc: "Search Nexio's experience includes medical practices, behavioral health organizations, specialist clinics, and healthcare-adjacent businesses where YMYL content standards, patient privacy, provider structure, and measurable patient acquisition have all been part of the engagement. Healthcare SEO is not a generic service with healthcare terminology applied to it.",
  },
  {
    title: "Patient focused strategy",
    desc: "Keyword decisions are made in relation to what the patient is searching for and how close that search is to a care decision, not primarily in relation to volume. A treatment page that ranks for a lower-volume but high-intent query and produces consistent appointment requests is more valuable than a condition overview page that drives thousands of monthly visits with no identifiable effect on patient contacts.",
  },
  {
    title: "Human reviewed execution",
    desc: "Research tools and AI-assisted analysis support the process of identifying opportunities, reviewing content, and monitoring performance. Every recommendation, brief, and client deliverable is reviewed by an experienced member of the Search Nexio team before it is delivered or implemented. We do not publish unreviewed AI output on healthcare websites.",
  },
  {
    title: "Cross team collaboration",
    desc: "We work with internal marketing directors, content teams, web developers, practice managers, physicians, and compliance officers, whoever is involved in the organization's marketing and clinical governance. Where clinical review of content is required, we coordinate that review within the organization's existing process rather than designing around it.",
  },
  {
    title: "Multi-location capability",
    desc: "We manage the full complexity of multi-location healthcare SEO: separate keyword research for each clinic's market, location-specific content, individual GBP management, provider-location mapping, and branch-level reporting that makes performance differences between locations visible and actionable.",
  },
  {
    title: "Search beyond traditional results",
    desc: "Search Nexio tracks traditional search visibility and the AI-assisted discovery layer within the same engagement, ensuring that the entity signals, content clarity, and external authority that support traditional search performance also support accurate representation across AI-assisted research.",
    links: [
      { label: "AI SEO services", href: H_ROUTES.aiSearch },
      { label: "AEO services", href: H_ROUTES.aeo },
    ],
  },
];

/* Engagement options. */
export const HC_ENGAGEMENTS = [
  {
    title: "Practice growth",
    forWho: "Single or few locations",
    desc: "A focused SEO program for medical practices, specialist clinics, and behavioral health organizations at a single location or a small number of locations. Covers patient search strategy, treatment page optimization, GBP management, local search visibility, content roadmap, and monthly patient acquisition reporting.",
    highlight: false,
  },
  {
    title: "Multi-location growth",
    forWho: "Several clinics and markets",
    desc: "A coordinated SEO program for healthcare groups managing several clinics, providers, and local markets. Each location receives its own search strategy, location page, GBP management, and performance tracking. Central reporting shows results by location and in aggregate.",
    highlight: true,
  },
  {
    title: "Enterprise healthcare SEO",
    forWho: "Internal marketing teams",
    desc: "For larger healthcare organizations and internal marketing teams that need a specialist SEO partner. We work within the organization's existing workflows, produce strategy documents, technical specifications, and content briefs that internal teams can implement.",
    highlight: false,
    link: { label: "Contact us", href: H_ROUTES.contact },
  },
];

export const HC_ENGAGEMENT_NOTE =
  "Scope and pricing for all options depend on: number of locations, providers and specialties, current technical state, content requirements, clinical review resources, competition, and reporting infrastructure. We provide a confirmed scope and price before any work begins.";

/* What SEO cannot guarantee. */
export const HC_LIMITATIONS = [
  "Search Nexio cannot guarantee a specific ranking position for any keyword. Search rankings are determined by Google and influenced by many factors, some of which change. We improve the signals that affect search visibility and measure how those improvements affect patient enquiry volume.",
  "We cannot guarantee a specific number of patients, calls, or appointments from organic search. Patient acquisition through SEO depends on how many people are searching for the treatments and services in the organization's area, how competitive the market is, how well the website converts visitors into patient contacts, and the quality of the patient experience after first contact.",
  "We cannot guarantee Google Maps placement or Local Pack visibility. Local search results depend on proximity, relevance, and prominence, and proximity to the searcher is not a signal we can influence.",
  "We cannot guarantee that AI systems will recommend, cite, or mention a healthcare organization. AI-assisted discovery is influenced by a range of signals, and no agency controls the outputs of third-party AI platforms.",
  "We can commit to transparent work, clearly documented deliverables, honest reporting that acknowledges gaps alongside progress, and a strategy that is adjusted when evidence suggests a different approach would produce better results.",
];

/* FAQs. */
export const HC_FAQS = [
  { q: "What are healthcare SEO services", a: "Healthcare SEO services are search optimization programs specifically designed for medical practices, specialist clinics, healthcare groups, and health organizations. They address the patient acquisition challenges unique to healthcare: treatment page optimization, physician search visibility, local practice discovery, medical content standards, provider and location architecture, and patient contact tracking, within the constraints of a category that requires greater care around accuracy, privacy, and provider credibility than most commercial SEO work." },
  { q: "How is healthcare SEO different", a: "Four things distinguish healthcare SEO from standard commercial SEO. Medical trust requires a higher standard of accuracy, sourcing, and appropriate clinical involvement for health-related content. Patient intent determines which searches are commercially valuable, and high search volume does not automatically mean high patient acquisition value. Privacy requires more careful measurement configuration to avoid capturing information patients expect to be confidential. Provider structure, the relationships between organizations, clinics, specialties, and individual practitioners, creates search architecture challenges that generic SEO strategies do not address." },
  { q: "How does SEO generate patients", a: "Organic search generates patients by connecting the searches patients make before booking, treatment research, provider comparison, location-based availability, with the pages on a healthcare website that answer those searches well and make it straightforward to book or call. The chain from search to patient is: patient makes a high-intent search, the right page appears prominently, the page answers the patient's question clearly, and the page makes contacting the practice the obvious next step. SEO improves each part of that chain. It does not guarantee a patient at the end of it." },
  { q: "Do you work with medical practices", a: "Yes. Search Nexio works with medical practices, specialist clinics, behavioral health organizations, multi-location healthcare groups, dental practices, telehealth providers, and larger healthcare organizations. Healthcare SEO is a specialist category within our broader SEO services, and the healthcare-specific knowledge it requires is built into how we approach these engagements." },
  { q: "Can you manage multiple locations", a: "Yes. Multi-location healthcare SEO is one of the more structurally complex areas of the service, and we manage it at the location level: individual keyword research for each clinic's market, location-specific content and GBP management, and branch-level reporting. We also address the provider movement and page conflict issues that multi-location organizations commonly encounter as their clinical staff changes." },
  { q: "Do you optimize physician profiles", a: "We review provider pages, physician profiles, and the relationships between individual practitioners and the locations and specialties they are associated with in search. We do not automatically create Google Business Profiles for every physician. Eligibility requires meeting Google's current Business Profile policies for public-facing healthcare practitioners, and creating profiles that do not meet those requirements creates compliance and suspension risk." },
  { q: "How do you handle medical content", a: "We develop healthcare content through a structured process: patient search research defines the intent and priority, content briefs specify the angle, target patient audience, accuracy requirements, and whether clinical review is needed, writers produce drafts against those briefs, and the content is reviewed before publication by an experienced strategist familiar with the standards appropriate to health-related material. We do not independently validate clinical recommendations, and clinical judgment belongs to qualified providers, not an SEO agency." },
  { q: "Who reviews healthcare content", a: "Content produced for Search Nexio healthcare clients is reviewed by an experienced member of the Search Nexio team before delivery. Where the specific content involves clinical claims that the client's organization requires a qualified reviewer to approve, that review is coordinated with the client's clinical or compliance staff. We do not employ in-house physicians, and we do not add physician credentials to a review process that did not actually involve one." },
  { q: "Do you manage practice profiles", a: "Yes. Google Business Profile management is part of the healthcare SEO service. We handle profile optimization, category selection, service and hours accuracy, photo management, review monitoring, and response workflows. For multi-provider or multi-location organizations, we review the full profile structure before making changes, because incorrect edits or profile conflicts can affect visibility or create suspension risk." },
  { q: "How do you track appointments", a: "We implement call tracking that attributes phone calls to their organic search source, form tracking that connects appointment request submissions to the pages that generated them, and online booking integration where the client's booking platform supports analytics connection. Healthcare tracking configurations are designed to minimize the collection or transmission of sensitive patient information. Healthcare organizations are responsible for their own compliance determinations. We provide a tracking configuration that minimizes privacy exposure, not a compliance guarantee." },
  { q: "How do you protect patient privacy", a: "We design healthcare measurement around the principle of minimal data collection: tracking the patient contact events that matter for SEO attribution without capturing the clinical or personal details that should remain private. Booking confirmation pages are handled carefully to avoid triggering analytics events that record treatment or condition details. We do not provide HIPAA compliance guarantees or legal opinions about specific tracking configurations, and we recommend involving legal or compliance advisers in any decision about how patient contacts are tracked." },
  { q: "How long does healthcare SEO take", a: "Healthcare SEO timelines depend on the starting position, the competitiveness of the specialty and geography, the current technical state of the website, the speed at which implementation can proceed, and the authority already established in the domain. Technical corrections and local profile improvements may show movement earlier than competitive treatment and specialty terms, but there is no standard timetable that applies across healthcare markets. We set timeline expectations from the initial audit." },
  { q: "How much does healthcare SEO cost", a: "Healthcare SEO pricing reflects the scope of the engagement: the number of locations and providers, the size and current condition of the website, the treatments and specialties in scope, the content production requirements, whether clinical review resources are needed, the competitiveness of the market, and the reporting infrastructure required. We provide a confirmed scope and price after the initial audit. We tell clients honestly if the expected return from SEO does not justify the investment at the scope required." },
  { q: "Can you guarantee rankings", a: "No. Google determines search rankings, and no ethical SEO agency can guarantee a specific position for any query. We can commit to improving the signals that affect rankings, content quality, technical health, local relevance, and authoritative external references, and to measuring whether those improvements translate into increased patient contacts. If they are not, we identify why and adjust before asking the client to continue." },
  { q: "Can SEO support AI discovery", a: "SEO work that improves entity clarity, content accuracy, authoritative external references, and structured website architecture also supports how AI systems understand and represent a healthcare organization. A practice with clear, consistent information about its providers, specialties, treatments, and locations, backed by credible third-party references, is better positioned to be represented accurately in AI-assisted patient research than one with fragmented or inconsistent online information." },
];

/* Final review section. */
export const HC_FINAL = {
  title: "Start Your Healthcare SEO Review",
  body: "The initial healthcare SEO review assesses your current search position across the treatments, providers, and locations most important to your organization: where you appear, where competitors appear instead, what technical issues are limiting visibility, and which gaps between your clinical offerings and your search presence should be addressed first. You receive a clear picture of your situation before committing to any scope of work. If the expected return does not justify the investment, we say so.",
  secondaryCta: { label: "Book a Call", href: H_ROUTES.bookCall },
  submit: "Request My Healthcare SEO Audit",
  privacy:
    "By submitting this form you agree that Search Nexio may use the information provided to respond to your enquiry in accordance with the Privacy Policy.",
};
