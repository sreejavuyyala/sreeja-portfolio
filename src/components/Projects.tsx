import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "../data/projects";
import { SectionEyebrow } from "./SectionEyebrow";

export function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="projects" className="scroll-mt-20 bg-bg py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionEyebrow index="03" label="Projects" />
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Projects</h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, ease: "easeOut", delay: reduceMotion ? 0 : i * 0.08 }}
              className="flex flex-col gap-4 rounded-xl border border-slate-light/60 bg-surface p-6"
            >
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-slate">
                  {project.context} · {project.year}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold text-ink">{project.name}</h3>
              </div>

              <ul className="flex flex-col gap-2">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex gap-2.5 text-sm leading-relaxed text-ink">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <ul className="mt-auto flex flex-wrap gap-2 border-t border-slate-light/60 pt-4">
                {project.stack.map((tech) => (
                  <li key={tech} className="rounded-full bg-primary-light px-2.5 py-1 font-mono text-[10px] text-primary">
                    {tech}
                  </li>
                ))}
              </ul>

              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-ink"
                >
                  View code
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
