import Link from "next/link";
import styles from "./Footer.module.css";

const footerLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { 
    label: "Facebook", 
    href: "https://facebook.com/itsss.iannn14",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    )
  },
  { 
    label: "Instagram", 
    href: "https://instagram.com/itsss.iannn14",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    )
  },
  { 
    label: "GitHub", 
    href: "https://github.com/veth14",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    )
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.topRow}>
          <div className={styles.brandSide}>
            <Link href="/" className={styles.brand}>
              Ian Angelo Valmores<span>.</span>
            </Link>
            <p className={styles.brandTagline}>
              Crafting digital excellence through<br />precision engineering and refined design.
            </p>
          </div>

          <div className={styles.linksSide}>
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Navigation</h4>
              <ul className={styles.linkList}>
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={styles.footerLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Socials</h4>
              <div className={styles.socialRow}>
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={styles.socialIconBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.copyright}>
            <span>© {currentYear} Ian Angelo Valmores. All rights reserved.</span>
          </div>

          <div className={styles.techStack}>
            <span>Built with</span>
            <div className={styles.stackIcons}>
              <span title="Next.js">Next.js</span>
              <span className={styles.dot}>•</span>
              <span title="TypeScript">TypeScript</span>
              <span className={styles.dot}>•</span>
              <span title="Framer Motion">Framer Motion</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
