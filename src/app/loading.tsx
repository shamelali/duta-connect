export default function Loading() {
  return (
    <div className="container py-12">
      <div className="animate-pulse space-y-6">
        <div className="h-9 w-64 rounded-lg bg-ink-200" />
        <div className="h-5 w-96 max-w-full rounded-lg bg-ink-100" />
        <div className="flex flex-wrap gap-2 pt-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-8 w-24 rounded-full bg-ink-100" />
          ))}
        </div>
        <div className="grid gap-4 pt-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="card space-y-3 p-5">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-ink-200" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-3/4 rounded bg-ink-200" />
                  <div className="h-3 w-1/2 rounded bg-ink-100" />
                </div>
              </div>
              <div className="h-3 w-full rounded bg-ink-100" />
              <div className="h-3 w-5/6 rounded bg-ink-100" />
              <div className="flex gap-2 pt-2">
                <div className="h-6 w-16 rounded-full bg-ink-100" />
                <div className="h-6 w-16 rounded-full bg-ink-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
