"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { ExternalLink } from "lucide-react";
import { Container } from "@/components/container";
import { ProjectCoverImage } from "@/components/project-cover-image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { featuredProjects, type Project, type ProjectStackFilter } from "@/lib/site";
import { cn } from "@/lib/cn";

const TABS: { id: "all" | ProjectStackFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "fullstack", label: "Full Stack" },
];

function filterByTab(
  projects: readonly Project[],
  tab: (typeof TABS)[number]["id"],
) {
  if (tab === "all") return [...projects];
  return projects.filter((p) => p.stackCategory === tab);
}

/**
 * PROJECTS — Filter tabs, featured full-width card, responsive grid with glass + hover lift.
 */
export function ProjectsSection() {
  const [tab, setTab] = useState<(typeof TABS)[number]["id"]>("all");

  const { featured, rest } = useMemo(() => {
    const list = filterByTab(featuredProjects, tab);
    const feat = list.find((p) => p.highlight) ?? list[0];
    const others = feat ? list.filter((p) => p !== feat) : [];
    return { featured: feat, rest: others };
  }, [tab]);

  return (
    <section
      id="projects"
      className="relative scroll-mt-[5.5rem] border-b border-[var(--border)] bg-[var(--bg-secondary)] py-20 sm:py-24 md:py-28 lg:py-32"
      aria-labelledby="projects-heading"
    >
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle, var(--accent-glow), transparent 70%)` }}
        aria-hidden
      />

      <Container>
        <ScrollReveal>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.35em] text-[var(--accent)]">
            Work
          </p>
          <h2
            id="projects-heading"
            className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl"
          >
            Featured projects
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-[var(--text-secondary)] sm:text-lg">
            Production apps and high-polish builds—filter by stack, then explore code and demos.
          </p>

          <div
            className="mt-8 flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter projects by stack"
          >
            {TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={tab === t.id}
                onClick={() => setTab(t.id)}
                className={cn(
                  "rounded-full border px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider transition-[transform,box-shadow,color]",
                  tab === t.id
                    ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-fg)] shadow-[0_0_24px_var(--accent-glow)]"
                    : "border-[var(--border)] bg-[var(--glass)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]",
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-14 md:mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="space-y-10"
            >
              {featured ? (
                <ScrollReveal>
                  <article className="glass-panel group overflow-hidden rounded-[1.75rem] transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-[0_32px_80px_-24px_var(--accent-glow)]">
                    <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                      <div className="relative min-h-[14rem] lg:min-h-[20rem]">
                        <ProjectCoverImage src={featured.image} alt={featured.imageAlt} priority />
                        <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-[var(--accent)] px-3 py-1 font-mono text-[0.65rem] font-bold uppercase tracking-wider text-[var(--accent-fg)] shadow-lg">
                          ⭐ Featured
                        </span>
                      </div>
                      <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                        <h3 className="font-[family-name:var(--font-heading)] text-2xl font-extrabold text-[var(--text-primary)] sm:text-3xl">
                          {featured.name}
                        </h3>
                        <p className="mt-4 line-clamp-3 text-pretty text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                          {featured.description}
                        </p>
                        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tech stack">
                          {featured.stack.map((s) => (
                            <li
                              key={s}
                              className="rounded-full border border-[var(--border)] bg-[var(--bg-primary)] px-3 py-1 font-mono text-[0.65rem] font-medium text-[var(--text-secondary)]"
                            >
                              {s}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-8 flex flex-wrap gap-3">
                          {featured.repoUrl ? (
                            <a
                              href={featured.repoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex h-12 min-w-[3rem] items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--glass)] px-4 text-sm font-semibold text-[var(--text-primary)] transition-[transform,box-shadow] hover:shadow-[0_0_20px_var(--accent-glow)]"
                              aria-label="View source on GitHub"
                            >
                              <FaGithub className="h-5 w-5" aria-hidden />
                              Code
                            </a>
                          ) : null}
                          {featured.liveUrl ? (
                            <a
                              href={featured.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--glass)] px-4 text-sm font-semibold text-[var(--text-primary)] transition-[transform,box-shadow] hover:shadow-[0_0_20px_var(--accent-glow)] sm:max-w-[12rem]"
                            >
                              <ExternalLink className="h-5 w-5" aria-hidden />
                              Live demo
                            </a>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ) : (
                <p className="text-center text-[var(--text-secondary)]">No projects in this filter.</p>
              )}

              <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
                {rest.map((project) => (
                  <ScrollReveal key={project.name}>
                    <article className="glass-panel group flex h-full flex-col overflow-hidden rounded-2xl transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-[0_28px_64px_-28px_var(--accent-glow)]">
                      <div className="relative">
                        <ProjectCoverImage src={project.image} alt={project.imageAlt} />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--text-primary)]">
                          {project.name}
                        </h3>
                        <p className="mt-3 line-clamp-2 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">
                          {project.description}
                        </p>
                        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
                          {project.stack.slice(0, 5).map((s) => (
                            <li
                              key={s}
                              className="rounded-md border border-[var(--border)] px-2 py-0.5 font-mono text-[0.65rem] text-[var(--text-secondary)]"
                            >
                              {s}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6 flex gap-3 border-t border-[var(--border)] pt-5">
                          {project.repoUrl ? (
                            <a
                              href={project.repoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--glass)] text-sm font-semibold text-[var(--text-primary)] hover:shadow-[0_0_16px_var(--accent-glow)]"
                              aria-label={`${project.name} GitHub`}
                            >
                              <FaGithub className="h-4 w-4" aria-hidden />
                              Code
                            </a>
                          ) : (
                            <span className="inline-flex h-11 flex-1 items-center justify-center rounded-xl border border-dashed border-[var(--border)] text-xs text-[var(--text-secondary)]">
                              Repo private
                            </span>
                          )}
                          {project.liveUrl ? (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--glass)] text-sm font-semibold text-[var(--text-primary)] hover:shadow-[0_0_16px_var(--accent-glow)]"
                            >
                              <ExternalLink className="h-4 w-4" aria-hidden />
                              Live
                            </a>
                          ) : (
                            <span className="inline-flex h-11 flex-1 items-center justify-center rounded-xl border border-dashed border-[var(--border)] text-xs text-[var(--text-secondary)]">
                              No demo
                            </span>
                          )}
                        </div>
                      </div>
                    </article>
                  </ScrollReveal>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
