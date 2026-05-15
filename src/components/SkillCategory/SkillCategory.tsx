"use client";

import { motion } from "framer-motion";
import { staggerItem } from "@/lib/animations";
import type { SkillCategory as SkillCategoryType } from "@/data/skills";
import styles from "./SkillCategory.module.css";

interface SkillCategoryProps {
  category: SkillCategoryType;
}

export default function SkillCategory({ category }: SkillCategoryProps) {
  return (
    <motion.div className={styles.card} variants={staggerItem}>
      <div className={styles.header}>
        <div
          className={styles.iconWrapper}
          style={{ backgroundColor: category.bgColor }}
        >
          <span className={styles.icon}>{category.icon}</span>
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
