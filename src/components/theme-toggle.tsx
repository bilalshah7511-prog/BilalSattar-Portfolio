"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/cn";

type Props = {
  className?: string;
};

/**
 * Pill toggle: sun ↔ moon with rotate + cross-fade.
 */
export function ThemeToggle({ className }: Props) {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "relative inline-flex h-10 min-w-[2.75rem] items-center justify-center rounded-full border border-[var(--border)] bg-[var(--glass)] px-3 shadow-[var(--shadow)] backdrop-blur-xl",
        "hover:shadow-[0_0_24px_var(--accent-glow)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]",
        className,
      )}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
    >
      <span className="sr-only">Toggle color theme</span>
      <AnimatePresence mode="wait" initial={false}>
        {isLight ? (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: -70, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 70, scale: 0.5 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex text-[var(--accent)]"
          >
            <Sun className="h-[1.15rem] w-[1.15rem]" strokeWidth={2} aria-hidden />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: 70, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -70, scale: 0.5 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex text-[var(--accent)]"
          >
            <Moon className="h-[1.15rem] w-[1.15rem]" strokeWidth={2} aria-hidden />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
