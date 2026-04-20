"use client";

import { useEffect, useState } from "react";

/**
 * Animates from 0 to `end` while `active` is true (viewport-driven).
 * Returns 0 whenever `active` is false so stat cards reset off-screen.
 */
export function useCountUp(end: number, active: boolean, durationMs = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      queueMicrotask(() => setValue(end));
      return;
    }

    let startAt: number | null = null;
    let frame = 0;

    queueMicrotask(() => setValue(0));

    const tick = (now: number) => {
      if (startAt === null) startAt = now;
      const elapsed = now - startAt;
      const t = Math.min(1, elapsed / durationMs);
      const eased = 1 - (1 - t) ** 3;
      setValue(Math.round(eased * end));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, end, durationMs]);

  return active ? value : 0;
}
