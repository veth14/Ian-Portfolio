export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  keyLearning: string;
  imageUrl: string;
  liveUrl: string;
  sourceUrl: string;
}

export const projects: Project[] = [
  {
    id: "merrystory",
    title: "MerryStory Events Management System",
    description:
      "A premium production management portal serving as the central nervous system for high-end event coordination. Features a multi-role architecture for Admins and Coordinators, advanced inquiry pipelines, and real-time production metrics.",
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "MongoDB", "Firebase Auth", "Supabase Storage", "Nodemailer", "Vercel"],
    keyLearning:
      "Mastered the orchestration of multi-provider cloud architectures by integrating Firebase for secure RBAC and Supabase for media assets. Implemented a robust serverless pipeline for audit logging and automated email triggers to streamline large-scale production workflows.",
    imageUrl: "/ProjectFiles/MerryStory.png",
    liveUrl: "https://MerryStory.online",
    sourceUrl: "https://github.com/veth14/MerryStory",
  },
  {
    id: "salemate",
    title: "Salemate: POS with Inventory",
    description:
      "A high-performance merchant dashboard and POS system designed to manage the entire retail lifecycle. Features real-time inventory tracking, customer analytics, QR payment integration, and automated PDF reporting.",
    techStack: ["React 19", "Vite", "Tailwind CSS", "Firebase (Firestore)", "Express.js", "Chart.js", "Framer Motion"],
    keyLearning:
      "Architected a real-time POS environment using React 19 and Firestore, optimizing for session persistence and PIN-based security. Integrated complex data visualization using Recharts and implemented custom PDF export engines for merchant sales reporting.",
    imageUrl: "/ProjectFiles/Salemate.png",
    liveUrl: "https://Salemate.netlify.app",
    sourceUrl: "https://github.com/IamMattHenry/Salemate",
  },
  {
    id: "insight-mobile",
    title: "Insight: Academic Research Repository",
    description:
      "A university-restricted research repository for theses and papers. Built with a high-performance mobile interface featuring full-text indexing, in-app PDF reading, and a role-based access system for students and faculty.",
    techStack: ["React Native (Expo)", "TypeScript", "Node.js (Express)", "MongoDB Atlas", "Supabase Storage", "Firebase Auth"],
    keyLearning:
      "Engineered a high-availability research pipeline by bridging a React Native frontend with a Node.js backend. Solved complex challenges in PDF processing and full-text search indexing while implementing strict role-based access to ensure academic data integrity.",
    imageUrl: "/ProjectFiles/InsightMobileApp.png",
    liveUrl: "https://insight-website-kohl.vercel.app/",
    sourceUrl: "https://github.com/veth14/Insight",
  },
  {
    id: "ai-assistant",
    title: "AI Chatbot Assistant",
    description:
      "An intelligent conversational agent powered by large language models, featuring multi-modal support and custom knowledge base integration.",
    techStack: ["Next.js", "OpenAI API", "Pinecone", "Tailwind CSS"],
    keyLearning:
      "Implemented vector-based semantic search for efficient retrieval-augmented generation (RAG) and optimized context window management.",
    imageUrl: "/images/project-ai-bot.jpg",
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    id: "fitness-tracker",
    title: "Fitness & Wellness App",
    description:
      "A holistic health platform that synchronizes data from multiple wearable devices to provide personalized fitness coaching and analytics.",
    techStack: ["Swift", "Kotlin", "AWS Lambda", "DynamoDB"],
    keyLearning:
      "Architected a serverless backend capable of processing high-velocity biometric data with sub-second latency across global regions.",
    imageUrl: "/images/project-fitness.jpg",
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    id: "ecommerce-pro",
    title: "Luxury E-commerce Platform",
    description:
      "A high-performance storefront designed for luxury brands, focusing on immersive visual storytelling and seamless checkout experiences.",
    techStack: ["Remix", "Shopify API", "GraphQL", "Framer Motion"],
    keyLearning:
      "Developed a custom animation engine for fluid page transitions, resulting in a 15% increase in user session duration and engagement.",
    imageUrl: "/images/project-ecommerce.jpg",
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    id: "cyber-vault",
    title: "Cybersecurity Monitor",
    description:
      "A real-time threat detection and response dashboard that visualizes network vulnerabilities and automates defensive protocols.",
    techStack: ["React", "Python", "ELK Stack", "Docker"],
    keyLearning:
      "Mastered real-time log aggregation and anomaly detection using machine learning models to identify zero-day threats in network traffic.",
    imageUrl: "/images/project-cyber.jpg",
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    id: "collab-canvas",
    title: "Collaborative Whiteboard",
    description:
      "A digital workspace for creative teams to brainstorm in real-time, featuring infinite canvas and synchronized drawing tools.",
    techStack: ["Socket.io", "Canvas API", "Redis", "TypeScript"],
    keyLearning:
      "Solved complex concurrency issues in real-time collaborative environments using Operational Transformation (OT) for smooth synchronization.",
    imageUrl: "/images/project-whiteboard.jpg",
    liveUrl: "#",
    sourceUrl: "#",
  },
];
