export const projects = [
  {
    id: 'tars-replica',
    title: 'TARS Replica (Interstellar)',
    tagline: 'AI Software Engineer — edge-deployed conversational assistant',
    description:
      "Architected the core speech-to-text and text-to-speech pipeline, containerizing FastWhisper and PiperVoice with Docker for real-time deployment on an NVIDIA Jetson Orin Nano serving 1,000+ public attendees. Built the foundational LLM framework and agent logic (Claude, Codex) that the rest of a 10-person team built on top of — delivered on a $1,050 hardware budget.",
    stack: ['Python', 'Docker', 'FastWhisper', 'PiperVoice', 'Claude', 'Codex', 'Jetson Orin Nano'],
    year: 'Feb – Apr 2026',
    links: {},
  },
  {
    id: 'sirroc-promotions',
    title: 'SirRoc Promotions',
    tagline: 'Full Stack Developer — e-commerce & payments platform',
    description:
      "Built a full e-commerce and transaction-handling system from scratch on the MERN stack, serving as the business's primary financial infrastructure. Integrated the Stripe API as the core ledger for revenue, purchases, and cash flow, and deployed the stack on Render and Netlify — facilitating 200+ secure transactions and capturing $20,000+ in revenue.",
    stack: ['JavaScript', 'React', 'Express', 'MongoDB', 'Stripe', 'Render', 'Netlify'],
    year: 'May – Dec 2025',
    links: {},
  },
  {
    id: 'hack-for-humanity',
    title: 'Hack for Humanity Hackathon',
    tagline: 'LLM Processing & Backend Engineer — legal document simplifier',
    description:
      'Initiated the core LLM build and framework architecture that the team extended into a low-latency legal-document simplification tool using Groq. Engineered RESTful API endpoints with FastAPI and implemented dynamic language detection and translation through optimized LLM prompting.',
    stack: ['Python', 'FastAPI', 'Groq', 'REST APIs'],
    year: 'Feb 2026',
    links: {},
  },
  {
    id: 'boxing-for-justice',
    title: 'Boxing For Justice',
    tagline: 'Full Stack Developer — nonprofit youth program & event platform',
    description:
      'Built and maintain the MERN-stack website and ticketing/event infrastructure for a 501(c)(3) nonprofit that uses amateur boxing, mentorship, and education to build resilience, discipline, and leadership in youth ages 8–21. Supports class scheduling, merchandise, and ticket sales for community boxing events.',
    stack: ['JavaScript', 'React', 'Express', 'MongoDB', 'AWS'],
    year: 'Ongoing',
    links: { demo: 'https://www.boxingforjustice.org' },
  },
  {
    id: 'vegafornia',
    title: 'VegaFornia',
    tagline: 'Web Developer — personalized gift e-commerce shop',
    description:
      'Built and manage the e-commerce site and digital infrastructure for a Vegas/LA-themed personalized gift retailer spanning custom apparel, drinkware, and gift baskets. Handled domain migration, DNS, and email deliverability, plus a custom quote-and-order workflow for personalized designs.',
    stack: ['E-Commerce', 'DNS & Domain Management', 'Web Development'],
    year: 'Ongoing',
    links: { demo: 'https://vegafornia.com' },
  },
];
