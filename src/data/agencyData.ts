import { ServiceItem, Project, TeamMember, Testimonial, FAQItem, StatItem } from '../types';

export const AGENCY_INFO = {
  name: "Vollywide Media",
  headline: "We Are Vollywide Media",
  subheadline: "We Make Your Business Thrive Digitally",
  description: "Disruptive marketing techniques combined with proven technology solutions to deliver maximum business value in highly competitive market conditions.",
  email: "hello@vollywide.com",
  phone: "+1 (800) 482-9659",
  locations: [
    { city: "San Francisco", address: "500 Howard Street, Suite 400, CA 94105", timezone: "PST (UTC-8)" },
    { city: "London", address: "30 St Mary Axe, 18th Floor, EC3A 8EP", timezone: "GMT (UTC+0)" },
    { city: "Singapore", address: "1 Raffles Place, #28-00, 048616", timezone: "SGT (UTC+8)" }
  ],
  socials: {
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    github: "https://github.com",
    dribbble: "https://dribbble.com"
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: "digital-marketing",
    title: "Performance Digital Marketing",
    shortDesc: "Data-driven acquisition campaigns across Google, Meta, TikTok, and LinkedIn engineered for maximum ROAS.",
    fullDesc: "We craft hyper-targeted multi-channel acquisition funnels using predictive audience modeling, high-converting creative iterations, and automated bid strategies.",
    iconName: "TrendingUp",
    gradient: "from-blue-600 to-indigo-600",
    stats: "+320% Avg ROAS",
    featured: true,
    deliverables: [
      "Paid Search & Social Media Advertising",
      "Full-Funnel Creative Production & Testing",
      "Attribution Modeling & Custom Dashboards",
      "Retargeting & LTV Optimization Engines"
    ]
  },
  {
    id: "web-app-development",
    title: "Web & Mobile Engineering",
    shortDesc: "High-performance web applications, enterprise platforms, and sleek mobile apps built with modern tech.",
    fullDesc: "From custom React/Next.js architectures to scalable cloud infrastructure, we build ultra-fast, resilient digital products with flawless user experiences.",
    iconName: "Code2",
    gradient: "from-indigo-600 to-violet-600",
    stats: "99.9% Uptime & 100/100 Lighthouse",
    featured: true,
    deliverables: [
      "Custom Full-Stack Web Development",
      "iOS & Android React Native Applications",
      "Headless E-Commerce & CMS Platforms",
      "API Integrations & Cloud Architecture"
    ]
  },
  {
    id: "branding-creative",
    title: "Branding & Visual Identity",
    shortDesc: "Distinctive brand positioning, design systems, and compelling visual stories that captivate audiences.",
    fullDesc: "We build iconic brands that command premium positioning. Through strategic identity design, motion graphics, and UI design systems, we make your brand unforgettable.",
    iconName: "Sparkles",
    gradient: "from-violet-600 to-purple-600",
    stats: "14 Design Excellence Awards",
    featured: true,
    deliverables: [
      "Brand Strategy & Positioning Framework",
      "Logo Identity, Typography & Color Systems",
      "UI/UX Design Systems & Motion Guidelines",
      "Marketing Collateral & Digital Assets"
    ]
  },
  {
    id: "seo-growth",
    title: "Organic SEO & Content Engines",
    shortDesc: "Scalable technical SEO, content strategy, and authority building to dominate search engine results.",
    fullDesc: "Stop relying solely on ad spend. Our programmatic SEO strategies, high-authority backlink acquiring campaigns, and semantic content engines generate durable organic pipelines.",
    iconName: "Search",
    gradient: "from-cyan-600 to-blue-600",
    stats: "+450% Organic Traffic",
    featured: false,
    deliverables: [
      "Deep Technical SEO Audits & Core Web Vitals Fixes",
      "Keyword Intent & Semantic Architecture",
      "Programmatic Content Generation & Optimization",
      "Digital PR & High-Authority Backlink Acquisition"
    ]
  },
  {
    id: "cro-funnel",
    title: "Conversion Rate Optimization (CRO)",
    shortDesc: "Scientific A/B testing, user behavior analytics, and checkout optimization to turn visitors into buyers.",
    fullDesc: "We analyze heatmaps, session recordings, and drop-off analytics to redesign key friction points, boosting conversion rate without increasing traffic acquisition cost.",
    iconName: "Target",
    gradient: "from-emerald-600 to-teal-600",
    stats: "+84% Conversion Uplift",
    featured: false,
    deliverables: [
      "Behavioral Heatmap & User Journey Analysis",
      "Rigorous Multi-Variant A/B Testing",
      "Landing Page Optimization & Redesign",
      "Cart & Checkout Friction Elimination"
    ]
  },
  {
    id: "ai-automation",
    title: "AI & Marketing Automation",
    shortDesc: "Custom AI agents, automated workflow integration, and predictive customer analytics.",
    fullDesc: "Supercharge your internal teams with bespoke AI models, automated lead triage systems, personalized email sequences, and real-time CRM synchronizations.",
    iconName: "Cpu",
    gradient: "from-blue-600 to-cyan-600",
    stats: "15+ Hours Saved/Wk per Rep",
    featured: false,
    deliverables: [
      "Custom Conversational AI & Lead Qualifiers",
      "Automated CRM & Lead Routing Pipelines",
      "Hyper-Personalized Lifecycle Email Workflows",
      "Predictive Customer Churn & LTV Modeling"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "nexus-fintech",
    title: "Nexus Global Pay",
    client: "Nexus Financial Technologies",
    category: "FinTech",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    summary: "Complete digital repositioning, mobile web app redesign, and high-growth acquisition strategy for an international cross-border payments platform.",
    challenge: "Nexus faced high customer acquisition costs and low conversion on their onboarding funnel due to legacy UX and fragmented messaging across global markets.",
    solution: "Vollywide Media re-engineered the mobile app onboarding flow, introduced dynamic localized landing pages, and launched hyper-targeted LinkedIn & Meta performance campaigns.",
    results: [
      { metric: "+340%", label: "Increase in Monthly Active Users" },
      { metric: "-42%", label: "Reduction in Customer Acquisition Cost (CAC)" },
      { metric: "$12.4M", label: "New Transaction Volume Processed" }
    ],
    tags: ["React Native", "Performance Marketing", "UI/UX Redesign", "FinTech"],
    year: "2025",
    testimonial: {
      quote: "Vollywide Media didn't just redesign our product; they fundamentally transformed our growth trajectories in key European and Asian markets within 90 days.",
      author: "Marcus Vance",
      role: "Chief Marketing Officer, Nexus Global"
    }
  },
  {
    id: "aura-luxury-ecommerce",
    title: "Aura Living Essentials",
    client: "Aura Home Design",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    summary: "Headless Shopify Plus build with interactive 3D product previewer and multi-channel paid social acquisition.",
    challenge: "Aura wanted to elevate their luxury brand image while speeding up desktop and mobile load times to capture high-intent architectural buyers.",
    solution: "We deployed a Next.js headless e-commerce store with instant page transitions, dynamic bundle builder, and high-converting video creative campaigns.",
    results: [
      { metric: "4.8x", label: "Return On Ad Spend (ROAS)" },
      { metric: "+185%", label: "E-Commerce Revenue Growth YoY" },
      { metric: "1.2s", label: "Average Page Load Speed" }
    ],
    tags: ["Headless E-Commerce", "Shopify Plus", "3D WebGL", "Paid Ads"],
    year: "2025",
    testimonial: {
      quote: "The combination of high-end aesthetics and raw conversion science that Vollywide brought was unlike any agency we've ever partnered with.",
      author: "Elena Rostova",
      role: "Founder & Creative Director, Aura"
    }
  },
  {
    id: "synthetix-ai-saas",
    title: "Synthetix Intelligence",
    client: "Synthetix AI Corp",
    category: "SaaS",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    summary: "B2B SaaS growth engine, brand design system, technical SEO, and self-serve interactive product demo.",
    challenge: "Synthetix needed to transition from enterprise-only sales cycles to a product-led growth (PLG) self-serve model with clear product differentiation.",
    solution: "Vollywide built an interactive in-browser product sandbox, structured a programmatic SEO strategy around high-intent keywords, and automated lead nurturing.",
    results: [
      { metric: "12,000+", label: "New SaaS Trial Signups/Month" },
      { metric: "68%", label: "Self-Serve Upgrade Conversion Rate" },
      { metric: "#1", label: "Google Rank for 40+ Core Keywords" }
    ],
    tags: ["Product-Led Growth", "SEO Engine", "SaaS Marketing", "Design System"],
    year: "2024",
    testimonial: {
      quote: "Our pipeline exploded. Vollywide Media built our growth engine from scratch and positioned us as the undisputed market leader.",
      author: "Dr. Aris Thorne",
      role: "Co-Founder & CEO, Synthetix AI"
    }
  },
  {
    id: "velocity-health",
    title: "Velocity Fitness & Health App",
    client: "Velocity Tech",
    category: "Mobile Apps",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    summary: "iOS/Android cross-platform application design, Apple App Store Optimization (ASO), and viral influencer campaign.",
    challenge: "Breaking into the crowded fitness app space required a hyper-engaging visual identity and rapid user acquisition.",
    solution: "We designed a gamified UI with real-time haptic feedback, built custom Apple Watch integrations, and scaled influencer video ads on TikTok & Instagram Reels.",
    results: [
      { metric: "1.2M+", label: "App Store Downloads in 6 Months" },
      { metric: "#3", label: "Health & Fitness App Store Rank" },
      { metric: "82%", label: "30-Day User Retention" }
    ],
    tags: ["React Native", "ASO Optimization", "Influencer Strategy", "UI/UX"],
    year: "2024"
  },
  {
    id: "solaris-energy",
    title: "Solaris Clean Energy",
    client: "Solaris Green Power",
    category: "Brand Identity",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80",
    summary: "Complete enterprise rebranding, multi-language corporate portal, and B2B investor presentation system.",
    challenge: "Rebranding a renewable energy conglomerate to appeal to institutional ESG investors and modern enterprise commercial clients.",
    solution: "Created a modern clean visual identity, full video brand anthem, interactive carbon offset calculator, and enterprise portal.",
    results: [
      { metric: "$85M", label: "Institutional Capital Raised Post-Rebrand" },
      { metric: "+210%", label: "Enterprise Commercial Inquiries" },
      { metric: "100%", label: "Positive Brand Sentiment Index" }
    ],
    tags: ["Enterprise Rebrand", "Brand Identity", "Motion Design", "Corporate Portal"],
    year: "2024"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "julian-vance",
    name: "Julian Vance",
    role: "Founder & Executive Creative Director",
    bio: "Ex-Design Lead at top Silicon Valley agencies with 12+ years of experience leading disruptive brand transformations and digital growth strategies.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    specialties: ["Brand Architecture", "Creative Direction", "Growth Strategy"],
    linkedin: "https://linkedin.com"
  },
  {
    id: "sophia-chen",
    name: "Sophia Chen",
    role: "Head of Engineering & Product",
    bio: "Full-stack architect specializing in high-scale React applications, cloud systems, and high-frequency CRO engines.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    specialties: ["Full-Stack Engineering", "Web3/WebGL", "Performance Optimization"],
    linkedin: "https://linkedin.com"
  },
  {
    id: "devon-brooks",
    name: "Devon Brooks",
    role: "VP of Performance Marketing",
    bio: "Managed over $50M in multi-channel paid ad campaigns with a track record of driving exponential ROAS for scaling DTC & B2B brands.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    specialties: ["Paid Acquisition", "Attribution Modeling", "Conversion Strategy"],
    linkedin: "https://linkedin.com"
  },
  {
    id: "amara-okafor",
    name: "Amara Okafor",
    role: "Lead UI/UX & Motion Designer",
    bio: "Award-winning product designer passionate about micro-interactions, motion graphics, and human-centered design systems.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    specialties: ["UI/UX Systems", "Motion Design", "Interactive Prototypes"],
    linkedin: "https://linkedin.com"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Samantha Wright",
    role: "VP of Digital Marketing",
    company: "OmniCorp Global",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
    quote: "Vollywide Media delivered beyond our wildest expectations. Their disruptive marketing campaign tripled our inbound pipeline in less than 4 months.",
    rating: 5,
    highlightMetric: "+310% Inbound Leads"
  },
  {
    id: "2",
    name: "Alexander Hayes",
    role: "Chief Technology Officer",
    company: "FinFlow Systems",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    quote: "The engineering rigor and design aesthetic Vollywide brought to our web application set a new standard for our entire engineering organization.",
    rating: 5,
    highlightMetric: "99.99% App Reliability"
  },
  {
    id: "3",
    name: "Clara Kensington",
    role: "Head of Brand Experience",
    company: "Luxe Retail Group",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=300&q=80",
    quote: "Working with Vollywide felt like hiring an elite internal innovation team. They understand how to pair luxury design with raw performance metrics.",
    rating: 5,
    highlightMetric: "4.8x ROAS Generated"
  }
];

export const STATS: StatItem[] = [
  { number: "$85M+", label: "Client Ad Value Generated", description: "Across global paid media campaigns" },
  { number: "250+", label: "Digital Products Delivered", description: "Web apps, e-commerce & mobile apps" },
  { number: "98.4%", label: "Client Retention Rate", description: "Long-term strategic growth partnerships" },
  { number: "18+", label: "Global Design & Growth Awards", description: "Recognized for creative excellence" }
];

export const FAQS: FAQItem[] = [
  {
    category: "General",
    question: "What makes Vollywide Media different from other agencies?",
    answer: "We bridge the gap between creative storytelling and hard engineering. While traditional creative agencies lack technical execution and dev shops lack strategic marketing vision, Vollywide integrates performance marketing, UX engineering, and growth hacking into one cohesive unit."
  },
  {
    category: "Services",
    question: "How fast can we launch our campaign or project with Vollywide?",
    answer: "Our sprint workflows allow us to launch paid growth campaigns in as little as 10-14 days after onboarding. Full web application engineering projects typically range from 4 to 8 weeks depending on scope."
  },
  {
    category: "Pricing",
    question: "What pricing models do you offer?",
    answer: "We offer performance-tied retainers for ongoing marketing & SEO growth, fixed-price sprint pricing for web/app engineering and rebrands, and value-share revenue models for select high-scale partners."
  },
  {
    category: "Process",
    question: "How do you report and measure performance metrics?",
    answer: "All Vollywide clients get 24/7 access to a real-time custom analytics dashboard tracking key revenue metrics, ad spend, conversion rates, and organic rankings, accompanied by bi-weekly strategic executive syncs."
  }
];
