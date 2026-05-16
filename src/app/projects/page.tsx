import SplitText from "@/components/SplitText/SplitText";
import ProjectList from "./ProjectList";
import styles from "./ProjectsPage.module.css";

export const metadata = {
  title: "Projects Archive | Ian Angelo Valmores",
  description: "A comprehensive archive of all my technical projects and experiments.",
};

export default function ProjectsPage() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <header className={styles.heroHeader}>
          <div className={styles.heroBadge}>SELECTED WORKS</div>
          <h1 className={styles.heroTitle}>
            <SplitText text="Projects" />
            <br />
            <SplitText text="Archive" delay={0.3} />
          </h1>
          <p className={styles.heroSubtitle}>
            <SplitText 
              text="A deep dive into my journey of building, learning, and iterating across the full stack." 
              delay={0.6}
            />
          </p>
          <div className={styles.scrollDown}>
            <span>Scroll to explore</span>
            <div className={styles.mouse}>
              <div className={styles.wheel}></div>
            </div>
          </div>
        </header>

        {/* The ProjectList handles the grid and the modal interactivity */}
        <ProjectList />
      </div>
    </main>
  );
}
