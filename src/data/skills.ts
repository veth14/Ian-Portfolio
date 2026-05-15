export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  color: string;
  bgColor: string;
  skills: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  icon: string;
  credentialUrl: string;
  verified: boolean;
}

export const skillCategories: SkillCategory[] = [
  {
    id: "core",
    title: "Core Technologies",
    icon: "⚡",
    color: "#2563EB",
    bgColor: "#EFF6FF",
    skills: ["TypeScript", "React.js", "Node.js", "PostgreSQL", "GraphQL"],
  },
  {
    id: "devops",
    title: "Architecture & DevOps",
    icon: "🚀",
    color: "#D97706",
    bgColor: "#FEF3C7",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Nginx"],
  },
  {
    id: "design",
    title: "Design & UX",
    icon: "🎨",
    color: "#16A34A",
    bgColor: "#DCFCE7",
    skills: ["Figma", "Tailwind CSS", "Framer Motion", "Design Systems", "Accessibility (a11y)"],
  },
  {
    id: "focus",
    title: "Current Focus",
    icon: "🎯",
    color: "#7C3AED",
    bgColor: "#EDE9FE",
    skills: ["AWS Solutions", "Micro-frontends"],
  },
];

export const certifications: Certification[] = [
  {
    id: "aws-cloud",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Oct 2023",
    icon: "☁️",
    credentialUrl: "#",
    verified: true,
  },
  {
    id: "google-data",
    title: "Google Data Analytics Professional",
    issuer: "Google / Coursera",
    date: "Mar 2023",
    icon: "📊",
    credentialUrl: "#",
    verified: true,
  },
  {
    id: "react-dev",
    title: "Advanced React Developer",
    issuer: "Meta",
    date: "Jan 2024",
    icon: "⚛️",
    credentialUrl: "#",
    verified: true,
  },
];

export const profileBio = {
  name: "Ian Angelo Valmores",
  shortName: "Ian Angelo",
  title: "Full-Stack Developer",
  bio: "I am a full-stack developer with a passion for crafting elegant, user-centric digital experiences. My approach blends deep technical expertise with an acute eye for design, ensuring every product is not only functional but visually compelling and intuitive.",
  specialization:
    "Specializing in building scalable, accessible, and high-performance web applications that drive user engagement.",
  location: "San Francisco, CA",
  currentFocus: "Deepening expertise in Distributed Systems and Web Accessibility (WCAG).",
  currentFocusTags: ["AWS Solutions", "Micro-frontends"],
};
