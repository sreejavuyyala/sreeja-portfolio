import { skills } from "../data/skills";
import { SectionEyebrow } from "./SectionEyebrow";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-y border-slate-light/50 bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionEyebrow index="04" label="Skills" />
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Skills</h2>

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-slate">{group.category}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="rounded-md border border-slate-light/70 px-2.5 py-1 text-sm text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
