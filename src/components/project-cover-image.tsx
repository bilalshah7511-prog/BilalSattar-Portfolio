"use client";

import { PortfolioImage } from "@/components/portfolio-image";
import { cn } from "@/lib/cn";

type ProjectCoverImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
};

export function ProjectCoverImage({ src, alt, priority, className }: ProjectCoverImageProps) {
  return (
    <div
      className={cn(
        "relative aspect-[16/10] w-full overflow-hidden bg-muted/30",
        className,
      )}
    >
      <PortfolioImage
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover object-top transition duration-700 ease-out group-hover:scale-[1.03]"
      />
      {/* Light bottom scrim only — avoids washing out the whole screenshot */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/35 to-transparent"
        aria-hidden
      />
    </div>
  );
}
