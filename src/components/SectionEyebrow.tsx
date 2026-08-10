interface SectionEyebrowProps {
  index: string;
  label: string;
}

export function SectionEyebrow({ index, label }: SectionEyebrowProps) {
  return (
    <p className="flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-primary uppercase">
      <span className="text-slate">{index}</span>
      <span className="h-px w-8 bg-slate-light" aria-hidden="true" />
      {label}
    </p>
  );
}
