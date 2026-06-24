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
    customer: "Sunlight Property Management", role: "Owner Amy Mullaney",
    switched: "legacy", switchedLabel: "Switched from legacy software",
    units: "small", unitsLabel: "~200 doors",
    location: "northwest", locationLabel: "Laurel, Montana",
    quote: "When I went over to Rentvine, it just made so much more sense to me. And my team.",
    outreachHook: "Sunlight grew from a comfortable size to 200 doors and started bleeding revenue on manual late-fee tracking and reconciliation. They switched to Rentvine, eliminated the workarounds, and rebuilt owner confidence in their financial reporting. The kicker, their key team member ended up running Rentvine better than the owner did inside the first month.",
    keyOutcomes: ["Eliminated manual late-fee tracking that was costing real revenue.","Owner statements cleared up. Trust restored on the financial side.","Maintenance moved from juggling vendors and tools to one integrated workflow.","Team adoption happened faster than expected, confidence inside weeks."],
    tags: ["switching","growth","accounting","maintenance","onboarding","support","migration"],
    tagsLabel: ["switching","growth","accounting","maintenance","onboarding","customer support","migration"],
    url: "https://www.rentvine.com/blog/the-right-time-to-switch--how-growth-forced-better-systems-for-sunlight-property-management-",
    highlight: ["growth","accounting"]
  },
  {
    customer: "Sapir Realty", role: "CFO Mutik Schusterman",
    switched: "appfolio", switchedLabel: "Switched from AppFolio",
    units: "large", unitsLabel: "1,000+ properties",
    location: "south", locationLabel: "Georgia",
    quote: "Looking back a year later, the decision to switch to Rentvine was probably top five in the seven years I've been here.",
    outreachHook: "Sapir Realty switched from Propertyware to AppFolio in 2024 and watched it become 'an unmitigated disaster.' Reconciliations delayed two months. Owner payouts took manual spreadsheet calculations. In April they moved to Rentvine, and the CFO calls it one of the top 5 business decisions in seven years. Worth a read for anyone burned by AppFolio's portfolio accounting limits.",
    keyOutcomes: ["Reconciliations went from 2-month delays back on schedule.","Owner draws stopped requiring manual spreadsheet review across portfolios.","Work order estimates and undeposited receipts automatically hold back owner funds (caught risk before it shipped).","Largest single-month client onboarding in company history happened after the switch."],
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
    outreachHook: "Performance Asset Management ran on Propertyware for over a decade managing 650+ units. They were paying $1,500/month for partial API access. They moved to Rentvine for the open RESTful API at no extra cost, eliminated a third-party maintenance tool, and started building custom AI agents on top of their live data. The CEO calls it future-proofing the business.",
    keyOutcomes: ["Dropped $1,500/month Propertyware API fees down to $0 with Rentvine's free open API.","Eliminated a separate maintenance tool by consolidating into Rentvine.","Now integrating HubSpot and Rent Engine, plus exploring custom AI agents on live data.","Onboarding finished ahead of schedule with first rent payments processed cleanly."],
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
    outreachHook: "Prandi managed 600 units on Propertyware for a decade before switching to Rentvine in 2023. Their team described the change as 'going from a flip phone to an iPhone.' Under 10% of owners and tenants needed help adjusting to the new portals. Worth sharing if your prospect is hesitant about user adoption during a migration.",
    keyOutcomes: ["Under 10% of owners and tenants needed help accessing the new portals.","Knowledge base articles let the team warm up to the new system at their own pace.","Step-by-step accounting transfer process kept books accurate through the cutover.","Even hesitant managers warmed up after seeing the Rentvine interface."],
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
    outreachHook: "Priority Property Management was stuck with outdated software, scalability problems, slow performance, and integration headaches. They evaluated multiple PMS options with demos and reference calls. They chose Rentvine and the operations advisor calls Rentvine's onboarding support 'unparalleled.' Useful for prospects worried about the lift of switching.",
    keyOutcomes: ["Outdated software, scalability issues, and integration headaches eliminated.","Did thorough due diligence, multiple demos and reference calls before deciding.","Onboarding support called 'unparalleled' across software vendors.","Highly recommends Rentvine to other PMs of any size."],
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
    outreachHook: "Renters Place in Tulsa wanted to consolidate their tech stack. Rentvine's open API let them connect every tool they needed, the support team kept response times under 35 minutes, and their operations got noticeably cleaner. Great share for growing PMs whose stack is a Frankenstein.",
    keyOutcomes: ["Tech stack consolidated through the open RESTful API.","35-minute average support response kept the team unblocked.","Operations measurably cleaner across maintenance, leasing, and accounting.","Strong fit for growing PMs juggling multiple bolt-on tools."],
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
    outreachHook: "Eaton Realty in Tampa moved to Rentvine to clean up their tech stack and never looked back. They use the open API to connect everything they care about, and the support team has become a real part of their workflow. Good share for any prospect tired of being held hostage to closed software.",
    keyOutcomes: ["Tech stack simplified through Rentvine's open API.","Customer support became a real extension of their team.","Switching benefits showed up across leasing, accounting, and reporting.","Recommends Rentvine to other property managers as the cleanest path off legacy."],
    tags: ["switching","support","api"],
    tagsLabel: ["switching","customer support","open API","tech stack"],
    url: "https://www.rentvine.com/blog/eaton-realtys-experience-with-rentvine",
    pdfUrl: "https://app.hubspot.com/documents/9252921/summary/22185810",
    highlight: ["api","support"]
  }
];

/* -------- REVIEWS, pulled from monday.com board 18407730790 --------
   Board: https://rentvine.monday.com/boards/18407730790
   G2 reviews now include `text` (title) and `body` (review highlight).
   Google + Capterra: `text` is the full review content.
   Sorted newest-first by review date.
*/
const reviews = [
  { name: "Jon Bradfield", company: null, territory: null, source: "google", stars: 5, date: "2026-06-18", text: "We've had a great experience with Rentvine's Application and Screening setup process. Joemar was extremely proactive in helping our team get everything configured correctly and took the time to walk us through the training step by step. He was knowledgeable, responsive, and very easy to work with throughout the process.\n\nThe onboarding experience was smooth, and we appreciated having someone who was willing to answer questions and ensure we felt comfortable with the system. Thanks, Joemar, for making the transition easier for our team!", body: null, tags: ["support","onboarding","switching"], hsId: null },
  { name: "Dan Pinette", company: null, territory: null, source: "google", stars: 1, date: "2026-06-17", text: "From what I can tell Rentvine purchased Rentfinder Ai. I have been trying to cancel my subscription for Rentfinder Ai but the phone number listed in Google is for a medical supply company. I have emailed them and opened support tickets. Nothing.", body: null, tags: ["support","ai"], hsId: null, exclude: true, excludeReason: "Subscription complaint, not a product review." },
  { name: "Anonymous", company: "Unknown", territory: "Unknown", source: "g2", stars: 5, date: "2026-06-17", text: "Easy Setup with Excellent Support", body: "I really like Rentvine's ease of use. The support team is great, the initial setup was very easy, and it keeps us organized with capital management, billing, and maintenance.", tags: ["support","onboarding","easy-to-use","maintenance","integrations"], hsId: null },
  { name: "Nathan Peel", company: null, territory: null, source: "google", stars: 5, date: "2026-06-16", text: "PMW provides a great product and great service to our property management company. They took our website from being a poorly done DIY site to a fully functional, lead driving site for us. Their support is fantastic and we have loved working with Ashley to help us upgrade our account.", body: null, tags: ["support","accounting","websites","pmw"], hsId: null },
  { name: "Anonymous", company: "Pristine Bay", territory: "FL", source: "g2", stars: 5, date: "2026-06-12", text: "Highly Responsive Team and a Strong Strategy Partner", body: "The PMW / Rentvine team has been highly responsive and has been a great strategy partner throughout the process.", tags: ["support","pmw"], hsId: null },
  { name: "Antonio Bonadie", company: "Unknown", territory: "Unknown", source: "google", stars: 1, date: "2026-06-11", text: "I called the number and I was bombarded with Medicare and our products that has nothing to do with property management. You lost a potential customer.", body: null, tags: [], hsId: null, exclude: true, excludeReason: "Not a Rentvine customer review, phone number complaint." },
  { name: "Anonymous", company: "Unknown", territory: "Unknown", source: "g2", stars: 5, date: "2026-06-09", text: "Highly Customizable, Quick Support for Property Management", body: "I like that Rentvine is very customizable and adaptable to the specific needs of a property management company. I get a response within thirty minutes to an hour whenever I submit a ticket.", tags: ["support"], hsId: null },
  { name: "Katy Collette", company: "Twins Property Management", territory: "TX", source: "g2", stars: 5, date: "2026-06-09", text: "User-Friendly Experience with Helpful Staff", body: "It is user friendly and the staff is helpful.", tags: ["support","easy-to-use"], hsId: null },
  { name: "Cynthia Landin (SkyBlue Property Manager)", company: "Sky Blue Property Managment", territory: "TX", source: "google", stars: 5, date: "2026-06-04", text: "We chose Rentvine Application & Screening because we wanted a streamlined and integrated solution for our leasing process. The setup experience was excellent, and Joemar was incredibly helpful throughout the training and implementation process.\n\nDuring training, we realized we would be able to use Rentvine's built-in application approval workflow and eliminate a separate platform we had been using outside of our property management software. This will help our team become more efficient and keep everything in one system.\n\nThe Applications team was responsive, knowledgeable, and always willing to answer our questions. I would definitely recommend Rentvine Application & Screening to other property management companies looking to simplify their leasing operations.\n\nThank you Joemar, for your outstanding support!", body: null, tags: ["support","onboarding","easy-to-use","integrations"], hsId: null },
  { name: "Coleen Bradley", company: "tenant", territory: "tenant", source: "g2", stars: 5, date: "2026-06-03", text: "Timely, professional, and convenient", body: "Easy, convenient, and the auto-generated signatures let me complete documents in a timely fashion, saving me time and gas.", tags: [], hsId: null },
  { name: "Anonymous", company: "unknown", territory: "unknown", source: "g2", stars: 4, date: "2026-06-02", text: "Exceptional Accounting That Tracks Every Dollar with Precision", body: "The accounting side of the software is exceptional. I can track every dollar that comes in and out of the system, down to the cent.", tags: ["accounting"], hsId: null },
  { name: "Alyssa Haberle", company: null, territory: null, source: "google", stars: 5, date: "2026-06-01", text: "Livan, Mitch, Jeric, and everyone I've worked with at PMW have been incredible. From day one, they have provided information, support, research, and a wealth of knowledge. They genuinely want to see your business grow and succeed. Every interaction has been professional, kind, and helpful. It's rare to find a team that is this knowledgeable while also being so invested in their clients' success. I'm grateful for their guidance and highly recommend PMW to anyone looking for a true business partner.", body: null, tags: ["support","pmw"], hsId: null },
  { name: "Anonymous", company: "unknown", territory: "Unknown", source: "g2", stars: 5, date: "2026-05-30", text: "Seamless Transition, Constant Enhancements", body: "Rentvine includes features we previously relied on third-party applications for, which has helped save us money and simplify our processes.", tags: ["support","switching"], hsId: null },
  { name: "Michelle Grohe", company: "Real True PM", territory: "VA", source: "g2", stars: 5, date: "2026-05-24", text: "Incredible Support and an Great User Experience", body: "The team's support is incredible, fast responses and accurate fixes. They genuinely welcome feedback and are quick to respond to what users need.", tags: ["support"], hsId: null },
  { name: "Wendy Almand", company: "Soto Property Management", territory: "MO", source: "google", stars: 5, date: "2026-05-20", text: "I had an accounting issue that resulted from my mistake early on in the Rentvine conversion. Jake was so patient and thorough with helping me correct the issue. We had over 20 emails back and forth. He never gave up on me. Jake is a true asset to Rentvine.", body: null, tags: ["support","switching","accounting"], hsId: null },
  { name: "Phil Lehman", company: "Hometown Property Management", territory: "PA", source: "g2", stars: 5, date: "2026-05-19", text: "User-Friendly Property Management with Stellar Support", body: "The software keeps getting new features and it feels state-of-the-art. Tech support is awesome and responds quickly with screenshots and step-by-step instructions.", tags: ["support","easy-to-use","innovation"], hsId: null },
  { name: "Jesse Santos", company: "All Property Management & Sales Inc", territory: "TX", source: "g2", stars: 5, date: "2026-05-18", text: "Seamless Property Management with a User-Friendly Interface", body: "Seamless property management with a user-friendly interface that makes navigation and statements easy for everyone.", tags: ["easy-to-use","accounting"], hsId: null },
  { name: "Sissy Meyer", company: "Terra Ralty", territory: "TX", source: "google", stars: 5, date: "2026-05-13", text: null, body: null, tags: [], hsId: null },
  { name: "Jenny Tempiln", company: "Choice Home Rental", territory: "unknown", source: "g2", stars: 5, date: "2026-05-06", text: "User-Friendly Tool with Stellar Support for Property Managers", body: "Rentvine's support team responds like they work right in your own office, fast, helpful, and never judgmental.", tags: ["support","easy-to-use"], hsId: null },
  { name: "Peter Asimakis", company: "KPM Core Services, LLC", territory: "NY", source: "g2", stars: 5, date: "2026-05-06", text: "Rentvine Is Wonderful, Great Software and Responsive Account Support", body: "Rentvine is absolutely wonderful. Their software and account support is great, our account reps are quick and responsive.", tags: ["support","accounting"], hsId: null },
  { name: "Natalia Cuartas", company: "Dream Big Property Management", territory: "CA/SoCal", source: "g2", stars: 5, date: "2026-05-06", text: "Efficient and User-Friendly with Stellar Support", body: "I like how efficient and user-friendly Rentvine is. The search bar has all the important information at hand, and the customer service support is super fast at problem solving.", tags: ["support","easy-to-use"], hsId: null },
  { name: "Laura Schaefer Taylor", company: "Osto Property Manangement", territory: "FL", source: "g2", stars: 4, date: "2026-05-06", text: "Rentvine's Support Team Is Unmatched, Fast, Helpful, and Easy to Understand", body: "The best part of Rentvine is their support team, they get back to you like they work right in your own office. They respond pretty much immediately and teach you in a way you understand.", tags: ["support"], hsId: null },
  { name: "Anonymous", company: "unknown", territory: "Unknown", source: "g2", stars: 4, date: "2026-05-05", text: "Easy to Use with Great Marketing Integration, Needs Better Document Integration", body: "Easy to use with great marketing integration, everything stays on one platform.", tags: ["easy-to-use","integrations"], hsId: null },
  { name: "Allison Ambrose", company: null, territory: null, source: "google", stars: 4, date: "2026-05-05", text: "The team at PMW was great to work with. They were responsive, communicative, and took direction well when feedback was provided. I appreciated how quickly they implemented revisions once requested.\nI gave 4 stars because the initial build felt more like a plug-and-play approach rather than a deep understanding of the property management services I offer. As a result, my partner and I had to spend a significant amount of time refining the site to better align with our business.\n\nThat said, once we provided clarity, the team was efficient in making updates, and the final product improved significantly.", body: null, tags: ["support","websites","pmw"], hsId: null },
  { name: "David Gutierrez", company: "Unknown", territory: "Unknown", source: "g2", stars: 5, date: "2026-05-01", text: "Streamlined Property Management with Rentvine", body: "Rentvine keeps communication organized and everyone involved can see what's posted, no more back-and-forth emails.", tags: ["easy-to-use"], hsId: null },
  { name: "Shawn Torgeson", company: "Iron Valley Real Estate", territory: "FL", source: "g2", stars: 5, date: "2026-05-01", text: "Intuitive and Seamless Property Management Solution!!!!", body: "Much more modernized than software I used for the past twelve years, the staff took the time to truly train us.", tags: ["easy-to-use","innovation"], hsId: null },
  { name: "Saadia Garcia", company: "Nestwell Property Management", territory: "UT", source: "google", stars: 5, date: "2026-04-30", text: "Miguel was amazing, extremely detailed and provided Loom videos with clear, step-by-step instructions.", body: null, tags: ["ai"], hsId: null },
  { name: "Trina N", company: "Unknown", territory: "Unknown", source: "g2", stars: 5, date: "2026-04-30", text: "Super Easy to Use, Everything You Need on the Dashboard", body: "Everything you need is right on the dashboard, super easy to use.", tags: ["easy-to-use"], hsId: null },
  { name: "Melissa Simmons", company: "PMW Greater", territory: "PA", source: "g2", stars: 4, date: "2026-04-30", text: "Efficient Payments, Needs Improved Screening Feature", body: "It gets our clients and vendors their money typically in 1-2 business days, owners and vendors are a lot happier since we can process payments much more quickly.", tags: ["maintenance","pmw"], hsId: null },
  { name: "RiskCapitalResearch", company: null, territory: null, source: "google", stars: 5, date: "2026-04-30", text: "Started a property management company and used PMW to build my company website. I've had a few websites built in the past so I have a pretty good point of reference on what its like to work with a web development company; I was extremely impressed with PMW's process, from initial intake to the revisions/edits stage. Their communication, customer service, and ease of working with them was top notch, not to mention the final product!\n\n- Danny M.", body: null, tags: ["websites","pmw"], hsId: null },
  { name: "Morty McKay", company: "PMI Keystone Tulsa", territory: "OK", source: "google", stars: 5, date: "2026-04-29", text: "The service and support from Rentvine has been top notch. They are extremely knowledgeable and made onboarding a breeze.", body: null, tags: ["support","onboarding"], hsId: null },
  { name: "Danny Ly", company: null, territory: null, source: "google", stars: 5, date: "2026-04-29", text: "Working with Cassie at PMW and the Rentvine team has been an outstanding experience. They are consistently proactive and attentive to my questions and concerns. What I appreciate most is their solution-oriented approach; they don't just provide answers, they work diligently to find the right resolutions for my business needs. I highly recommend their expertise.", body: null, tags: ["pmw"], hsId: null },
  { name: "Anonymous", company: "Unknown", territory: "Unknown", source: "g2", stars: 5, date: "2026-04-26", text: "Rentvine: User-Friendly Experience with Speedy, Helpful Support", body: "I like how Rentvine is user friendly and their support team is super speedy on getting back to you with resolutions.", tags: ["support","easy-to-use"], hsId: null },
  { name: "Eric B.", company: "1st Stop Roofing", territory: "NC", source: "g2", stars: 5, date: "2026-04-24", text: "Effortless Work Order Management, Excellent Vendor Experience", body: "Rentvine keeps work order communication and documentation organized, the easiest platform we've worked with as vendors.", tags: ["easy-to-use","maintenance"], hsId: null },
  { name: "Diana Morton", company: "Southern Roots Rentals and Sales", territory: "NC", source: "google", stars: 5, date: "2026-04-23", text: "Wonderful experience, very thorough.  We are looking forward to working with you!! Thank you for answering ALL of our questions!", body: null, tags: [], hsId: null },
  { name: "Ben Workinger", company: "PMW W Properties", territory: "TX", source: "google", stars: 5, date: "2026-04-22", text: "I appreciate everyone's help with the transition to a new property management platform, it's been a smooth process overall.\n\nAaron and Joemar have been especially helpful, taking the time to walk us through each step and make sure everything was clear.", body: null, tags: ["support","switching","pmw"], hsId: null },
  { name: "Chuente Avila", company: "Kai Vista Realty", territory: "FL", source: "google", stars: 5, date: "2026-04-21", text: "Rentvine has been fundamental to our Real Estate brokerage growth and success.  They've helped streamline our processes making for happy owners & tenants.  Their helpful onboarding and support demonstrates their commitment to client care.   Amber, Diam, Caroline & Colton showed our team step by step how to navigate the system.  We feel very supported in our growth and look forward to continued partnership.  Highly recommend!", body: null, tags: ["support","onboarding","growth"], hsId: null },
  { name: "Anonymous", company: "Unknown", territory: "Unknown", source: "g2", stars: 5, date: "2026-04-18", text: "Stress-Free Property Management with Stellar Support", body: "Stress-free property management with stellar support", tags: ["support"], hsId: null },
  { name: "Bhing R.", company: "Heart Property Management", territory: "TX", source: "g2", stars: 5, date: "2026-04-17", text: "Streamlined Property Management with User-Friendly Interface", body: "The maintenance dashboard lets you see everything at a glance, work orders, budgets, average days to close.", tags: ["easy-to-use","maintenance"], hsId: null },
  { name: "Anonymous", company: "Unknown", territory: "Unknown", source: "g2", stars: 5, date: "2026-04-17", text: "Friendly UI That Makes Finding What You Need Easy", body: "Friendly UI that makes finding what you need easy", tags: [], hsId: null },
  { name: "Aura Cruz", company: null, territory: "CO", source: "google", stars: 5, date: "2026-04-16", text: null, body: null, tags: [], hsId: null },
  { name: "Chris M.", company: "Unknown", territory: "Unknown", source: "g2", stars: 5, date: "2026-04-16", text: "Powerful Customization That Makes It Truly Useful", body: "It customization capabilities and integrations with apps like Zinspector help save us time and energy.", tags: ["support","integrations"], hsId: null },
  { name: "Anonymous", company: "Unknown", territory: "Unknown", source: "g2", stars: 5, date: "2026-04-15", text: "Comprehensive Property Management with Stellar Support", body: "Rentvine is a one-stop shop, their bookkeeping team saves time and their customer service makes you feel like they genuinely want to see you succeed.", tags: ["support"], hsId: null },
  { name: "jk Rn - vendor", company: "N/A", territory: "N/a", source: "google", stars: 1, date: "2026-04-14", text: "If I could give a zero I would. Our property management company switched to this company in January. We have not had a monthly statement since January. My $20,000 deposit was misplaced and it took them a month to locate it. I'm about over this company and wish our company would have stuck with propertyware. Think twice before going with this company. It's a joke. I'm shocked at all the five star reviews.", body: null, tags: ["switching","accounting"], hsId: null },
  { name: "Anonymous", company: "Unknown", territory: "Unknown", source: "g2", stars: 5, date: "2026-04-14", text: "Effortless Property Management with Rentvine", body: "I find Rentvine very intuitive to use. It's capable of handling all aspects of the property management process.", tags: ["easy-to-use"], hsId: null },
  { name: "Sharon D.", company: "Jennic Property Solutions", territory: "NC", source: "g2", stars: 5, date: "2026-04-14", text: "Rentvine Cuts Daily Tasks in Half", body: "Using Rentvine has cut daily tasks in half, easy process for recording rents, paying vendors and owners, and managing work orders.", tags: ["maintenance"], hsId: null },
  { name: "Stoney White", company: null, territory: "NY", source: "google", stars: 5, date: "2026-04-13", text: "I've been using Rentvine for about two years now, and it's been an excellent experience. What really stands out is their support team. Whenever I submit a question or support request, they respond quickly and genuinely work to resolve the issue. More often than not, they even send a personalized video walking me through exactly how to solve the problem step by step.\n\nThat level of support makes a huge difference and shows they really care about their users' success. The software is intuitive, and knowing I have a responsive team behind it gives me a lot of confidence in using Rentvine for my property management needs. Highly recommend!", body: null, tags: ["support","easy-to-use"], hsId: null },
  { name: "Jakob H.", company: "Unknown", territory: "Unknown", source: "capterra", stars: 5, date: "2026-04-13", text: "5 stars - Good Product, only thing missing is a mobile app", body: null, tags: [], hsId: null },
  { name: "Steve Peters", company: "N/A", territory: "N/A", source: "google", stars: 1, date: "2026-04-11", text: "My landlord recently hired a property manager who uses rentvine. So now I need to either send a check or money order(I haven't written a check in 10 years, I don't have a checkbook) or pay to submit payments and agree to new terms that are absolutely against my interests, without any consideration that are in my interests to balance that. Why would I do that? I have a lease agreement and the \"new terms\" I never agreed to and don't plan plan to. Cause your landlord friction, make them explain all the terms and conditions if they try to switch you from sending Venmo every month to this!!!!", body: null, tags: ["switching"], hsId: null },
  { name: "Anonymous", company: "Unknown", territory: "Unknown", source: "g2", stars: 5, date: "2026-04-10", text: "Streamlined Property Management with Exceptional Support", body: "The platform guides you through complex property management tasks, it's not just a tool, it's a trusted partner.", tags: ["support","easy-to-use","accounting"], hsId: null },
  { name: "Teresa J.", company: "Vital Property Management", territory: "NV", source: "g2", stars: 5, date: "2026-04-10", text: "Amazing Quick Support and a User-Friendly, Easy-to-Use System", body: "The quick customer service is amazing, the system is user-friendly and easy to use.", tags: ["support","easy-to-use"], hsId: null },
  { name: "Darren Brown", company: "Reliance1 Realty", territory: "KY", source: "google", stars: 5, date: "2026-04-09", text: "Joemar was excellent and takes absolute pride in his job.  From follow up to explaining the process and truly understanding every bit of the software has made this onboarding process so smooth.", body: null, tags: ["onboarding"], hsId: null },
  { name: "Jesse Sutton", company: null, territory: null, source: "google", stars: 5, date: "2026-04-09", text: "Great experience from start to finish ... PMW is incredibly responsive, very well organized, and quick with turnaround. I'm thrilled to be working with them!", body: null, tags: ["support","easy-to-use","pmw"], hsId: null },
  { name: "Sandra PYLE", company: "Cactus Property Management", territory: "AZ", source: "google", stars: 5, date: "2026-04-08", text: "The People are helpful but he Software can be hard to understand and learn. I am still learning but its getting better everyday.", body: null, tags: ["support"], hsId: null },
  { name: "Jared Congemi", company: null, territory: null, source: "google", stars: 5, date: "2026-04-08", text: "We've had a great experience working with RentVine, and I especially want to highlight Walter, who has been an incredible amount of help to our team.\nWalter is always extremely quick to respond, but what really sets him apart is the level of effort he puts into helping. Instead of just sending a quick answer or a generic help article, Walter consistently takes the time to create personalized screen-recorded videos walking through exactly what we need. It makes a huge difference and saves us a lot of time.\nWalter has truly gone above and beyond, not just for me but for our entire team. It's clear he genuinely cares about making sure we understand the system and are set up for success.\nReally appreciate all the support Walter has provided, it does not go unnoticed!", body: null, tags: ["support","onboarding"], hsId: null },
  { name: "Alan C.", company: "Unknown", territory: "Unknown", source: "g2", stars: 5, date: "2026-04-08", text: "Rentvine Streamlines Property Management with a Clean, Organized Portal", body: "The portal experience for both owners and tenants is clean, communication, statements, and workflows all in one place.", tags: ["easy-to-use","accounting"], hsId: null },
  { name: "Sandra P.", company: "Cactus Property Management", territory: "AZ", source: "g2", stars: 5, date: "2026-04-08", text: "Helpful Rentvine Team, But Support Response Times Can Lag", body: "Helpful Rentvine team and great support throughout", tags: ["support"], hsId: null },
  { name: "Sue G.", company: "PMI GA", territory: "GA", source: "g2", stars: 5, date: "2026-04-02", text: "Efficient Accounting Tool with Great Support", body: "The support feature with videos and step-by-step directions is very helpful, I can rely on Rentvine every time.", tags: ["support","accounting"], hsId: null },
  { name: "Jessica Phillips", company: null, territory: null, source: "google", stars: 5, date: "2026-03-30", text: "The PMW team is always fast to respond with any support questions and go above and beyond in providing great service.", body: null, tags: ["support","pmw"], hsId: null },
  { name: "curtis roddy", company: "Roddy Real Estate", territory: "TX", source: "google", stars: 5, date: "2026-03-23", text: "Very helpful customer service, the Chris and the entire customer support team always go out of their way to quickly resolve issues", body: null, tags: ["support"], hsId: null },
  { name: "Kyle Isaacs", company: null, territory: null, source: "google", stars: 5, date: "2026-02-20", text: "Absolutely loved working with this team.  They listened, moved quickly, and accommodated my quick timeline.  I'm really glad that I made the decision to work with them.", body: null, tags: [], hsId: null }
];

/* -------- PR (industry reports + press releases) -------- */
const industryReports = [
  {
    type: "press",
    title: "Rentvine named #1 property management software",
    publisher: "Rentvine press release",
    publisherShort: "Press release · June 11, 2026",
    year: "2026",
    pages: "Press release",
    date: "2026-06-11",
    desc: "Rentvine officially named #1 in PropertyManagement.com's 2026 Vendor Performance Index, sweeping 4 of 6 category awards: Category Leader, Happiest Customer, Best Value, and Easiest to Use.",
    stats: [
      "#1 VPI score in the category, highest of any PMS evaluated.",
      "+61.3 operator NPS, roughly 4x the next major competitor.",
      "85.9 support quality, more than double either closest competitor's perfect-5 rate.",
      "+85.7 client NPS, 27 points above the nearest incumbent."
    ],
    audience: "Prospects comparing Rentvine vs. AppFolio / Buildium / Propertyware. Use as third-party validation.",
    note: "Press release. Use to anchor competitive conversations.",
    tags: ["vpi","ranked-1","competitive-data","press","switching"],
    url: "https://www.rentvine.com/blog/rentvine-named-1-property-management-software",
    snippet: "Rentvine was just named #1 in PropertyManagement.com's 2026 VPI report. We swept 4 of 6 categories: Category Leader, Happiest Customer, Best Value, and Easiest to Use. Thought it might be useful for you.",
    color: "vine"
  },
  {
    type: "press",
    title: "Rentvine unveils industry-first MCP and Pro Skills at Be Herd 2026",
    publisher: "Rentvine press release",
    publisherShort: "Press release · May 20, 2026",
    year: "2026",
    pages: "Press release",
    date: "2026-05-20",
    desc: "Rentvine became the first property management and accounting platform in single-family rentals to adopt the Model Context Protocol (MCP), and previewed Pro Skills, an agent workforce that runs inside Rentvine's trust accounting and permissions guardrails.",
    stats: [
      "First PMS in single-family rentals to adopt MCP.",
      "350+ property management pros at Be Herd User Conference, Tampa.",
      "Pro Skills agent workforce previewed as the next major platform shift.",
      "Live MCP queries running against real Rentvine accounting data."
    ],
    audience: "Prospects evaluating AI-native or open-API platforms. Forward-looking PMs.",
    note: "Press release. Use to anchor AI and platform conversations.",
    tags: ["mcp","ai","press","innovation","open-api"],
    url: "https://www.rentvine.com/blog/rentvine-unveils-industry-first-mcp",
    snippet: "Rentvine is now the first PMS in single-family rentals to adopt the Model Context Protocol (MCP), and we previewed Pro Skills, an agent workforce that runs inside our trust accounting guardrails. Thought you'd want a read.",
    color: "vine"
  },
  {
    type: "report",
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
    type: "report",
    title: "PropertyManagement.com VPI report",
    publisher: "PropertyManagement.com",
    publisherShort: "PropertyManagement.com",
    year: "2026",
    pages: "143 operators · 656 clients · 188,551 doors",
    desc: "PropertyManagement.com ranked Rentvine the #1 property management software. Verified data on every major PMS: Rentvine, AppFolio, Buildium, Rent Manager, and Propertyware. No sponsorships, no placement fees.",
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
    url: "https://9252921.fs1.hubspotusercontent-na1.net/hubfs/9252921/PropertyManagement_VPI_PMS_Report_2026%20(5).pdf",
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
    snippet: "Sharing a recent webinar recap. Seven truths every property manager knows but ignores, and how to turn them into growth and better owner relationships.",
    outreachAngle: "If your prospect is feeling stuck running their whole portfolio off the same workflow, this one digs into seven truths every PM knows but ignores. Practical playbook for differentiating by owner, property type, and lifecycle.",
    takeaways: ["Why one-size-fits-all workflows cap your growth.","How to segment owners by trajectory (and what to do with each segment).","Where to invest your team's time first for the biggest ROI.","Profitability levers most PMs overlook."]
  },
  {
    title: "From paws to policies: animal management with PetScreening",
    partner: "Rentvine + PetScreening",
    date: "2026-03-20",
    desc: "Key takeaways from the Rentvine and PetScreening webinar on modern pet management, Fair Housing compliance, and smarter property operations.",
    tags: ["pet-management","fair-housing","compliance","screening"],
    url: "https://www.rentvine.com/blog/from-paws-to-policies-how-rentvine-and-petscreening-simplifies-animal-management",
    snippet: "Came across this webinar with PetScreening on modern pet management and Fair Housing compliance. Thought it might be useful for you and your team.",
    outreachAngle: "If your prospect has been burned by Fair Housing complaints, mishandled ESA requests, or ad-hoc pet policies, this webinar gives them a defensible operational framework. Joint session with PetScreening, the industry-standard tool.",
    takeaways: ["How to handle ESA and assistance animal requests compliantly.","Where Fair Housing exposure most often hides in pet policies.","Workflow for documenting pet screening across applications.","Integration patterns between Rentvine and PetScreening."]
  },
  {
    title: "Retaining investors through value: communication vs. execution",
    partner: "Rentvine + Property Meld",
    date: "2026-02-12",
    desc: "Insights from the Rentvine and Property Meld webinar on how property managers retain investors with strong execution and transparent communication.",
    tags: ["investor-retention","communication","execution","maintenance"],
    url: "https://www.rentvine.com/blog/retaining-investors-through-value-communication-vs-execution",
    snippet: "Sharing a webinar recap with Property Meld on how property managers retain investors through transparent communication and strong execution.",
    outreachAngle: "If your prospect is losing owner accounts to competing PMs, this webinar breaks down what actually drives investor retention. Joint session with Property Meld on the gap between what owners say they want and what makes them stay.",
    takeaways: ["Why communication frequency matters less than execution clarity.","How transparent reporting changes the renewal conversation.","Owner-facing rituals that compound retention quarter over quarter.","Specific moves a PM can install this week."]
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
  { name: "Fixie (maintenance AI)", category: "ai",         released: "2026-04-15", url: "https://www.rentvine.com/blog/why-maintenance-is-where-ai-earns-its-keep", desc: "AI agent that triages maintenance requests, suggests vendors, and keeps work orders moving without manual touch.",
    benefits: ["Guided intake, conversational AI asks smart follow-ups so no more 'sink is broken' tickets.","Media-first evidence, photos, video, audio attached to every ticket. Dispatch on facts.","AI diagnostic summary, every work order has a plain-English summary plus suggested next steps.","Resolved by agent, if Fixie helps the resident solve it, no truck roll needed."],
    outreachAngle: "If your maintenance team is drowning in 'my sink is broken' tickets and chasing residents for context, Fixie eliminates that work upfront. Conversational AI intake, photo/video evidence on every ticket, and a diagnostic summary so dispatchers act on facts instead of guesses.",
    video: { url: "https://www.youtube.com/watch?v=_kmLMBMVKIk", label: "Watch Fixie in action" } },
  { name: "Mobile app",             category: "platform",   released: "2026-03-10", url: "https://www.rentvine.com/mobile-app",                  desc: "Property manager app. Access custom fields, run global search, manage work orders, and get to leases in seconds, anywhere.",
    benefits: ["Global search across leases, properties, contacts, vendors, and work orders.","Records on the go, open lease/property/contact details before any showing or meeting.","Custom fields baked in, so the data unique to your portfolio comes along.","Work orders viewable and updateable from the field, no laptop required."],
    outreachAngle: "Property management does not happen at a desk. The Rentvine mobile app puts global search, work orders, and full lease records in your pocket so your team stops running back to the office between showings, vendor meetings, and owner calls. iOS and Android.",
    image: { url: "https://www.rentvine.com/images/mobile-social-sharing.jpg?v=4", label: "Mobile app hero" } },
  { name: "Owner payment workflow", category: "accounting", released: "2026-02-18", url: "https://www.rentvine.com/blog/payday-just-got-an-upgrade-discover-the-new-owner-payment-flow", desc: "Faster payouts, clearer statements. Auto-calculate, generate, and send owner payments in minutes.",
    benefits: ["Auto-calculate, generate, and send all owner payments at once.","Bulk-pay via ACH, check, or NACHA file, owners get paid however they want.","Statements clearer for owners, fewer questions for your team.","Cuts what used to be a half-day task down to minutes."],
    outreachAngle: "If owner payouts are a manual scramble at month-end with spreadsheets and check-printing, this is the workflow that gives you that day back. Bulk-pay every owner in seconds with their preferred method, with a clean statement attached." },
  { name: "Internal maintenance",   category: "operations", released: "2025-12-05", url: "https://www.rentvine.com/blog/rentvines-internal-maintenance-and-why-it-is-important", desc: "Keep maintenance in-house. Manage, assign, and complete work orders without third parties. Set your own labor and material rates.",
    benefits: ["Vendor and internal work orders in one system. No duplicate tools.","Private price book, keep internal labor and material rates hidden.","Turn in-house maintenance into a profit center.","SMS reminders to tenants, OCR receipt billing, internal tech scheduling."],
    outreachAngle: "If your PM has an in-house maintenance team but is running it in spreadsheets or a separate tool, Internal Maintenance turns it into a billable profit center inside Rentvine. Private price book, integrated billing, no third-party software." },
  { name: "Rapid invoicing",        category: "accounting", released: "2025-11-12", url: "https://www.rentvine.com/blog/rentvine-product-updates-new-features-enhancements-and-fixes-to-power-your-workflow", desc: "AI batches vendor invoices, auto-fills vendor and amount data, and syncs to your ledger. 30% faster bill processing.",
    benefits: ["AI extracts vendor, amount, and GL coding from any invoice automatically.","Forward bills from email, scan via QR, or upload directly.","Catches duplicates before they post to the ledger.","Process 12 invoices in 90 seconds. Trust accounting stays clean."],
    outreachAngle: "If your team is hand-keying vendor invoices into the ledger and chasing duplicates, Rapid Invoicing turns that into a 90-second batch job. AI auto-fills vendor, amount, and GL coding, your AP person spends time approving, not typing.",
    video: { url: "https://www.youtube.com/watch?v=7JKmqlIcm9M", label: "Watch Rapid Invoicing in action" } },
  { name: "Rentvine AI assistant",  category: "ai",         released: "2025-09-22", url: "https://www.rentvine.com/ai-assistant",                desc: "Voice-enabled AI assistant. Ask questions, run actions, and speed up workflows across the whole platform.",
    benefits: ["Quick recording of receipts on the property, voice or type.","Add vendor bills in seconds without opening menus.","Create tenant charges on the fly, hands-free.","Saves 10+ hours per week on invoicing, listings, and reconciliation."],
    outreachAngle: "Most PMS platforms bolted AI onto one workflow. Rentvine built it into every module, receipts, invoices, listings, screening, search, leasing, all under one login and no extra fees. The AI Assistant is the hands-free entry point.",
    video: { url: "https://www.youtube.com/watch?v=ojo70xY-paY", label: "Watch AI Assistant in action" },
    image: { url: "https://www.rentvine.com/images/ai-assistant-hero.svg", label: "AI Assistant hero" } },
  { name: "Rentvine insurance",     category: "operations", released: "2025-07-08", url: "https://www.rentvine.com/rentvine-insurance",          desc: "Tenant Legal Liability built right in. Reduce time chasing renters insurance, enforcing compliance, and tracking damage.",
    benefits: ["Tenant Legal Liability coverage embedded in Rentvine, no separate vendor.","Reduces team time chasing proof of renters insurance.","Minimizes spreadsheets and ad-hoc tracking for insurance compliance.","Tighter handling of tenant-caused damage claims."],
    outreachAngle: "If your team is still chasing renters insurance documents and managing damage exceptions in spreadsheets, Rentvine Insurance brings it inside the platform. Tenant Legal Liability coverage is built in, no chasing, no exceptions, less manual tracking." },
  { name: "Dashboards & reports",   category: "platform",   released: "2025-04-30", url: "https://www.rentvine.com/dashboards",                  desc: "Build unlimited reports on any field. Visual dashboards for revenue, occupancy, maintenance, and more. Schedule auto-delivery.",
    benefits: ["Unlimited custom reports on any field, no limits per role.","Visual dashboards for revenue, occupancy, maintenance, and more.","Schedule reports to send automatically to owners or your team.","Shareable templates and saved filters per role."],
    outreachAngle: "If owners are calling asking for custom reports your software cannot run, Rentvine's report builder lets you create unlimited custom reports on any field, schedule them, and have them land in owner inboxes monthly. No more manual exports to Excel." },
  { name: "RentFinder.ai",          category: "marketing",  released: "2025-03-18", url: "https://home.rentfinder.ai/",                          desc: "AI-powered rental search experience for prospects looking for their next home.",
    benefits: ["Live rent recommendations from real market listings, not stale averages.","Embedded directly in your listing and renewal workflow.","Comp visualizations owners can actually understand.","Cuts vacancy days by pricing right on day one."],
    outreachAngle: "If your team is pricing units off last quarter's data, RentFinder.ai pulls live comps from real listings and gives you AI-suggested rent ranges right inside the renewal workflow. Stronger owner conversations, fewer vacancy days.",
    video: { url: "https://www.youtube.com/watch?v=VI_eZim23f4", label: "Watch RentFinder.ai pricing" } },
  { name: "Portfolios & pods",      category: "accounting", released: "2024-11-04", url: "https://www.rentvine.com/pods-and-portfolios",         desc: "Manage any size or configuration. Distribute funds to one owner or split across many. Group teams by portfolio, property type, or region.",
    benefits: ["Distribute funds to one owner or split across many, automatically.","Switch between portfolios from a single login.","Group team members by portfolio, property type, or region (pods).","Customizable, robust owner statements in bulk."],
    outreachAngle: "If your portfolio has multi-owner LLCs, separate operating accounts, or client-specific banking, Portfolios & Pods is purpose-built for that complexity. AppFolio operates at the property level, Rentvine operates at the portfolio level, which matters at scale." },
  { name: "Smartsites (with PMW)",  category: "marketing",  released: "2024-09-15", url: "https://www.rentvine.com/rentvine-smartsites",         desc: "Property management websites built to rank, capture leads, and convert. SEO, rental analysis, ROI calculator, all included.",
    benefits: ["SEO-optimized, mobile-responsive sites built to drive new doors.","Built-in rental analysis tool, ROI calculator, and lead capture.","Property managers using Rentvine + PMW grew 48% faster than those who didn't.","Templates that convert plus design and messaging that position you as the obvious choice."],
    outreachAngle: "Most PM websites are templated graveyards. PMW Smartsites are built to rank in search, capture owner leads, and convert, every page tuned for door growth. Property managers running Rentvine + PMW together grow 48% more than peers who don't." },
  { name: "Global search",          category: "platform",   released: "2024-04-20", url: "https://www.rentvine.com/global-search",               desc: "One search bar. Find leases, records, owners, tenants, and work orders in seconds. Keyboard shortcuts included.",
    benefits: ["Natural-language queries, ask in plain English, get the record.","Searches across properties, owners, leases, ledgers, work orders.","Pulls answers, not just records (with AI).","Zero training required, keyboard shortcuts for power users."],
    outreachAngle: "If your team is clicking through three menus to find a lease, Global Search lets them type a question in plain English and land on the right record. With Rentvine AI, it pulls answers, not just records. Useful in every conversation a coordinator has during the day.",
    video: { url: "https://www.youtube.com/watch?v=wp87zKyqw5c", label: "Watch Global Search in action" } },
  { name: "Open API",               category: "platform",   released: "2023-08-10", url: "https://www.rentvine.com/open-api",                    desc: "Truly open RESTful API. No extra cost. Integrate with HubSpot, Rent Engine, and anything else in your stack.",
    benefits: ["Real-time data sync between Rentvine and any tool in your stack.","Custom applications and automations without platform restrictions.","Pre-built connections to LeadSimple, Plaid, ShowMojo, PlanOmatic, Aptly, zInspector, Tenant Turner, Property Meld.","Industry-first MCP support, bring your own AI (Claude, ChatGPT) directly to your Rentvine data."],
    outreachAngle: "Most PMS APIs are closed or pay-to-access. Rentvine's RESTful API is free, real-time, and the only one in single-family rentals that supports MCP, meaning prospects can plug Claude, ChatGPT, or any AI assistant directly into their Rentvine data. Future-proofs the stack." },
  { name: "Properties",             category: "operations", released: "2023-06-01", url: "https://www.rentvine.com/properties",                  desc: "AI-generated listing descriptions. Live ledgers per property. Multiple owner contacts with taxable percentage breakdowns.",
    benefits: ["AI-generated listing descriptions in seconds.","Live ledger view of all increases and decreases per owner/portfolio.","Multiple owner contacts with taxable percentage breakdowns.","Custom fields tied to your portfolio's unique data."],
    outreachAngle: "Properties with shared owners and split taxable percentages used to require side spreadsheets. Rentvine's property record handles all of that natively, live ledgers, multiple owner contacts, custom fields, so what used to be a manual reconciliation is just the system of record." },
  { name: "Trust accounting",       category: "accounting", released: "2023-01-10", url: "https://www.rentvine.com/accounting",                  desc: "True double-entry GAAP accounting with a full audit trail. Auto-separates manager money from client money. Triple-tied reconciliations keep bank, trust, and sub-ledgers in sync.",
    benefits: ["True double-entry GAAP accounting with full audit trail on every transaction.","Manager's ledger auto-separates company money from client money the moment it's earned.","Triple-tied reconciliations, bank, trust, and sub-ledgers always in sync.","AI Match Assistant and Bank Sync cut manual reconciliation time dramatically."],
    outreachAngle: "Property managers get fined for sloppy trust accounting more than for anything else. Rentvine is the only PMS in the category built on double-entry GAAP with auto-separation of manager and client funds. Pass audits in minutes instead of days.",
    image: { url: "https://www.rentvine.com/images/accounting-feature-1.svg?v3", label: "Trust accounting" } },
  { name: "Owner statements",       category: "accounting", released: "2023-01-10", url: "https://www.rentvine.com/owner-statements",            desc: "Customizable, professional, and robust statements in bulk. Build the report owners actually want to read.",
    benefits: ["Build statements with any field and any layout.","Generate in bulk for the whole portfolio in seconds.","Owners receive statements they actually understand.","Schedule and auto-send monthly. No more manual exports."],
    outreachAngle: "Owners judge their property manager by the monthly statement. If yours are generic and confusing, owners ask more questions and trust less. Rentvine lets you build the statement owners want to read, in bulk, on a schedule." },
  { name: "Accounting services",    category: "accounting", released: "2023-01-10", url: "https://www.rentvine.com/accounting-services",         desc: "Reconciliations, consulting, or full-service trust accounting, done by our in-house team.",
    benefits: ["Full-service or partial trust accounting handled by Rentvine experts.","Reconciliation cleanup for messy historicals or recent migrations.","Consulting on chart of accounts and complex setups.","Same in-house team handles onboarding's first reconciliation."],
    outreachAngle: "If a prospect's bookkeeper is leaving, or they got burned in an audit, or they just don't want to own trust accounting day-to-day, Rentvine has an in-house accounting services team that does it for them. Few competitors offer this as a service." },
  { name: "Payments",               category: "accounting", released: "2023-01-10", url: "https://www.rentvine.com/tenant-portal",               desc: "Inbound ACH is free. Outbound ACH and remote checks are $1/transaction. NACHA files included, no upcharge.",
    benefits: ["Inbound ACH is free. No tenant fees on ACH.","Outbound ACH and remote checks are $1/transaction. NACHA files included.","Credit card payments accepted (tenant pays fees).","Automatic reversals on returned payments and NSFs."],
    outreachAngle: "Most PMS platforms nickel and dime on payments. Rentvine: inbound ACH is free, NACHA files are included, and there's no surprise upcharge. For a 500-door portfolio that adds up to thousands per year back in your pocket." },
  { name: "Maintenance",            category: "operations", released: "2023-01-10", url: "https://www.rentvine.com/maintenance",                 desc: "Fully customizable work order dashboards. Auto vendor suggestions based on history. Manage in-house techs and vendors in one workflow.",
    benefits: ["Customizable work order dashboards by role.","Auto vendor recommendations based on trade and past performance.","Drag-and-drop maintenance calendar across techs and dates.","SMS reminders to tenants reduce no-shows. Real-time status to owners."],
    outreachAngle: "Maintenance is where PMs lose the most owner trust. Rentvine consolidates intake, dispatch, vendor management, and billing into one workflow. Auto vendor matching, real-time owner visibility, SMS tenant reminders. No third-party maintenance software needed." },
  { name: "Interactive portals",    category: "operations", released: "2023-01-10", url: "https://www.rentvine.com/interactive-portals",         desc: "Owner, tenant, vendor, and applicant portals. Real-time visibility, online payments, document upload, all branded to you.",
    benefits: ["Four portals, owner, tenant, vendor, applicant, all included.","Real-time financial visibility for owners builds trust.","Tenants pay rent, submit maintenance, sign docs in one place.","Vendors upload invoices and get paid faster with less back-and-forth."],
    outreachAngle: "If a prospect's owners are calling for updates because they can't see anything, the Owner Portal solves it. Real-time financial visibility, property performance, maintenance status, all branded to the PM, included at no extra cost. Same goes for tenant, vendor, and applicant portals." },
  { name: "Tenant screening",       category: "marketing",  released: "2023-01-10", url: "https://www.rentvine.com/tenant-screening",            desc: "RentScreener with TransUnion + Plaid in real time. Applicant portal with status tracking. Direct payment of app fees.",
    benefits: ["TransUnion credit and background, Plaid income verification, in real time.","Applicant portal with status tracking, applicants see where they stand.","Application fees paid directly through the portal, you keep your share.","Dynamic screening, PetScreening integration, fraud protection built in."],
    outreachAngle: "Slow screening kills lease conversion. Rentvine pulls TransUnion + Plaid in real time, the applicant sees their status update live, and ID verification + income verification happen automatically. Faster yes, fewer fraudulent applications." },
  { name: "Leasing & RentSign",     category: "marketing",  released: "2023-01-10", url: "https://www.rentvine.com/document-center",             desc: "Free in-house e-signatures. Auto-populate lease docs from approved applications. Mobile-friendly signatures.",
    benefits: ["Unlimited free e-signatures, no DocuSign needed.","Auto-populate lease data from approved applications.","Mobile-friendly signing, tenants sign from their phone.","Smart hot fields for recurring charges and merge data."],
    outreachAngle: "Stop paying DocuSign per envelope. RentSign is in-house, unlimited, and auto-populates lease data from the approved application. Tenants sign on their phone in minutes. AI validates fields and catches missing signatures before send.",
    video: { url: "https://www.youtube.com/watch?v=mCKzgni9ZzA", label: "Watch RentSign in action" } },
  { name: "Marketing",              category: "marketing",  released: "2023-01-10", url: "https://www.rentvine.com/marketing",                   desc: "Centralized listing distribution. Promote vacancies everywhere from one place.",
    benefits: ["Centralized listing distribution to every major rental site.","AI-generated listing copy with SEO baked in.","One platform for all listing edits, syndication, and lead capture.","Pricing recommendations from RentFinder.ai built into the workflow."],
    outreachAngle: "Lease faster by syndicating once and reaching every rental site. Rentvine handles the SEO listing copy with AI, pushes to all the major channels, and routes leads back into the screening flow. Less work, more applicants." },
  { name: "Global settings",        category: "platform",   released: "2023-01-10", url: "https://www.rentvine.com/global-settings",             desc: "Customize everything (fields, workflows, automations) to fit your business, not the other way around.",
    benefits: ["Unlimited custom fields to track what matters to your portfolio.","Workflow automations across leasing, maintenance, accounting.","Per-role permissions and access controls.","Configure once, applies platform-wide."],
    outreachAngle: "Closed platforms force you into their workflow. Global Settings flips that, unlimited custom fields, configurable automations, per-role permissions. The platform conforms to how your business actually runs." }
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
