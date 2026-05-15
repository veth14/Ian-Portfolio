"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import type { Project } from "@/data/projects";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  // index 0: Budget (wide left)
  // index 1: Event (tall right)
  // index 2: Inventory (full width bottom)
  
  let variantClass = styles.wideCard;
  if (index === 1) variantClass = styles.tallCard;
  if (index === 2) variantClass = styles.fullWidthCard;

  return (
    <motion.article
      className={`${styles.card} ${variantClass}`}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={styles.imageSection}>
        <div className={styles.imagePlaceholder}>
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.image}
          />
        </div>
      </div>

      <div className={styles.details}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.section}>
          <span className={styles.sectionLabel}>TECH STACK</span>
          <div className={styles.tags}>
            {project.techStack.map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.keyLearning}>
          <div className={styles.keyLearningHeader}>
            <span className={styles.keyLearningIcon}>💡</span>
            <span className={styles.keyLearningLabel}>Key Learning</span>
          </div>
          <p className={styles.keyLearningText}>{project.keyLearning}</p>
        </div>

        <div className={styles.links}>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Live Demo
          </a>
          <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m18 16 4-4-4-4" />
              <path d="m6 8-4 4 4 4" />
              <path d="m14.5 4-5 16" />
            </svg>
            Source Code
          </a>
        </div>
      </div>
    </motion.article>
  );
}
