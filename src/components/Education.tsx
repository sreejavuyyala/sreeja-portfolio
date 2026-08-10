import { education } from "../data/education";
import { SectionEyebrow } from "./SectionEyebrow";

export function Education() {
  return (
    <section id="education" className="scroll-mt-20 bg-bg py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionEyebrow index="06" label="Education" />
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Education</h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {education.map((entry) => (
            <div key={entry.id} className="rounded-xl border border-slate-light/60 bg-surface p-6">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-primary">
                {entry.startYear} — {entry.endYear}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                {entry.degree} {entry.field}
              </h3>
              <p className="mt-1 text-sm text-slate">
                {entry.institution} · {entry.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}