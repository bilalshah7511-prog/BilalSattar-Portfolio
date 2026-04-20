"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { experience } from "@/lib/site";
import { ScrollReveal } from "@/components/scroll-reveal";

/**
 * EXPERIENCE — Vertical gradient spine with alternating glass cards.
 */
export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-[5.5rem] border-b border-[var(--border)] py-20 sm:py-24 md:py-28 lg:py-32"
      aria-labelledby="experience-heading"
    >
      <Container>
        <ScrollReveal>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.35em] text-[var(--accent)]">
            Journey
          </p>
          <h2
            id="experience-heading"
            className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl"
          >
            Experience
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--text-secondary)] sm:text-lg">
            Roles where I&apos;ve shipped interfaces, collaborated across teams, and kept quality bar high.
          </p>
        </ScrollReveal>

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 md:block"
            style={{
              background: `linear-gradient(to bottom, var(--accent), transparent)`,
            }}
            aria-hidden
          />

          <ul className="relative space-y-12 md:space-y-20">
            {experience.map((item, i) => {
              const isLeft = item.side === "left";
              return (
                <li key={`${item.org}-${item.period}`} className="relative">
                  <div
                    className="absolute left-1/2 top-8 z-[1] hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-[var(--accent)] bg-[var(--bg-primary)] shadow-[0_0_16px_var(--accent-glow)] md:block"
                    aria-hidden
                  />
                  <div className="absolute left-1/2 top-0 hidden -translate-x-1/2 md:block">
                    <span className="inline-flex min-w-[3.25rem] justify-center rounded-full border border-[var(--border)] bg-[var(--glass)] px-3 py-1 font-mono text-xs font-bold text-[var(--accent)] shadow-[var(--shadow)] backdrop-blur-md">
                      {item.year}
                    </span>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -36 : 36 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-10% 0px" }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 }}
                    className={`w-full text-left md:w-[calc(50%-2rem)] ${isLeft ? "md:mr-auto md:pr-10" : "md:ml-auto md:pl-10"}`}
                  >
                    <div className="glass-panel rounded-2xl p-6 text-left transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_24px_56px_-28px_var(--accent-glow)] sm:p-8">
                      <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--accent)] md:hidden">
                        {item.year}
                      </p>
                      <h3 className="mt-2 font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--text-primary)]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-[var(--text-secondary)]">{item.org}</p>
                      <p className="mt-1 font-mono text-xs text-[var(--text-secondary)]">{item.period}</p>
                      <ul className="mt-4 list-outside list-disc space-y-2 pl-5 text-left text-sm leading-relaxed text-[var(--text-secondary)] marker:text-[var(--accent)]">
                        {item.bullets.map((b) => (
                          <li key={b.slice(0, 40)}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
