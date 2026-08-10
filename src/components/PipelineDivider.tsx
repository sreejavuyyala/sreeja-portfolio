export function PipelineDivider() {
  return (
    <div className="mx-auto flex max-w-6xl items-center gap-2 px-6" aria-hidden="true">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary-light ring-1 ring-primary/20" />
      <span className="h-px flex-1 bg-slate-light/60" />
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary-light ring-1 ring-primary/20" />
      <span className="h-px flex-1 bg-slate-light/60" />
      <span className="h-2 w-2 shrink-0 rounded-full bg-signal-light ring-1 ring-signal/30" />
    </div>
  );
}
