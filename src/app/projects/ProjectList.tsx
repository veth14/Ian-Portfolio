"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";
import { projects } from "@/data/projects";
import SplitText from "@/components/SplitText/SplitText";
import styles from "./ProjectsPage.module.css";

export default function ProjectList() {
  return (
    <div className={styles.showcaseList}>
      {projects.map((project, index) => {
        const isEven = index % 2 === 0;
        
        return (
          <motion.article
            key={project.id}
            className={`${styles.showcaseItem} ${isEven ? "" : styles.reverse}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            {/* Image Section */}
            <motion.div 
              className={styles.imageContainer}
              variants={isEven ? fadeInLeft : fadeInRight}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className={styles.image}
                  priority={index < 1}
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
            </motion.div>

            {/* Info Section */}
            <motion.div 
              className={styles.infoContainer}
              variants={isEven ? fadeInRight : fadeInLeft}
            >
              <div className={styles.categoryLabel}>PROJECT {index + 1}</div>
              <h2 className={styles.projectTitle}>
                <SplitText text={project.title} />
              </h2>
              <p className={styles.projectDescription}>
                <SplitText text={project.description} delay={0.2} />
              </p>

              <div className={styles.detailSection}>
                <h4 className={styles.detailTitle}>
                  <SplitText text="The Architecture" delay={0.3} />
                </h4>
                <motion.div 
                  className={styles.techStack}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {project.techStack.map((tech, i) => (
                    <motion.span 
                      key={tech} 
                      className={styles.techTag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + (i * 0.05) }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              <div className={styles.detailSection}>
                <h4 className={styles.detailTitle}>
                  <SplitText text="Key Insights" delay={0.4} />
                </h4>
                <div className={styles.learningWrapper}>
                   <SplitText 
                    className={styles.learningText} 
                    text={project.keyLearning} 
                    delay={0.5} 
                  />
                </div>
              </div>

              <motion.div 
                className={styles.actions}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.primaryAction}
                >
                  Live Demo
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
                <a 
                  href={project.sourceUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.secondaryAction}
                >
                  Source Code
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </motion.article>
        );
      })}
    </div>
  );
}
