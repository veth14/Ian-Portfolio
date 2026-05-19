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
    id: "aws-event-2025",
    title: "Certificate of Participation — Cybersecure U: Defending the Digital World",
    issuer: "Amazon Web Services Learning Club – Quezon City University",
    date: "Oct 24, 2025",
    credentialUrl: "#",
    verified: true,
    skills: ["Event Participation", "Cybersecurity Awareness", "Defending the Digital World"],
    imageUrl: "/Certificates/AWS.png",
  },
  {
    id: "alison-ai-cybersec",
    title: "AI in Cybersecurity: Intrusion, Threat Hunting, and Incident Response",
    issuer: "Alison",
    date: "May 13, 2026",
    credentialUrl: "https://alison.com/certificates/007896",
    verified: true,
    skills: ["AI in Cybersecurity", "Intrusion Detection", "Threat Hunting", "Incident Response"],
    imageUrl: "/Certificates/CERTIFICATE.jpg",
  },
  {
    id: "opswat-cip",
    title: "Introduction to Critical Infrastructure Protection",
    issuer: "OPSWAT Academy",
    date: "May 19, 2026",
    credentialUrl: "https://learn.opswatacademy.com/certificate/Rz4abDWLgw",
    verified: true,
    skills: ["Critical Infrastructure Protection", "Security Standards", "CIP Fundamentals"],
    imageUrl: "/Certificates/introduction_to_cip.png",
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
