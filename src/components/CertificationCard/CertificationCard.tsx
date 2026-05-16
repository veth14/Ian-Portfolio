import Image from "next/image";
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
      <div className={styles.imageSection}>
        <Image
          src={certification.imageUrl}
          alt={certification.title}
          fill
          className={styles.certImage}
          sizes="(max-width: 768px) 100vw, 30vw"
          priority
        />
      </div>

      <div className={styles.cardContent}>
        <div className={styles.top}>
          {certification.verified && (
            <div className={styles.verifiedBadge}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Verified</span>
            </div>
          )}
        </div>

        <div className={styles.mainInfo}>
          <h3 className={styles.title}>{certification.title}</h3>
          <p className={styles.issuer}>{certification.issuer}</p>
          <span className={styles.date}>{certification.date}</span>
        </div>

        <div className={styles.expertiseBox}>
          <div className={styles.expertiseHeader}>
            <span className={styles.expertiseLabel}>Domain Expertise</span>
          </div>
          <div className={styles.skillsList}>
            {certification.skills.join(" • ")}
          </div>
        </div>

        <div className={styles.footer}>
          <a href={certification.credentialUrl} className={styles.verifyBtn} target="_blank" rel="noopener noreferrer">
            Verify Credential
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
