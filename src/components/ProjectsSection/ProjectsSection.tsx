"use client";

import { useState } from "react";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import ProjectModal from "@/components/ProjectModal/ProjectModal";
import { projects, type Project } from "@/data/projects";
import styles from "./ProjectsSection.module.css";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredProjects = projects.slice(0, 3);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Restore scrolling
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="projects" className={`${styles.sectionWrapper} grid-bg`}>
      <div className={styles.content} style={{ position: 'relative', zIndex: 1 }}>
        <SectionHeader
          title="Featured Projects"
          subtitle="A curated selection of recent work demonstrating problem-solving, technical implementation, and user-centric design."
        />

        <div className={styles.grid}>
          {featuredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              onClick={() => openModal(project)}
            />
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <Link href="/projects" className={styles.moreProjectsBtn}>
            View All Projects
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>

        <ProjectModal 
          project={selectedProject} 
          isOpen={isModalOpen} 
          onClose={closeModal} 
        />
      </div>
    </section>
  );
}
