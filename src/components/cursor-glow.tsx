"use client";

import { useEffect, useState } from "react";

/**
 * Subtle accent glow following the pointer (fine pointers only).
 */
export function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mqFine = window.matchMedia("(pointer: fine)");
    const mqMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(mqFine.matches && !mqMotion.matches);
    update();
    mqFine.addEventListener("change", update);
    mqMotion.addEventListener("change", update);
    return () => {
      mqFine.removeEventListener("change", update);
      mqMotion.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[40] overflow-hidden" aria-hidden>
      <div
        className="absolute h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.12] blur-3xl"
        style={{
          left: pos.x,
          top: pos.y,
          background: `radial-gradient(circle, var(--accent) 0%, transparent 68%)`,
        }}
      />
    </div>
  );
}
