"use client";

import SectionHeader from "@/components/SectionHeader/SectionHeader";
import ExperienceCard from "@/components/ExperienceCard/ExperienceCard";
import { experiences } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" style={{ paddingTop: "var(--space-16)", paddingBottom: "var(--space-16)" }}>
      <div className="container">
        <SectionHeader
          title="Academic Experience"
          subtitle="Academic projects, capstones, and system-level work demonstrating design and engineering." 
        />

        <div style={{ maxWidth: "800px" }}>
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
