export const site = {
  name: 'Aron Bury',
  title: 'Aron Bury · I turn financial operations into software',
  description:
    '15 years building and leading engineering teams across startups, SMEs and corporates. Co-founder & CTO at Co.Credit. Melbourne, Australia.',
  social: {
    title: 'Aron Bury · I turn financial operations into software',
    image: '/assets/og.jpg',
    imageAlt: 'Aron Bury. I turn financial operations into software.',
  },
  email: 'hi@aronbury.com',
  linkedin: 'https://www.linkedin.com/in/aronbury/',
  location: 'Melbourne, Australia',
};

export const nav = [
  { label: 'Work', href: '#work' },
  { label: 'AI', href: '#ai' },
  { label: 'Experience', href: '#experience' },
  { label: 'References', href: '#references' },
];

export const hero = {
  headline: {
    rows: [
      { word: 'I turn', phrase: 'financial operations' },
      { word: 'into', phrase: 'software' },
    ],
    plain: 'I turn financial operations into software',
  },
  lede:
    "I've spent 15 years building and leading engineering teams across startups, SMEs and corporates. I've also run the operations behind them: billing, bookkeeping, lending and reporting. The systems I build fit the way a business actually works.",
  photo: { src: '/images/aron.jpg', alt: 'Aron Bury', width: 1000, height: 1250 },
};

export const logos = [
  { src: '/images/logo-vanguard.png', alt: 'Vanguard', height: 24 },
  { src: '/images/logo-telstra.png', alt: 'Telstra', height: 34 },
  { src: '/images/logo-deloitte-digital.png', alt: 'Deloitte Digital', height: 34 },
  { src: '/images/logo-coinjar.png', alt: 'CoinJar', height: 24 },
  { src: '/images/logo-cocredit.png', alt: 'Co.Credit', height: 24 },
  { src: '/images/logo-localagentfinder.svg', alt: 'LocalAgentFinder', height: 36 },
  { src: '/images/logo-packsmith.svg', alt: 'Packsmith', height: 19 },
  { src: '/images/logo-gymleads.png', alt: 'GymLeads', height: 20 },
];

export type Chip = 'packsmith' | 'laf' | 'coinjar' | 'cocredit';

export const work: {
  org: string;
  chip: Chip;
  mark: string;
  dates: string;
  title: string;
  body: string;
  role: string;
  dark?: boolean;
}[] = [
  {
    org: 'Packsmith · Logistics',
    chip: 'packsmith',
    mark: '/images/mark-packsmith.svg',
    dates: '2024 – 25',
    title: 'A billing engine that replaced weeks of manual work',
    body:
      'Billing was worked out by hand: one to two people, two to three weeks, every run. I built a rules-based engine that works out what each customer is charged and runs on its own.',
    role: 'Engineering Manager',
  },
  {
    org: 'LocalAgentFinder · Real estate',
    chip: 'laf',
    mark: '/images/mark-localagentfinder.svg',
    dates: '2025 – 26',
    title: 'Releases from weeks to hours',
    body:
      'I led a team of eight. We brought in modern CI and infrastructure as code, split a legacy monolith so each app deploys on its own, and gave leadership a clear view of how long work would take. Deployments went from days to minutes.',
    role: 'Head of Engineering',
  },
  {
    org: 'CoinJar · Crypto exchange',
    chip: 'coinjar',
    mark: '/images/mark-coinjar.png',
    dates: '2014 – 15',
    title: 'Making bitcoin something merchants could accept',
    body:
      'I led an engineering team of seven across three streams to rebuild the CoinJar platform for a nationwide payment network, letting people pay for goods and services with bitcoin in real time. That included CoinJar Swipe, a debit card that let people pay with bitcoin anywhere that accepted EFTPOS.',
    role: 'Technical Lead',
  },
  {
    org: 'Co.Credit · Lending',
    chip: 'cocredit',
    mark: '/images/mark-cocredit.png',
    dates: '2024 – now',
    title: 'A lending platform, built end to end',
    body:
      'Loan origination, the lender portal, interest calculations, payment rails, a line of credit, and the Xero integration that keeps the loan system and the ledger in agreement. Externally audited.',
    role: 'Co-founder & CTO',
    dark: true,
  },
];

export const ai = {
  heading: 'How I use AI',
  cards: [
    {
      title: 'Coding agents',
      body: 'I coordinate multiple AI agents working in parallel to build systems.',
      tools: 'Claude Code · Codex · OpenCode',
    },
    {
      title: 'Internal operations',
      body: 'I use AWS Bedrock to keep critical data sandboxed and easily plug into existing workflows and applications.',
      tools: 'AWS Bedrock',
    },
    {
      title: 'Product design',
      body: 'Rapid prototyping, mockups and design systems.',
      tools: 'Claude Design · Figma Make · UX Pilot',
    },
  ],
};

export const sonderSlides = [
  { kind: 'laf', src: '/images/mark-localagentfinder.svg' },
  { kind: 'packsmith', src: '/images/mark-packsmith.svg' },
  { kind: 'vanguard', src: '/images/mark-vanguard.png' },
  { kind: 'telstra', src: '/images/mark-telstra.png' },
];

export const sonderEngagements = [
  { title: 'Head of Engineering', org: 'LocalAgentFinder', dates: '2025 – 26' },
  { title: 'Engineering Manager', org: 'Packsmith', dates: '2024 – 25' },
  { title: 'Mobile lead', org: 'Vanguard personal investor app' },
];

export const experience = {
  before: [
    {
      mark: { src: '/images/mark-cocredit.png' },
      title: 'Co-founder & CTO',
      org: 'Co.Credit · Private lending for cash flow businesses',
      dates: '2024 – now',
    },
  ],
  sonder: {
    title: 'Sonder Digital',
    org: 'Engineering leadership engagements',
    dates: '2015 – now',
  },
  after: [
    {
      mark: { src: '/images/mark-gymleads.png' },
      title: 'Co-founder',
      org: 'GymLeads · CRM for gyms, built from first commit to exit',
      dates: '2016 – 23',
    },
    {
      mark: { src: '/images/mark-coinjar.png' },
      title: 'Technical Lead',
      org: 'CoinJar',
      dates: '2014 – 15',
    },
    {
      mark: { src: '/images/mark-deloitte.png', cover: true },
      title: 'Earlier roles',
      org: 'Engineering Lead, Airloom · Mobile Engineer, Deloitte Digital',
      dates: '2011 – 14',
    },
  ],
};

export const testimonials = [
  {
    quote:
      'Within a handful of weeks the team had turned around. Aron assisted in the hiring of new developers and was hands on in every aspect of the dev team that needed assistance.',
    name: 'Rowan Castan',
    title: 'CEO, Boop & Co',
  },
  {
    quote:
      "Aron joined the company early on, during a period of significant growth, and swiftly implemented tools and processes. Outages and downtime became all but obsolete under Aron's lead.",
    name: 'Andrew Powell',
    title: 'Head of Customer Success, CoinJar',
  },
  {
    quote:
      "Aron's ability to speak at a deeply technical level with client IT resources is valuable in complex and ambiguous technical environments, and he consistently translates this for non-technical clients.",
    name: 'Andrew Moroney',
    title: 'General Manager, Loud & Clear',
  },
  {
    quote:
      'As a leader Aron has made me question my approach to programming as well as work life and has truly been an inspiration to strive for excellence.',
    name: 'PK Heng',
    title: 'Senior Engineer, Airloom',
  },
];
