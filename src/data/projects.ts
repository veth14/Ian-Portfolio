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
      "Streamlines event coordination with role-based tools, inquiry tracking, and real-time production updates.",
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "MongoDB", "Firebase Auth", "Supabase Storage", "Nodemailer", "Vercel"],
    keyLearning:
      "Built to solve event coordination with role-based tools, inquiry tracking, and live production updates.",
    imageUrl: "/ProjectFiles/MerryStory.png",
    liveUrl: "https://MerryStory.online",
    sourceUrl: "https://github.com/veth14/MerryStory",
  },
  {
    id: "salemate",
    title: "Salemate: POS with Inventory",
    description:
      "Helps retailers manage sales, inventory, and payments in one fast POS dashboard.",
    techStack: ["React 19", "Vite", "Tailwind CSS", "Firebase (Firestore)", "Express.js", "Chart.js", "Framer Motion"],
    keyLearning:
      "Built to solve retail tracking by combining sales, inventory, and payments in one dashboard.",
    imageUrl: "/ProjectFiles/Salemate.png",
    liveUrl: "https://Salemate.netlify.app",
    sourceUrl: "https://github.com/IamMattHenry/Salemate",
  },
  {
    id: "insight-mobile",
    title: "Insight: Academic Research Repository",
    description:
      "Gives students and faculty secure access to theses and papers with fast search and PDF reading.",
    techStack: ["React Native (Expo)", "TypeScript", "Node.js (Express)", "MongoDB Atlas", "Supabase Storage", "Firebase Auth"],
    keyLearning:
      "Built to solve academic access with secure search and in-app PDF reading.",
    imageUrl: "/ProjectFiles/InsightMobileApp.png",
    liveUrl: "https://insight-website-kohl.vercel.app/",
    sourceUrl: "https://github.com/veth14/Insight",
  },
  {
    id: "ai-assistant",
    title: "Worship Inventory",
    description:
      "Full-stack church worship equipment inventory system with real-time sync and Supabase authentication.",
    techStack: ["Vite", "React 18", "TypeScript", "Tailwind CSS", "Express", "SWC", "Supabase"],
    keyLearning:
      "Solves equipment tracking with a thin full-stack scaffold, separating frontend and backend concerns via Supabase for auth and real-time data persistence.",
    imageUrl: "/ProjectFiles/WorshipInventory.png",
    liveUrl: "https://inventory-nc.vercel.app/",
    sourceUrl: "https://github.com/veth14/inventoryNC",
  },
  {
    id: "doctor-meeting-scheduler",
    title: "Doctor Meeting Schedule Tracker",
    description:
      "Weekly scheduler for doctor meetings across hospitals with conflict detection, search/filter, and a responsive dashboard.",
    techStack: [
      "Next.js 15",
      "React 18",
      "Tailwind CSS v3",
      "Firebase Firestore",
      "Day.js",
      "Lucide React",
      "TypeScript",
    ],
    keyLearning:
      "Solves meeting coordination by preventing overlaps, centralizing hospital schedules, and providing weekly summaries with real-time Firestore sync.",
    imageUrl: "/ProjectFiles/DoctorAppointmentSchedule.png",
    liveUrl: "https://appointment-schedule-five.vercel.app/",
    sourceUrl: "https://github.com/veth14/appointmentSchedule",
  },
  {
    id: "balay-ginhawa",
    title: "Balay Ginhawa Hotel Management System",
    description:
      "Enterprise-grade hotel management covering bookings, rooms, inventory, maintenance, and finance with a heritage-branded UI.",
    techStack: [
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
      "Lucide React",
      "Firebase Auth",
      "Firestore",
      "React Router v6",
      "Vite",
    ],
    keyLearning:
      "Solves hotel operations by centralizing front-desk, room, inventory, maintenance, and finance workflows into a performant, TypeScript-safe SPA with real-time updates and advanced reporting.",
    imageUrl: "/ProjectFiles/BalayGinhawaHotel.png",
    liveUrl: "https://balayginhawahotel.netlify.app/",
    sourceUrl: "https://github.com/veth14/SIA101_Project",
  },
  {
    id: "light-of-the-world-church",
    title: "Light of the World - North Caloocan Church Website",
    description:
      "Helps members find services, ministries, events, and campus details in one place.",
    techStack: ["React 19.1.1", "TypeScript", "React Router v7", "Tailwind CSS", "Vite", "SWC", "React Slick", "ESLint"],
    keyLearning:
      "Built to solve church communication by centralizing services, ministries, events, and campus info.",
    imageUrl: "/ProjectFiles/Church.png",
    liveUrl: "https://lightnc.netlify.app/",
    sourceUrl: "https://github.com/veth14/Church",
  },
  {
    id: "collab-canvas",
    title: "QCGO! Your Travelling Partner",
    description:
      "Guides visitors through Quezon City with routes for destinations, heritage, and local history.",
    techStack: ["React 19", "TypeScript", "Vite", "React Router DOM", "Framer Motion", "Tailwind CSS", "styled-components", "react-icons", "ESLint 9"],
    keyLearning:
      "Built to solve trip planning by organizing Quezon City destinations, heritage, and local history in one guide.",
    imageUrl: "/ProjectFiles/QCGOTravellingApp.png",
    liveUrl: "https://qcgo.netlify.app",
    sourceUrl: "https://github.com/veth14/qcgo",
  },
];
