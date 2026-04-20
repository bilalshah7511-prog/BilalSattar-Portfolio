"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";
import { NAV_IDS, NAV_SECTIONS } from "@/lib/nav";
import { useActiveSection } from "@/hooks/use-active-section";
import { ThemeToggle } from "@/components/theme-toggle";
import { Container } from "@/components/container";
import { cn } from "@/lib/cn";

const initials = site.name
  .split(/\s+/)
  .map((w) => w[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();

/**
 * Sticky glass navbar: centered links, scroll spy, theme toggle, Hire Me, fullscreen mobile menu.
 */
export function PortfolioNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useActiveSection(NAV_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-[80] pt-[env(safe-area-inset-top)]",
        "border-b border-[var(--border)] bg-[color-mix(in_oklab,var(--glass)_92%,transparent)] backdrop-blur-xl",
        scrolled && "shadow-[var(--shadow)]",
      )}
    >
      <Container className="relative flex min-h-[3.75rem] items-center justify-between gap-3 sm:min-h-16">
        <Link
          href="#hero"
          className="group z-10 flex min-w-0 items-center gap-3 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          aria-label={`${site.name}, home`}
          onClick={() => setOpen(false)}
        >
          <motion.span
            layout
            className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--glass)] font-[family-name:var(--font-heading)] text-sm font-extrabold text-[var(--accent)] shadow-[0_0_28px_var(--accent-glow)] sm:h-11 sm:w-11"
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 420, damping: 28 }}
            aria-hidden
          >
            {initials}
          </motion.span>
          <span className="min-w-0">
            <span className="block truncate font-[family-name:var(--font-heading)] text-sm font-bold tracking-tight text-[var(--text-primary)] sm:text-base">
              {site.name}
            </span>
            <span className="hidden font-mono text-[0.65rem] text-[var(--text-secondary)] sm:block">
              {site.heroRoles[0]}
            </span>
          </span>
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 md:flex"
          aria-label="Primary"
        >
          <ul className="flex items-center gap-1 lg:gap-2">
            {NAV_SECTIONS.map((item) => {
              const active = activeId === item.id;
              return (
                <li key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    className={cn(
                      "group relative px-3 py-2 text-sm font-medium transition-[color] lg:px-4",
                      active
                        ? "text-[var(--accent)]"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]",
                    )}
                  >
                    {item.label}
                    <span
                      className={cn(
                        "absolute bottom-1 left-3 right-3 h-0.5 origin-left rounded-full bg-[var(--accent)] transition-transform duration-300 lg:left-4 lg:right-4",
                        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                      )}
                      aria-hidden
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="z-10 flex items-center gap-2 sm:gap-3">
          <ThemeToggle className="hidden sm:inline-flex" />
          <Link
            href="#contact"
            className="group relative hidden overflow-hidden rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-[var(--accent-fg)] shadow-[0_0_24px_var(--accent-glow)] transition hover:brightness-110 sm:inline-flex"
          >
            <span
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(110deg, transparent, color-mix(in oklab, white 40%, transparent), transparent)",
                backgroundSize: "200% 100%",
                animation: "shimmer-slide 2s linear infinite",
              }}
              aria-hidden
            />
            <span className="relative">Hire Me</span>
          </Link>
          <ThemeToggle className="inline-flex sm:hidden" />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--glass)] text-[var(--text-primary)] shadow-[var(--shadow)] md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5" strokeWidth={2} aria-hidden />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5" strokeWidth={2} aria-hidden />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[90] flex flex-col bg-[color-mix(in_oklab,var(--bg-primary)_96%,transparent)] backdrop-blur-2xl md:hidden"
          >
            <div className="flex justify-end p-4 pt-[max(1rem,env(safe-area-inset-top))]">
              <button
                type="button"
                className="rounded-xl border border-[var(--border)] p-3 text-[var(--text-primary)]"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-2 px-8 pb-16">
              {NAV_SECTIONS.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 48 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 + i * 0.05, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={`#${item.id}`}
                    className="block py-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--text-primary)]"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="mt-8 flex justify-center"
              >
                <ThemeToggle />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.52 }}
                className="flex justify-center"
              >
                <Link
                  href="#contact"
                  className="rounded-full bg-[var(--accent)] px-8 py-3 text-sm font-semibold text-[var(--accent-fg)]"
                  onClick={() => setOpen(false)}
                >
                  Hire Me
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
