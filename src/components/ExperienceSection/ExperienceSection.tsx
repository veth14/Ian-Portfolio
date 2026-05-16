"use client";

import SectionHeader from "@/components/SectionHeader/SectionHeader";
import ExperienceCard from "@/components/ExperienceCard/ExperienceCard";
import { experiences } from "@/data/experience";

import styles from "./ExperienceSection.module.css";

export default function ExperienceSection() {
  return (
    <section id="experience" className={`${styles.sectionWrapper} grid-bg`}>
      <div className={styles.content} style={{ position: 'relative', zIndex: 1 }}>
        <SectionHeader
          title="Professional Experience"
          subtitle="A timeline of my journey building scalable products and leading technical initiatives." 
        />

        <div className={styles.timelineGrid}>
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
