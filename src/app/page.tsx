import { CursorGlow } from "@/components/cursor-glow";
import { BackToTop } from "@/components/back-to-top";
import { PortfolioNavbar } from "@/components/portfolio-navbar";
import { SiteFooter } from "@/components/site-footer";
import { HeroSection } from "@/sections/hero-section";
import { AboutSection } from "@/sections/about-section";
import { SkillsSection } from "@/sections/skills-section";
import { ProjectsSection } from "@/sections/projects-section";
import { ExperienceSection } from "@/sections/experience-section";
import { TestimonialsSection } from "@/sections/testimonials-section";
import { ContactSection } from "@/sections/contact-section";

/**
 * Single-page portfolio: nav → hero → about → skills → projects → experience → testimonials → contact → footer.
 * Theme: inline boot script in `layout` + `ThemeProvider` + `localStorage` key `portfolio-theme`.
 */
export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:fixed focus:left-[max(0.75rem,env(safe-area-inset-left))] focus:top-[max(0.75rem,env(safe-area-inset-top))] focus:z-[100] focus:inline-block focus:rounded-xl focus:bg-[var(--accent)] focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-[var(--accent-fg)] focus:outline focus:outline-2 focus:outline-offset-2"
      >
        Skip to content
      </a>
      <CursorGlow />
      <PortfolioNavbar />
      <main id="main" className="relative z-10 min-w-0 overflow-x-clip">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <BackToTop />
    </>
  );
}
