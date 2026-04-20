/**
 * Site content — edit names, links, copy, and project metadata here.
 */
export const site = {
  fullName: "Bilal",
  name: "Bilal",
  /** Hero typing / display */
  heroRoles: [
    "Full Stack Developer",
    "UI/UX Designer",
    "Problem Solver",
  ] as const,
  tagline:
    "I build fast, accessible web experiences that feel as good as they look—shipping production Next.js apps with obsessive UI polish.",
  bio: `I'm a frontend-focused developer who ships production Next.js and React apps—clean architecture, performance-minded delivery, and interfaces that hold up in real products.

I've contributed to healthcare and education platforms, built marketing landings and data-heavy dashboards, and I'm always leveling up on patterns that scale with the team.`,
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@example.com",
  location: "Remote · Worldwide",
  availability: "Available for freelance & full-time",
  profileImage: "/Profile.png",
  profileAlt: "Bilal — developer portrait",
  linkedIn: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "https://www.linkedin.com",
  github: process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com",
  twitter: process.env.NEXT_PUBLIC_TWITTER_URL ?? "https://x.com",
  cvUrl: process.env.NEXT_PUBLIC_CV_URL ?? "/document/BilalResume.pdf",
  stats: [
    { label: "Years Experience", value: 2, suffix: "+" },
    { label: "Projects Done", value: 15, suffix: "+" },
    { label: "Happy Clients", value: 5, suffix: "+" },
  ] as const,
} as const;

export type ProjectKind = "production" | "client" | "practice";
export type ProjectStackFilter = "frontend" | "backend" | "fullstack";

export type Project = {
  name: string;
  description: string;
  stack: string[];
  image: string;
  imageAlt: string;
  kind: ProjectKind;
  /** Used by Projects filter tabs */
  stackCategory: ProjectStackFilter;
  liveUrl?: string;
  repoUrl?: string;
  highlight?: boolean;
};

export const featuredProjects: Project[] = [
  {
    name: "FAD Next",
    description:
      "Production Next.js app for healthcare teams—clear hierarchy, fast loads, and UI patterns that stay maintainable as the product grows.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: "/image/Fadprojectimage.png",
    imageAlt: "FAD Next healthcare web application",
    kind: "production",
    stackCategory: "fullstack",
    liveUrl: "https://fadnext.foralldoctors.com",
    repoUrl: process.env.NEXT_PUBLIC_GITHUB_URL,
    highlight: true,
  },
  {
    name: "Education Hub",
    description:
      "Education & content UI—recent posts, search, filters, and readable article cards built with reusable components.",
    stack: ["React", "JavaScript", "CSS", "REST APIs"],
    image: "/image/frecent%20project.png",
    imageAlt: "Education platform recent posts and feed",
    kind: "client",
    stackCategory: "frontend",
  },
  {
    name: "Bilal Technical",
    description:
      "Marketing-style landing—dark hero, landmark cards, and structured footer. Practice in layout, contrast, and responsive sections.",
    stack: ["HTML", "CSS", "JavaScript", "Responsive"],
    image: "/image/bilal-technicalproject.png",
    imageAlt: "Bilal Technical agency website",
    kind: "practice",
    stackCategory: "frontend",
  },
  {
    name: "World Atlas",
    description:
      "Country explorer with search, sort, and filter—responsive cards and clear data presentation.",
    stack: ["React", "JavaScript", "APIs", "Tailwind CSS"],
    image: "/image/react-project.png",
    imageAlt: "World Atlas React application",
    kind: "practice",
    stackCategory: "frontend",
  },
  {
    name: "StreamVerse",
    description:
      "Media landing—hero, featured titles, and poster rows with a cinematic dark theme.",
    stack: ["React", "JavaScript", "CSS"],
    image: "/image/movieproject.png",
    imageAlt: "Movie streaming landing page",
    kind: "practice",
    stackCategory: "frontend",
  },
  {
    name: "Axios & lists",
    description:
      "Data fetching with Axios—lists, loading states, and resilient JS structure.",
    stack: ["JavaScript", "Axios", "REST"],
    image: "/image/axiolistjs.png",
    imageAlt: "Axios list project",
    kind: "practice",
    stackCategory: "backend",
  },
];

export const skillGroups = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "MongoDB", "Python"],
  },
  {
    category: "Tools",
    skills: ["Git", "Figma", "VS Code", "Docker", "Chrome DevTools"],
  },
] as const;

export type ExperienceItem = {
  year: string;
  title: string;
  org: string;
  period: string;
  bullets: readonly string[];
  side: "left" | "right";
};

export const experience: readonly ExperienceItem[] = [
  {
    year: "2024",
    title: "Frontend Developer",
    org: "For All Doctors",
    period: "2024 — Present",
    bullets: [
      "Shipped FAD Next (fadnext.foralldoctors.com) with Next.js and responsive, accessible UI.",
      "Collaborated on feature delivery with a focus on performance and maintainability.",
    ],
    side: "left",
  },
  {
    year: "2024",
    title: "Frontend Developer",
    org: "EdCred",
    period: "2024 — Present",
    bullets: [
      "Built learner-facing interfaces and form-heavy flows with reusable components.",
      "Partnered with design to tighten UX and interaction details.",
    ],
    side: "right",
  },
  {
    year: "2024",
    title: "Frontend Developer",
    org: "Eq360",
    period: "2024 — Present",
    bullets: [
      "Implemented dashboards and feedback experiences with strong UX discipline.",
      "Improved consistency across shared UI patterns.",
    ],
    side: "left",
  },
  {
    year: "2024",
    title: "Frontend Developer",
    org: "Octalap",
    period: "2024 — Present",
    bullets: [
      "Delivered production features with attention to accessibility and code quality.",
      "Participated in code reviews and iterative refinements.",
    ],
    side: "right",
  },
] as const;

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: readonly Testimonial[] = [
  {
    quote:
      "Bilal ships interfaces that are fast, clean, and easy to extend. Communication was excellent throughout.",
    name: "Alex M.",
    role: "Product Lead",
    company: "HealthTech",
  },
  {
    quote:
      "Strong React and Next.js fundamentals—turned our designs into pixel-perfect, responsive pages.",
    name: "Samira K.",
    role: "Design Director",
    company: "Agency",
  },
  {
    quote:
      "Reliable partner for frontend work: thoughtful about states, accessibility, and performance.",
    name: "Jordan P.",
    role: "Engineering Manager",
    company: "SaaS",
  },
  {
    quote:
      "We appreciated the attention to detail and the willingness to iterate until it felt right.",
    name: "Priya R.",
    role: "Founder",
    company: "Startup",
  },
] as const;
