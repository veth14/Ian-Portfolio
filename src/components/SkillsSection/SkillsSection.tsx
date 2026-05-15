"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import SkillCategory from "@/components/SkillCategory/SkillCategory";
import CertificationCard from "@/components/CertificationCard/CertificationCard";
import { skillCategories, certifications, profileBio } from "@/data/skills";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";
import styles from "./SkillsSection.module.css";

export default function SkillsSection() {
  return (
    <section id="skills" style={{ paddingTop: "var(--space-16)", paddingBottom: "var(--space-16)" }}>
      <div className="container">
        {/* About & Skills */}
        <SectionHeader
          title="About & Skills"
          subtitle="A closer look at my professional journey, core competencies, and the technical arsenal I use to bring ideas to life."
        />

        <div className={styles.aboutGrid}>
          {/* Profile Card */}
          <motion.div
            className={styles.profileCard}
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className={styles.profileTop}>
              <div className={styles.avatar}>
                <Image
                  src="/images/pictureMe.png"
                  alt={profileBio.name}
                  width={64}
                  height={64}
                  className={styles.avatarImage}
                />
              </div>
              <div>
                <h3 className={styles.profileName}>{profileBio.shortName}</h3>
              </div>
            </div>

            <p className={styles.profileBio}>{profileBio.bio}</p>

            <div className={styles.specialization}>
              <p>{profileBio.specialization}</p>
            </div>

            <div className={styles.location}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{profileBio.location}</span>
            </div>
          </motion.div>

          {/* Technical Arsenal */}
          <motion.div
            className={styles.arsenalSection}
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className={styles.arsenalTitle}>Technical Arsenal</h2>
            <motion.div
              className={styles.arsenalGrid}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {skillCategories.map((category) => (
                <SkillCategory key={category.id} category={category} />
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Certifications moved to a dedicated section */}
      </div>
    </section>
  );
}
