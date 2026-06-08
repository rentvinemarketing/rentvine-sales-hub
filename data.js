/* ============================================================
   Rentvine sales hub - shared data
   Edit this file to update content across all pages.

   HOW TO ADD MARKETING COLLATERAL TO A FEATURE:
   ----------------------------------------------
   Each feature has 3 optional slots: video, image, onePager.
   Each accepts an object with:
     - url:   the link (Vidyard, YouTube, HubSpot file, Drive, Dropbox, etc.)
     - label: short display label (e.g. "2 min demo", "Hero shot", "Sell sheet PDF")

   Example with collateral filled in:
     {
       name: "Trust Accounting",
       category: "accounting",
       desc: "True double-entry GAAP accounting...",
       url: "https://www.rentvine.com/accounting",
       video: { url: "https://share.vidyard.com/watch/XXXXX", label: "2 min demo" },
       image: { url: "https://www.rentvine.com/images/trust-accounting-hero.jpg", label: "Hero screenshot" },
       onePager: { url: "https://hubspot-files-link.pdf", label: "Sales sheet PDF" }
     }

   Empty slots show as dashed "add link" placeholders.
   ============================================================ */

const HS_PORTAL = "9252921";
const hsUrl = (id) => `https://app.hubspot.com/contacts/${HS_PORTAL}/record/0-1/${id}`;

/* -------- CASE STUDIES -------- */
const caseStudies = [
  {
    customer: "Sapir Realty", role: "CFO Mutik Schusterman",
    switched: "appfolio", switchedLabel: "Switched from AppFolio",
    units: "large", unitsLabel: "1,000+ properties",
    location: "south", locationLabel: "Georgia",
    quote: "Looking back a year later, the decision to switch to Rentvine was probably top five in the seven years I've been here.",
    tags: ["switching","accounting","migration","onboarding","support","growth","data"],
    tagsLabel: ["switching","accounting","migration","onboarding","customer support","growth","trust accounting"],
    url: "https://www.rentvine.com/blog/sapir-realty-case-study",
    pdfUrl: "https://app.hubspot.com/documents/9252921/summary/22182824",
    highlight: ["switching","accounting"]
  },
  {
    customer: "Performance Asset Management", role: "CEO Jim Miller",
    switched: "propertyware", switchedLabel: "Switched from Propertyware",
    units: "mid", unitsLabel: "650+ units",
    location: "midwest", locationLabel: "Southeast Wisconsin",
    quote: "You have to have an open API if you're going to be in business in ten years. That made it a no-brainer.",
    tags: ["switching","api","onboarding","support","ai","data","migration"],
    tagsLabel: ["switching","open API","onboarding","customer support","AI","integrations","migration"],
    url: "https://www.rentvine.com/blog/performance-asset-management-embraces-the-future-of-property-management-with-rentvine",
    pdfUrl: "https://app.hubspot.com/documents/9252921/summary/22182821",
    highlight: ["api","ai"]
  },
  {
    customer: "Prandi Property Management", role: "Christine Goodin",
    switched: "propertyware", switchedLabel: "Switched from Propertyware (10 yrs)",
    units: "mid", unitsLabel: "~600 units",
    location: "west", locationLabel: "Marin County, CA",
    quote: "Switching from Propertyware to Rentvine felt like going from a flip phone to an iPhone.",
    tags: ["switching","migration","accounting","onboarding","support"],
    tagsLabel: ["switching","migration","accounting","onboarding","user adoption"],
    url: "https://www.rentvine.com/blog/prandi-property-management-transitioning-to-rentvine-for-a-more-efficient-property-management",
    pdfUrl: "https://app.hubspot.com/documents/9252921/summary/22182816",
    highlight: ["switching","migration"]
  },
  {
    customer: "Priority Property Management", role: "Jen Brooks, Operations Advisor",
    switched: "legacy", switchedLabel: "Switched from legacy software",
    units: "small", unitsLabel: "Mid-size portfolio",
    location: "midwest", locationLabel: "U.S.",
    quote: "Switching software is always a significant undertaking. Rentvine's level of assistance was unparalleled.",
    tags: ["switching","support","onboarding","migration","data"],
    tagsLabel: ["switching","customer support","onboarding","migration","scalability"],
    url: "https://www.rentvine.com/blog/from-frustration-to-efficiency-how-rentvine-revolutionized-our-property-management-company",
    pdfUrl: "https://app.hubspot.com/documents/9252921/summary/22183058",
    highlight: ["support"]
  },
  {
    customer: "Renters Place", role: "Tulsa, OK",
    switched: "legacy", switchedLabel: "Streamlined operations",
    units: "small", unitsLabel: "Growing PM",
    location: "south", locationLabel: "Tulsa, OK",
    quote: "Rentvine streamlined operations, delivered best-in-class support, and simplified our tech stack with open API.",
    tags: ["support","api","switching"],
    tagsLabel: ["customer support","open API","tech stack"],
    url: "https://www.rentvine.com/blog/transforming-property-management-client-success-stories-with-renters-place",
    pdfUrl: "https://app.hubspot.com/documents/9252921/preview/22183065",
    highlight: ["support","api"]
  },
  {
    customer: "Eaton Realty", role: "Tampa, FL",
    switched: "legacy", switchedLabel: "Simplified tech stack",
    units: "mid", unitsLabel: "Established PM",
    location: "south", locationLabel: "Tampa, FL",
    quote: "Rentvine simplified our tech stack with open API access, and the support team is the real deal.",
    tags: ["switching","support","api"],
    tagsLabel: ["switching","customer support","open API","tech stack"],
    url: "https://www.rentvine.com/blog/eaton-realtys-experience-with-rentvine",
    pdfUrl: "https://app.hubspot.com/documents/9252921/summary/22185810",
    highlight: ["api","support"]
  }
];

/* -------- REVIEWS - pulled from monday.com board 18407730790 --------
   Board: https://rentvine.monday.com/boards/18407730790
   To refresh: re-run the Monday MCP fetch and regenerate this block.
   Sorted newest-first by review date.
*/
const reviews = [
  { name: "Mickayla Harrison", company: null, territory: null, source: "google", stars: 1, date: "2026-05-27", text: "If I could give less than 1 star I would. The worst property management company ever. They charged more than our deposit upon move out, even with proof that the problems were pre existing. They never have maintenance actually fix problems, just bandaid it. Literally would recommend living in a slum before working with them.", tags: ["accounting","maintenance"], hsId: null, exclude: true, excludeReason: "Tenant complaint about the PM company, not a Rentvine customer review." },
  { name: "Michelle Grohe", company: "Real True PM", territory: "VA", source: "g2", stars: 5, date: "2026-05-24", text: "Incredible Support and an Great User Experience", tags: ["support"], hsId: null },
  { name: "Wendy Almand", company: null, territory: null, source: "google", stars: 5, date: "2026-05-20", text: "I had an accounting issue that resulted from my mistake early on in the Rentvine conversion. Jake was so patient and thorough with helping me correct the issue. We had over 20 emails back and forth. He never gave up on me. Jake is a true asset to Rentvine.", tags: ["support","switching","accounting"], hsId: null },
  { name: "Phil Lehman", company: "Hometown Property Management", territory: "PA", source: "g2", stars: 5, date: "2026-05-19", text: "User-Friendly Property Management with Stellar Support", tags: ["support","easy-to-use"], hsId: null },
  { name: "Jesse Santos", company: "All Property Management & Sales Inc", territory: "TX", source: "g2", stars: 5, date: "2026-05-18", text: "Seamless Property Management with a User-Friendly Interface", tags: ["easy-to-use"], hsId: null },
  { name: "Sissy Meyer", company: "Terra Ralty", territory: "TX", source: "google", stars: 5, date: "2026-05-13", text: null, tags: [], hsId: null },
  { name: "Jenny Tempiln", company: "Choice Home Rental", territory: "unknown", source: "g2", stars: 5, date: "2026-05-06", text: "User-Friendly Tool with Stellar Support for Property Managers", tags: ["support","easy-to-use"], hsId: null },
  { name: "Peter Asimakis", company: "KPM Core Services, LLC", territory: "NY", source: "g2", stars: 5, date: "2026-05-06", text: "Rentvine Is Wonderful - Great Software and Responsive Account Support", tags: ["support","accounting"], hsId: null },
  { name: "Natalia Cuartas", company: "Dream Big Property Management", territory: "CA/SoCal", source: "g2", stars: 5, date: "2026-05-06", text: "Efficient and User-Friendly with Stellar Support", tags: ["support","easy-to-use"], hsId: null },
  { name: "Laura Schaefer Taylor", company: "Osto Property Manangement", territory: "FL", source: "g2", stars: 4, date: "2026-05-06", text: "Rentvine's Support Team Is Unmatched - Fast, Helpful, and Easy to Understand", tags: ["support","easy-to-use"], hsId: null },
  { name: "Anonymous", company: "Unknown", territory: "Unknown", source: "g2", stars: 4, date: "2026-05-05", text: "Easy to Use with Great Marketing Integration, Needs Better Document Integration", tags: ["easy-to-use","integrations"], hsId: null },
  { name: "Allison Ambrose", company: null, territory: null, source: "google", stars: 4, date: "2026-05-05", text: "The team at PMW was great to work with. They were responsive, communicative, and took direction well when feedback was provided. I appreciated how quickly they implemented revisions once requested. I gave 4 stars because the initial build felt more like a plug-and-play approach rather than a deep understanding of the property management services I offer. As a result, my partner and I had to spend a significant amount of time refining the site to better align with our business. That said, once we provided clarity, the team was efficient in making updates, and the final product improved significantly.", tags: ["support","websites","pmw"], hsId: null },
  { name: "David Gutierrez", company: "Unknown", territory: "Unknown", source: "g2", stars: 5, date: "2026-05-01", text: "Streamlined Property Management with Rentvine", tags: ["easy-to-use"], hsId: null },
  { name: "Shawn Torgeson", company: "Iron Valley Real Estate", territory: "FL", source: "g2", stars: 5, date: "2026-05-01", text: "Intuitive and Seamless Property Management Solution!!!!", tags: ["easy-to-use"], hsId: null },
  { name: "Saadia Garcia", company: "Nestwell Property Management", territory: "UT", source: "google", stars: 5, date: "2026-04-30", text: "Miguel was amazing - extremely detailed and provided Loom videos with clear, step-by-step instructions.", tags: ["ai"], hsId: null },
  { name: "Trina N", company: "Unknown", territory: "Unknown", source: "g2", stars: 5, date: "2026-04-30", text: "Super Easy to Use - Everything You Need on the Dashboard", tags: ["easy-to-use"], hsId: null },
  { name: "Melissa Simmons", company: "PMW Greater", territory: "PA", source: "g2", stars: 4, date: "2026-04-30", text: "Efficient Payments, Needs Improved Screening Feature", tags: ["pmw"], hsId: null },
  { name: "RiskCapitalResearch", company: null, territory: null, source: "google", stars: 5, date: "2026-04-30", text: "Started a property management company and used PMW to build my company website. I've had a few websites built in the past so I have a pretty good point of reference on what its like to work with a web development company; I was extremely impressed with PMW's process, from initial intake to the revisions/edits stage. Their communication, customer service, and ease of working with them was top notch, not to mention the final product!", tags: ["support","websites","pmw"], hsId: null },
  { name: "Morty McKay", company: "PMI Keystone Tulsa", territory: "OK", source: "google", stars: 5, date: "2026-04-29", text: "The service and support from Rentvine has been top notch. They are extremely knowledgeable and made onboarding a breeze.", tags: ["support","onboarding"], hsId: null },
  { name: "Danny Ly", company: null, territory: null, source: "google", stars: 5, date: "2026-04-29", text: "Working with Cassie at PMW and the Rentvine team has been an outstanding experience. They are consistently proactive and attentive to my questions and concerns. What I appreciate most is their solution-oriented approach; they don't just provide answers, they work diligently to find the right resolutions for my business needs. I highly recommend their expertise.", tags: ["pmw"], hsId: null },
  { name: "Anonymous", company: "Unknown", territory: "Unknown", source: "g2", stars: 5, date: "2026-04-26", text: "Rentvine: User-Friendly Experience with Speedy, Helpful Support", tags: ["support","easy-to-use"], hsId: null },
  { name: "Eric B.", company: "1st Stop Roofing", territory: "NC", source: "g2", stars: 5, date: "2026-04-24", text: "Effortless Work Order Management, Excellent Vendor Experience", tags: ["maintenance"], hsId: null },
  { name: "Diana Morton", company: "Southern Roots Rentals and Sales", territory: "NC", source: "google", stars: 5, date: "2026-04-23", text: "Wonderful experience, very thorough. We are looking forward to working with you!! Thank you for answering ALL of our questions!", tags: [], hsId: null },
  { name: "Ben Workinger", company: "PMW W Properties", territory: "TX", source: "google", stars: 5, date: "2026-04-22", text: "I appreciate everyone's help with the transition to a new property management platform - it's been a smooth process overall. Aaron and Joemar have been especially helpful, taking the time to walk us through each step and make sure everything was clear.", tags: ["support","onboarding","switching","pmw"], hsId: null },
  { name: "Chuente Avila", company: "Kai Vista Realty", territory: "FL", source: "google", stars: 5, date: "2026-04-21", text: "Rentvine has been fundamental to our Real Estate brokerage growth and success. They've helped streamline our processes making for happy owners & tenants. Their helpful onboarding and support demonstrates their commitment to client care. Amber, Diam, Caroline & Colton showed our team step by step how to navigate the system. We feel very supported in our growth and look forward to continued partnership. Highly recommend!", tags: ["support","onboarding","growth"], hsId: null },
  { name: "Anonymous", company: "Unknown", territory: "Unknown", source: "g2", stars: 5, date: "2026-04-18", text: "Stress-Free Property Management with Stellar Support", tags: ["support"], hsId: null },
  { name: "Bhing R.", company: "Heart Property Management", territory: "TX", source: "g2", stars: 5, date: "2026-04-17", text: "Streamlined Property Management with User-Friendly Interface", tags: ["easy-to-use"], hsId: null },
  { name: "Anonymous", company: "Unknown", territory: "Unknown", source: "g2", stars: 5, date: "2026-04-17", text: "Friendly UI That Makes Finding What You Need Easy", tags: ["easy-to-use"], hsId: null },
  { name: "Aura Cruz", company: null, territory: "CO", source: "google", stars: 5, date: "2026-04-16", text: null, tags: [], hsId: null },
  { name: "Chris M.", company: "Unknown", territory: "Unknown", source: "g2", stars: 5, date: "2026-04-16", text: "Powerful Customization That Makes It Truly Useful", tags: [], hsId: null },
  { name: "Anonymous", company: "Unknown", territory: "Unknown", source: "g2", stars: 5, date: "2026-04-15", text: "Comprehensive Property Management with Stellar Support", tags: ["support"], hsId: null },
  { name: "jk Rn - vendor", company: "N/A", territory: "N/a", source: "google", stars: 1, date: "2026-04-14", text: "If I could give a zero I would. Our property management company switched to this company in January. We have not had a monthly statement since January. My $20,000 deposit was misplaced and it took them a month to locate it. I'm about over this company and wish our company would have stuck with propertyware. Think twice before going with this company. It's a joke. I'm shocked at all the five star reviews.", tags: ["switching","accounting"], hsId: null },
  { name: "Anonymous", company: "Unknown", territory: "Unknown", source: "g2", stars: 5, date: "2026-04-14", text: "Effortless Property Management with Rentvine", tags: [], hsId: null },
  { name: "Sharon D.", company: "Jennic Property Solutions", territory: "NC", source: "g2", stars: 5, date: "2026-04-14", text: "Rentvine Cuts Daily Tasks in Half", tags: [], hsId: null },
  { name: "Stoney White", company: null, territory: "NY", source: "google", stars: 5, date: "2026-04-13", text: "I've been using Rentvine for about two years now, and it's been an excellent experience. What really stands out is their support team. Whenever I submit a question or support request, they respond quickly and genuinely work to resolve the issue. More often than not, they even send a personalized video walking me through exactly how to solve the problem step by step. That level of support makes a huge difference and shows they really care about their users' success. The software is intuitive, and knowing I have a responsive team behind it gives me a lot of confidence in using Rentvine for my property management needs. Highly recommend!", tags: ["support","easy-to-use"], hsId: null },
  { name: "Jakob H.", company: "Unknown", territory: "Unknown", source: "capterra", stars: 5, date: "2026-04-13", text: "5 stars - Good Product, only thing missing is a mobile app", tags: [], hsId: null },
  { name: "Steve Peters", company: "N/A", territory: "N/A", source: "google", stars: 1, date: "2026-04-11", text: "My landlord recently hired a property manager who uses rentvine. So now I need to either send a check or money order(I haven't written a check in 10 years, I don't have a checkbook) or pay to submit payments and agree to new terms that are absolutely against my interests, without any consideration that are in my interests to balance that. Why would I do that? I have a lease agreement and the new terms I never agreed to and don't plan plan to. Cause your landlord friction, make them explain all the terms and conditions if they try to switch you from sending Venmo every month to this!", tags: ["switching"], hsId: null },
  { name: "Anonymous", company: "Unknown", territory: "Unknown", source: "g2", stars: 5, date: "2026-04-10", text: "Streamlined Property Management with Exceptional Support", tags: ["support","easy-to-use"], hsId: null },
  { name: "Teresa J.", company: "Vital Property Management", territory: "NV", source: "g2", stars: 5, date: "2026-04-10", text: "Amazing Quick Support and a User-Friendly, Easy-to-Use System", tags: ["support","easy-to-use"], hsId: null },
  { name: "Darren Brown", company: "Reliance1 Realty", territory: "KY", source: "google", stars: 5, date: "2026-04-09", text: "Joemar was excellent and takes absolute pride in his job. From follow up to explaining the process and truly understanding every bit of the software has made this onboarding process so smooth.", tags: ["onboarding"], hsId: null },
  { name: "Jesse Sutton", company: null, territory: null, source: "google", stars: 5, date: "2026-04-09", text: "Great experience from start to finish ... PMW is incredibly responsive, very well organized, and quick with turnaround. I'm thrilled to be working with them!", tags: ["support","easy-to-use","pmw"], hsId: null },
  { name: "Sandra PYLE", company: "Cactus Property Management", territory: "AZ", source: "google", stars: 5, date: "2026-04-08", text: "The People are helpful but he Software can be hard to understand and learn. I am still learning but its getting better everyday.", tags: ["support"], hsId: null },
  { name: "Jared Congemi", company: null, territory: null, source: "google", stars: 5, date: "2026-04-08", text: "We've had a great experience working with RentVine, and I especially want to highlight Walter, who has been an incredible amount of help to our team. Walter is always extremely quick to respond, but what really sets him apart is the level of effort he puts into helping. Instead of just sending a quick answer or a generic help article, Walter consistently takes the time to create personalized screen-recorded videos walking through exactly what we need. It makes a huge difference and saves us a lot of time. Walter has truly gone above and beyond, not just for me but for our entire team. It's clear he genuinely cares about making sure we understand the system and are set up for success. Really appreciate all the support Walter has provided - it does not go unnoticed!", tags: ["support","onboarding"], hsId: null },
  { name: "Alan C.", company: "Unknown", territory: "Unknown", source: "g2", stars: 5, date: "2026-04-08", text: "Rentvine Streamlines Property Management with a Clean, Organized Portal", tags: ["easy-to-use"], hsId: null },
  { name: "Sandra P.", company: "Cactus Property Management", territory: "AZ", source: "g2", stars: 5, date: "2026-04-08", text: "Helpful Rentvine Team, But Support Response Times Can Lag", tags: ["support"], hsId: null },
  { name: "Sue G.", company: "PMI GA", territory: "GA", source: "g2", stars: 5, date: "2026-04-02", text: "Efficient Accounting Tool with Great Support", tags: ["support","accounting"], hsId: null },
  { name: "Jessica Phillips", company: null, territory: null, source: "google", stars: 5, date: "2026-03-30", text: "The PMW team is always fast to respond with any support questions and go above and beyond in providing great service.", tags: ["support","pmw"], hsId: null },
  { name: "curtis roddy", company: "Roddy Real Estate", territory: "TX", source: "google", stars: 5, date: "2026-03-23", text: "Very helpful customer service, the Chris and the entire customer support team always go out of their way to quickly resolve issues", tags: ["support"], hsId: null },
  { name: "Kyle Isaacs", company: null, territory: null, source: "google", stars: 5, date: "2026-02-20", text: "Absolutely loved working with this team. They listened, moved quickly, and accommodated my quick timeline. I'm really glad that I made the decision to work with them.", tags: [], hsId: null }
];

/* -------- INDUSTRY REPORTS -------- */
const industryReports = [
  {
    title: "What 500 landlords really think about property managers",
    publisher: "Jordan Muela & Peter Lohmann · fielded by Harris Poll",
    publisherShort: "Muela + Lohmann (independent)",
    year: "2026",
    pages: "76 pages",
    desc: "The second annual independent study from Jordan Muela and Peter Lohmann, fielded by Harris Poll. 500 small landlords broke down what they want from a property manager, how they pick one, and what they'll pay for.",
    stats: [
      "92% will trade cashflow for a better tenant experience",
      "75% plan to use AI to find their next PM",
      "4 trajectory segments shaping the next 12 months",
      "The 'accidental landlord' is a fundamentally different client"
    ],
    audience: "PMs benchmarking against what landlords actually want in 2026.",
    note: "Independent research. Not authored by Rentvine.",
    tags: ["landlord-research","independent","ai-trends","accidental-landlord"],
    landingUrl: "https://www.rentvine.com/pm-trends",
    url: "https://9252921.fs1.hubspotusercontent-na1.net/hubfs/9252921/LS-PM%20Trends%20Report-2026-FINAL.pdf",
    snippet: "Came across this research. Jordan Muela and Peter Lohmann surveyed 500 small landlords on what they actually want from a PM (76 pages, fielded by Harris Poll). Thought it might be helpful for you and your team.",
    color: "vine"
  },
  {
    title: "PropertyManagement.com VPI report",
    publisher: "PropertyManagement.com",
    publisherShort: "PropertyManagement.com",
    year: "2026",
    pages: "143 operators · 656 clients · 188,551 doors",
    desc: "PropertyManagement.com just ranked Rentvine the #1 property management software. Verified data on every major PMS: Rentvine, AppFolio, Buildium, Rent Manager, and Propertyware. No sponsorships, no placement fees.",
    stats: [
      "82.2 overall VPI. Highest in the category.",
      "+85.7 client NPS. 27 points above AppFolio.",
      "84.6 support score. 20-pt lead over AppFolio.",
      "94.1 pricing score. #1 by a wide margin."
    ],
    audience: "Prospects comparing Rentvine vs. AppFolio / Buildium / Propertyware / Rent Manager.",
    note: "Rentvine ranked #1. Independently verified by PropertyManagement.com.",
    tags: ["vpi","ranked-1","competitive-data","switching"],
    landingUrl: "https://www.rentvine.com/pm-vpi-report",
    url: "https://hs-9252921.f.hubspotemail.net/hubfs/9252921/2026-industry-report-1776402378621.pdf",
    snippet: "PropertyManagement.com just ranked Rentvine the #1 PM software, verified by 143 operators and 656 of their clients across 188K+ doors. Thought you'd want the full breakdown.",
    color: "vine"
  }
];

/* -------- WEBINARS --------
   Pulled from https://www.rentvine.com/blog/category/webinars
   Each is a recap article. Update dates with actual recording dates when known.
*/
const webinars = [
  {
    title: "Every property is different. So why do we manage them the same?",
    partner: "Rentvine",
    date: "2026-04-15",
    desc: "Property management is changing fast. Seven key truths every property manager knows but ignores, and how to turn them into growth, profitability, and better owner relationships.",
    tags: ["growth","profitability","owner-relationships","operations"],
    url: "https://www.rentvine.com/blog/webinar-recap-every-property-is-different-so-why-do-we-manage-them-the-same",
    snippet: "Sharing a recent webinar recap. Seven truths every property manager knows but ignores, and how to turn them into growth and better owner relationships."
  },
  {
    title: "From paws to policies: animal management with PetScreening",
    partner: "Rentvine + PetScreening",
    date: "2026-03-20",
    desc: "Key takeaways from the Rentvine and PetScreening webinar on modern pet management, Fair Housing compliance, and smarter property operations.",
    tags: ["pet-management","fair-housing","compliance","screening"],
    url: "https://www.rentvine.com/blog/from-paws-to-policies-how-rentvine-and-petscreening-simplifies-animal-management",
    snippet: "Came across this webinar with PetScreening on modern pet management and Fair Housing compliance. Thought it might be useful for you and your team."
  },
  {
    title: "Retaining investors through value: communication vs. execution",
    partner: "Rentvine + Property Meld",
    date: "2026-02-12",
    desc: "Insights from the Rentvine and Property Meld webinar on how property managers retain investors with strong execution and transparent communication.",
    tags: ["investor-retention","communication","execution","maintenance"],
    url: "https://www.rentvine.com/blog/retaining-investors-through-value-communication-vs-execution",
    snippet: "Sharing a webinar recap with Property Meld on how property managers retain investors through transparent communication and strong execution."
  }
];

/* -------- FEATURES --------
   To add collateral to a feature, set video / image / onePager to:
     { url: "...", label: "short label" }
   See the comment block at the top of this file for examples.

   `released` is the approximate release date (YYYY-MM-DD). Update with
   real dates when known. Used to sort the features library newest-first
   and to surface a "NEW" badge for features released in the last 6 months.
*/
const features = [
  { name: "Fixie (maintenance AI)", category: "ai",         released: "2026-04-15", url: "https://www.rentvine.com/blog/why-maintenance-is-where-ai-earns-its-keep", desc: "AI agent that triages maintenance requests, suggests vendors, and keeps work orders moving without manual touch." },
  { name: "Mobile app",             category: "platform",   released: "2026-03-10", url: "https://www.rentvine.com/mobile-app",                  desc: "Property manager app. Access custom fields, run global search, manage work orders, and get to leases in seconds, anywhere." },
  { name: "Owner payment workflow", category: "accounting", released: "2026-02-18", url: "https://www.rentvine.com/blog/payday-just-got-an-upgrade-discover-the-new-owner-payment-flow", desc: "Faster payouts, clearer statements. Auto-calculate, generate, and send owner payments in minutes." },
  { name: "Internal maintenance",   category: "operations", released: "2025-12-05", url: "https://www.rentvine.com/blog/rentvines-internal-maintenance-and-why-it-is-important", desc: "Keep maintenance in-house. Manage, assign, and complete work orders without third parties. Set your own labor and material rates." },
  { name: "Rapid invoicing",        category: "accounting", released: "2025-11-12", url: "https://www.rentvine.com/blog/rentvine-product-updates-new-features-enhancements-and-fixes-to-power-your-workflow", desc: "AI batches vendor invoices, auto-fills vendor and amount data, and syncs to your ledger. 30% faster bill processing." },
  { name: "Rentvine AI assistant",  category: "ai",         released: "2025-09-22", url: "https://www.rentvine.com/ai-assistant",                desc: "Voice-enabled AI assistant. Ask questions, run actions, and speed up workflows across the whole platform." },
  { name: "Rentvine insurance",     category: "operations", released: "2025-07-08", url: "https://www.rentvine.com/rentvine-insurance",          desc: "Tenant Legal Liability built right in. Reduce time chasing renters insurance, enforcing compliance, and tracking damage." },
  { name: "Dashboards & reports",   category: "platform",   released: "2025-04-30", url: "https://www.rentvine.com/dashboards",                  desc: "Build unlimited reports on any field. Visual dashboards for revenue, occupancy, maintenance, and more. Schedule auto-delivery." },
  { name: "RentFinder.ai",          category: "marketing",  released: "2025-03-18", url: "https://home.rentfinder.ai/",                          desc: "AI-powered rental search experience for prospects looking for their next home." },
  { name: "Portfolios & pods",      category: "accounting", released: "2024-11-04", url: "https://www.rentvine.com/pods-and-portfolios",         desc: "Manage any size or configuration. Distribute funds to one owner or split across many. Group teams by portfolio, property type, or region." },
  { name: "Smartsites (with PMW)",  category: "marketing",  released: "2024-09-15", url: "https://www.rentvine.com/rentvine-smartsites",         desc: "Property management websites built to rank, capture leads, and convert. SEO, rental analysis, ROI calculator, all included." },
  { name: "Global search",          category: "platform",   released: "2024-04-20", url: "https://www.rentvine.com/global-search",               desc: "One search bar. Find leases, records, owners, tenants, and work orders in seconds. Keyboard shortcuts included." },
  { name: "Open API",               category: "platform",   released: "2023-08-10", url: "https://www.rentvine.com/open-api",                    desc: "Truly open RESTful API. No extra cost. Integrate with HubSpot, Rent Engine, and anything else in your stack." },
  { name: "Properties",             category: "operations", released: "2023-06-01", url: "https://www.rentvine.com/properties",                  desc: "AI-generated listing descriptions. Live ledgers per property. Multiple owner contacts with taxable percentage breakdowns." },
  { name: "Trust accounting",       category: "accounting", released: "2023-01-10", url: "https://www.rentvine.com/accounting",                  desc: "True double-entry GAAP accounting with a full audit trail. Auto-separates manager money from client money. Triple-tied reconciliations keep bank, trust, and sub-ledgers in sync." },
  { name: "Owner statements",       category: "accounting", released: "2023-01-10", url: "https://www.rentvine.com/owner-statements",            desc: "Customizable, professional, and robust statements in bulk. Build the report owners actually want to read." },
  { name: "Accounting services",    category: "accounting", released: "2023-01-10", url: "https://www.rentvine.com/accounting-services",         desc: "Reconciliations, consulting, or full-service trust accounting, done by our in-house team." },
  { name: "Payments",               category: "accounting", released: "2023-01-10", url: "https://www.rentvine.com/tenant-portal",               desc: "Inbound ACH is free. Outbound ACH and remote checks are $1/transaction. NACHA files included, no upcharge." },
  { name: "Maintenance",            category: "operations", released: "2023-01-10", url: "https://www.rentvine.com/maintenance",                 desc: "Fully customizable work order dashboards. Auto vendor suggestions based on history. Manage in-house techs and vendors in one workflow." },
  { name: "Interactive portals",    category: "operations", released: "2023-01-10", url: "https://www.rentvine.com/interactive-portals",         desc: "Owner, tenant, vendor, and applicant portals. Real-time visibility, online payments, document upload, all branded to you." },
  { name: "Tenant screening",       category: "marketing",  released: "2023-01-10", url: "https://www.rentvine.com/tenant-screening",            desc: "RentScreener with TransUnion + Plaid in real time. Applicant portal with status tracking. Direct payment of app fees." },
  { name: "Leasing & RentSign",     category: "marketing",  released: "2023-01-10", url: "https://www.rentvine.com/document-center",             desc: "Free in-house e-signatures. Auto-populate lease docs from approved applications. Mobile-friendly signatures." },
  { name: "Marketing",              category: "marketing",  released: "2023-01-10", url: "https://www.rentvine.com/marketing",                   desc: "Centralized listing distribution. Promote vacancies everywhere from one place." },
  { name: "Global settings",        category: "platform",   released: "2023-01-10", url: "https://www.rentvine.com/global-settings",             desc: "Customize everything (fields, workflows, automations) to fit your business, not the other way around." }
];

/* -------- SHARED ICONS (SVG strings) -------- */
const ICONS = {
  loc:    '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  units:  '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/></svg>',
  role:   '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  video:  '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>',
  image:  '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',
  doc:    '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
  search: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>'
};

/* -------- SHARED RENDER UTILS -------- */
function initials(name) {
  return name.split(" ").map(p => p[0]).slice(0,2).join("").toUpperCase();
}
function fmtDate(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}
function renderStars(n) {
  return "★★★★★☆☆☆☆☆".slice(5 - n, 10 - n);
}
