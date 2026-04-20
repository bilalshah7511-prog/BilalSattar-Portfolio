"use client";

import { useEffect, useState } from "react";

/**
 * Scroll spy: highlights the section id in view; clears near top of page.
 */
export function useActiveSection(sectionIds: readonly string[]) {
  const [activeId, setActiveId] = useState("");
  const idsKey = sectionIds.join("|");

  useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (typeof window !== "undefined" && window.scrollY < 140) {
          setActiveId((prev) => (prev === "" ? prev : ""));
          return;
        }
        const hits = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const top = hits[0];
        if (top?.target?.id) {
          const next = top.target.id;
          setActiveId((prev) => (prev === next ? prev : next));
        }
      },
      { rootMargin: "-42% 0px -42% 0px", threshold: [0.05, 0.15, 0.35, 0.6] },
    );

    const onScroll = () => {
      if (window.scrollY < 140) setActiveId((prev) => (prev === "" ? prev : ""));
    };

    els.forEach((el) => observer.observe(el));
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [idsKey]);

  return activeId;
}
