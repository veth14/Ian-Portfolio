"use client";

import { motion } from "framer-motion";
import { staggerItem } from "@/lib/animations";
import { profileBio } from "@/data/skills";
import type { SkillCategory as SkillCategoryType } from "@/data/skills";
import styles from "./SkillCategory.module.css";

interface SkillCategoryProps {
  category: SkillCategoryType;
}

const Icons = {
  terminal: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
  ),
  cloud: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
  ),
  palette: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.53-.21-1.04-.58-1.41a2 2 0 0 1-.58-1.41c0-1.1.9-2 2-2h1.5c2.76 0 5-2.24 5-5 0-4.42-4.48-8-10-8zm-4 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3-4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm4 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3 4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>
  ),
  graduation: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72l5 2.73 5-2.73v3.72z"/></svg>
  )
};

export default function SkillCategory({ category }: SkillCategoryProps) {
  const IconCmp = Icons[category.icon as keyof typeof Icons] || Icons.terminal;

  if (category.id === "focus") {
    return (
      <motion.div className={`${styles.card} ${styles.focusCard}`} variants={staggerItem}>
        <div className={styles.focusLeft}>
          <div className={styles.iconWrapper} style={{ backgroundColor: category.bgColor, color: category.color }}>
            {IconCmp}
          </div>
          <div className={styles.focusText}>
            <h3 className={styles.title}>{category.title}</h3>
            <p className={styles.focusDesc}>{profileBio.currentFocus}</p>
          </div>
        </div>
        <div className={styles.focusRight}>
          {category.skills.map((skill) => (
            <span key={skill} className={styles.skillTagLight}>{skill}</span>
          ))}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div className={styles.card} variants={staggerItem}>
      <div className={styles.header}>
        <div
          className={styles.iconWrapper}
          style={{ backgroundColor: category.bgColor, color: category.color }}
        >
          {IconCmp}
        </div>
        <h3 className={styles.title}>{category.title}</h3>
      </div>
      <div className={styles.skills}>
        {category.skills.map((skill) => (
          <span key={skill} className={styles.skillTag}>
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
