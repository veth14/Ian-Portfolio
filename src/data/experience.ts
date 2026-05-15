export interface Experience {
  id: string;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  tags: string[];
}

export const experiences: Experience[] = [
  {
    id: "academic-thesis",
    title: "Lead Developer (Academic Capstone)",
    company: "University of Technology",
    startDate: "2023",
    endDate: "2024",
    description: "Architected and developed a comprehensive campus management system as a final year capstone project. Led a team of students in building both the web dashboard and mobile application.",
    achievements: [
      "Built a cross-platform mobile app using React Native for students to track schedules, grades, and campus events in real-time.",
      "Developed a robust Node.js backend supporting hundreds of concurrent academic users during enrollment periods.",
      "Implemented secure OAuth 2.0 authentication and role-based access control for faculty, students, and administration."
    ],
    tags: ["React Native", "Node.js", "Express", "MongoDB"]
  },
  {
    id: "academic-hackathon",
    title: "Full-Stack Developer (Hackathon Winner)",
    company: "National CodeFest",
    startDate: "2022",
    endDate: "2023",
    description: "Participated in multiple national university hackathons, focusing on building accessible and scalable web applications for social impact within strict time limits.",
    achievements: [
      "Won 1st place for developing an AI-powered study assistant and flashcard generator using React and the OpenAI API.",
      "Designed and implemented responsive user interfaces that met WCAG accessibility guidelines.",
      "Collaborated rapidly under 48-hour deadlines to deliver fully functional MVPs presented to industry judges."
    ],
    tags: ["React", "AI Integration", "Tailwind CSS", "Team Leadership"]
  },
  {
    id: "academic-freelance",
    title: "Freelance Web Developer (Student)",
    company: "Independent Projects",
    startDate: "2021",
    endDate: "2022",
    description: "Developed modern, performant landing pages and small business websites for local organizations to gain practical industry experience while studying.",
    achievements: [
      "Delivered 4 end-to-end web projects using Next.js and Tailwind CSS, focusing on SEO and high Lighthouse scores.",
      "Managed client communication, gathered requirements, and translated business needs into technical features."
    ],
    tags: ["Next.js", "Web Design", "SEO"]
  }
];
