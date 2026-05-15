"use client";

import SectionHeader from "@/components/SectionHeader/SectionHeader";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { projects } from "@/data/projects";
import styles from "./ProjectsSection.module.css";

export default function ProjectsSection() {
  return (
    <section id="projects" style={{ paddingTop: "var(--space-16)", paddingBottom: "var(--space-16)" }}>
      <div className="container">
        <SectionHeader
          title="Projects Gallery"
          subtitle="A curated selection of recent work demonstrating problem-solving, technical implementation, and user-centric design."
        />

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
