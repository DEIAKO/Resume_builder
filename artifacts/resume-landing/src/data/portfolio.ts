import { Github, Linkedin, Mail } from "lucide-react";

export const personalInfo = {
  name: "Samuel Htamu",
  title: "Full-Stack Software Engineer",
  tagline: "Building scalable web applications and APIs with 3+ years of MERN stack experience. Currently expanding into AI, Data Analytics & Machine Learning.",
  bio: "I'm a full-stack JavaScript developer specializing in React.js and Node.js, with a proven track record of delivering scalable web applications and REST APIs for corporate and educational clients. Currently expanding my expertise into Data Analytics and Machine Learning — using PostgreSQL and Python to transform complex datasets into actionable insights. I'm passionate about clean code, great user experiences, and solving real-world problems through technology.",
  email: "htamusamuel1@gmail.com",
  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/DEIAKO",
      icon: Github,
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/samuel-tvmu",
      icon: Linkedin,
    },
    {
      platform: "Email",
      url: "mailto:htamusamuel1@gmail.com",
      icon: Mail,
    },
  ],
};

export const skills = [
  "JavaScript (ES6+)", "React.js", "Next.js", "Node.js", "Express.js",
  "TypeScript", "Python", "SQL / PostgreSQL", "MongoDB", "Tailwind CSS",
  "REST APIs", "JWT Auth", "Supabase", "Flutter / Dart", "Docker",
  "Git / GitHub", "Pandas", "NumPy", "Data Visualization", "EDA"
];

export const experience = [
  {
    id: 1,
    company: "Freelance / Collaborative Projects",
    role: "MERN Stack Developer",
    period: "2022 – Present",
    bullets: [
      "Developed and deployed full-stack web applications using React.js and Node.js for various corporate and educational clients.",
      "Engineered scalable RESTful APIs with Express.js, integrating MongoDB for efficient data persistence.",
      "Implemented secure user authentication and authorization protocols using JSON Web Tokens (JWT).",
      "Designed and optimized responsive, user-friendly UI components using modern CSS frameworks.",
      "Improved system reliability by optimizing API performance and backend database queries."
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Shar Mu – Hyper-local Food Marketplace",
    description: "A full-stack marketplace ecosystem for the Myitkyina market built with Flutter and Supabase (PostgreSQL). Features real-time order notifications, geofencing for delivery precision, and a multi-vendor management system with a dynamic 10% commission revenue model.",
    tags: ["Flutter", "Dart", "Supabase", "PostgreSQL", "Real-time"],
    githubUrl: "https://github.com/DEIAKO",
  }
];

export const education = [
  {
    id: 1,
    institution: "University of the Cordilleras",
    degree: "Bachelor of Science in Computer Science",
    location: "Philippines",
  }
];

export const certifications = [
  {
    id: 1,
    title: "MERN Stack Development",
    issuer: "Creative Coder Myanmar",
    year: "2020",
  },
  {
    id: 2,
    title: "React.js Advanced Development",
    issuer: "Creative Coder Myanmar",
    year: "",
  },
  {
    id: 3,
    title: "Software Development",
    issuer: "MMSIT",
    year: "2021",
  }
];
