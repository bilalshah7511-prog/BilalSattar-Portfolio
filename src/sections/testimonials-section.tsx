"use client";

import { Quote } from "lucide-react";
import { Container } from "@/components/container";
import { ScrollReveal } from "@/components/scroll-reveal";
import { testimonials } from "@/lib/site";

const LOOP = [...testimonials, ...testimonials];

/**
 * TESTIMONIALS — Infinite horizontal marquee, pauses on hover.
 */
export function TestimonialsSection() {
  return (
    <section
      className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--bg-secondary)] py-16 sm:py-20 md:py-24"
      aria-labelledby="testimonials-heading"
    >
      <Container className="mb-10">
        <ScrollReveal>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.35em] text-[var(--accent)]">
            Kind words
          </p>
          <h2
            id="testimonials-heading"
            className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-4xl"
          >
            Testimonials
          </h2>
        </ScrollReveal>
      </Container>

      <div className="group/marquee relative">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-16 bg-gradient-to-r from-[var(--bg-secondary)] to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-16 bg-gradient-to-l from-[var(--bg-secondary)] to-transparent"
          aria-hidden
        />

        <div className="overflow-hidden">
          <div
            className="marquee-track flex w-max  gap-6 group-hover/marquee:[animation-play-state:paused]"
            style={{ animation: "marquee 50s linear infinite" }}
          >
            {LOOP.map((t, i) => (
              <figure
                key={`${t.name}-${i}`}
                className="glass-panel relative w-[min(100vw-2rem,22rem)] shrink-0 rounded-2xl p-6 sm:w-[24rem]"
              >
                <Quote
                  className="absolute right-5 top-5 h-8 w-8 text-[var(--accent)] opacity-30"
                  aria-hidden
                />
                <blockquote className="relative text-sm leading-relaxed text-[var(--text-primary)]">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 border-t border-[var(--border)] pt-4">
                  <p className="font-semibold text-[var(--text-primary)]">{t.name}</p>
                  <p className="font-mono text-xs text-[var(--text-secondary)]">
                    {t.role} · {t.company}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
