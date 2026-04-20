export default function Loading() {
  return (
    <div className="min-h-[100dvh] bg-[var(--bg-primary)]">
      <div className="mx-auto max-w-7xl px-4 py-24">
        <div className="h-8 w-48 animate-pulse rounded-lg bg-[var(--glass)]" />
        <div className="mt-8 h-14 max-w-xl animate-pulse rounded-lg bg-[var(--glass)]" />
        <div className="mt-4 h-24 max-w-2xl animate-pulse rounded-lg bg-[var(--border)]" />
      </div>
    </div>
  );
}
