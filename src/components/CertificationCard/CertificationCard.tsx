"use client";

import { motion } from "framer-motion";
import { staggerItem } from "@/lib/animations";
import type { Certification } from "@/data/skills";
import styles from "./CertificationCard.module.css";

interface CertificationCardProps {
  certification: Certification;
}

export default function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <motion.div className={styles.card} variants={staggerItem}>
      <div className={styles.top}>
        <div className={styles.iconWrapper}>
          <span className={styles.icon}>{certification.icon}</span>
        </div>
        {certification.verified && (
          <span className={styles.verifiedBadge}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            Verified
          </span>
        )}
      </div>

      <h3 className={styles.title}>{certification.title}</h3>
      <p className={styles.issuer}>{certification.issuer}</p>

      <div className={styles.footer}>
        <span className={styles.date}>Issued: {certification.date}</span>
        <a href={certification.credentialUrl} className={styles.viewLink} target="_blank" rel="noopener noreferrer">
          View Credential
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}
