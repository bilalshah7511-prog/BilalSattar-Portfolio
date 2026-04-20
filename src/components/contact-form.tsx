"use client";

import { useState, type FormEvent } from "react";
import { Loader2, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

type Status = "idle" | "loading" | "success" | "error";

const field =
  "peer w-full rounded-xl border border-[var(--border)] bg-[var(--glass)] px-4 pb-2.5 pt-6 text-[var(--text-primary)] shadow-[var(--shadow)] backdrop-blur-xl outline-none transition-[box-shadow,border-color] " +
  "placeholder:text-transparent focus:border-[color-mix(in_oklab,var(--accent)_55%,transparent)] focus:ring-2 focus:ring-[color-mix(in_oklab,var(--accent)_22%,transparent)]";

const label =
  "pointer-events-none absolute left-4 top-1/2 origin-left -translate-y-1/2 text-sm text-[var(--text-secondary)] transition-all duration-200 " +
  "peer-focus:top-3 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-[var(--accent)] " +
  "peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-xs";

/**
 * CONTACT FORM — Floating labels, glass inputs, shimmer submit, mailto handoff + success state.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !subject || !message) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    const subj = encodeURIComponent(`${subject} — from ${name}`);
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}\n`);
    const mailto = `mailto:${site.email}?subject=${subj}&body=${body}`;

    await new Promise((r) => setTimeout(r, 450));
    window.location.href = mailto;
    setStatus("success");
    form.reset();
    setTimeout(() => setStatus("idle"), 5000);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-panel w-full max-w-xl rounded-[1.5rem] p-6 sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:gap-6">
        <div className="relative">
          <input
            id="cf-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder=" "
            className={field}
          />
          <label htmlFor="cf-name" className={label}>
            Name
          </label>
        </div>
        <div className="relative">
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder=" "
            className={field}
            inputMode="email"
          />
          <label htmlFor="cf-email" className={label}>
            Email
          </label>
        </div>
        <div className="relative">
          <input
            id="cf-subject"
            name="subject"
            type="text"
            autoComplete="off"
            required
            placeholder=" "
            className={field}
          />
          <label htmlFor="cf-subject" className={label}>
            Subject
          </label>
        </div>
        <div className="relative">
          <textarea
            id="cf-message"
            name="message"
            required
            rows={5}
            placeholder=" "
            className={cn(
              field,
              "min-h-[10rem] resize-y !pt-7 pb-3",
            )}
          />
          <label
            htmlFor="cf-message"
            className={cn(
              label,
              "top-6 -translate-y-0 peer-focus:top-3 peer-focus:-translate-y-0 peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:-translate-y-0",
            )}
          >
            Message
          </label>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <button
          type="submit"
          disabled={status === "loading"}
          className={cn(
            "group relative w-full overflow-hidden rounded-full sm:w-auto sm:min-w-[14rem]",
            "bg-[var(--accent)] px-8 py-3.5 text-sm font-semibold text-[var(--accent-fg)] shadow-[0_0_32px_var(--accent-glow)]",
            "transition-[filter,transform] enabled:hover:brightness-110 enabled:active:scale-[0.99]",
            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]",
            "disabled:pointer-events-none disabled:opacity-55",
          )}
        >
          <span
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background:
                "linear-gradient(110deg, transparent, color-mix(in oklab, white 35%, transparent), transparent)",
              backgroundSize: "200% 100%",
              animation: "shimmer-slide 2.2s linear infinite",
            }}
            aria-hidden
          />
          <span className="relative inline-flex items-center justify-center gap-2">
            {status === "loading" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                Sending…
              </>
            ) : (
              <>
                <Send className="h-4 w-4" aria-hidden />
                Send message
              </>
            )}
          </span>
        </button>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.p
              key="ok"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-sm font-medium text-emerald-500"
              role="status"
            >
              Message ready—if your mail app didn&apos;t open, email {site.email} directly.
            </motion.p>
          ) : null}
          {status === "error" ? (
            <motion.p
              key="err"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-sm font-medium text-red-500"
              role="alert"
            >
              Please complete all fields.
            </motion.p>
          ) : null}
        </AnimatePresence>
      </div>
    </form>
  );
}
