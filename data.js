/* =====================================================================
   ADD THIS TO data.js
   -----------------------------------------------------------------
   Paste this whole block into data.js, right after the closing `];`
   of the features array (before the ICONS object / utility functions
   at the bottom is fine too, position doesn't matter, it's just
   another top-level const like caseStudies/reviews/webinars).
 
   Source: rentvinemarketing/competitorhub, pulled 2026-07-14.
   This is a one-time copy, not a live sync. Amy's team updates
   competitor-hub monthly, so this array will need a manual refresh
   on the same cadence (or whenever she flags a change) until/unless
   we build a proper sync.
   ===================================================================== */
 
const competitorAnalysis = [
  {
    id: "rentvine",
    name: "Rentvine",
    isUs: true,
    pros: [
      "G2 average of 9.6 out of 10, the strongest satisfaction signal in the competitive set.",
      "Support is a genuine differentiator, with personalized video walkthroughs, named reps, and fast response times.",
      "Trust accounting built specifically for operators managing 300 to 700+ doors.",
      "Open API and modern integrations, built for the tech stack property managers use today.",
      "Be Herd community creates loyalty AppFolio cannot replicate.",
      "Customer reviews consistently highlight onboarding quality and named team members.",
      "74 G2 reviews in June 2026, up from 14 in January. The fastest review growth in the set."
    ],
    cons: [
      "Instagram sits at 1,300 followers, 8.5 times behind DoorLoop and 4.6 times behind AppFolio.",
      "The handle @rentvine_ with a forced underscore creates search friction on Instagram.",
      "Facebook organic reach is near zero. The link in caption strategy is suppressing posts.",
      "LinkedIn sits at 5k, 7 times behind AppFolio and Entrata.",
      "No mobile app, flagged as a gap in multiple Capterra and G2 reviews.",
      "Screening feature noted as needing improvement in recent G2 reviews."
    ],
    opportunity: "Rentvine's satisfaction scores and support quality are the foundation. The gap is visibility, not product. Closing the social reach gap through format changes like reels and carousels, plus consistency, will surface what customers already know: rentvine wins on experience."
  },
  {
    id: "appfolio",
    name: "AppFolio",
    pros: [
      "Publicly traded, which gives it credibility by default with enterprise buyers.",
      "Massive brand recognition and 15+ years of market presence.",
      "37k+ LinkedIn followers.",
      "29k Facebook followers, the largest audience in the set.",
      "Covers multifamily, single family, HOA, and investment management.",
      "Strong integration ecosystem."
    ],
    cons: [
      "Broad positioning with generic messaging that doesn't speak to any one property manager's pain.",
      "29k Facebook followers but only 2 reactions per post, a near zero engagement rate.",
      "Price increases and long term contracts are recurring complaints.",
      "Complexity at scale. It gets harder to use as a portfolio grows.",
      "Support quality declines as the company scales.",
      "58 percent Facebook recommendation rate, below average for SaaS."
    ],
    opportunity: "AppFolio's installed base is rentvine's best switcher audience. Documented complaints about price increases, support decline, and complexity at scale are all pain points rentvine directly solves. Social proof showing real migration stories and trust accounting comparisons is the highest converting play.",
    advantages: ["trust accounting depth", "faster support", "transparent pricing", "open API", "purpose-built for scale"]
  },
  {
    id: "buildium",
    name: "Buildium",
    pros: [
      "RealPage acquisition provides enterprise level backing.",
      "15k LinkedIn followers.",
      "Serves 50+ countries.",
      "High volume content marketing and SEO.",
      "Known for ease of use for small to mid portfolios.",
      "70 percent Facebook recommendation rate."
    ],
    cons: [
      "RealPage ownership creates pricing and data privacy concerns.",
      "Only 4,100 Instagram followers despite 154 posts, a very low conversion rate.",
      "Positioned for small to mid portfolios, not enterprise scale.",
      "Lacks rentvine's trust accounting depth for larger operators.",
      "Forced underscore handle, @buildium_, creates the same search friction as rentvine."
    ],
    opportunity: "RealPage ownership is a real perception liability, especially after the rent price fixing controversy. Rentvine's independent, purpose-built positioning is a direct counter. LinkedIn carousels comparing trust accounting depth and onboarding quality can pull in disenchanted mid-market operators.",
    advantages: ["enterprise accounting", "independent ownership", "scales to 1,000+ doors", "no RealPage concerns", "built-in reconciliation"]
  },
  {
    id: "doorloop",
    name: "DoorLoop",
    pros: [
      "Strongest Instagram presence at 11k, punching well above its weight.",
      "Fastest growing social brand in the set.",
      "15k+ LinkedIn followers.",
      "Strong AI native positioning.",
      "High energy brand resonating with younger property managers.",
      "Active at NARPM and industry events."
    ],
    cons: [
      "Positioned for smaller portfolios and landlords, not enterprise ready.",
      "Only about 5.8k Facebook followers.",
      "AI claims are broad and lack rentvine's trust accounting depth.",
      "Newer brand, less proven at 1,000+ door operations.",
      "Content tends toward rental investing tips rather than property management thought leadership."
    ],
    opportunity: "DoorLoop is the social threat to watch. Their 11k Instagram following is real, but their ICP is landlords and small PM firms, not operators managing 300 to 700+ doors. Content speaking specifically to scale, like reconciliation at volume and multi-entity accounting, clearly differentiates rentvine.",
    advantages: ["enterprise ready", "trust accounting", "multi-entity support", "NARPM credibility", "300 to 700 door focus"]
  },
  {
    id: "entrata",
    name: "Entrata",
    pros: [
      "37k+ LinkedIn followers.",
      "$507m in funding, giving it deep resources.",
      "Built for large multifamily, with strong enterprise credibility.",
      "Strong brand in NAA/NMHC circles.",
      "11k Facebook followers.",
      "Annual Entrata Summit drives community."
    ],
    cons: [
      "Focused almost entirely on multifamily, with limited relevance to residential property management.",
      "Not purpose-built for the residential property manager running 300 to 700 doors.",
      "Complex, long implementation cycles.",
      "Enterprise only pricing, not accessible to growing PM companies.",
      "Instagram sits at 5k followers despite 1,566 posts, a very poor conversion rate.",
      "Content is corporate and polished but lacks personality."
    ],
    opportunity: "Entrata barely overlaps with rentvine's ICP. They play in large multifamily, while rentvine plays in the 300 to 700 door residential PM sweet spot. Position rentvine as the choice for operators who outgrew Buildium or DoorLoop but don't need Entrata's complexity or price.",
    advantages: ["accessible pricing", "simpler onboarding", "residential PM focus", "faster time-to-value", "strong named support"]
  },
  {
    id: "yardibreeze",
    name: "Yardi Breeze",
    pros: [
      "Yardi Systems parent carries 40+ years of industry credibility.",
      "\"Refreshingly simple\" positioning is clear and differentiated.",
      "Live chat support under 19 seconds, a genuine differentiator.",
      "Serves 7,000+ businesses.",
      "Strong appeal to property managers coming from legacy Yardi."
    ],
    cons: [
      "Weakest social presence in the set: 1,100 on Instagram, 976 on Facebook, and 2,300 on LinkedIn.",
      "Sub-brand confusion, as buyers conflate Yardi Breeze with the full Yardi Voyager's complexity.",
      "Limited enterprise accounting depth.",
      "Almost no Facebook engagement despite active posting.",
      "Not purpose-built for trust accounting complexity."
    ],
    opportunity: "Yardi Breeze is the easiest displacement story, with negligible social presence and limited trust accounting depth. Customers who hit a ceiling are an active switcher audience. Content targeting \"outgrew Yardi Breeze\" pain points, especially month-end reconciliation, is a high converting message.",
    advantages: ["trust accounting depth", "scales beyond simplicity", "robust reconciliation", "clear upgrade path", "modern UI"]
  }
];
 
