"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

function StaticRole({ text }: { text: string }) {
  return (
    <span className="font-[family-name:var(--font-heading)] text-[clamp(1.35rem,3vw+0.5rem,2.25rem)] font-bold tracking-tight text-[var(--accent)]">
      {text}
    </span>
  );
}

function AnimatedRoleCycle({ roles }: { roles: readonly string[] }) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let cancelled = false;
    let idx = 0;

    const loop = async () => {
      while (!cancelled && roles.length > 0) {
        const target = roles[idx % roles.length];
        for (let i = 0; i <= target.length; i++) {
          if (cancelled) return;
          setDisplay(target.slice(0, i));
          await new Promise((r) => setTimeout(r, 42));
        }
        await new Promise((r) => setTimeout(r, 1800));
        if (cancelled) return;
        for (let i = target.length; i >= 0; i--) {
          if (cancelled) return;
          setDisplay(target.slice(0, i));
          await new Promise((r) => setTimeout(r, 28));
        }
        idx += 1;
      }
    };

    void loop();
    return () => {
      cancelled = true;
    };
  }, [roles]);

  return (
    <span className="font-[family-name:var(--font-heading)] text-[clamp(1.35rem,3vw+0.5rem,2.25rem)] font-bold tracking-tight text-[var(--accent)]">
      {display}
      <span
        className="ml-0.5 inline-block h-[1em] w-0.5 animate-pulse bg-[var(--accent)] align-[-0.12em] opacity-80"
        aria-hidden
      />
    </span>
  );
}

/**
 * Cycles through role strings with type → pause → delete → next (instant when reduced motion).
 */
export function HeroRoleCycle({ roles }: { roles: readonly string[] }) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <StaticRole text={roles[0] ?? ""} />;
  }
  return <AnimatedRoleCycle roles={roles} />;
}
