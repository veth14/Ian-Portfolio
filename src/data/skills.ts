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
  credentialUrl: string;
  verified: boolean;
  skills: string[];
  imageUrl: string;
}

export const skillCategories: SkillCategory[] = [
  {
    id: "core",
    title: "Core Technologies",
    icon: "terminal",
    color: "#004e9f",
    bgColor: "#d7e3ff",
    skills: ["TypeScript", "React.js", "Node.js", "PostgreSQL", "GraphQL"],
  },
  {
    id: "devops",
    title: "Architecture & DevOps",
    icon: "cloud",
    color: "#004e9f",
    bgColor: "#d7e3ff",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Redis"],
  },
  {
    id: "design",
    title: "Design & UX",
    icon: "palette",
    color: "#004e9f",
    bgColor: "#d7e3ff",
    skills: ["Figma", "Tailwind CSS", "Framer Motion", "Design Systems", "Accessibility (a11y)"],
  },
  {
    id: "focus",
    title: "Current Focus",
    icon: "graduation",
    color: "#004e9f",
    bgColor: "#d7e3ff",
    skills: ["AWS Solutions Architect"],
  },
];

export const certifications: Certification[] = [
  {
    id: "aws-cloud",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Oct 2023",
    credentialUrl: "#",
    verified: true,
    skills: ["Cloud Economics", "Shared Responsibility", "VPC & EC2", "AWS S3", "IAM"],
    imageUrl: "/images/project-budget.jpg",
  },
  {
    id: "google-data",
    title: "Google Data Analytics Professional",
    issuer: "Google / Coursera",
    date: "Mar 2023",
    credentialUrl: "#",
    verified: true,
    skills: ["Data Cleaning", "R Programming", "SQL", "Tableau", "Data Ethics"],
    imageUrl: "/images/project-event.jpg",
  },
  {
    id: "react-dev",
    title: "Advanced React Developer",
    issuer: "Meta",
    date: "Jan 2024",
    credentialUrl: "#",
    verified: true,
    skills: ["Custom Hooks", "Performance Optimization", "Zustand", "Next.js 14", "Testing"],
    imageUrl: "/images/project-inventory.jpg",
  },
];

export const profileBio = {
  name: "Ian Angelo Valmores",
  shortName: "Ian Angelo Valmores",
  title: "Full-Stack Developer",
  bio: "I am a full-stack developer with a passion for crafting elegant, user-centric digital experiences. My approach blends deep technical expertise with an acute eye for design, ensuring every product is not only functional but visually compelling and intuitive.",
  specialization:
    "Specializing in building scalable, accessible, and high-performance web applications that drive user engagement.",
  location: "Quezon City, Philippines",
  currentFocus: "Deepening expertise in Distributed Systems and WebAssembly (Wasm).",
  currentFocusTags: ["AWS Solutions Architect"],
};
