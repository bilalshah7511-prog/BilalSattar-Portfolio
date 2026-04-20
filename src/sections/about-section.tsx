"use client";

import { useRef } from "react";
import { MapPin, Radio } from "lucide-react";
import { useInView } from "framer-motion";
import { Container } from "@/components/container";
import { PortfolioImage } from "@/components/portfolio-image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { site } from "@/lib/site";
import { useCountUp } from "@/hooks/use-count-up";
import { cn } from "@/lib/cn";

function StatCard({
  label,
  value,
  suffix,
  active,
}: {
  label: string;
  value: number;
  suffix: string;
  active: boolean;
}) {
  const n = useCountUp(value, active);
  return (
    <div className="glass-panel rounded-2xl p-5 transition-[transform,box-shadow] hover:-translate-y-0.5">
      <p className="font-[family-name:var(--font-heading)] text-3xl font-extrabold tabular-nums text-[var(--accent)] sm:text-4xl">
        {n}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-[var(--text-secondary)]">{label}</p>
    </div>
  );
}

/**
 * ABOUT — Split layout: dashed rotating frame, bio, stats, location / availability, resume CTA.
 */
export function AboutSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-10% 0px" });

  return (
    <section
      id="about"
      className="relative scroll-mt-[5.5rem] border-b border-[var(--border)] bg-[var(--bg-secondary)] py-20 sm:py-24 md:py-28 lg:py-32"
      aria-labelledby="about-heading"
    >
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-72 w-72 rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle, var(--accent-glow), transparent 65%)` }}
        aria-hidden
      />

      <Container>
        <ScrollReveal>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.35em] text-[var(--accent)]">
            Who I am
          </p>
          <div className="mt-4 flex flex-wrap items-end gap-4">
            <h2
              id="about-heading"
              className="font-[family-name:var(--font-heading)] text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl"
            >
              About Me
            </h2>
            <span
              className="mb-2 h-1 min-w-[4rem] flex-1 rounded-full bg-gradient-to-r from-[var(--accent)] to-transparent sm:min-w-[8rem]"
              aria-hidden
            />
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-14 lg:mt-20 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.1fr)] lg:items-start lg:gap-16">
          <ScrollReveal className="relative mx-auto w-full max-w-md lg:mx-0">
            <div
              className="absolute -left-6 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full blur-3xl md:h-72 md:w-72"
              style={{ background: `radial-gradient(circle, var(--accent-glow), transparent 65%)` }}
              aria-hidden
            />
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
              <div className="absolute inset-0 animate-border-spin rounded-[2rem] border-2 border-dashed border-[color-mix(in_oklab,var(--accent)_55%,transparent)] opacity-80" />
              <div className="relative m-3 aspect-[4/5] overflow-hidden rounded-[1.65rem] border border-[var(--border)] bg-[var(--bg-primary)] shadow-[var(--shadow)]">
                <PortfolioImage
                  src={site.profileImage}
                  alt={site.profileAlt}
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="absolute -right-1 top-10 rotate-3 rounded-full border border-[var(--border)] bg-[var(--glass)] px-4 py-2 font-mono text-[0.65rem] font-semibold uppercase tracking-wider text-[var(--accent)] shadow-[var(--shadow)] backdrop-blur-xl sm:right-0">
              Open to Work
            </div>
          </ScrollReveal>

          <div className="min-w-0 space-y-8">
            <ScrollReveal delay={0.06}>
              <div className="space-y-4 text-pretty text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
                {site.bio.split("\n\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div
                ref={statsRef}
                className="grid gap-4 sm:grid-cols-3"
                aria-label="Career highlights"
              >
                {site.stats.map((s) => (
                  <StatCard
                    key={s.label}
                    label={s.label}
                    value={s.value}
                    suffix={s.suffix}
                    active={statsInView}
                  />
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.14}>
              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <div className="glass-panel flex flex-1 items-center gap-3 rounded-2xl px-4 py-3">
                  <MapPin className="h-5 w-5 shrink-0 text-[var(--accent)]" aria-hidden />
                  <div>
                    <p className="font-mono text-[0.65rem] uppercase tracking-wider text-[var(--text-secondary)]">
                      Location
                    </p>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{site.location}</p>
                  </div>
                </div>
                <div className="glass-panel flex flex-1 items-center gap-3 rounded-2xl px-4 py-3">
                  <Radio className="h-5 w-5 shrink-0 text-emerald-400" aria-hidden />
                  <div>
                    <p className="font-mono text-[0.65rem] uppercase tracking-wider text-[var(--text-secondary)]">
                      Availability
                    </p>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{site.availability}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.18}>
              <a
                href={site.cvUrl}
                download="M.BilalSattar.pdf"
                className={cn(
                  "inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--glass)] px-8 text-sm font-semibold text-[var(--text-primary)] shadow-[var(--shadow)] backdrop-blur-xl",
                  "transition-[transform,box-shadow] hover:border-[color-mix(in_oklab,var(--accent)_40%,transparent)] hover:shadow-[0_0_28px_var(--accent-glow)]",
                )}
              >
                Download Resume
              </a>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
