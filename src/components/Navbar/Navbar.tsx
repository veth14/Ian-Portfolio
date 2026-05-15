"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.brand}>
          Portfolio
        </Link>

        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${styles.link} ${
                  pathname === link.href ? styles.active : ""
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    className={styles.underline}
                    layoutId="nav-underline"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/resume.pdf" className={styles.resumeBtn} target="_blank">
          Resume
        </Link>

        {/* Mobile hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          <span className={`${styles.bar} ${mobileOpen ? styles.barOpen1 : ""}`} />
          <span className={`${styles.bar} ${mobileOpen ? styles.barOpen2 : ""}`} />
          <span className={`${styles.bar} ${mobileOpen ? styles.barOpen3 : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ul className={styles.mobileLinks}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`${styles.mobileLink} ${
                      pathname === link.href ? styles.mobileLinkActive : ""
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/resume.pdf"
                  className={styles.mobileResumeBtn}
                  target="_blank"
                  onClick={() => setMobileOpen(false)}
                >
                  Resume
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
