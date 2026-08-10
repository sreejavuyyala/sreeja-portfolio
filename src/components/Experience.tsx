import { motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { achievements, experience } from "../data/experience";
import { pipelineStageInfo } from "../data/pipeline";
import type { PipelineStage } from "../types";
import { PipelineExplorer } from "./PipelineExplorer";
import { SectionEyebrow } from "./SectionEyebrow";

export function Experience() {
  const reduceMotion = useReducedMotion();
  const [selectedStage, setSelectedStage] = useState<PipelineStage | null>(null);

  const experienceById = useMemo(() => new Map(experience.map((e) => [e.id, e])), []);

  const filteredAchievements = useMemo(() => {
    if (!selectedStage) return [];
    return achievements
      .filter((a) => a.stage === selectedStage)
      .map((a) => ({ achievement: a, role: experienceById.get(a.experienceId)! }))
      .sort((a, b) => b.role.startDate.localeCompare(a.role.startDate));
  }, [selectedStage, experienceById]);

  const stageLabel = selectedStage ? pipelineStageInfo.find((s) => s.id === selectedStage)?.label : null;

  return (
    <section id="experience" className="scroll-mt-20 border-y border-slate-light/50 bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionEyebrow index="03" label="Experience" />
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Experience, as a pipeline
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-slate">
          Every job comes down to moving data through the same stages. Click a stage to see what that's looked like
          across every role.
        </p>

        <div className="mt-10 rounded-xl border border-slate-light/60 bg-bg px-4 py-6 sm:px-8">
          <PipelineExplorer selectedStage={selectedStage} onSelectStage={setSelectedStage} />
        </div>

        {selectedStage ? (
          <div className="mt-12 flex flex-col gap-4">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-slate">
              {filteredAchievements.length} achievement{filteredAchievements.length === 1 ? "" : "s"} tagged{" "}
              <span className="text-signal-text">{stageLabel}</span>
            </p>
            {filteredAchievements.map(({ achievement, role }) => (
              <motion.div
                key={achievement.id}
                initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="rounded-lg border border-slate-light/60 bg-bg p-5"
              >
                <p className="font-mono text-xs uppercase tracking-[0.1em] text-primary">
                  {role.company} · {role.role}
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-ink">{achievement.description}</p>
                {achievement.tech.length > 0 && (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {achievement.tech.map((tech) => (
                      <li key={tech} className="rounded-full bg-primary-light px-2.5 py-1 font-mono text-[10px] text-primary">
                        {tech}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="mt-16 flex flex-col gap-16">
            {experience.map((role) => (
              <motion.article
                key={role.id}
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
                  <p className="text-sm text-slate">
                    {role.location} · {role.industry}
                  </p>
                </div>

                <div className="flex flex-col gap-5 rounded-xl border border-slate-light/60 bg-bg p-6 sm:p-8">
                  <ul className="flex flex-col gap-3">
                    {achievements
                      .filter((a) => a.experienceId === role.id)
                      .map((a) => (
                        <li key={a.id} className="flex gap-3 text-[15px] leading-relaxed text-ink">
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                          {a.description}
                        </li>
                      ))}
                  </ul>

                  <ul className="flex flex-wrap gap-2 border-t border-slate-light/60 pt-5">
                    {Array.from(new Set(achievements.filter((a) => a.experienceId === role.id).flatMap((a) => a.tech))).map(
                      (tech) => (
                        <li key={tech} className="rounded-full bg-primary-light px-3 py-1 font-mono text-[11px] text-primary">
                          {tech}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}