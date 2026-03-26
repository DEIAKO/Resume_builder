import { Github, Linkedin, Mail } from "lucide-react";

export const personalInfo = {
  name: "Alex Developer",
  title: "Full-Stack Engineer",
  tagline: "Crafting beautiful, high-performance digital experiences with modern web technologies.",
  bio: "I am a passionate software engineer with a deep focus on frontend architecture and seamless user experiences. With over 5 years of experience building scalable web applications, I thrive at the intersection of design and engineering. When I'm not writing code, I'm exploring new UI trends and contributing to open source.",
  email: "hello@alexdeveloper.com",
  socials: [
    {
      platform: "GitHub",
      url: "https://github.com",
      icon: Github,
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com",
      icon: Linkedin,
    },
    {
      platform: "Email",
      url: "mailto:hello@alexdeveloper.com",
      icon: Mail,
    },
  ],
};

export const skills = [
  "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", 
  "GraphQL", "PostgreSQL", "Framer Motion", "AWS", "Docker", 
  "System Design", "UI/UX"
];

export const experience = [
  {
    id: 1,
    company: "TechCorp Global",
    role: "Senior Frontend Engineer",
    period: "2022 - Present",
    bullets: [
      "Led the migration of a legacy dashboard to a modern React/Next.js stack, improving performance by 40%.",
      "Architected a scalable component library used across 5 internal products.",
      "Mentored junior developers and established CI/CD pipelines for automated testing."
    ]
  },
  {
    id: 2,
    company: "Innovate Startup",
    role: "Full Stack Developer",
    period: "2020 - 2022",
    bullets: [
      "Developed a real-time collaborative workspace tool using React and WebSockets.",
      "Integrated Stripe for automated subscription billing, processing $50k+ MRR.",
      "Optimized database queries in PostgreSQL, reducing load times by over 60%."
    ]
  },
  {
    id: 3,
    company: "Digital Agency",
    role: "Web Developer",
    period: "2018 - 2020",
    bullets: [
      "Built over 20 custom websites for clients using modern JavaScript frameworks.",
      "Worked closely with designers to implement pixel-perfect, responsive layouts.",
      "Managed client communication and project scoping."
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Nexus Commerce",
    description: "A high-performance headless e-commerce storefront featuring real-time inventory tracking, AI-powered search, and seamless checkout.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "DevFlow Workspace",
    description: "An intuitive project management dashboard designed specifically for software engineering teams, featuring Kanban boards and git integration.",
    tags: ["React", "Node.js", "GraphQL", "PostgreSQL"],
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Aura UI Library",
    description: "An open-source accessible component library built on top of Radix UI and Tailwind CSS, focusing on beautiful micro-interactions.",
    tags: ["React", "Framer Motion", "Storybook"],
    githubUrl: "https://github.com",
  }
];
