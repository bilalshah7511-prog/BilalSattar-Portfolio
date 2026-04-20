"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { MapPin, Radio } from "lucide-react";
import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";
import { ScrollReveal } from "@/components/scroll-reveal";
import { site } from "@/lib/site";

/**
 * CONTACT — Gradient accent blob, info column + floating-label form.
 */
export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-[5.5rem] overflow-hidden border-b border-[var(--border)] py-20 sm:py-24 md:py-28 lg:py-32"
      aria-labelledby="contact-heading"
    >
      <div
        className="pointer-events-none absolute -right-[20%] top-1/2 h-[min(90vw,28rem)] w-[min(90vw,28rem)] -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, color-mix(in oklab, var(--accent) 35%, transparent), transparent 65%)`,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-[15%] bottom-0 h-72 w-72 rounded-full blur-3xl opacity-60"
        style={{
          background: `radial-gradient(circle, var(--accent-glow), transparent 70%)`,
        }}
        aria-hidden
      />

      <Container className="relative z-[1]">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start lg:gap-16">
          <div>
            <ScrollReveal>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.35em] text-[var(--accent)]">
                Contact
              </p>
              <h2
                id="contact-heading"
                className="mt-4 font-[family-name:var(--font-heading)] text-[clamp(2rem,4vw+1rem,3.25rem)] font-extrabold leading-tight tracking-tight text-[var(--text-primary)]"
              >
                Let&apos;s Build Something Amazing
              </h2>
              <p className="mt-5 max-w-md text-pretty text-lg text-[var(--text-secondary)]">
                Open to freelance, full-time, or collaboration—tell me about your timeline and stack.
              </p>
            </ScrollReveal>

            <ScrollReveal className="mt-10 space-y-4" delay={0.06}>
              <div className="glass-panel flex items-start gap-4 rounded-2xl p-5">
                <HiOutlineMail className="mt-0.5 h-6 w-6 shrink-0 text-[var(--accent)]" aria-hidden />
                <div>
                  <p className="font-mono text-[0.65rem] uppercase tracking-wider text-[var(--text-secondary)]">
                    Email
                  </p>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-lg font-semibold text-[var(--text-primary)] underline-offset-4 hover:underline"
                  >
                    {site.email}
                  </a>
                </div>
              </div>
              <div className="glass-panel flex items-start gap-4 rounded-2xl p-5">
                <MapPin className="mt-0.5 h-6 w-6 shrink-0 text-[var(--accent)]" aria-hidden />
                <div>
                  <p className="font-mono text-[0.65rem] uppercase tracking-wider text-[var(--text-secondary)]">
                    Location
                  </p>
                  <p className="font-semibold text-[var(--text-primary)]">{site.location}</p>
                </div>
              </div>
              <div className="glass-panel flex items-start gap-4 rounded-2xl p-5">
                <Radio className="mt-0.5 h-6 w-6 shrink-0 text-emerald-400" aria-hidden />
                <div>
                  <p className="font-mono text-[0.65rem] uppercase tracking-wider text-[var(--text-secondary)]">
                    Availability
                  </p>
                  <p className="font-semibold text-[var(--text-primary)]">{site.availability}</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="mt-10" delay={0.1}>
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)]">
                Social
              </p>
              <ul className="mt-4 flex flex-wrap gap-3" aria-label="Social links">
                {[
                  { href: site.github, label: "GitHub", Icon: FaGithub },
                  { href: site.linkedIn, label: "LinkedIn", Icon: FaLinkedin },
                  { href: site.twitter, label: "X", Icon: FaXTwitter },
                ].map(({ href, label, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--glass)] text-[var(--text-primary)] shadow-[var(--shadow)] transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_0_24px_var(--accent-glow)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                      aria-label={label}
                    >
                      <Icon className="h-[1.15rem] w-[1.15rem]" aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.05}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
