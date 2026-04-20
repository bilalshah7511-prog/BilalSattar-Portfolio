"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

/* eslint-disable @next/next/no-img-element -- local /public assets; next/image + SVG fill is unreliable */

type PortfolioImageProps = {
  src: string;
  alt: string;
  /** Parent must be `relative` with defined size */
  fill?: boolean;
  priority?: boolean;
  className?: string;
};

/**
 * Local files from `/public` — uses `<img>` so SVG, PNG, and JPG all render reliably.
 */
export function PortfolioImage({ src, alt, fill, priority, className }: PortfolioImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-muted text-center text-[0.65rem] font-medium text-muted",
          fill && "absolute inset-0 h-full w-full",
          className,
        )}
        role="img"
        aria-label={alt}
      >
        Missing image
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
      className={cn(fill && "absolute inset-0 h-full w-full", className)}
    />
  );
}
