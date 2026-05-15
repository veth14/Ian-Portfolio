export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  businessImpact: string[];
  keyLearning: string;
  imageUrl: string;
  liveUrl: string;
  sourceUrl: string;
}

export const projects: Project[] = [
  {
    id: "enterprise-budget",
    title: "Enterprise Budget Intelligence",
    description:
      "A high-performance financial intelligence platform designed for enterprise-scale expense auditing, forecasting, and multi-tenant department management.",
    techStack: ["React Native", "Node.js", "MongoDB"],
    businessImpact: [
      "Scaled to support 100+ concurrent enterprise users",
      "Reduced monthly financial reconciliation time by 65%",
    ],
    keyLearning:
      "Architected a redundant offline-first data synchronization engine using CRDTs to ensure zero data loss across distributed global teams.",
    imageUrl: "/images/project-budget.jpg",
    liveUrl: "https://example.com/live",
    sourceUrl: "https://github.com/ianangelo/budget",
  },
  {
    id: "event-lifecycle",
    title: "Global Event Lifecycle Platform",
    description:
      "A comprehensive SaaS infrastructure for orchestrating complex international summits, handling multi-currency ticketing, and automated attendee workforce.",
    techStack: ["Vue.js", "Python", "Docker API"],
    businessImpact: [
      "Processed $2.9M+ in ticket sales in the first quarter",
      "99.8% uptime during peak registration surges",
    ],
    keyLearning:
      "Implemented a secure, micro-frontend architecture allowing independent scaling of the ticketing engine from the management dashboard.",
    imageUrl: "/images/project-event.jpg",
    liveUrl: "https://example.com/live",
    sourceUrl: "https://github.com/ianangelo/event",
  },
  {
    id: "inventory-analytics",
    title: "Real-time Inventory Analytics Engine",
    description:
      "A scalable industrial-grade tracking system leveraging streaming data for predictive stock replenishment and automated supply chain optimization.",
    techStack: ["Angular", "Kafka(io)", "PostgreSQL", "TensorFlow"],
    businessImpact: [
      "Reduced stock-out incidents by 45% through predictive modeling",
      "Improved order fulfillment speed by 32% via route optimization",
    ],
    keyLearning:
      "Optimized PostgreSQL query execution plans and implemented Redis caching layers to maintain sub-100ms response times for million-row datasets.",
    imageUrl: "/images/project-inventory.jpg",
    liveUrl: "https://example.com/live",
    sourceUrl: "https://github.com/ianangelo/inventory",
  },
];
