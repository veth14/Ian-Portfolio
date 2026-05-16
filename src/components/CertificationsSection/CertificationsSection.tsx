"use client";

import SectionHeader from "@/components/SectionHeader/SectionHeader";
import CertificationCard from "@/components/CertificationCard/CertificationCard";
import { certifications } from "@/data/skills";
import styles from "./CertificationsSection.module.css";

export default function CertificationsSection() {
  return (
    <section id="certificates" className={`${styles.sectionWrapper} grid-bg`}>
      <div className={styles.content} style={{ position: 'relative', zIndex: 1 }}>
        <SectionHeader
          title="Certifications & Credentials"
          subtitle="A commitment to continuous learning and verified credentials reflecting specialized expertise."
        />

        <div className={styles.grid}>
          {certifications.map((cert) => (
            <CertificationCard key={cert.id} certification={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
