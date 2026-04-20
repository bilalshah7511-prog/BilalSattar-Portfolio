"use client";

/* eslint-disable @next/next/no-img-element -- Devicon icons from jsDelivr */
import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { ScrollReveal } from "@/components/scroll-reveal";
import { skillGroups } from "@/lib/site";
import { skillIconUrl } from "@/lib/skill-devicon";
import { cn } from "@/lib/cn";

function SkillChip({ name, index }: { name: string; index: number }) {
  const [broken, setBroken] = useState(false);

  return (
    <motion.li
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ delay: index * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <span
        className={cn(
          "glass-panel flex items-center gap-2.5 rounded-full px-4 py-2.5 text-sm font-medium text-[var(--text-primary)]",
          "transition-[transform,box-shadow] hover:scale-[1.03] hover:shadow-[0_0_24px_var(--accent-glow)]",
        )}
      >
        {!broken ? (
          <img
            src={skillIconUrl(name)}
            alt=""
            width={22}
            height={22}
            className="h-[22px] w-[22px] shrink-0 object-contain"
            loading="lazy"
            onError={() => setBroken(true)}
          />
        ) : (
          <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-md bg-[var(--bg-secondary)] font-mono text-[0.6rem] font-bold text-[var(--accent)]">
            {name.slice(0, 1)}
          </span>
        )}
        {name}
      </span>
    </motion.li>
  );
}

/**
 * SKILLS — Three columns of grouped chips with Devicon assets + staggered motion.
 */
export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-[5.5rem] border-b border-[var(--border)] py-20 sm:py-24 md:py-28 lg:py-32"
      aria-labelledby="skills-heading"
    >
      <div
        className="pointer-events-none absolute left-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle, var(--accent-glow), transparent 70%)` }}
        aria-hidden
      />

      <Container>
        <ScrollReveal>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.35em] text-[var(--accent)]">
            Stack
          </p>
          <h2
            id="skills-heading"
            className="mt-4 max-w-3xl bg-gradient-to-r from-[var(--text-primary)] via-[var(--accent)] to-[var(--text-secondary)] bg-clip-text font-[family-name:var(--font-heading)] text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl md:text-5xl"
          >
            Tools I ship with
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-12 md:mt-16 md:grid-cols-3 md:gap-8 lg:gap-10">
          {skillGroups.map((group, gi) => (
            <ScrollReveal key={group.category}>
              <div className="glass-panel rounded-3xl p-6 lg:p-8">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[var(--text-primary)]">
                  {group.category}
                </h3>
                <ul className="mt-6 flex flex-wrap gap-2.5" role="list">
                  {group.skills.map((skill, si) => (
                    <SkillChip
                      key={`${group.category}-${skill}`}
                      name={skill}
                      index={gi * 12 + si}
                    />
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
