import { useMemo, useState } from "react";
import { skills } from "../data/skills";
import type { SkillContext } from "../types";
import { SectionEyebrow } from "./SectionEyebrow";

const CONTEXTS: SkillContext[] = ["PNC", "CVS Health", "Academic", "Personal"];

export function Skills() {
  const [activeContext, setActiveContext] = useState<SkillContext | null>(null);

  const grouped = useMemo(() => {
    const byCategory = new Map<string, typeof skills>();
    for (const skill of skills) {
      const list = byCategory.get(skill.category) ?? [];
      list.push(skill);
      byCategory.set(skill.category, list);
    }
    return Array.from(byCategory.entries());
  }, []);

  return (
    <section id="skills" className="scroll-mt-20 border-y border-slate-light/50 bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionEyebrow index="05" label="Skills" />
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Skills</h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-slate">
          Filter by where each one was actually used, rather than a rating she'd have to defend.
        </p>

        <div role="group" aria-label="Filter skills by context" className="mt-8 flex flex-wrap gap-2">
          <button
            type="button"
            aria-pressed={activeContext === null}
            onClick={() => setActiveContext(null)}
            className={`rounded-full border px-3.5 py-1.5 font-mono text-xs transition-colors ${
              activeContext === null
                ? "border-primary bg-primary text-white"
                : "border-slate-light/70 text-slate hover:border-primary hover:text-primary"
            }`}
          >
            All
          </button>
          {CONTEXTS.map((context) => (
            <button
              key={context}
              type="button"
              aria-pressed={activeContext === context}
              onClick={() => setActiveContext(context)}
              className={`rounded-full border px-3.5 py-1.5 font-mono text-xs transition-colors ${
                activeContext === context
                  ? "border-primary bg-primary text-white"
                  : "border-slate-light/70 text-slate hover:border-primary hover:text-primary"
              }`}
            >
              {context}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
          {grouped.map(([category, items]) => (
            <div key={category}>
              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-slate">{category}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {items.map((skill) => {
                  const matches = !activeContext || skill.contexts.includes(activeContext);
                  return (
                    <li key={skill.id}>
                      <span
                        title={skill.note}
                        className={`inline-block rounded-md border px-2.5 py-1 text-sm transition-opacity ${
                          matches
                            ? "border-slate-light/70 text-ink"
                            : "border-slate-light/30 text-slate/40 opacity-40"
                        }`}
                      >
                        {skill.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}