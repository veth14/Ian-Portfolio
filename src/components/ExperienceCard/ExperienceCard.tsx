"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import type { Experience } from "@/data/experience";
import styles from "./ExperienceCard.module.css";

interface ExperienceCardProps {
  experience: Experience;
  isLast: boolean;
}

export default function ExperienceCard({ experience, isLast }: ExperienceCardProps) {
  return (
    <motion.div
      className={styles.entry}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={styles.timeline}>
        <div className={styles.dot} />
        {!isLast && <div className={styles.line} />}
      </div>
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.titleGroup}>
            <h3 className={styles.title}>{experience.title}</h3>
            <p className={styles.company}>{experience.company}</p>
          </div>
          <div className={styles.dateRange}>
            <span className={styles.date}>{experience.startDate} — {experience.endDate}</span>
          </div>
        </div>
        
        <p className={styles.description}>{experience.description}</p>
        
        <div className={styles.achievements}>
          <span className={styles.achievementsLabel}>Key Achievements</span>
          <ul className={styles.achievementList}>
            {experience.achievements.map((a, i) => (
              <li key={i} className={styles.achievementItem}>
                <div className={styles.checkWrapper}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className={styles.achievementText}>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
