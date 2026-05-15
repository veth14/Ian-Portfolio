"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  highlightWord?: string;
}

export default function SectionHeader({ title, subtitle, highlightWord }: SectionHeaderProps) {
  const renderTitle = () => {
    if (!highlightWord) return title;
    const parts = title.split(highlightWord);
    return (
      <>
        {parts[0]}
        <span className={styles.highlight}>{highlightWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <motion.div
      className={styles.header}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h1 className={styles.title}>{renderTitle()}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
    </motion.div>
  );
}
