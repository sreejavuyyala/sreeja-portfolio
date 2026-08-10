import { profile } from "../data/profile";
import { experience } from "../data/experience";
import { education } from "../data/education";
import { SectionEyebrow } from "./SectionEyebrow";

const current = experience[0]!;
const previous = experience[1]!;
const latestEducation = education[0]!;

const facts = [
  { label: "Current", value: `${current.role} · ${current.company}` },
  { label: "Previously", value: previous.company },
  { label: "Location", value: `${profile.location} (${profile.relocation})` },
  { label: "Education", value: `${latestEducation.degree} · ${latestEducation.school}` },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-bg py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionEyebrow index="01" label="About" />

        <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-3">
          <p className="text-lg leading-relaxed text-ink md:col-span-2 md:text-xl">{profile.bio}</p>

          <dl className="flex flex-col gap-6 border-t border-slate-light/60 pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-10">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate">{fact.label}</dt>
                <dd className="mt-1 text-sm text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
