import Hero from "@/components/Hero/Hero";
import SkillsSection from "@/components/SkillsSection/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection/CertificationsSection";
import ContactSection from "@/components/ContactSection/ContactSection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
    </main>
  );
}
