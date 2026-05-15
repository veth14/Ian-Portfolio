import Hero from "@/components/Hero/Hero";
import SkillsSection from "@/components/SkillsSection/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection/CertificationsSection";
import ContactSection from "@/components/ContactSection/ContactSection";

export default function HomePage() {
  return (
    <>
      <section className="section full-bleed-bg" style={{ padding: 0 }}>
        <Hero />
      </section>

      <section className="section">
        <div className="section-inner container">
          <SkillsSection />
        </div>
      </section>

      <section className="section">
        <div className="section-inner container">
          <ExperienceSection />
        </div>
      </section>

      <section className="section">
        <div className="section-inner container">
          <ProjectsSection />
        </div>
      </section>

      <section className="section">
        <div className="section-inner container">
          <CertificationsSection />
        </div>
      </section>

      <section className="section">
        <div className="section-inner container">
          <ContactSection />
        </div>
      </section>
    </>
  );
}
