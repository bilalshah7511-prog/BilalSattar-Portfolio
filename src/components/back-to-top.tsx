"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Fixed control — appears after 300px scroll, smooth scroll to top.
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-[85] flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--accent)] text-[var(--accent-fg)] shadow-[0_0_28px_var(--accent-glow)] backdrop-blur-xl transition-[transform,box-shadow] hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp className="h-5 w-5" strokeWidth={2} aria-hidden />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
