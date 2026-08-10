import { motion, useReducedMotion } from "framer-motion";
import { experience } from "../data/experience";
import { SectionEyebrow } from "./SectionEyebrow";

export function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" className="scroll-mt-20 border-y border-slate-light/50 bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionEyebrow index="02" label="Experience" />
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Experience</h2>

        <div className="mt-16 flex flex-col gap-16">
          {experience.map((role) => (
            <motion.article
              key={`${role.company}-${role.start}`}
              initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="grid grid-cols-1 gap-6 md:grid-cols-[220px_1fr]"
            >
              <div className="flex flex-col gap-1">
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-primary">
                  {role.start} — {role.end}
                </p>
                <h3 className="font-display text-lg font-semibold text-ink">{role.company}</h3>
                <p className="text-sm text-slate">{role.role}</p>
                <p className="text-sm text-slate">{role.location}</p>
              </div>

              <div className="flex flex-col gap-5 rounded-xl border border-slate-light/60 bg-bg p-6 sm:p-8">
                <ul className="flex flex-col gap-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-ink">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <ul className="flex flex-wrap gap-2 border-t border-slate-light/60 pt-5">
                  {role.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full bg-primary-light px-3 py-1 font-mono text-[11px] text-primary"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
