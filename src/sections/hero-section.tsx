"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/container";
import { PortfolioImage } from "@/components/portfolio-image";
import { HeroRoleCycle } from "@/components/hero-role-cycle";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

const noiseDataUri = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

/**
 * HERO — Full viewport: mesh orbs, hero-only noise, staggered copy, role cycle, CTAs, socials with tooltips.
 */
export function HeroSection() {
  const reduce = useReducedMotion();
  const nameWords = ["Hi,", "I'm", site.fullName];

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center overflow-hidden border-b border-[var(--border)] pt-[env(safe-area-inset-top)]"
      aria-labelledby="hero-heading"
    >
      {/* Animated mesh — theme-aware orb colors */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="animate-mesh-orb absolute -left-[18%] top-[-22%] h-[min(88vh,48rem)] w-[min(88vw,48rem)] rounded-full opacity-90 blur-3xl"
          style={{
            background: `radial-gradient(closest-side, var(--mesh-a), transparent 72%)`,
          }}
          aria-hidden
        />
        <div
          className="animate-mesh-orb absolute -right-[12%] bottom-[-18%] h-[min(80vh,44rem)] w-[min(80vw,44rem)] rounded-full opacity-75 blur-3xl [animation-delay:-8s]"
          style={{
            background: `radial-gradient(closest-side, var(--mesh-b), transparent 70%)`,
          }}
          aria-hidden
        />
        <div
          className="animate-mesh-orb absolute left-[35%] top-[40%] h-[min(50vw,22rem)] w-[min(50vw,22rem)] rounded-full opacity-50 blur-3xl [animation-delay:-4s]"
          style={{
            background: `radial-gradient(closest-side, color-mix(in oklab, var(--accent) 28%, transparent), transparent 68%)`,
          }}
          aria-hidden
        />
        <div
          className="absolute left-1/2 top-[28%] h-[min(65vw,24rem)] w-[min(65vw,24rem)] -translate-x-1/2 rounded-full border border-[var(--border)] opacity-40"
          aria-hidden
        />
      </div>

      {/* Noise — hero only */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] mix-blend-overlay"
        style={{
          opacity: "var(--noise-opacity)",
          backgroundImage: noiseDataUri,
        }}
        aria-hidden
      />

      <Container className="relative z-[2] py-16 md:py-20 lg:py-0">
        <div className="grid items-center gap-12 lg:min-h-[min(100dvh,56rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">
          <div className="min-w-0">
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="animate-enter stagger-1 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--glass)] px-4 py-2 text-xs font-semibold text-[var(--text-primary)] shadow-[var(--shadow)] backdrop-blur-xl"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
              </span>
              <span aria-hidden>👋</span>
              Available for Work
            </motion.p>

            <h1
              id="hero-heading"
              className="mt-8 font-[family-name:var(--font-heading)] text-[clamp(2.25rem,5vw+1rem,3.75rem)] font-extrabold leading-[1.05] tracking-tight text-[var(--text-primary)]"
            >
              <span className="block overflow-hidden">
                <motion.span
                  className="inline-flex flex-wrap gap-x-2 gap-y-1"
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: {},
                    show: {
                      transition: { staggerChildren: reduce ? 0 : 0.08, delayChildren: reduce ? 0 : 0.15 },
                    },
                  }}
                >
                  {nameWords.map((word) => (
                    <motion.span
                      key={word}
                      variants={{
                        hidden: { opacity: 0, y: "100%" },
                        show: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                      className="inline-block"
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.span>
              </span>
              <span className="mt-4 block min-h-[3.25rem] md:min-h-[3.5rem]">
                <HeroRoleCycle roles={site.heroRoles} />
              </span>
            </h1>

            <p className="animate-enter stagger-3 mt-6 max-w-xl text-pretty text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg md:text-xl">
              {site.tagline}
            </p>

            <div className="animate-enter stagger-4 mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="#projects"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--accent)] px-8 text-sm font-semibold text-[var(--accent-fg)] shadow-[0_0_36px_var(--accent-glow)] transition-[transform,filter] hover:brightness-110 active:scale-[0.99] sm:min-w-[11rem]"
              >
                View My Work
              </Link>
              <a
                href={site.cvUrl}
                download="M.BilalSattar.pdf"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--glass)] px-8 text-sm font-semibold text-[var(--text-primary)] shadow-[var(--shadow)] backdrop-blur-xl transition-[transform,background-color] hover:border-[color-mix(in_oklab,var(--accent)_45%,transparent)] active:scale-[0.99] sm:min-w-[11rem]"
              >
                Download CV
              </a>
            </div>

            <ul
              className="animate-enter stagger-5 mt-12 flex flex-wrap items-center gap-3 sm:mt-14"
              aria-label="Social profiles"
            >
              {[
                { href: site.github, label: "GitHub", Icon: FaGithub },
                { href: site.linkedIn, label: "LinkedIn", Icon: FaLinkedin },
                { href: site.twitter, label: "Twitter / X", Icon: FaXTwitter },
                { href: `mailto:${site.email}`, label: "Email", Icon: HiOutlineMail },
              ].map(({ href, label, Icon }) => (
                <li key={label} className="group relative">
                  <a
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--glass)] text-lg text-[var(--text-primary)] shadow-[var(--shadow)] backdrop-blur-xl transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_0_24px_var(--accent-glow)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                    aria-label={label}
                  >
                    <Icon aria-hidden className="h-[1.15rem] w-[1.15rem]" />
                  </a>
                  <span
                    role="tooltip"
                    className="pointer-events-none absolute -top-9 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md border border-[var(--border)] bg-[var(--bg-secondary)] px-2 py-1 font-mono text-[0.65rem] font-medium text-[var(--text-primary)] opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
                  >
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: reduce ? 0 : 0.2 }}
            className="relative mx-auto mt-10 block w-full max-w-sm lg:mt-0 lg:max-w-none"
          >
            <div
              className="absolute -right-4 top-8 h-48 w-48 rounded-full blur-3xl md:h-64 md:w-64"
              style={{
                background: `radial-gradient(circle, var(--accent-glow), transparent 65%)`,
              }}
            />
            <div className="relative aspect-square max-h-[min(72vh,28rem)] w-full">
              <div
                className={cn(
                  "absolute inset-[-3px] rounded-[2rem] opacity-80",
                  !reduce && "animate-border-spin",
                )}
                style={{
                  background: `conic-gradient(from 0deg, var(--accent), transparent 40%, var(--accent) 80%)`,
                }}
              />
              <div className="absolute inset-[2px] rounded-[1.85rem] bg-[var(--bg-primary)] p-1">
                <div className="relative h-full w-full overflow-hidden rounded-[1.65rem] border border-[var(--border)] bg-[var(--bg-secondary)] shadow-[var(--shadow)]">
                  <PortfolioImage
                    src={site.profileImage}
                    alt={site.profileAlt}
                    fill
                    priority
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      <motion.a
        href="#about"
        className="absolute bottom-[max(1rem,env(safe-area-inset-bottom))] left-1/2 z-[2] flex -translate-x-1/2 flex-col items-center gap-1 text-xs font-medium text-[var(--text-secondary)]"
        aria-label="Scroll to About section"
        animate={
          reduce
            ? undefined
            : {
                y: [0, 8, 0],
              }
        }
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-7 w-7 text-[var(--accent)]" strokeWidth={2} aria-hidden />
      </motion.a>
    </section>
  );
}
