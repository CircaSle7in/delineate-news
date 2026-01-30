// ICE Minneapolis Raid - News Analysis Data (v3.3 Template)
// Progressive disclosure: Hook → At a Glance → Legal Framework → Key Findings → Expert Analysis → Tension Map → Perspectives → What We Don't Know → Questions → Audit
// v3.3: Editorial refinements - tighter copy, collapsible sections, consolidated questions, "edit for mercy" principle

const iceMinneapolisData = {
  metadata: {
    slug: "ice-minneapolis-raid",
    title: "ICE Minneapolis Shooting",
    version: "3.3",
    dateRange: {
      start: "2025-01-01",
      end: "2025-01-12"
    },
    status: "published" as const,
    createdAt: "2025-01-12",
    updatedAt: "2025-01-14",
    readTime: "5 min",
    tags: ["Immigration", "Law Enforcement", "Civil Rights"],
  },

  // ============================================
  // SECTION 1: HOOK (v3.3 tightened)
  // ============================================
  hook: "An ICE agent killed a US citizen during an immigration operation. The government says self-defense. Video evidence complicates that claim.",

  // ============================================
  // SECTION 2: AT A GLANCE (v3.3 tightened)
  // ============================================
  atAGlance: {
    whatHappened: "On January 7, 2025, ICE agent Jonathan Ross shot and killed Renee Nicole Good during an immigration enforcement operation in Minneapolis. Good, 37, was a US citizen and mother of three. She was not a target of the operation—she had just dropped her son at school.",
    whatsDisputed: "Federal officials say the officer perceived an imminent threat and fired in self-defense. Critics point to video showing her wheels turned away when shots were fired. Law enforcement experts are divided.",
    whyPeopleDisagree: "At root: how to evaluate a split-second decision. Federal officials emphasize what the officer perceived. Critics emphasize what video shows. The legal answer depends on which framework you apply.",
    whatsStillUnclear: "Good's intent in stopping her vehicle is unknown. Whether she was a bystander or a deliberate protester remains unclear."
  },

  // ============================================
  // SECTION 2.5: LEGAL FRAMEWORK (v3.3 - collapsible by default)
  // ============================================
  legalFrameworkTop: {
    isCollapsedByDefault: true,
    previewText: "How courts evaluate this type of shooting affects how we interpret the evidence. Courts evaluate both what an officer perceived and the circumstances leading up to the shooting.",
    expandLabel: "Read legal framework →",
    intro: "Understanding how courts analyze police shootings is essential to evaluating the competing claims in this case.",
    standards: [
      {
        name: "The \"Reasonable Officer\" Standard",
        case: "Graham v. Connor (1989)",
        summary: "The Supreme Court established that police use of force must be judged \"from the perspective of a reasonable officer on the scene, rather than with the 20/20 vision of hindsight.\" The Court recognized that \"police officers are often forced to make split-second judgments—in circumstances that are tense, uncertain, and rapidly evolving.\""
      },
      {
        name: "Totality of Circumstances",
        case: "Barnes v. Felix (2025)",
        summary: "This recent decision requires courts to consider the \"totality of circumstances,\" including events leading up to the incident—not just the moment force was used. This means courts may consider whether an officer's own actions contributed to creating the dangerous situation."
      },
      {
        name: "Federal Policy on Vehicles",
        case: "DOJ Use of Force Policy",
        summary: "DOJ policy states that firearms may not be discharged at a moving vehicle unless \"no other objectively reasonable means of defense appear to exist, which includes moving out of the path of the vehicle.\""
      }
    ],
    whyItMatters: "The federal account emphasizes the officer's split-second perception of threat (Graham standard). Critics emphasize the officer's positioning and the totality of circumstances (Barnes standard). Both legal frameworks are legitimate—they represent different ways courts have approached these questions."
  },

  // ============================================
  // SECTION 3: KEY FINDINGS (v3.3 tightened)
  // ============================================
  keyFindings: [
    "Video evidence and federal accounts conflict. Multiple analyses show Good's wheels turned away when shots were fired; the officer walked away unassisted. Federal officials maintain he perceived an imminent threat. Experts are divided on interpretation.",
    "The FBI took sole control of the investigation within hours, reversing an initial agreement for joint state-federal investigation. Minnesota officials now have no access to evidence.",
    "The ICE agent was filming with his cellphone in one hand while holding his gun in the other, according to video evidence.",
    "A bystander physician was blocked from checking Good's pulse for approximately 5 minutes after the shooting, according to witness accounts.",
    "Good was not an immigration enforcement target—she was a US citizen returning from school drop-off—raising questions about engagement protocols for bystanders during operations.",
    "Law enforcement experts disagree about the shooting. Some, citing training on vehicle threats and split-second decision-making, support the self-defense claim. Others, including former federal agents, question the tactical decision to position in front of the vehicle."
  ],
  keyFindingsNote: "These findings shape how accountability, training, and oversight are debated.",

  // ============================================
  // SECTION 3.5: WHERE VIDEO AND OFFICIAL ACCOUNTS DIFFER
  // ============================================
  evidenceDivergence: {
    comparisons: [
      {
        videoShows: "Good's wheels turned away from the officer at the moment shots were fired",
        officialAccount: "Good weaponized her vehicle in an act of domestic terrorism",
        videoSource: { outlet: "NBC News analysis", url: "https://www.nbcnews.com/news/us-news/videos-contradict-trump-account-fatal-ice-shooting-minneapolis-rcna253107" },
        officialSource: "DHS Secretary Noem"
      },
      {
        videoShows: "Officer walked away from the scene unassisted after the shooting",
        officialAccount: "Good violently ran over the ICE Officer; hard to believe he is alive",
        videoSource: { outlet: "ABC News analysis", url: "https://abcnews.go.com/US/minneapolis-ice-shooting-minute-minute-timeline-renee-nicole/story?id=129021809" },
        officialSource: "President Trump"
      },
      {
        videoShows: "Agent was filming with cellphone in one hand while holding gun in the other",
        officialAccount: "Officer feared for his life and fired in self-defense",
        videoSource: { outlet: "CNN video review", url: "https://www.cnn.com/2026/01/10/us/ice-shooting-minneapolis-renee-good" },
        officialSource: "DHS Statement"
      }
    ],
    contextNote: "Video evidence shows what happened from specific camera angles. It cannot capture what the officer perceived in the moment, which is the legal standard under Graham v. Connor. At the same time, official statements were made within hours of the shooting, before a full investigation. Both sources have limitations."
  },

  // ============================================
  // SECTION 3.75: WHAT LAW ENFORCEMENT EXPERTS SAY (NEW IN v3.2)
  // ============================================
  expertAnalysis: {
    intro: "Use-of-force experts and former federal agents have offered differing assessments of the shooting. Their disagreement reflects genuine uncertainty about how to apply use-of-force standards to this situation.",
    supporting: [
      {
        expert: "Peter Johnson",
        credentials: "Former Federal Air Marshal, founder of Archway Defense (law enforcement firearms trainer)",
        quotes: [
          {
            text: "That data point for me shows that there was contact made with the agent, who is now in reasonable fear, who could clearly articulate being hit with an SUV as reasonable fear of great bodily harm or death. And then the shots were fired.",
            context: "On justification for shooting"
          },
          {
            text: "When law enforcement approaches your vehicle, tells you to stop or get out of the vehicle, that is the point where you follow the lawful commands of law enforcement... The danger is when we as a society craft a narrative around, 'It's up to me to decide when I comply with law enforcement.' We have a judicial system specifically in place if the agent or officer was wrong for the traffic stop. That is where the fight takes place, not on the road.",
            context: "On compliance with law enforcement"
          }
        ],
        sourceUrl: "https://www.cbsnews.com/minnesota/news/experts-analyze-new-video-fatal-ice-shooting-minneapolis/"
      },
      {
        expert: "Ed Obayashi",
        credentials: "Use-of-force expert",
        quotes: [
          {
            text: "Keep in mind, this is a moving vehicle. It's about 5,000 pounds of metal, and if it's even going five miles an hour, I don't want to get run over.",
            context: "On vehicle threats"
          }
        ],
        sourceUrl: "https://www.kmbc.com/article/deadly-ice-shooting-federal-force-policy/69951228"
      },
      {
        expert: "Justin Biedinger",
        credentials: "Former police officer",
        quotes: [
          {
            text: "I will never like Monday morning quarterback, because his feeling just like mine or yours in front of that car, that's what's relevant, what he felt in that split second.",
            context: "On split-second decisions"
          }
        ],
        sourceUrl: "https://www.kmbc.com/article/deadly-ice-shooting-federal-force-policy/69951228"
      },
      {
        expert: "Anonymous former ICE official",
        credentials: "Via Newsweek",
        quotes: [
          {
            text: "She takes the vehicle, lunges the vehicle, drives through after they stopped her. And she dies because they defend themselves... Yes, it's justified, it is absolutely justified.",
            context: "On self-defense claim"
          }
        ],
        sourceUrl: "https://www.newsweek.com/former-ice-agents-break-down-jonathan-rosss-actions-11334133"
      }
    ],
    critical: [
      {
        expert: "Anonymous federal agent",
        credentials: "Current federal law enforcement",
        quotes: [
          {
            text: "At a certain point, you need to understand not to put yourself in these positions. Why did you put yourself in front of the car? You're staging the scene. Tactically, why would you put yourself in that position? ... That's why training is so important. That's why positioning is so important.",
            context: "On tactical positioning"
          }
        ],
        sourceUrl: "https://www.cbsnews.com/minnesota/news/dhs-policy-on-use-of-force-says-it-must-be-objectively-reasonable-cant-be-used-to-stop-someone-fleeing/"
      },
      {
        expert: "Former GS-15 HSI agent",
        credentials: "25 years conducting stops and approaches",
        quotes: [
          {
            text: "I've been conducting stops and approaches for 25 years... I never, ever wanted to be intentionally in front of the vehicle.",
            context: "On positioning"
          }
        ],
        sourceUrl: "https://www.cbsnews.com/minnesota/news/dhs-policy-on-use-of-force-says-it-must-be-objectively-reasonable-cant-be-used-to-stop-someone-fleeing/"
      },
      {
        expert: "Prof. John P. Gross",
        credentials: "UW Law School",
        quotes: [
          {
            text: "If you are an officer who views this woman as a threat, you don't have one hand on a cellphone. You don't walk around this supposed weapon, casually filming.",
            context: "On officer behavior"
          }
        ],
        sourceUrl: "https://www.cnn.com/2026/01/10/us/ice-shooting-minneapolis-renee-good"
      }
    ],
    summary: {
      intro: "The expert disagreement reflects two different questions:",
      questions: [
        "Was the officer's perception of threat reasonable in the moment? (Experts who support the shooting focus here)",
        "Did the officer's own tactical choices create the dangerous situation? (Experts who question the shooting focus here)"
      ],
      conclusion: "Both questions are legally relevant under current use-of-force standards."
    }
  },

  // ============================================
  // SECTION 4: TENSION MAP
  // ============================================
  tensionMap: [
    {
      question: "Was lethal force justified?",
      positions: [
        { side: "Federal", position: "Yes—Good weaponized her vehicle, officer fired in self-defense" },
        { side: "Critics", position: "No—video shows wheels turned away, officer walked away uninjured" }
      ]
    },
    {
      question: "Should federal authorities control the investigation?",
      positions: [
        { side: "Federal", position: "Yes—federal operation, federal jurisdiction, concerns about state officials compromising investigation" },
        { side: "State/Local", position: "No—blocking state access prevents accountability, deviates from normal police shooting protocols" }
      ]
    },
    {
      question: "Is the broader operation legitimate?",
      positions: [
        { side: "Supporters", position: "Yes—removing dangerous criminals that sanctuary policies protected" },
        { side: "Opponents", position: "No—terrorizing communities, targeting ethnic populations, killing bystanders" }
      ]
    },
    {
      question: "Who is responsible for Good's death?",
      positions: [
        { side: "Federal", position: "Good herself—\"tragedy of her own making\" (VP Vance); created dangerous situation" },
        { side: "Critics", position: "The agent and the operation—excessive force against non-threat, no accountability" }
      ]
    }
  ],

  // ============================================
  // SECTION 5: PERSPECTIVES (3 perspectives with balanced framing)
  // ============================================
  perspectives: [
    {
      id: "perspective_federal",
      label: "Federal / Law Enforcement",
      summaryLine: "This perspective prioritizes officer safety, legal precedent, and federal authority.",
      summary: "The shooting was justified self-defense by an officer who perceived an imminent vehicle threat. Under Graham v. Connor (1989), courts evaluate use of force from \"the perspective of a reasonable officer on the scene, rather than with the 20/20 vision of hindsight.\" The officer made a split-second decision in a chaotic environment. Federal jurisdiction over the investigation is legally appropriate for a federal operation, and challenges to law enforcement actions belong in court—not on the street.",
      representativeQuote: {
        quote: "When law enforcement approaches your vehicle, tells you to stop or get out of the vehicle, that is the point where you follow the lawful commands of law enforcement... The danger is when we as a society craft a narrative around, 'It's up to me to decide when I comply with law enforcement.' We have a judicial system specifically in place if the agent or officer was wrong for the traffic stop. That is where the fight takes place, not on the road.",
        attribution: "Peter Johnson, former Federal Air Marshal and founder of Archway Defense (law enforcement firearms trainer)"
      },
      expanded: {
        keyEmphases: [
          "Graham v. Connor (1989) establishes that use of force must be judged from the officer's perspective in the moment, not with hindsight—the Supreme Court has recognized that officers must make 'split-second judgments in circumstances that are tense, uncertain, and rapidly evolving'",
          "The appropriate venue to challenge law enforcement actions is the judicial system, not the street—'That is where the fight takes place, not on the road' (Peter Johnson)",
          "Vehicles are classified as deadly weapons in law enforcement training—'It's about 5,000 pounds of metal, and if it's even going five miles an hour, I don't want to get run over' (Ed Obayashi, use-of-force expert)",
          "Video evidence cannot capture what the officer perceived in a split-second decision—'What he felt in that split second is what's relevant' (Justin Biedinger)",
          "Multiple former federal agents and use-of-force experts have reviewed the evidence and concluded the shooting was justified",
          "Federal agents have Supremacy Clause protections when acting within their official duties—Deputy AG Blanche stated arrests of federal officers performing duties would be 'illegal and futile'",
          "Good's vehicle was blocking the road during an active enforcement operation after being warned to move",
          "Operation Metro Surge has resulted in arrests of individuals with serious criminal histories, including violent offenders"
        ],
        minimizedAspects: [
          "Video evidence showing wheels turned away from officer at moment of shooting",
          "Good was a US citizen and not the target of the operation",
          "Some law enforcement experts, including former federal agents, question the tactical decision to position in front of the vehicle—'Why did you put yourself in front of the car? You're staging the scene... That's why training is so important' (anonymous federal agent)",
          "DOJ policy explicitly lists 'moving out of the path of the vehicle' as an alternative to consider before using deadly force",
          "Barnes v. Felix (2025) requires courts to consider whether the officer's own actions contributed to creating the dangerous situation"
        ],
        loadedLanguage: ["weaponized vehicle", "domestic terrorism", "worst of the worst", "criminal illegal aliens", "obstruction"]
      }
    },
    {
      id: "perspective_progressive",
      label: "Progressive / Civil Rights",
      summaryLine: "This perspective prioritizes accountability, video evidence, and civil liberties.",
      summary: "An ICE agent shot and killed an unarmed US citizen mother, and video evidence appears inconsistent with the official account. The federal government then took sole control of the investigation, blocking state access. Critics see this as a pattern of federal overreach without accountability.",
      representativeQuote: {
        quote: "If you are an officer who views this woman as a threat, you don't have one hand on a cellphone. You don't walk around this supposed weapon, casually filming.",
        attribution: "Prof. John P. Gross, UW Law School"
      },
      expanded: {
        keyEmphases: [
          "Good was an unarmed US citizen, mother of three, returning from school drop-off",
          "Video evidence appears inconsistent with federal claims about the shooting",
          "FBI took sole control of investigation, blocking state involvement",
          "Large-scale operation is affecting immigrant communities broadly, including US citizens",
          "Observers exercising First Amendment rights have been arrested"
        ],
        minimizedAspects: [
          "Criminal backgrounds of some individuals arrested in operation",
          "Fraud investigations that prompted the operation",
          "Good's vehicle was blocking the road during an active operation",
          "Legitimate law enforcement interest in enforcing immigration law",
          "Safety concerns for agents operating amid protests"
        ],
        loadedLanguage: ["killed", "murdered", "terrorizing", "reckless", "militarized", "cover-up"]
      }
    },
    {
      id: "perspective_local_institutional",
      label: "State / Local Officials",
      summaryLine: "This perspective prioritizes jurisdiction, established process, and local oversight.",
      summary: "The federal government is conducting a large-scale operation without coordination with state and local authorities. Video evidence and official statements are difficult to reconcile. The decision to block state investigation access deviates from standard protocols for police shooting investigations.",
      representativeQuote: {
        quote: "Without complete access to the evidence, witnesses and information collected, we cannot meet the investigative standards that Minnesota law and the public demands.",
        attribution: "BCA Superintendent Drew Evans"
      },
      expanded: {
        keyEmphases: [
          "Lack of coordination between federal and state/local authorities",
          "Federal takeover of investigation deviates from standard police shooting protocols",
          "Video evidence and official federal statements are difficult to reconcile",
          "Established state policies are being overridden without consultation",
          "State officials have legal jurisdiction over deaths occurring in Minnesota"
        ],
        minimizedAspects: [
          "Federal government's constitutional authority over immigration enforcement",
          "Crimes committed by some individuals arrested in the operation",
          "Legitimate federal interest in investigating fraud",
          "Possibility that state officials could compromise a federal investigation"
        ],
        loadedLanguage: ["unprecedented", "blocked access", "denied cooperation", "complex legal issues"]
      }
    }
  ],

  // ============================================
  // SECTION 6: WHAT WE DON'T KNOW
  // Organized by: shooting-specific vs operation-specific
  // ============================================
  uncertainties: {
    // About the shooting specifically
    aboutShooting: [
      {
        id: "unc_001",
        question: "Was Good's blocking of the road intentional protest or a routine traffic situation?",
        context: "Federal officials described her as a potential protester. Family says she was a mom returning from school. Video shows her stopped perpendicular but doesn't establish her intent or how long she'd been there. Neither side's certainty is fully supported by available evidence."
      },
      {
        id: "unc_002",
        question: "What did the officer perceive that video doesn't show?",
        context: "The legal standard under Graham v. Connor focuses on what a \"reasonable officer on the scene\" would perceive. Video shows external events but cannot capture the officer's perception, training response, or split-second threat assessment. Agent Ross's perspective—what he saw, heard, and perceived in the moment—is essential to evaluating the self-defense claim but absent from public information."
      },
      {
        id: "unc_003",
        question: "What was the officer's state of mind and training?",
        context: "Understanding Agent Ross's decision-making process is essential to evaluating the shooting. Was this a split-second threat response consistent with training? What was his experience level? His background and perspective are absent from coverage."
      },
      {
        id: "unc_004",
        question: "Is the FBI's takeover of the investigation truly unprecedented?",
        context: "State officials call it unprecedented. But what are the actual legal precedents for federal-state jurisdiction conflicts in police shootings? Historical context is thin in coverage."
      },
      {
        id: "unc_005",
        question: "Did the shooting follow standard use-of-force protocols?",
        context: "Independent of policy views, law enforcement experts could evaluate: Was drawing a weapon appropriate given the threat level? Was the officer's positioning tactically sound? Expert analysis of the specific decisions made is rare in coverage."
      },
      {
        id: "unc_006",
        question: "What does the video NOT show?",
        context: "Video angles have limitations. Cameras captured visual events from specific positions but cannot capture: the officer's perception of threat, audio cues he may have responded to, peripheral movement outside frame, or his training-based threat assessment. Some law enforcement experts note that what matters legally is \"what he felt in that split second\" (Biedinger)—which video cannot show. This doesn't mean video is irrelevant, but it means video alone cannot answer the legal question of whether the officer's perception was reasonable."
      }
    ],
    // About the broader operation
    aboutOperation: [
      {
        id: "unc_007",
        question: "What are the specific fraud cases that prompted Operation Metro Surge?",
        context: "DHS cites fraud involving federal nutrition and pandemic aid programs. But what are the specific cases? Who has been charged? Is the scale of the operation proportional to the evidence? These details remain undisclosed."
      },
      {
        id: "unc_008",
        question: "What's the breakdown of all 2,000+ arrests?",
        context: "DHS highlights dozens of individuals with serious criminal histories but hasn't released full data. How many of the 2,000+ had criminal records? How many were released? Deported? How many were US citizens mistakenly detained?"
      },
      {
        id: "unc_009",
        question: "How does this compare to previous large-scale immigration operations?",
        context: "DHS calls this the largest immigration operation ever. How does it actually compare? What were outcomes of similar historical operations?"
      },
      {
        id: "unc_010",
        question: "What is the experience of affected communities?",
        context: "58% of Minnesota Somalis were born in the US. Of foreign-born Somalis, 87% are naturalized citizens. Latino communities are also affected. What is the daily experience of these communities during the operation?"
      },
      {
        id: "unc_011",
        question: "How will this affect long-term cooperation with law enforcement?",
        context: "If immigrants fear any contact with law enforcement may lead to deportation, they may not report crimes, serve as witnesses, or seek help. Long-term public safety effects are unknown."
      }
    ],
    // Human dimension
    humanCost: [
      {
        id: "unc_012",
        question: "The human cost to Good's family",
        context: "Three children—ages 15, 12, and 6—lost their mother. This human dimension is largely absent from coverage focused on political conflict."
      }
    ]
  },

  // ============================================
  // SECTION 7: QUESTIONS FOR YOU (v3.3 consolidated to 4)
  // ============================================
  questionsIntro: "These questions don't have right answers. They're invitations to think.",
  questions: [
    {
      id: "q_001",
      question: "Video shows Good's wheels turned away when shots were fired. Federal officials say the officer perceived an imminent threat after contact with the vehicle. Under Graham v. Connor, use of force is judged from the officer's perspective, not with hindsight. What weight should video evidence carry against an officer's stated perception of threat? What context might video not capture?"
    },
    {
      id: "q_002",
      question: "What conditions would need to be true for you to trust the outcome of a federal-only investigation? What would it take for you to believe state involvement would compromise the investigation?"
    },
    {
      id: "q_003",
      question: "Good was a US citizen who wasn't the target of the immigration operation, but her vehicle was blocking an enforcement action and she had been warned to move. How do you weigh the value of enforcement against the risk of harm to uninvolved bystanders?"
    },
    {
      id: "q_004",
      question: "Law enforcement experts disagree about this shooting. Some say it was justified self-defense against a vehicle threat. Others say the officer created the dangerous situation by positioning in front of the car. If experts with similar training and experience reach opposite conclusions, what does that tell us about how we should evaluate use-of-force incidents?"
    }
  ],

  // ============================================
  // SECTION 8: AUDIT DATA (collapsed by default)
  // ============================================
  audit: {
    methodology: {
      version: "1.2",
      sourcesAnalyzed: 51,
      claimsExtracted: 29,
      verificationBreakdown: {
        verified: 16,
        disputed: 2,
        singleSource: 11
      },
      biasDistribution: {
        left: 4,
        leftCenter: 15,
        center: 18,
        rightCenter: 6,
        right: 6,
        unknown: 2
      },
      // Legal Framework is now prominently displayed at top of article - see legalFrameworkTop
      legalFrameworkNote: "This analysis references key legal standards that courts use to evaluate police use of force. See 'How Courts Evaluate Use of Force' section above for details on Graham v. Connor (1989), Barnes v. Felix (2025), and DOJ vehicle policy.",
      searchQueries: [
        "ICE raid Minneapolis woman killed January 2025",
        "Minneapolis ICE enforcement immigration arrest 2025",
        "ICE Minneapolis sanctuary city Trump deportation 2025",
        "ICE Minneapolis shooting body camera video evidence",
        "Minnesota BCA ICE shooting investigation federal jurisdiction",
        "Fox News ICE Minneapolis Renee Good shooting Trump defense",
        "Operation Metro Surge Minneapolis results arrests criminals",
        "use of force experts ICE Minneapolis shooting analysis",
        "Graham v Connor reasonable officer standard"
      ],
      notes: "Sources collected via web search on 2025-01-12, expanded 2025-01-13-14. Corpus spans left (ACLU, CNN), center (PBS, MPR, official statements, legal experts), and right (Fox News, Police1, law enforcement experts) perspectives. v3.3 refined editorial presentation for reader experience—tighter copy, collapsible sections, consolidated questions from 6 to 4, and 'edit for mercy' principle throughout."
    },
    claims: [
      { id: "claim_001", claim: "Renee Nicole Good, 37, a US citizen, was shot and killed by ICE agent Jonathan Ross on January 7, 2025 in south Minneapolis", sourceType: "official_statement", verificationStatus: "verified", sources: 4 },
      { id: "claim_002", claim: "Good was shot three times through the windshield of her Honda Pilot SUV", sourceType: "firsthand", verificationStatus: "verified", sources: 2 },
      { id: "claim_003", claim: "Good was a mother of three children (ages 15, 12, and 6) and lived with her wife", sourceType: "firsthand", verificationStatus: "verified", sources: 2 },
      { id: "claim_004", claim: "Good 'weaponized her vehicle' and attempted to ram ICE officers in an 'act of domestic terrorism'", sourceType: "official_statement", verificationStatus: "disputed", sources: 2, contradicts: ["claim_005", "claim_006"] },
      { id: "claim_005", claim: "Video shows Good's vehicle wheels turned AWAY from the officer at the moment shots were fired", sourceType: "firsthand", verificationStatus: "verified", sources: 2, contradicts: ["claim_004"] },
      { id: "claim_006", claim: "The ICE officer was not struck by the vehicle and walked away unassisted after the shooting", sourceType: "firsthand", verificationStatus: "verified", sources: 1, contradicts: ["claim_007"] },
      { id: "claim_007", claim: "Good 'violently, willfully, and viciously ran over the ICE Officer' and it is 'hard to believe he is alive'", sourceType: "official_statement", verificationStatus: "disputed", sources: 2, contradicts: ["claim_005", "claim_006"] },
      { id: "claim_008", claim: "The DHS account of the shooting is 'bulls***' and 'garbage'", sourceType: "official_statement", verificationStatus: "single_source", sources: 2, attribution: "Minneapolis Mayor Jacob Frey" },
      { id: "claim_009", claim: "The ICE agent was filming with his cellphone in one hand while holding his gun in the other", sourceType: "firsthand", verificationStatus: "verified", sources: 2 },
      { id: "claim_010", claim: "A bystander physician was blocked from checking Good's pulse by ICE agents for approximately 5 minutes", sourceType: "firsthand", verificationStatus: "verified", sources: 1 },
      { id: "claim_011", claim: "Good was NOT the target of the ICE enforcement operation", sourceType: "official_statement", verificationStatus: "verified", sources: 2 },
      { id: "claim_012", claim: "Operation Metro Surge is the 'largest immigration operation ever' with ~2,000 agents deployed", sourceType: "official_statement", verificationStatus: "single_source", sources: 2 },
      { id: "claim_013", claim: "Over 2,000 arrests made since Operation Metro Surge began in December 2025", sourceType: "official_statement", verificationStatus: "single_source", sources: 2 },
      { id: "claim_014", claim: "The FBI took sole control of the shooting investigation, blocking Minnesota BCA from access to evidence", sourceType: "official_statement", verificationStatus: "verified", sources: 2 },
      { id: "claim_015", claim: "A joint BCA-FBI investigation was initially agreed to, then reversed by US Attorney's Office same day", sourceType: "official_statement", verificationStatus: "verified", sources: 1 },
      { id: "claim_016", claim: "Good's death was a 'tragedy of her own making'", sourceType: "official_statement", verificationStatus: "single_source", sources: 1, attribution: "Vice President JD Vance" },
      { id: "claim_017", claim: "Minneapolis and St. Paul are sanctuary cities with policies limiting cooperation with federal immigration enforcement", sourceType: "official_statement", verificationStatus: "verified", sources: 2 },
      { id: "claim_018", claim: "58% of Somalis in Minnesota were born in the US; of foreign-born Somalis, 87% are naturalized citizens", sourceType: "expert", verificationStatus: "single_source", sources: 1 },
      { id: "claim_019", claim: "Susan Tincher, 55, US citizen, was arrested while observing ICE operations", sourceType: "firsthand", verificationStatus: "verified", sources: 1 },
      { id: "claim_020", claim: "The operation was prompted by fraud investigations involving federal nutrition and pandemic aid programs", sourceType: "official_statement", verificationStatus: "single_source", sources: 1 },
      { id: "claim_021", claim: "Governor Tim Walz called the operation 'a war that's being waged against Minnesota'", sourceType: "official_statement", verificationStatus: "verified", sources: 2 },
      { id: "claim_022", claim: "Good was described as 'disorderly, obstructing and resisting' and a potential 'professional agitator'", sourceType: "official_statement", verificationStatus: "single_source", sources: 1, attribution: "President Trump" },
      { id: "claim_023", claim: "Hennepin County Attorney stated Minnesota prosecutors have jurisdiction over the case", sourceType: "official_statement", verificationStatus: "single_source", sources: 1 },
      { id: "claim_024", claim: "DHS Secretary Noem stated Minnesota authorities 'don't have any jurisdiction in this investigation'", sourceType: "official_statement", verificationStatus: "single_source", sources: 1 },
      { id: "claim_025", claim: "Community activists used whistle-blowing to alert neighbors to ICE presence", sourceType: "firsthand", verificationStatus: "verified", sources: 2 },
      { id: "claim_026", claim: "ICE agents did not wear body cameras during the operation", sourceType: "official_statement", verificationStatus: "verified", sources: 1 },
      { id: "claim_027", claim: "The shooting occurred 7 seconds after initial contact, vehicle crashed 140 feet away", sourceType: "firsthand", verificationStatus: "verified", sources: 2 }
    ],
    sources: [
      { id: "src_001", outlet: "Al Jazeera", bias: "left-center", title: "Who was Renee Nicole Good?", url: "https://www.aljazeera.com/news/2026/1/8/who-is-renee-nicole-good-the-woman-killed-in-the-ice-minneapolis-shooting" },
      { id: "src_002", outlet: "Star Tribune", bias: "left-center", title: "Noem says more agents heading to Minnesota", url: "https://www.startribune.com/ice-raids-minnesota/601546426" },
      { id: "src_003", outlet: "CNN", bias: "left", title: "Whistles, then gunfire", url: "https://www.cnn.com/2026/01/10/us/ice-shooting-minneapolis-renee-good" },
      { id: "src_004", outlet: "MN Dept of Public Safety", bias: "center", title: "BCA statement on investigation", url: "https://dps.mn.gov/news/bca/bca-statement-regarding-investigation-ice-fatal-shooting-minneapolis" },
      { id: "src_005", outlet: "ACLU", bias: "left", title: "ACLU demands immediate action", url: "https://www.aclu.org/press-releases/aclu-and-aclu-of-minnesota-demand-immediate-action-after-ice-shoots-and-kills-minnesota-woman" },
      { id: "src_006", outlet: "Al Jazeera", bias: "left-center", title: "Protests erupt as ICE agent kills woman", url: "https://www.aljazeera.com/news/2026/1/7/ice-agent-shoots-and-kills-woman-during-minneapolis-raid" },
      { id: "src_007", outlet: "Police1", bias: "right-center", title: "Driver fatally shot after trying to ram ICE officers", url: "https://www.police1.com/federal-law-enforcement/driver-fatally-shot-after-trying-to-ram-ice-officers-in-minneapolis-dhs-says" },
      { id: "src_008", outlet: "ICE (Official)", bias: "center", title: "ICE arrests dozens in Minnesota", url: "https://www.ice.gov/news/releases/ice-arrests-dozens-criminal-illegal-aliens-convicted-murder-child-rape-and-more" },
      { id: "src_009", outlet: "DHS (Official)", bias: "center", title: "ICE Arrests During Operation Metro Surge", url: "https://www.dhs.gov/news/2025/12/04/ice-arrests-worst-worst-criminal-illegal-aliens-during-operation-metro-surge" },
      { id: "src_010", outlet: "MPR News", bias: "center", title: "Federal agents arrest citizen observer", url: "https://www.mprnews.org/story/2025/12/09/federal-agents-arrest-citizen-observer-watching-ice-north-minneapolis" },
      { id: "src_011", outlet: "NBC News", bias: "left-center", title: "ICE operation shows difficulty of arrests", url: "https://www.nbcnews.com/news/us-news/ice-operation-immigration-arrests-minnesota-rcna248609" },
      { id: "src_012", outlet: "Fox News", bias: "right", title: "Criminal illegal immigrants arrested", url: "https://www.foxnews.com/politics/ice-arrests-minnesota-surge-include-numerous-convicted-child-rapists-killers" },
      { id: "src_013", outlet: "PBS News", bias: "center", title: "2,000 federal agents sent to Minneapolis", url: "https://www.pbs.org/newshour/politics/2000-federal-agents-sent-to-minneapolis-area-to-carry-out-largest-immigration-operation-ever-ice-says" },
      { id: "src_014", outlet: "Axios Twin Cities", bias: "center", title: "How Minneapolis is pushing back", url: "https://www.axios.com/local/twin-cities/2025/12/09/trump-minneapolis-sanctuary-cities-mayors-ice-immigration-somali" },
      { id: "src_015", outlet: "Minnesota Reformer", bias: "left-center", title: "Another 2,000 ICE agents coming", url: "https://minnesotareformer.com/briefs/report-another-2000-ice-agents-are-coming-to-the-twin-cities/" },
      { id: "src_016", outlet: "Washington Post", bias: "left-center", title: "ICE shift in tactics", url: "https://www.washingtonpost.com/immigration/2025/12/28/ice-deportations-data-trump-arrests/" },
      { id: "src_017", outlet: "Fox News", bias: "right", title: "Year of ICE rage", url: "https://www.foxnews.com/politics/year-ice-rage-top-5-democrat-meltdowns-trump-revives-hard-line-deportation-agenda" },
      { id: "src_018", outlet: "Fox News", bias: "right", title: "Cellphone video released", url: "https://www.foxnews.com/us/cellphone-video-released-deadly-minneapolis-ice-agent-shooting" },
      { id: "src_019", outlet: "CNN", bias: "left", title: "Cell phone footage raises questions", url: "https://www.cnn.com/2026/01/09/us/ice-shooting-minneapolis-renee-good-cell-phone-invs" },
      { id: "src_020", outlet: "NPR", bias: "left-center", title: "Video from officer's perspective", url: "https://www.npr.org/2026/01/10/g-s1-105387/new-video-minnesota-shooting-officer-perspective" },
      { id: "src_021", outlet: "Fox 9 Minneapolis", bias: "center", title: "Some ICE agents wear body cameras", url: "https://www.fox9.com/news/some-ice-agents-wear-body-cameras-but-not-everywhere" },
      { id: "src_022", outlet: "Fox News", bias: "right", title: "ICE shooting sparks jurisdiction dispute", url: "https://www.foxnews.com/politics/why-fbi-can-exclude-state-authorities-from-minnesota-probe" },
      { id: "src_023", outlet: "PBS News", bias: "center", title: "Minnesota officials can't access evidence", url: "https://www.pbs.org/newshour/nation/minnesota-officials-say-they-cant-access-evidence-after-fatal-ice-shooting-and-fbi-wont-work-jointly-on-investigation" },
      { id: "src_024", outlet: "The Hill", bias: "center", title: "Can the ICE officer be prosecuted?", url: "https://thehill.com/regulation/court-battles/5680407-ice-officer-shooting-minneapolis-prosecution/" },
      { id: "src_025", outlet: "CNN", bias: "left", title: "Unusual move to block Minnesota", url: "https://www.cnn.com/2026/01/09/politics/investigation-minneapolis-ice-shooting-deviates-police-shooting-playbook" },
      { id: "src_026", outlet: "Fox News", bias: "right", title: "Trump defends ICE agent", url: "https://www.foxnews.com/politics/trump-defends-ice-agent-shows-nyt-reporters-video-deadly-minneapolis-shooting" },
      { id: "src_027", outlet: "Wikipedia", bias: "center", title: "Killing of Renee Good", url: "https://en.wikipedia.org/wiki/Killing_of_Renee_Good" },
      { id: "src_028", outlet: "Fox 9 Minneapolis", bias: "center", title: "Trump blames 'Radical Left'", url: "https://www.fox9.com/news/president-trump-blames-fatal-minneapolis-ice-shooting-radical-left" },
      { id: "src_029", outlet: "NBC News", bias: "left-center", title: "Videos contradict Trump's account", url: "https://www.nbcnews.com/news/us-news/videos-contradict-trump-account-fatal-ice-shooting-minneapolis-rcna253107" },
      { id: "src_030", outlet: "ABC News", bias: "left-center", title: "Minute-by-minute timeline", url: "https://abcnews.go.com/US/minneapolis-ice-shooting-minute-minute-timeline-renee-nicole/story?id=129021809" },
      { id: "src_031", outlet: "MPR News", bias: "center", title: "Good's wife releases statement", url: "https://www.mprnews.org/story/2026/01/09/renee-goods-wife-releases-statement-about-ice-shooting" },
      { id: "src_032", outlet: "Washington Post", bias: "left-center", title: "5 key moments in the shooting", url: "https://www.washingtonpost.com/investigations/2026/01/09/moments-before-ice-shooting-minneapolis/" },
      { id: "src_033", outlet: "CNN", bias: "left", title: "Minneapolis ICE crackdown: What we know", url: "https://www.cnn.com/2026/01/06/us/minneapolis-ice-crackdown-what-we-know" },
      { id: "src_034", outlet: "DHS (Official)", bias: "center", title: "DHS Highlights Arrests", url: "https://www.dhs.gov/news/2026/01/08/dhs-highlights-worst-worst-criminal-illegal-aliens-including-rapists-pedophiles-and" },
      { id: "src_035", outlet: "CBC News", bias: "left-center", title: "Trump and Vance accounts differ from video", url: "https://www.cbc.ca/news/world/minneapolis-ice-shooting-video-trump-vance-9.7038446" },
      // v3.1 additions - strengthening right-center/expert sourcing
      { id: "src_036", outlet: "CBS Minnesota (WCCO)", bias: "right-center", title: "Experts analyze new video of fatal ICE shooting", url: "https://www.cbsnews.com/minnesota/news/experts-analyze-new-video-fatal-ice-shooting-minneapolis/", expertQuote: "Peter Johnson (Archway Defense): 'In a tense, uncertain and rapidly evolving situation, law enforcement officers are not to be judged in hindsight 20/20'" },
      { id: "src_037", outlet: "KMBC Kansas City", bias: "center", title: "Deadly ICE shooting: Federal force policy", url: "https://www.kmbc.com/article/deadly-ice-shooting-federal-force-policy/69951228", expertQuote: "Ed Obayashi: 'It's about 5,000 pounds of metal, and if it's even going five miles an hour, I don't want to get run over'" },
      { id: "src_038", outlet: "KMBC Kansas City", bias: "right-center", title: "Former police officer analysis", url: "https://www.kmbc.com/article/deadly-ice-shooting-federal-force-policy/69951228", expertQuote: "Justin Biedinger: 'I will never like Monday morning quarterback, because his feeling just like mine or yours in front of that car, that's what's relevant'" },
      { id: "src_039", outlet: "Newsweek", bias: "right-center", title: "Former ICE agents break down Jonathan Ross's actions", url: "https://www.newsweek.com/former-ice-agents-break-down-jonathan-rosss-actions-11334133" },
      { id: "src_040", outlet: "DOJ (Official)", bias: "center", title: "Department of Justice Policy on Use of Force", url: "https://www.justice.gov/jm/1-16000-department-justice-policy-use-force" },
      { id: "src_041", outlet: "Just Security", bias: "left-center", title: "DHS/DOJ/CBP Policy on Force and Vehicles", url: "https://www.justsecurity.org/128498/dhs-doj-cbp-policy-force-vehicles/" },
      { id: "src_042", outlet: "Justia (Legal)", bias: "center", title: "Graham v. Connor, 490 U.S. 386 (1989)", url: "https://supreme.justia.com/cases/federal/us/490/386/" },
      { id: "src_043", outlet: "The Trace", bias: "left-center", title: "ICE shooting legal prosecution analysis (Barnes v. Felix)", url: "https://www.thetrace.org/2026/01/ice-shooting-legal-prosecution-federal-agent/", expertQuote: "Kami Chavis: 'Courts must evaluate police use of deadly force under the totality of circumstances'" },
      { id: "src_044", outlet: "CBS Minnesota", bias: "center", title: "DHS policy on use of force - critical analysis", url: "https://www.cbsnews.com/minnesota/news/dhs-policy-on-use-of-force-says-it-must-be-objectively-reasonable-cant-be-used-to-stop-someone-fleeing/", expertQuote: "Former GS-15 HSI agent: 'I've been conducting stops and approaches for 25 years... I never, ever wanted to be intentionally in front of the vehicle'" },
      { id: "src_045", outlet: "Heritage Foundation", bias: "right", title: "Responding to Crimes Committed by Aliens", url: "https://www.heritage.org/border-security/report/responding-crimes-committed-aliens" }
    ]
  },

  // ============================================
  // FOOTER
  // ============================================
  footer: {
    curator: "Sterling Blood",
    disclaimer: "This analysis reflects editorial judgment, not consensus or final truth. We disclose our values and blind spots in our Editorial Posture.",
    editorialPostureLink: "/about/editorial-posture"
  }
};

export default iceMinneapolisData;
