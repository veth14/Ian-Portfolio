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
    <section id="skills" className={`${styles.sectionWrapper} grid-bg`}>
      <div className={styles.content} style={{ position: 'relative', zIndex: 1 }}>
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
              <div className={styles.avatar}>
                <Image
                  src="/images/LYA.jpg"
                  alt={profileBio.name}
                  width={80}
                  height={80}
                  className={styles.avatarImage}
                />
              </div>
              
              <h3 className={styles.profileName}>{profileBio.shortName}</h3>

              <p className={styles.profileBio}>{profileBio.bio}</p>

              <div className={styles.specialization}>
                <p>{profileBio.specialization}</p>
              </div>

              <div className={styles.location}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
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
