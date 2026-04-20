import { cn } from "@/lib/cn";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl",
        "px-4 min-[480px]:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12",
        className,
      )}
    >
      {children}
    </div>
  );
}
