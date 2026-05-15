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
          <div>
            <h3 className={styles.title}>{experience.title}</h3>
            <p className={styles.company}>{experience.company}</p>
          </div>
          <div className={styles.dateRange}>
            <span className={styles.date}>{experience.startDate}</span>
            <span className={styles.dateSep}>–</span>
            <span className={styles.date}>{experience.endDate}</span>
          </div>
        </div>
        <p className={styles.description}>{experience.description}</p>
        <div className={styles.achievements}>
          <span className={styles.achievementsLabel}>Key Achievements:</span>
          <ul className={styles.achievementList}>
            {experience.achievements.map((a, i) => (
              <li key={i} className={styles.achievementItem}>{a}</li>
            ))}
          </ul>
        </div>
        <div className={styles.tags}>
          {experience.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
