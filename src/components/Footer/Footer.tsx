import Link from "next/link";
import styles from "./Footer.module.css";

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/ianangelo" },
  { label: "GitHub", href: "https://github.com/ianangelo" },
  { label: "Twitter", href: "https://twitter.com/ianangelo" },
  { label: "Email", href: "mailto:hello@ianangelo.com" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.content} container`}>
        <div className={styles.brand}>
          <span className={styles.name}>Ian Angelo</span>
        </div>

        <div className={styles.socials}>
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className={styles.copyright}>
          <span>© {currentYear} Ian Angelo. Built with precision and clarity.</span>
        </div>
      </div>
    </footer>
  );
}
