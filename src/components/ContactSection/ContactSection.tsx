"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import ContactForm from "@/components/ContactForm/ContactForm";
import AnimatedSection from "@/components/AnimatedSection/AnimatedSection";
import { fadeInLeft, fadeInRight } from "@/lib/animations";
import styles from "./ContactSection.module.css";

const socials = [
  { label: "LinkedIn", icon: "🔗", href: "https://linkedin.com/in/ianangelo" },
  { label: "GitHub", icon: "💻", href: "https://github.com/ianangelo" },
  { label: "Twitter", icon: "🐦", href: "https://twitter.com/ianangelo" },
  { label: "Email", icon: "✉️", href: "mailto:hello@ianangelo.com" },
];

export default function ContactSection() {
  return (
    <section id="contact" style={{ paddingTop: "var(--space-16)", paddingBottom: "var(--space-16)" }}>
      <div className="container">
        <SectionHeader
          title="Let's Build Something Impactful Together"
          subtitle="I'm currently open for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!"
        />

        <div className={styles.grid}>
          {/* Left — Contact Details */}
          <motion.div
            className={styles.left}
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className={styles.detailsCard}>
              <h3 className={styles.cardTitle}>Contact Details</h3>

              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>EMAIL</span>
                <div className={styles.detailValue}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>hello@ianangelo.com</span>
                </div>
              </div>

              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>LOCATION</span>
                <div className={styles.detailValue}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            <div className={styles.socialsCard}>
              <h3 className={styles.cardTitle}>Socials</h3>
              <div className={styles.socialIcons}>
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className={styles.socialBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                  >
                    <span>{s.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className={styles.baseCard}>
              <div className={styles.baseImageContainer}>
                <Image
                  src="/images/current-base.png"
                  alt="Current Base Workspace"
                  fill
                  className={styles.baseImage}
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
                <div className={styles.baseOverlay}>
                  <div className={styles.baseTag}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>Current Base</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <AnimatedSection variants={fadeInRight}>
            <ContactForm />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
