"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            3rd Year BSIT Student
          </div>

          <h1 className={styles.heading}>
            Hi, I'm <span className={styles.name}>Ian.</span>
            <br />
            <span className={styles.role}>Developer & Designer</span>
          </h1>

          <p className={styles.subtitle}>
            I bridge the gap between technical functionality and beautiful design. Currently building responsive web applications and exploring modern UI/UX principles to create seamless digital experiences.
          </p>

          <div className={styles.ctas}>
            <Link href="#projects" className={styles.primaryBtn}>
              View Projects
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
            <Link href="#contact" className={styles.secondaryBtn}>
              Contact
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </Link>
          </div>

          <div className={styles.metaRow}>
            <div className={styles.iconList}>
              <div className={styles.iconWrapper}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#004e9f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              </div>
              <div className={styles.iconWrapper}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#004e9f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
              </div>
              <div className={styles.iconWrapper}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#004e9f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              </div>
            </div>
            <div className={styles.metaText}><strong>Frontend</strong> focused.<br />Always learning.</div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.imageFrame}>
            <div className={styles.imageInner}>
              <Image
                src="/images/LYA.jpg"
                alt="Ian Angelo Valmores"
                width={520}
                height={720}
                priority
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
