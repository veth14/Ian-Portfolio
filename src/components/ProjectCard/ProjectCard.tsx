"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import type { Project } from "@/data/projects";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
  isGalleryMode?: boolean;
}

export default function ProjectCard({ project, index, onClick, isGalleryMode = false }: ProjectCardProps) {
  const isPriority = index < 2;
  // Define icons based on index
  const getLearningIcon = () => {
    switch(index) {
      case 0: // Lightbulb
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"></path>
            <line x1="9" y1="18" x2="15" y2="18"></line>
            <line x1="10" y1="22" x2="14" y2="22"></line>
          </svg>
        );
      case 1: // Key
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4a1 1 0 0 0-1.4 0l-2.1 2.1a1 1 0 0 0 0 1.4Z"></path>
            <path d="m15.5 7.5-3 3"></path>
            <path d="M15.5 7.5a6.5 6.5 0 1 0-8.2 9.6l-4.7 4.7a1 1 0 0 0 0 1.4l1.4 1.4a1 1 0 0 0 1.4 0l4.7-4.7a6.5 6.5 0 0 0 5.4-12.4Z"></path>
          </svg>
        );
      case 2: // Sparkles
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m12 3 1.912 5.886L20 10.8l-5.088 1.914L13.912 18.6 12 12.714 10.088 18.6 9.088 12.714 4 10.8l6.088-1.914L12 3Z"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  // Standardize to a large, consistent horizontal layout for featured projects
  let variantClass = styles.wideCard;
  if (index % 2 !== 0) variantClass = `${styles.wideCard} ${styles.reverse}`;

  return (
    <motion.article
      className={`${styles.card} ${variantClass}`}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      style={{ cursor: "pointer" }}
    >
      <div className={styles.imageSection}>
        <div className={styles.imagePlaceholder}>
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.image}
            priority={isPriority}
          />
        </div>
      </div>

      <div className={styles.details}>
        <div className={styles.mainInfo}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>

          <div className={styles.stackSection}>
            <span className={styles.sectionLabel}>TECH STACK</span>
            <div className={styles.tags}>
              {project.techStack.map((tech) => (
                <span key={tech} className={styles.tag}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.keyLearning}>
          <div className={styles.keyLearningHeader}>
            <div className={styles.keyLearningIcon}>{getLearningIcon()}</div>
            <span className={styles.keyLearningLabel}>Problem Solved</span>
          </div>
          <p className={styles.keyLearningText}>{project.keyLearning}</p>
        </div>
      </div>
    </motion.article>
  );
}
