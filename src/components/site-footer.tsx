"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { Container } from "@/components/container";
import { site } from "@/lib/site";
import { NAV_SECTIONS } from "@/lib/nav";

/**
 * FOOTER — Brand, quick nav, socials, credit line.
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)] py-14 pb-[max(2rem,env(safe-area-inset-bottom))] sm:py-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          <div>
            <p className="font-[family-name:var(--font-heading)] text-xl font-extrabold text-[var(--text-primary)]">
              {site.fullName}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--text-secondary)]">
              {site.tagline}
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
              Navigate
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {NAV_SECTIONS.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    className="text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
              Connect
            </p>
            <ul className="mt-4 flex flex-wrap gap-3" aria-label="Social links">
              {[
                { href: site.github, label: "GitHub", Icon: FaGithub },
                { href: site.linkedIn, label: "LinkedIn", Icon: FaLinkedin },
                { href: site.twitter, label: "X", Icon: FaXTwitter },
                { href: `mailto:${site.email}`, label: "Email", Icon: HiOutlineMail },
              ].map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--glass)] text-[var(--text-primary)] transition-[transform,box-shadow] hover:shadow-[0_0_18px_var(--accent-glow)]"
                    aria-label={label}
                  >
                    <Icon className="h-[1.05rem] w-[1.05rem]" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] pt-8 text-center text-sm text-[var(--text-secondary)] sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} {site.fullName}. All rights reserved.</p>
          <p className="font-mono text-xs">
            Designed &amp; built by {site.fullName}
          </p>
        </div>
      </Container>
    </footer>
  );
}
